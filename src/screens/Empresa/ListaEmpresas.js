import React, {useEffect, useState} from 'react'
import {View, ActivityIndicator, Text, StyleSheet, FlatList, RefreshControl, Alert} from 'react-native'
import {List, Avatar, FAB} from 'react-native-paper'
//fazer o header
import {backend} from '../../constants/index'
import ListaEmpresa from './ListaEmpresa'

function ListarEmpresas({ navigation }) {
    //Pra não perder o costume, este useState é para simplificar os objetos
    const [empresas, setEmpresas] = useState([])
    const [carregandoEmpresas, setCarregandoEmpresas] = useState(false)
    const [refreshing, setRefreshing] = useState(false)

    //useEffect será executado ao carregar a pagina
    useEffect(() => {
        obterEmpresas()
    }, [])

    async function obterEmpresas(){
        setCarregandoEmpresas(true)

        let url = `${backend}/empresas`
        await fetch(url)
        
        .then( (response) => response.json())
        
        .then(data => {
            setEmpresas(data)
        })

        .catch((error) =>{
            Alert.alert('Erro ao obter dados.' + `\n ${error.message}`)
        })

        setCarregandoEmpresas(false)
    }

    //Ao deslisar para atualizar
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true)

        try {
            await obterEmpresas()
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

                {carregandoEmpresas && <ActivityIndicator size='large' color='#0000ff' />}

                {/* Mais um operador ternário aqui */}
                {empresas.length === 0 && !carregandoEmpresas ?
                    (
                        <View style={estilos.aviso}>
                            <Text style={estilos.tituloAviso}>Ainda não há empresas cadastradas.</Text>
                        </View>
                    ) : (
                        <FlatList
                            data={empresas}
                            renderItem={({ item }) => (
                                <ListaEmpresa data={item} navigation={navigation} />
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
                    onPress={() => navigation.navigate('AdicionaEmpresa', {
                        data: {
                            _id: null,
                            nome: '',
                            cnpj: '',
                        },
                        cap: {
                            text: 'Insira os dados da nova empresa'
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

export default ListarEmpresas