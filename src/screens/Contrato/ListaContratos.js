import React, {useEffect, useState} from 'react'
import {View, ActivityIndicator, Text, StyleSheet, FlatList, RefreshControl, Alert} from 'react-native'
import {List, Avatar, FAB} from 'react-native-paper'
//fazer o header
import {backend} from '../../constants/index'
//import ListaMunicipio from './ListaMunicipio'

import ListaContrato from './ListaContrato'

function ListaContratos({ navigation }) {
    //Pra não perder o costume, este useState é para simplificar os objetos
    const [contratos, setContratos] = useState([])
    const [carregandoContratos, setCarregandoContratos] = useState(false)
    const [refreshing, setRefreshing] = useState(false)

    //useEffect será executado ao carregar a pagina
    useEffect(() => {
        obterContratos()
    }, [])

    async function obterContratos(){
        setCarregandoContratos(true)
        let url = `${backend}/contratos`
        await fetch(url)        
        .then( (response) => response.json())
        
        .then(data => {
            setContratos(data)
        })

        .catch((error) =>{
            Alert.alert('Erro ao obter dados.' + `\n ${error.message}`)
        })

        setCarregandoContratos(false)
    }

    //Ao deslisar para atualizar
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true)

        try {
            await obterContratos()
        } catch (error) {
            console.log(error)
        }

        setRefreshing(false)
    }, [])

    return (
        <>
            <View style={{
                backgroundColor: '#fbfbfb', paddingHorizontal: 8,
                paddingVertical: 8, flex: 1
            }}
            >
                <List.Subheader>
                    <Avatar.Icon 
                        size={24} 
                        icon='hand-pointing-up' 
                        style={{backgroundColor: '#0000ff'}} 
                    /> Atualizar
                </List.Subheader>

                {carregandoContratos && <ActivityIndicator size='large' color='#0000ff' />}

                {contratos.length === 0 && !carregandoContratos ?
                    (
                        <View style={estilos.aviso}>
                            <Text style={estilos.tituloAviso}>Ainda não há Contratos.</Text>
                        </View>
                    ) : (
                        <FlatList
                            data={contratos.contratos}
                            renderItem={({ item }) => (
                                <ListaContrato data={item} />
                            )}
                            keyExtractor={item => item._id.toString()}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                        />
                    )
                }
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    aviso: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    tituloAviso: {
        fontSize: 20
    }
})

export default ListaContratos