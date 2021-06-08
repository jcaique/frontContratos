import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Contratos from '../screens/Contratos'
import Empresas from '../screens/Empresas'
import Municipios from '../screens/Municipios'
import ListaEmpresaCnpj from '../screens/ListaEmpresaCnpj'
import ListaEmpresa from '../screens/ListaEmpresa'
import ListaEmpresas from '../screens/ListaEmpresas'
import AdicionaEmpresa from '../screens/AdicionaEmpresa'
import Tabs from './Tabs'

const Stack = createStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Tabs'>
                
                {/* <Stack.Screen
                    name='Contratos'
                    component={Contratos}
                    options={{
                        headerShown: false
                    }}
                /> */}

                <Stack.Screen
                    name='Empresas'
                    component={Tabs}
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

                {/* <Stack.Screen
                    name='ListaEmpresaCnpj'
                    component={ListaEmpresaCnpj}
                    options={{
                        headerShown: true,
                        title: 'Busca por cnpj'
                    }}
                /> */}

                {/* <Tabs.Stack
                    name='Municipios'
                    component={Municipios}
                    options={{
                        headerShown: false
                    }}
                />*/}

            </Stack.Navigator>
        </NavigationContainer>

    )
}
