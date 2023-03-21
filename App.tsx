import React, {Component} from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import params from "./src/params";
import MineField from "./src/components/MineField";
import{createMinedBoard}from './src/functions'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = this.createState( )
  }

  minesAmount = () => {
    const cols = params.getColomnsAmount()
    const rows = params.getRowsAmout()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () =>{
    const cols = params.getColomnsAmount()
    const rows = params.getRowsAmout()
    return{
      board: createMinedBoard(rows, cols, this.minesAmount()),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Iniciando o Mines!</Text>
        <Text style={styles.description}>Tamanho da grade: {params.getRowsAmout()} x {params.getColomnsAmount()}</Text>
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
