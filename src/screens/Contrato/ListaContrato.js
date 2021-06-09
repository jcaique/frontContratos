import React from 'react'
import { View, StyleSheet } from 'react-native'

import { List } from 'react-native-paper'

function ListaContrato({ data }) {
    return (
        <>
            <View style={estilos.view}>
                <List.Item
                    title={data.municipio}
                    description={`Empresa: ${data.empresa}\nData Inicial: ${data.dataInicial} Data Final: ${data.dataFinal}
                    Valor Mensal: ${data.valorMensal} Objeto: ${data.objeto}`}
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
        borderRadius: 20, margin: 1, padding: 20
    }
})

export default ListaContrato

