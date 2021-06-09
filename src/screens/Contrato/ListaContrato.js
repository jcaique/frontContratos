import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'

import { List } from 'react-native-paper'

function ListaContrato({ data, navigation }) {
    let inicio = data.dataInicial
    let fim = data.dataFinal

    let dtInicio = new Date(inicio)
    let dtFim = new Date(fim)
    
    return (
        <>
            <View style={estilos.view}>
                <List.Item
                    title={data.municipio}
                    description={`Empresa: ${data.empresa}\nValor Mensal: ${data.valorMensal}`}
                    onPress={() => {
                        Alert.alert('Dados do contrato',
                            `Município: ${data.municipio}\n\nEmpresa: ${data.empresa}\n\nInício: ${dtInicio.toLocaleDateString()}\n\nFim: ${dtFim.toLocaleDateString()}\n\nValor mensal: ${data.valorMensal}\n\nObjeto: ${data.objeto}`)
                    }}
                    left={props => <List.Icon {...props} icon='city'
                    />}
                />
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    view: {
        flex: 1, justifyContent: 'center', backgroundColor: '#0082c1',
        borderRadius: 20, margin: 10, padding: 1
    }
})

export default ListaContrato

