import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

// import Contratos from '../screens/Contratos'
import Empresas from '../screens/Empresas'
import Municipios from '../screens/Municipios'

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

            {/* <Tab.Navigator
                name='Contratos'
                component={Contratos}
                options={{
                    tabBarIcon: () => (<FontAwesome5 name='file-contract' />)
                }}
            /> */}

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