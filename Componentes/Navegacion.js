import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {FontAwesome} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './login';
import Principal from './Principal';
import BuscadorHistorial from './BuscadorHistorial';
import DetalleProducto from './DetalleProducto'
import Grafica from './Grafica'
import PerfilDeUsuario from './PerfilDeUsuario'

import Politicas from './Politicas'
import Reglas from './Reglas'
import Valores from './Valores'

const Stack= createNativeStackNavigator();
const TabsH=createBottomTabNavigator();
const Drawer=createDrawerNavigator()

//navegacion principal (de login a home)
export const NavHome=()=>{
    return(
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Principal' component={NavPrincipal} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
}

export const NavPrincipal=()=>{
    return(
    <Stack.Navigator initialRouteName='Principal'>
        <Stack.Screen name='Principal' component={NavTabsPrincipal} options={{headerShown:false}}/>
        {/* Se define la pantalla que se queire ver pero en componente se llama al tabs */}
        <Stack.Screen name='BuscadorHistorial' component={BuscadorHistorial} options={{headerShown:false}}/>
        <Stack.Screen name='PerfilDeUsuario' component={PerfilDeUsuario} options={{headerShown:false}}/>
        <Stack.Screen name='DetalleProducto' component={DetalleProducto} options={{headerShown:false}}/>

        <Stack.Screen name='Politicas' component={MiDrawer} options={{headerShown:false}}/>
        <Stack.Screen name='Reglas' component={MiDrawer} options={{headerShown:false}}/>
        <Stack.Screen name='Valores' component={MiDrawer} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
}
//navegacion secundaria (tabs de home)
export const NavTabsPrincipal=()=>{
    return(
        <TabsH.Navigator
        screenOptions={{
            tabBarStyle: { backgroundColor: '#023047' }, // Cambia el color de fondo aquí
            tabBarActiveTintColor: '#8ecae6',
            tabBarInactiveTintColor: '#fff',
        }}
        >
            {/* Se define la misma pantalla que en  NavPrincipal pero aqui se llama a la pantalla para que se incluya en el tabs*/}
            <TabsH.Screen name={'Principal'} component={Principal} options={{headerShown:false,
            tabBarIcon:()=>(<FontAwesome name='home' size={30} color={'#fff'}/>)}}/>

            <TabsH.Screen name={'IOT'} component={Grafica}
            options={{headerShown:false,tabBarIcon:()=>(<FontAwesome name='feed'  size={30} color={'#fff'}/>)}}/>

            <TabsH.Screen name={'Busqueda'} component={BuscadorHistorial}
            options={{headerShown:false,tabBarIcon:()=>(<FontAwesome name='search'  size={30} color={'#fff'}/>)}}/>

            <TabsH.Screen name={'PerfilDeUsuario'} component={PerfilDeUsuario}
            options={{headerShown:false,tabBarIcon:()=>(<FontAwesome name='gear'  size={30} color={'#fff'}/>)}}/>
        </TabsH.Navigator>
    )
}

export const MiDrawer=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Politicas' options={{drawerIcon:()=>(<FontAwesome name='flag' size={30}/>)}} component={Politicas}/>
            <Drawer.Screen name='Reglas' options={{drawerIcon:()=>(<FontAwesome name='book' size={30}/>)}} component={Reglas}/>
            <Drawer.Screen name='Valores' options={{drawerIcon:()=>(<FontAwesome name='heart' size={30}/>)}} component={Valores}/>
            <Drawer.Screen name='Inicio' options={{headerShown:false,drawerIcon:()=>(<FontAwesome name='home' size={30}/>)}} component={NavTabsPrincipal}/>
        </Drawer.Navigator>
    )
}