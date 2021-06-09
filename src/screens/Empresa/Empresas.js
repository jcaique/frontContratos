import React from 'react'
import { View, FlatList } from 'react-native'
import { List } from 'react-native-paper'

function Empresas({ navigation }) {
    const opcoes = [
        {
            id: 1, nome: 'Empresas', descricao: 'Empresas cadastradas', icone: 'domain',
            menu: 'ListaEmpresas'
        },
        {
            id: 2, nome: 'Pesquisar', descricao: 'Encontre uma empresa específica', icone: 'magnify',
            menu: 'ListaEmpresaCnpj'
        }
    ]

    return (
        <>
            <View
                style={{
                    paddingHorizontal: 8,
                    paddingVertical: 16,
                    flex: 1,
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
                                style={{ backgroundColor: '#0082c1',borderTopRightRadius:10,borderTopLeftRadius:10, elevation: 10 }}
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

export default Empresas