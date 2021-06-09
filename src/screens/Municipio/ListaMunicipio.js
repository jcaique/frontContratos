import React from 'react'
import { View, StyleSheet } from 'react-native'

import { List } from 'react-native-paper'

function ListaMunicipios({ data }) {
    return (
        <>
            <View style={estilos.view}>
                <List.Item
                    title={data.nome}
                    left={props => <List.Icon {...props} icon='city' />}
                />
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    view: {
        flex: 1, justifyContent: 'center', backgroundColor: '#0082c1',
        borderRadius: 20, margin: 5
    }
})

export default ListaMunicipios
