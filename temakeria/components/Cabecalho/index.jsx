import React from 'react'
import { View, Text } from 'react-native'
import {styles} from './style'

export function Cabecalho(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                iFome 手巻き
            </Text>
            <Text style={styles.subtitulo}>
                Temakeria
            </Text>
        </View>
    )
}