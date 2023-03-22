import React, {Component} from "react";
import { Platform, StyleSheet, Text, View, Alert } from "react-native";
import params from "./src/params";
import MineField from "./src/components/MineField";
import{
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag
}from './src/functions'


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
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) =>{
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('Perdeeeeeeu', 'Muito burro!!')
    }
    if (won) {
      Alert.alert('Parabéns', 'Voce Venceu!!')
    }

    this.setState({board, lost, won})
  }

  onSelectField = (row, column) =>{
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Parabéns', 'Voce Venceu!')
    }

    this.setState({board, won})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Iniciando o Mines!</Text>
        <Text style={styles.description}>Tamanho da grade: {params.getRowsAmout()} x {params.getColomnsAmount()}</Text>
        <View style={styles.board}>
          <MineField board={this.state.board} 
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}/>
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
