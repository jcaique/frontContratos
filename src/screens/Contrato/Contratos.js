import React from 'react'
import { View, FlatList, Text } from 'react-native'
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
            id: 2, nome: 'Adicionar', descricao: 'Adicionar um contrato (EM BREVE)', icone: 'plus',
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

                            {/* if(opcoes.id === 2){
                                <View style={{backgroundColor:'red'}}>
                                    <Text>EM BREVE</Text>                                    
                                </View> 
                            }*/}

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
