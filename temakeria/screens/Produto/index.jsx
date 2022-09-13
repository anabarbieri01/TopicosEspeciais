import React from "react"
import {View} from 'react-native'

import {Cabecalho} from '../../components/Cabecalho'
import { Prato } from '../../components/Prato'
import { Rodape } from '../../components/Rodape'
import { Etiqueta } from '../../components/Etiqueta'
import {theme} from '../../themes'

export function Produto(){
    return(
        <View style={{padding: 16, flex: 1, backgroundColor: theme.colors.rose}}>
            <Cabecalho />
            <Etiqueta />
            <Prato />
            <Rodape />
        </View>
    )
}