import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Contratos from '../screens/Contrato/Contratos'
import ListaContratos from '../screens/Contrato/ListaContratos'
import ListaContrato from '../screens/Contrato/ListaContrato'
import AdicionaContrato from '../screens/Contrato/AdicionaContrato'
import Empresas from '../screens/Empresa/Empresas'
import Municipios from '../screens/Municipio/Municipios'
import ListaMunicipios from '../screens/Municipio/ListaMunicipios'
import AdicionaMunicipio from '../screens/Municipio/AdicionaMunicipio'
import ListaEmpresaCnpj from '../screens/Empresa/ListaEmpresaCnpj'
import ListaEmpresa from '../screens/Empresa/ListaEmpresa'
import ListaEmpresas from '../screens/Empresa/ListaEmpresas'
import AdicionaEmpresa from '../screens/Empresa/AdicionaEmpresa'
import Tabs from './Tabs'

const Stack = createStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Tabs'>

                <Stack.Screen
                    name='Empresas'
                    component={Tabs}
                    options={{
                        headerShown: true,
                        title: 'Controle de Contratos'
                    }}
                />

                <Stack.Screen
                    name='Contratos'
                    component={Contratos}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='ListaEmpresa'
                    component={ListaEmpresa}
                    options={{
                        headerShown: true
                    }}
                />

                <Stack.Screen
                    name='ListaEmpresas'
                    component={ListaEmpresas}
                    options={{
                        headerShown: true,
                        title: 'Empresas Cadastradas'
                    }}
                />

                <Stack.Screen
                    name='AdicionaEmpresa'
                    component={AdicionaEmpresa}
                    options={{
                        headerShown: true,
                        title: 'Dados da Empresa'
                    }}
                />

                <Stack.Screen
                    name='ListaEmpresaCnpj'
                    component={ListaEmpresaCnpj}
                    options={{
                        headerShown: true,
                        title: 'Pesquisar empresa'
                    }}
                />

                <Stack.Screen
                    name='Municipios'
                    component={Municipios}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='ListaMunicipios'
                    component={ListaMunicipios}
                    options={{
                        headerShown: true,
                        title: 'Municípios cadastrados'
                    }}
                />

                <Stack.Screen
                    name='AdicionaMunicipio'
                    component={AdicionaMunicipio}
                    options={{
                        headerShown: true,
                        title: 'Novo Município',
                    }}
                />

                <Stack.Screen
                    name='ListaContratos'
                    component={ListaContratos}
                    options={{
                        headerShown: true,
                        title: 'Contratos encontrados'
                    }}
                />

                <Stack.Screen
                    name='ListaContrato'
                    component={ListaContrato}
                    options={{
                        headerShown: true,
                    }}
                />

                <Stack.Screen
                    name='AdicionaContrato'
                    component={AdicionaContrato}
                    options={{
                        headerShown: true,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}
