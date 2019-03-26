import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Beer from '../modele/beer.js';

export default class BeerCard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let beer = this.props.beer;
    return(
      <View style={styles.cardContainer}>
        <Text style={styles.textTitle}>{beer.getName()}</Text>
        <Text style={styles.textDescription}>{beer.getDescription()}</Text>
        <Image
          style={styles.image} 
          source={{uri: beer.getImageUri()}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    backgroundColor: '#26262b',
  },
  image: {
    width: 100,
    height: 100,
  },
  textDescription: {
    margin: 20,
    color: '#fff',
  },
  textTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
