import React from 'react'
import { View, FlatList } from 'react-native'
import { List } from 'react-native-paper'

function Contratos({ navigation }) {
    const opcoes = [
        {
            id: 1, nome: 'Contratos', descricao: 'Ver contratos', icone: 'file-document',
            menu: 'ListaContratos'
        },
        // {
        //     id: 1, nome: 'Pesquisar', descricao: 'Buscar contratos por municipio', icone: 'magnify',
        //     menu: 'ListaContratosMunicipios'
        // },
        // {
        //     id: 1, nome: 'Pesquisar', descricao: 'Buscar contratos por empresa', icone: 'magnify',
        //     menu: 'ListaContratosEmpresa'
        // }
        // ,
        {
            id: 1, nome: 'Adicionar', descricao: 'Adicionar um contrato', icone: 'plus',
            menu: 'AdicionaContrato'
        }
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

                <FlatList
                    data={opcoes}
                    renderItem={({ item }) => (
                        <View style={{
                            flex: 1, justifyContent: 'center', borderRadius: 20, margin: 8
                        }}>

                            <List.Item
                                title={item.nome}
                                style={{ backgroundColor: '#0082c1', borderTopRightRadius: 10, borderTopLeftRadius: 10, elevation: 10 }}
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

export default Contratos
