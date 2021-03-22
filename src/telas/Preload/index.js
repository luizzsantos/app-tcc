import React, { useEffect } from 'react'
import { Container, IconLoading } from './styles'
import { Image } from 'react-native'
import logo from '../../assets/logo.png'
import { StatusBar } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

export default () => {
    const navigation = useNavigation();

    // VERIFICA SE O USUARIO ESTÁ LOGADO
    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                navigation.reset({
                    routes: [{ name: 'Home' }]
                });
            } else {
                navigation.navigate('Login');
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
            <Image source={logo} />
            <IconLoading size="large" color="#236084" />
        </Container>
    )
}