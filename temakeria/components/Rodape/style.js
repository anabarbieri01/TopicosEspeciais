import { StyleSheet } from "react-native"
import {theme} from '../../themes'

export const styles = StyleSheet.create({
    preco: {
        fontFamily: theme.fonts.primary700,
        color: theme.colors.brown,
        fontSize: 34,
        marginRight: 16
    },
    titulo: { 
        fontFamily: theme.fonts.primary700,
        color: theme.colors.brown,
        fontSize:17
    },
    descricao: {
        fontFamily: theme.fonts.secondary400,
        color: theme.colors.gray,
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 24, marginTop: 8
    },
    rodapePreco: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})