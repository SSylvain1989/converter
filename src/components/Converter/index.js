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
    baseAmount: '',
    currency: 'United States Dollar',

  }

  // si on passe par une fonction ES5, le this est redéfini
  // en fonction flêchée pas de redéfinition du this, elle prend celle de son contexte parent
  // ic on defini ce que toggle va faire (c'est le point d'entrée)
  toggle = () => {
    // ce " open " c'est le open du state , on le voit parce qu'il est = à this.state.
    const { open } = this.state;

    // pour changer une des valeurs de mon state il faut que je passe par setState
    // literalement = ce state ( this ) , tu changes son etat ( setSate) , si open est à 
    // false tu le change à true & inversement ( je stock la valeur du nouveau open dans // open)
    this.setState({ open: !open });

    // ne JAMAIS modifier le state directement 
    // => React ne serait pas notifié des changements dans le state
    // this.state.open = !open;
  }

  changeEuroAmont = (event) => {
    const newBaseAmount = event.target.value;
    this.setState({ baseAmount : newBaseAmount});
  }

  handleClickOnCurrency = (event) => {
    const newCurrency = event.target.getAttribute('value');
    this.setState({currency : newCurrency });
  }

  makeConversion = () => {
    const { currency, baseAmount } = this.state;
    const currencyData = currenciesData.find((currencyToFind) => (
      currencyToFind.name === currency
    ));

    const { rate } = currencyData;
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
          changeEuroAmont={this.changeEuroAmont}
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
        {open && <Currencies currencies={currenciesData} onClick={this.handleClickOnCurrency} />}
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
