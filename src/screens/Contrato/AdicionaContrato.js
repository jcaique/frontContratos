/*
import React, { useState } from 'react'
import { StyleSheet, View, Alert} from 'react-native'
import { Caption, TextInput, FAB, HelperText } from 'react-native-paper'
import { backend } from '../../constants'

function AdicionaContrato() {
    const [empresa, setEmpresa] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [orgao,setOrgao] = useState('')
    const [dataInicial, setDataInicial] = useState('')
    const [dataFinal, setDataFinal] = useState('')
    const [objeto,setObjeto] = useState('')
    const [valorMensal, setValorMensal] = useState('')
    const [salvando, setSalvandoMunicipio] = useState(false)
    const [erros,setErros] = useState([])

    async function salvarContrato() {
        setSalvandoContrato(true)

        let contrato = {
            empresa : empresa, 
            municipio: municipio, 
            orgao: orgao,
            dataInicial: dataInicial,
            dataFinal: dataFinal,
            objeto: objeto,
            valorMensal: parseInt(valorMensal),
        }

        let url = `${backend}/contratos`
        await fetch(url, {
            mode: 'cors',
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contrato)
        })
            .then(response => response.json())
            .then(data => {
                Alert.alert('Aviso', data.message)
                setEmpresa('')
                setDataFinal('')
                setDataInicial('')
                setMunicipio('')
                setObjeto('')
                setOrgao('')
                setValorMensal('')
            })
            .catch(function (error) {
                setAviso('Não foi possível salvar o registro.')
                console.error('Houve erro ao salvar contrato: ' + error.message)
            })
        setSalvandoContrato(false)
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
                    label='Nome do Municipio'
                    name='municipio'
                    value={municipio}
                    mode='outlined'
                    onChangeText={setMunicipio}
                    error={erros.municipio}
                    disabled={erros.municipio}
                />
                <HelperText type='error' visible={!!erros.municipio}>
                    {erros.municipio}
                </HelperText>

                <TextInput
                    label='Nome da Empresa'
                    name='empresa'
                    value={empresa}
                    mode='outlined'
                    onChangeText={setEmpresa}
                    error={erros.empresa}
                    disabled={erros.empesa}
                />
                <HelperText type='error' visible={erros.empresa}>
                    {erros.empresa}
                </HelperText>

                <TextInput
                    label='Órgão'
                    name='orgao'
                    value={orgao}
                    mode='outlined'
                    onChangeText={setOrgao}
                    error={erros.orgao}
                    disabled={erros.orgao}
                />
                <HelperText type='error' visible={erros.orgao}>
                    {erros.orgao}
                </HelperText>

                <TextInput
                    label='Data Inicial'
                    name='dtInicio'
                    value={dataInicial}
                    mode='outlined'
                    onChangeText={setDataInicial}
                    error={erros.dtInicio}
                    disabled={erros.dtInicio}
                />
                <HelperText type='error' visible={erros.dtInicio}>
                    {erros.dtInicio}
                </HelperText>

                <TextInput
                    label='Data final'
                    name='dtFinal'
                    value={dataFinal}
                    mode='outlined'
                    onChangeText={setDataFinal}
                    error={erros.dtFinal}
                    disabled={erros.dtFinal}
                />
                <HelperText type='error' visible={!!erros.dtFinal}>
                    {erros.dtFinal}
                </HelperText>

                <TextInput
                    label='Valor mensal'
                    name='vlrMensal'
                    value={valorMensal}
                    mode='outlined'
                    onChangeText={setValorMensal}
                    error={erros.valorMensal}
                    disabled={erros.valorMensal}
                />
                <HelperText type='error' visible={erros.valorMensal}>
                    {erros.valorMensal}
                </HelperText>

                <TextInput
                    label='Objeto'
                    name='objeto'
                    value={objeto}
                    mode='outlined'
                    onChangeText={setObjeto}
                    error={erros.obj}
                    disabled={erros.obj}
                />
                <HelperText type='error' visible={erros.obj}>
                    {erros.obj}
                </HelperText>

                <FAB
                    style={estilos.fab}
                    icon='content-save'
                    label='Salvar'
                    loading={salvandoContrato}
                    disabled={erros.length > 0}
                    onPress={() => salvarContrato()}
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

export default AdicionaContrato

*/