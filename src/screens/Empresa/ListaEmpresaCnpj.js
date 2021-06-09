import React, { useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { Caption, TextInput, FAB, List } from 'react-native-paper'
import { backend } from '../../constants'

import ListaEmpresa from '../Empresa/ListaEmpresa'

function ListaEmpresaCnpj({ navigation }) {
    const [empresa, setEmpresa] = useState([])
    const [buscandoEmpresa, setBuscandoMunicipio] = useState(false)
    const [cnpj, setCnpj] = useState('')

    async function buscarEmpresa() {
        setBuscandoMunicipio(true)
        let url = `${backend}/empresas/cnpj/${cnpj}`
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.message && data._id) {
                    setCnpj('')
                    navigation.navigate('AdicionaEmpresa', {
                        data: data,
                        cap: {
                            text: 'Edite a empresa selecionada'
                        }
                    })
                }
                else
                    Alert.alert('Aviso', data.message)
            })
            .catch(function (error) {
                setAviso('Não foi possível salvar o registro.')
                console.error('Houve erro ao salvar município: ' + error.message)
            })
        setBuscandoMunicipio(false)
    }

    return (
        <>
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ecece7',
                    paddingHorizontal: 24,
                    paddingVertical: 8
                }}
            >

                <Caption style={{ color: '#646c64', fontSize: 20, marginBottom: 32 }}> Informe o cnpj da empresa </Caption>

                <TextInput
                    label='Cnpj'
                    name='cnpj'
                    value={cnpj}
                    mode='outlined'
                    onChangeText={setCnpj}
                    keyboardType='numeric'
                    error={cnpj.length != 14 || isNaN(cnpj) || cnpj.includes('.' || ',')}
                />

                <FAB
                    style={estilos.fab}
                    icon='magnify'
                    label='Pesquisar'
                    loading={buscandoEmpresa}
                    onPress={() => buscarEmpresa()}
                    disabled={cnpj.length != 14 || isNaN(cnpj) || cnpj.includes('.' || ',')}
                />
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 20,
        right: '25%',
        left: '25%',
        top: '20%',
        backgroundColor: '#0000ff'
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        height: 100,
        borderRadius: 8,
        marginBottom: 2,
        marginHorizontal: 8
    }
})

export default ListaEmpresaCnpj