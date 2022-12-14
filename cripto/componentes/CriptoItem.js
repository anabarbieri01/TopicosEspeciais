import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import themes from '../themes'
//Instalar através do comando: yarn add moment
import moment from 'moment'
//Definindo o idioma Português
let idLocale = require('moment/locale/pt-br')
moment.updateLocale('pt-br',idLocale)
//importando os ícones
import {MaterialIcons} from '@expo/vector-icons'


const CriptoItem=({coin, onPress}) => (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.containerItem}>
        <View style={{flexDirection:'row', justifyContent: 'space-between', padding: 8}}>
            <Image source={{uri: coin.image}} style={{width: 48, height: 48, marginTop: 8}} />
        </View>
        <View style={styles.containerNomes}>
            <Text style={styles.textoCripto}>
                {coin.name}
            </Text>
            <Text style={styles.textoSimbolo}>
                {coin.symbol}
            </Text>
            <Text sytle={styles.textoData}>
                {moment(coin.last_updated).fromNow()}
            </Text>
        </View>
        <View style={styles.dadosCotacao}>
                <Text style={styles.textoPreco}>
                    {parseFloat(coin.current_price).toLocaleString('pt-BR',
                    {style: 'currency', currency: 'BRL',
                    minimumFractionDigits: 2,
                    maximunFrantionDigitis: 6}
                    )}
                </Text>
                <Text style={[styles.percentual, 
                    coin.price_change_percentage_24h > 0
                    ? styles.precoUp
                    : styles.precoDown
                ]}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                    {coin.price_change_percentage_24h > 0
                    ? <MaterialIcons name="arrow-circle-up" size = {16} color = {themes.colors.utility.success}/>
                    : <MaterialIcons name="arrow-circle-down" size = {16} color = {themes.colors.utility.danger}/>

                    }
                </Text>
            </View>
    </View>
    </TouchableOpacity>
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
    },
    dadosCotacao: {
        flexDirection: 'column',
        paddingRight: 8
    },
    textoPreco: {
        color: themes.colors.brand.azul,
        fontWeight: 'bold'
    },
    percentual: {
        textAlign: 'right'
    },
    precoUp: {
        color: themes.colors.utility.success
    },
    precoDown: {
        color: themes.colors.utility.danger
    }
})

export default CriptoItem