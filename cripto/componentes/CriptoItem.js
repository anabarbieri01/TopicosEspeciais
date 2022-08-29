import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import themes from '../themes'

const CriptoItem=({coin}) => (
    <View style={styles.containerItem}>
        <Image source={{uri: coin.image}} style={{width: 48, height: 48, marginTop: 8}} />
        <Text>{coin.name}</Text>
    </View>
)

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: themes.colors.neutral.neutral100,
        paddingBotton: 8,
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 16,
        marginTop: 16
    }
})

export default CriptoItem