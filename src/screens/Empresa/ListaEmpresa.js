import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { backend, sizes} from '../../constants'

import { List, Avatar} from 'react-native-paper'

function ListaEmpresa({ data, navigation }) {
    const [excluindo, setExcluindo] = useState(false)

    //Botão para excluir ao arrastar lista para o lado direito 
    function btnExcluirEmpresa() {
        return (
            <View>
                <TouchableOpacity
                    style={estilos.btnExcluirEmpresa}
                    onPress={confirmarExclusaoEmpresa}>
                    {//If ternário ficou longo para melhor disposição do código
                        excluindo ? //está excluindo?
                            <ActivityIndicator sixe='small' color='#0000ff' />
                            : 
                            <Avatar.Icon 
                                size={24} 
                                icon='delete' 
                                style={{ backgroundColor: '#ff4040' }} 
                            />
                    }

                    <Text>Excluir</Text>
                </TouchableOpacity>
            </View>
        )
    }

    async function confirmarExclusaoEmpresa(){
        setExcluindo(true)
        try{
            Alert.alert('Atenção', 'Para excluir pressione sim.',[
                { 
                    text: 'Não', 
                    style: 'cancel',
                    onPress: () => {
                        setExcluindo(false)//háa algo de útil sssks
                    }
                },
                {
                    text: 'Sim',
                    onPress: async () => {
                        await excluirEmpresa(data)
                    },
                }
            ])
        }catch(response){
            Alert.alert(response.data.error)
        }
        setExcluindo(true)
    }

    async function excluirEmpresa() {
        //Buscando no banco de dados
        let url = `${backend}/empresas/cnpj/${data.cnpj}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())

        .then(data => {
            Alert.alert('Aviso', data.message) //mensagem do Back funfando
            navigation.goBack()
        })

        .catch(function (error) {
            Alert.alert('Erro ao excluir empresa.' + `${error.message}`)
        })
    }

    const alterarEmpresa = async (data) => {
        navigation.navigate('AdicionaEmpresa', {
            data: data,
            cap: {
                text: 'Edite a empresa selecionada'
            }
        })
    }
    
    return (
        <>
            <Swipeable renderRightActions={btnExcluirEmpresa}>
                <TouchableOpacity
                    style={estilos.container}
                    onPress={() => alterarEmpresa(data)}>

                    <View
                        style={{
                            flex: 1, justifyContent: 'center', backgroundColor: '#0082c1',
                            borderRadius: 20, margin: 10
                        }}
                    >
                        <List.Item
                            title={data.nome}
                            description={`CNPJ: ${data.cnpj}`}
                            // leftAvatar={{}} -- implementar futuramente (ver do Prof)
                            /*Este left viria do back conforme leftAvatar, 
                            futuramente irei implementar*/
                            left={props => <List.Icon {...props} icon='debian'/>}
                        />
                    </View>
                </TouchableOpacity>
            </Swipeable>
        </>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        height: 100,
        borderRadius: 8,
        marginBottom: 2,
        marginHorizontal: 8
    },
    btnExcluirEmpresa: {
        backgroundColor: '#d9534f',
        height: 70,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        borderTopEndRadius: sizes.borderRadius,
        borderBottomEndRadius: sizes.borderRadius,
        top: 15
    }
})

export default ListaEmpresa
