import React, { useState } from 'react'
import { StyleSheet, View, Alert} from 'react-native'
import { Caption, TextInput, FAB, HelperText } from 'react-native-paper'
import { backend } from '../../constants'

function AdicionaMunicipio({ route }) {
    const { data } = route.params
    const [nome, setNome] = useState(data.nome)
    const [salvandoMunicipio, setSalvandoMunicipio] = useState(false)
    const [erros, setErros] = useState([])
    const [aviso,setAviso] = useState('')

    async function salvarMunicipio() {
        setSalvandoMunicipio(true)

        let municipio = {nome : nome}
        let url = `${backend}/municipios`
        await fetch(url, {
            mode: 'cors',
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(municipio)
        })
            .then(response => response.json())
            .then(data => {
                Alert.alert('Aviso', 'Municipio salvo com sucesso.')
                setNome('')
            })
            .catch(function (error) {
                setAviso('Não foi possível salvar o registro.')
                console.error('Houve erro ao salvar município: ' + error.message)
            })
        setSalvandoMunicipio(false)
    } return (
        <>
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ecece7',
                    paddingHorizontal: 24,
                    paddingVertical: 8
                }}
            >

                <Caption style={{ color: '#646c64', fontSize: 20, marginBottom: 32 }}> Dados do novo município </Caption>

                <TextInput
                    label='Nome da Município'
                    name='nome'
                    value={nome}
                    mode='outlined'
                    onChangeText={setNome}
                    error={!!erros.nome}
                />
                <HelperText type='error' visible={!!erros.nome}>
                    {erros.nome}
                </HelperText>
                <FAB
                    style={estilos.fab}
                    icon='content-save'
                    label='Salvar'
                    loading={salvandoMunicipio}
                    disabled={erros.length > 0}
                    onPress={() => salvarMunicipio()}
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
        backgroundColor: '#0000ff'
    },
})

export default AdicionaMunicipio