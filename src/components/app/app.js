import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';

export default class App extends Component  {

  state = {
    selectedPerson: null,
    showRandomPlanet: true,
    hasError: false
  };

 

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  };

  componentDidCatch() {

    this.setState({hasError: true})
  };



  render(){

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> : null;

    return (
      <div>
        <Header />
        { planet }
        <button className="btn btn-warning"
         onClick={this.toggleRandomPlanet}>
        Toggle Random Planet
        </button>
  
        <PeoplePage />
      </div>
    );
  };
}
