import React from 'react'
import { View, FlatList} from 'react-native'
import {List} from 'react-native-paper'

function Municipios({navigation}){
    const opcoes = [
        {
            id: 1, nome: 'Municípios', descricao: 'Ver municípios cadastrados', icone:'city-variant-outline',
            menu: 'ListaMunicipios'
        },
    ]

    return (
        <>
            <View
                style={{
                    paddingHorizontal: 8,
                    paddingVertical: 16,
                    flex: 1
                }}
            >

                <List.Subheader>O que deseja fazer?</List.Subheader>

                <FlatList
                    data={opcoes}
                    renderItem={({ item }) => (
                        <View style={{
                            flex: 1, justifyContent: 'center', borderRadius: 20, margin: 8
                        }}>

                            <List.Item
                                title={item.nome}
                                style={{ backgroundColor: '#0082c1' }}
                                titleStyle={{ fontSize: 20 }}
                                description={item.descricao}
                                descriptionStyle={{ marginBottom: 5 }}
                                onPress={() => navigation.navigate(item.menu)}
                                left={props => <List.Icon {...props} icon={item.icone} />}
                            />
                        </View>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </>
    )
}

export default Municipios 
