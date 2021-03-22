import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StatusBar, Alert, ActivityIndicator, Image } from 'react-native';

import styles from './styles';

import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';

import Api from '../../api/api';

export default () => {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const [loading, setLoading] = useState(true);

    const login = async () => {
        if (nome != '' && senha != '' && cidade != '' && estado != '') {
            setLoading(false);

            let json = await Api.cadastroUsuario(nome, senha, cidade, estado);

            if (json.id) {
                Alert.alert(
                    "Cadastro realizado com sucesso!",
                    "Agora, faça seu login para poder entrar no aplicativo.",
                    [
                        {
                            text: "Ok", onPress: () => console.log("ok clicado")
                        }
                    ]
                );
                navigation.reset({
                    routes: [{ name: 'Login' }]
                });
            } else {
                Alert.alert(
                    "OPS!",
                    "Alguma coisa não saiu como o esperado, por favor tente novamente!",
                    [
                        {
                            text: "Ok", onPress: () => console.log("ok clicado")
                        }
                    ]
                );
            }
        } else {
            Alert.alert(
                "ATENÇÃO!",
                "Existem campos vazios! Por favor, preencha todos os campos para poder realizar o cadastro.",
                [
                    {
                        text: "Ok, entendi.", onPress: () => console.log("ok clicado")
                    }
                ]
            );
        }
    }

    const irTelaLogin = () => {
        navigation.reset({
            routes: [{ name: 'Login' }]
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

                <Text style={styles.label}>Seu senha *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu senha..."
                    placeholderTextColor="#999"
                    autoCorrect={false}
                    value={senha}
                    onChangeText={t => setSenha(t)}
                />

                <Text style={styles.label}>Sua Cidade *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Sua cidade..."
                    placeholderTextColor="#999"
                    autoCorrect={false}
                    value={cidade}
                    onChangeText={t => setCidade(t)}
                />

                <Text style={styles.label}>Sua Estado *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Sua estado..."
                    placeholderTextColor="#999"
                    autoCorrect={false}
                    value={estado}
                    onChangeText={t => setEstado(t)}
                />

                <TouchableOpacity style={styles.button} onPress={login}>
                    <View>
                        {loading ? (
                            <>
                                <Text style={styles.TextoButton}> <Icon name="address-card" size={15} /> Cadastre-se</Text>
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
                <TouchableOpacity style={styles.messagenButton} onPress={irTelaLogin}>
                    <Text style={styles.textCadastre}>Já possui uma conta? </Text>
                    <Text style={styles.textCadastreBold}>Faça o login</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}