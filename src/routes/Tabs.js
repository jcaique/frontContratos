import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

import Contratos from '../screens/Contrato/Contratos'
import Empresas from '../screens/Empresa/Empresas'
import Municipios from '../screens/Municipio/Municipios'

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => {
                return { tabBarLabel: navigation.isFocused() ? route.name : '' }
            }}
            tabBarOptions={{
                style: {
                    paddingTop: 4,
                    paddingBottom: 4,
                    borderTopWidth: 1,
                },
            }}>

            <Tab.Screen
                name='Contratos'
                component={Contratos}
                options={{
                    tabBarIcon: () => (<FontAwesome5 name='file-contract' size={24}/>),
                    tabBarLabel: 'Contratos'
                }}
            />

            <Tab.Screen
                name='Empresas'
                component={Empresas}
                options={{
                    tabBarIcon: () => (<FontAwesome5 name='building' size={24} />),
                    tabBarLabel: 'Empresas'
                }}
            />

            <Tab.Screen
                name='Municípios'
                component={Municipios}
                options={{
                    tabBarIcon: () => (<FontAwesome5 name='city' size={24} />),
                    tabBarLabel: 'Municípios' 
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs