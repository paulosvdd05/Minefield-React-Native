import React from 'react'
import {View, StyleSheet} from 'react-native'
import params from '../params'

export default props => {
    const styleField = [styles.field]
    if(styleField.length ===1) styleField.push(styles.regular)

    return (
        <View style={styleField}>

        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize
    }
})