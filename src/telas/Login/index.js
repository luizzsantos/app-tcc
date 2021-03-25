import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StatusBar, Alert, ActivityIndicator, Image } from 'react-native';

import styles from './styles';

import Icon from 'react-native-vector-icons/Feather';
import logo from '../../assets/logo.png';

import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import Api from '../../api/api';

export default () => {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(true);

    const login = async () => {
        if (nome != '' && senha != '') {
            setLoading(false);

            let json = await Api.login(nome, senha);

            if (json.token) {
                await AsyncStorage.setItem('token', json.token);
                Alert.alert(
                    "Bem-vindo!",
                    `${nome}, seu login foi realizado com sucesso!`,
                    [
                        {
                            text: "Ok", onPress: () => console.log("ok clicado")
                        }
                    ]
                );
                navigation.reset({
                    routes: [{ name: 'Home' }]
                });
            } else {
                Alert.alert(
                    "Usuário não econtrado!",
                    "Realize seu cadastro para entrar no aplicativo!",
                    [
                        {
                            text: "Ok, entendi!", onPress: () => {
                                navigation.reset({
                                    routes: [{ name: 'Login' }]
                                });
                            }
                        }
                    ],
                );
            }

        } else {
            Alert.alert(
                "ATENÇÃO!",
                "Existem campos vazios! Por favor, preencha todos os campos para poder entrar.",
                [
                    {
                        text: "Ok, entendi!", onPress: () => console.log("ok clicado")
                    }
                ]
            );
        }
    }

    const irTelaCadastro = () => {
        navigation.reset({
            routes: [{ name: 'Cadastro' }]
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor="#FFF" />
            <Image source={logo} />
            <View style={styles.form}>
                <Text style={styles.label}>Seu Nome *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu nome..."
                    placeholderTextColor="#999"
                    autoCorrect={false}
                    value={nome}
                    onChangeText={t => setNome(t)}
                />

                <Text style={styles.label}>Sua Senha *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Sua senha..."
                    placeholderTextColor="#999"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={t => setSenha(t)}
                />

                <TouchableOpacity style={styles.button} onPress={login}>
                    <View>
                        {loading ? (
                            <>
                                <Text style={styles.TextoButton}> <Icon name="log-in" size={15} /> Entrar</Text>
                            </>

                        ) : (
                            <ActivityIndicator
                                style={styles.loadingLogin}
                                visible={loading}
                                size="large"
                                color="#FFF"
                            />
                        )
                        }
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.messagenButton} onPress={irTelaCadastro}>
                    <Text style={styles.textCadastre}>Ainda não tem cadastro? </Text>
                    <Text style={styles.textCadastreBold}>Cadastre-se aqui</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}