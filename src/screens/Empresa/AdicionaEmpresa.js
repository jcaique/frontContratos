import React, { useState } from 'react'
import { StyleSheet, View, Text, Alert, TabBarIOSItem } from 'react-native'
import { Avatar, Caption, TextInput, FAB, Button, HelperText, Checkbox, ProgressBar, Snackbar, } from 'react-native-paper'
import { backend } from '../../constants'

function AdicionaEmpresa({navigation, route }) {
    //Obtendo os dados para alteração via rota
    const { data, cap } = route.params
    const cnpjASerAlterado = data.cnpj
    const [nome, setNome] = useState(data.nome)
    const [cnpj, setCnpj] = useState(data.cnpj)
    const [erros, setErros] = useState({})
    const [salvandoEmpresa, setSalvandoEmpresa] = useState(false)

    async function salvarEmpresa() {
        const novosErros = validaErrosEmpresa()

        //Verificando se há erros no array
        if (Object.keys(novosErros).length > 0) {
            setErros(novosErros)
        } else {
            /*
                Verificando se há o _id no objeto recebido, se houver
                será alterado, senao será inserido
            */
            const metodo = data._id === null ? 'POST' : 'PUT'

            let empresa = { nome: nome, cnpj: cnpj }

            setSalvandoEmpresa(true)
            let url = `${backend}/empresas` + `${metodo === 'POST' ? '' : '/cnpj/' + cnpjASerAlterado}`
            await fetch(url, {
                mode: 'cors',
                method: metodo,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(empresa)
            })
                .then(response => response.json())
                .then(response => {
                    Alert.alert('Aviso',response.message)
                    setNome('')
                    setCnpj('')
                })
                .catch(function (error) {
                    setAviso('Não foi possível salvar o registro.')
                    console.error('Houve erro ao salvar empresa: ' + error.message)
                })
            setSalvandoEmpresa(false)
        }
    }

    const validaErrosEmpresa = () => {
        const novosErros = {}
        if (!nome || nome === '') novosErros.nome = 'O nome é obrigatório.'
        if (nome.length > 100) novosErros.nome = 'Tamanho máximo permitido para nome é 100 caracteres.'
        if (cnpj.length != 14) novosErros.cnpj = 'Cnpj precisa ter 14 números.'
        if (isNaN(cnpj)) novosErros.cnpj = 'Cnpj precisa ser numérico.'
        return novosErros
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

                <Caption style={{ color: '#646c64', fontSize: 20, marginBottom: 32 }}> {cap.text} </Caption>

                <TextInput
                    label='Nome da Empresa'
                    name='nome'
                    value={nome}
                    mode='outlined'
                    onChangeText={setNome}
                    error={!!erros.nome}
                />
                <HelperText type='error' visible={!!erros.nome}>
                    {erros.nome}
                </HelperText>

                <TextInput
                    label='Cnpj da Empresa'
                    name='cnpj'
                    value={cnpj}
                    mode='outlined'
                    onChangeText={setCnpj}
                    error={!!erros.cnpj}
                    keyboardType='numeric'
                />
                <HelperText type='error' visible={!!erros.cnpj}>
                    {erros.cnpj}
                </HelperText>

                <FAB
                    style={estilos.fab}
                    icon='content-save'
                    label='Salvar'
                    loading={salvandoEmpresa}
                    disabled={erros.length > 0}
                    onPress={() => salvarEmpresa()}
                />
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        backgroundColor:'#0000ff'
    },
})

export default AdicionaEmpresa