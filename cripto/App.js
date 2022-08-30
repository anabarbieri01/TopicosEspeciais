import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, StatusBar, Image, 
        ActivityIndicator, TextInput, FlatList} from 'react-native'
import {getCotacoes} from './services/criptoService'
import themes from './themes'
import CriptoItem from './componentes/CriptoItem'

const App = () => {
  const[criptos, setCriptos] = useState([])
  const[carregando, setCarregando] = useState(false)
  const[busca, setBusca] = useState('')

  const carregaCotacoes = async() => {
    setCarregando(true)
    const dadosCotacoes = await getCotacoes()
    setCriptos(dadosCotacoes)
    setCarregando(false)

  }

  useEffect(()=> {
    //iremos carregar os dados na primeira vez
    carregaCotacoes()
  },[]) //quando o array vazio, executa só uma vez.

  const semDados = () => {
    return(
      <View style={{
        backgroundColor: themes.colors.utility.danger,
        borderRadius: 16,
        marginTop: 16
      }}>
        <Text style={{
          color: themes.colors.neutral.foreground,
          margin: 8,
          fontWeight: 'bold'
        }}> 
          😢 Ah não! Infelizmente a cripto (busca) não existe. Refaça a busca.
        </Text>
      </View>
    )
  }

  return (
    <View style = {styles.container}>
      <StatusBar backgroundColor={themes.colors.brand.azul}/>
      <View style={styles.header}>
        <Image source ={require('./img/logo.png')} style={styles.logo} />
        <Text style = {styles.titulo}>Cotação das Criptos</Text>
      </View>
      { carregando &&
        <ActivityIndicator size="large" color={themes.colors.utility.contrast}/>
      }
      <TextInput 
                placeholder = '🔍Filtrar...'
                autoFocus
                placeholderTextColor={themes.colors.neutral.foreground}
                onChangeText={(text)=> setBusca(text)}
                style= {styles.buscaInput}
      />
      <FlatList
                style={styles.listagem}
                data={criptos.filter(
                  (coin) =>
                  coin.name.toLowerCase().includes(busca.toLocaleLowerCase()) ||
                  coin.symbol.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
                )}
                showsVerticalScrollIndicator={true}
                renderItem={({item}) => <CriptoItem coin={item}/>}
                ListEmptyComponent={semDados()}
      />          
    </View>
  )
}

const styles = StyleSheet.create({
  listagem:{width: '90%'},
  titulo:{
    fontSize:24,
    color:themes.colors.brand.laranja,
    marginTop:8,
    width:'70%'
  },
  container:{
    backgroundColor: themes.colors.neutral.background,
    flex:1,
    alignItems:'center'
  },
  header:{
    flexdirection:'row',
    width: '90%',
    marginBotton: 8,
    justifyContent: 'space-between'
  },

  logo:{
    width:80,
    height:80,
    marginTop: 8,
    resizeMode: 'contain'
  },
  buscaInput:{
    color: themes.colors.neutral.foreground,
    backgroundColor: themes.colors.neutral.neutral100,
    borderBottomColor: themes.colors.utility.contrast,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 8,
    borderBottomWidth: 2,
    textAlign:'left'
  }
})

export default App
