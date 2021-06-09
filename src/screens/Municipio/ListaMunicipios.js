import React, {useEffect, useState} from 'react'
import {View, ActivityIndicator, Text, StyleSheet, FlatList, RefreshControl, Alert} from 'react-native'
import {List, Avatar, FAB} from 'react-native-paper'
//fazer o header
import {backend} from '../../constants/index'
//import ListaMunicipio from './ListaMunicipio'

import ListaMunicipio from './ListaMunicipio'

function ListaMunicipios({ navigation }) {
    //Pra não perder o costume, este useState é para simplificar os objetos
    const [municipios, setMunicipios] = useState([])
    const [carregandoMunicipios, setCarregandoMunicipios] = useState(false)
    const [refreshing, setRefreshing] = useState(false)

    //useEffect será executado ao carregar a pagina
    useEffect(() => {
        obterMunicipios()
    }, [])

    async function obterMunicipios(){
        setCarregandoMunicipios(true)

        let url = `${backend}/municipios`
        await fetch(url)
        
        .then( (response) => response.json())
        
        .then(data => {
            setMunicipios(data)
        })

        .catch((error) =>{
            Alert.alert('Erro ao obter dados.' + `\n ${error.message}`)
        })

        setCarregandoMunicipios(false)
    }

    //Ao deslisar para atualizar
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true)

        try {
            await obterMunicipios()
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

                {carregandoMunicipios && <ActivityIndicator size='large' color='#0000ff' />}

                {/* Mais um operador ternário aqui */}
                {municipios.length === 0 && !carregandoMunicipios ?
                    (
                        <View style={estilos.aviso}>
                            <Text style={estilos.tituloAviso}>Ainda não há Municipios cadastrados.</Text>
                        </View>
                    ) : (
                        <FlatList
                            data={municipios}
                            renderItem={({ item }) => (
                                <ListaMunicipio data={item}/>
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

                <FAB
                    style={estilos.fab}
                    icon='plus'
                    label=''
                    onPress={() => navigation.navigate('AdicionaMunicipio', {
                        data: {
                            _id: null,
                            nome: '',                            
                        },
                        cap: {
                            text: 'Insira os dados do novo Municipio'
                        }
                    })}
                />
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#0000ff'
    },

    aviso: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    tituloAviso: {
        fontSize: 20
    }
})

export default ListaMunicipios