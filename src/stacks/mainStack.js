import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../telas/Preload';
import Cadastro from '../telas/Cadastro';
import Login from '../telas/Login';
import Home from '../telas/Home';

// TELAS DE CADASTRO
import CadastroTanque from '../telas/TelaCadastro/CadastroTanque';
import RegistroPeixe from '../telas/TelaCadastro/RegistroPeixe';
import RegistroRacao from '../telas/TelaCadastro/RegistroRacao';
import RegistroTarefas from '../telas/TelaCadastro/RegistroTarefas';

//TELAS DE DETALHES
import DetalheTanque from '../telas/TelaDetalhes/DetalheTanque';
import DetalhePeixe from '../telas/TelaDetalhes/DetalhePeixe';

// FOOTER
import Sobre from '../telas/sobre';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastroTanque" component={CadastroTanque} />
        <Stack.Screen name="RegistroPeixe" component={RegistroPeixe} />
        <Stack.Screen name="RegistroRacao" component={RegistroRacao} />
        <Stack.Screen name="RegistroTarefas" component={RegistroTarefas} />

        <Stack.Screen name="DetalheTanque" component={DetalheTanque} />
        <Stack.Screen name="DetalhePeixe" component={DetalhePeixe} />

        <Stack.Screen name="Sobre" component={Sobre} />
    </Stack.Navigator>
)