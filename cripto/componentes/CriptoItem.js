import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import themes from '../themes'
//Instalar através do comando: yarn add moment
import moment from 'moment'
//Definindo o idioma Português
let idLocale = requite('moment/locale/pt-br')
moment.updateLocale('pt-br',idLocale)


const CriptoItem=({coin}) => (
    <View style={styles.containerItem}>
        <View style={{flexDirection:'row', justifyContent: 'space-between', padding: 8}}>
            <Image source={{uri: coin.image}} style={{width: 48, height: 48, marginTop: 8}} />
        </View>
        <View style={styles.containerNomes}>
            <Text style={styles.textoCripto}>{coin.name}</Text>
            <Text style={styles.textoSimbolo}>{coin.symbol}</Text>
            <Text sytle={styles.textoData}>{coin.last_updated}</Text>
        </View>
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
    },
    containerNomes: {
        maginLeft: 8
    },
    textoCripto:{
        color: themes.colors.neutral.foreground,
        fontWeight: 'bold'
    },
    textoSimbolo: {
        color: themes.colors.utility.contrast,
        textTransform: 'uppercase'
    },
    textoData: {
        color: themes.colors.neutral.neutrall50,
        fontSize: 11,
        textTransform: 'lowercase'
    }
})

export default CriptoItem