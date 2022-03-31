import React, {Component} from 'react';
import BeerCard from './components/BeerCard'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { getRandomBrewdog } from './punkapi';
import Beer from './modele/beer.js';

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      isLoading: false,
      beer: null,
      error: false,
    }
  }

  _getRandomBrewdogWithFeedback = () => {
    this.setState({ isLoading: true })

    let biere = new Beer(1, "biere", "bonne");
    getRandomBrewdog()
    .then((json) => {
      json = json[0];
      try{
        let beer = new Beer(json.id, json.name, json.description, json.image_url);
        this.setState({
          isLoading: false,
          beer: beer,
        })
      }
      catch(error){
        this.setState({
          isLoading: false,
          beer: null,
          error: true,
        });
      }
    });
  }
  render() {
    const { isLoading, beer, error } = this.state;
    if(isLoading){
      return(
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )
    }
    else if(error){
      return(
        <View style={styles.container}>
          <Text style={styles.textError}>Puatain de Josette! Elle a renversé la bière!</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        {(beer !== null) ? (
          <BeerCard beer={beer} />
        ) : (
          <Text style={styles.textTitle}>Welcome to Putain de Bière !</Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={this._getRandomBrewdogWithFeedback}
        >
          <Text style={styles.text}>Grab a new beer now!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26262b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
  },
  textError:{
    color: '#fff',
    margin: 20,
  },
  textTitle:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    margin: 20,
  },
  button:{
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 3,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
