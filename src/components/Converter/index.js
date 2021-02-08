/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import Toggler from 'src/components/Toggler';

import currenciesData from 'src/data/currencies';
import './style.scss';

// pour pouvoir stocker des données dans un composant React, une des possibilités
// est de passer par une class
// cette class hérite de la class Component de React
class Converter extends React.Component {
  // CODE LEGACY
  // pour créer le state de notre composant on passe par la fonction constructor
  // et on instancie un objet state
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     open: true,
  //   };

  //   // on lie le this de class aux fonctions/méthodes de notre class
  //   this.toggle = this.toggle.bind(this);
  // }

  // avec le plugin de Babel @babel/plugin-proposal-class-properties
  // on peut créer des propriétés de class

  // déclaration du state global qui reprend open , permettant de faire changer l'etat 
  // du toggle , base amount qui reprend le 1 euros du haut et currency qui reprend le 
  // pays du bas de l'application
  state = {
    open: true,
    baseAmount: 1,
    currency: 'United States Dollar',

  }

  // si on passe par une fonction ES5, le this est redéfini
  // en fonction flêchée pas de redéfinition du this, elle prend celle de son contexte parent
  // ic on defini ce que toggle va faire (c'est le point d'entrée)
  toggle = () => {
    // ce " open " c'est le open du state , on le voit parce qu'il est = à this.state.
    const { open } = this.state;

    // pour changer une des valeurs de mon state il faut que je passe par setState
    // eslint-disable-next-line max-len
    // literalement = ce state ( this ) , tu changes son etat ( setSate) , si open est à // false tu le change à true & inversement ( je stock la valeur du nouveau open dans // open)
    this.setState({ open: !open });

    // ne JAMAIS modifier le state directement 
    // => React ne serait pas notifié des changements dans le state
    // this.state.open = !open;
  }

  // *************CHALLENGE**************
  // faire une fonction " changeCurrency" qui modifie le state 
  changeCurrency = () => {
    const { currency } = this.state;
    // this.setState({currency : })
  }

  handleClick = (event) => {
    console.log('click');

    // const data = event.name;
    // console.log('ligne 71', data);
    console.log('event', event.target.value);


    // const closest = data.closest('.currencies__list');
    // console.log(closest);

    // const dataLi = closest.querySelector('li[value="{name}"]').value;
    // console.log(dataLi);
  }
  // cette fonction elle va être à passer dans les props de Converter
  // ajouter un handleOnClickCurrency 
  // mettre un console.log dans handleOnClickCurrency 
  // handleOnClickCurrency va appeler " changeCurrency"
  // *************FIN CHALLENGE ***********

  makeConversion = () => {
    const { currency, baseAmount } = this.state;

    // on veut changer la valeur de currency pour dynamiser l'application.
    // on veut changer la valeur de rate 

    const currencyData = currenciesData.find((currencyToFind) => (
      currencyToFind.name === currency
    ));

    const { rate } = currencyData;
    console.log(rate);

    // const value = parseFloat((rate * baseAmount).toFixed(2), 10);
    const value = Math.round(rate * baseAmount * 100) / 100;

    return value;
  }

  // à chaque fois qu'ue valeur du state change, React procède à un render
  render() {
    const { open, currency, baseAmount } = this.state;

    // ** soit on stocke le résultat de la fonction makeConversion dans une variable
    // et on passe cette variable à la prop
    // const value = this.makeConversion();

    return (
      <div className="converter">
        {/* React.createElement(Header, {baseAmount: 1}) */}
        <Header
          baseAmount={baseAmount}
        />
        {/* React.createElement(Toggler, {toggle: this.toggle}) */}
        <Toggler
          toggle={this.toggle}
          isOpen={open}
        />
        {/* avec les ET logique (&&) si la valeur à gauche des && est vraie
          alors JS viendra traiter la valeur de droite
          grâce à cette technique on peut afficher conditionnellement des composant dans le JSX
        */}
        {open && <Currencies currencies={currenciesData} onClick={this.handleClick} />}
        <Amount
          // ** soit on exécute la fonction makeConversion pour récupérer le résultat
          value={this.makeConversion()}
          currency={currency}
        />
      </div>
    );
  }
}

export default Converter;