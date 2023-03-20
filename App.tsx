import React, {Component} from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import params from "./src/params";
import Field from "./src/components/Field";

export default class App extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Iniciando o Mines!</Text>
        <Text style={styles.sectionDescription}>Tamanho da grade: {params.getRowsAmout()} x {params.getColomnsAmount()}</Text>

        <Field />
        <Field opened />
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={6}/>
        <Field mined />
        <Field mined opened/>
        <Field mined opened exploded/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
