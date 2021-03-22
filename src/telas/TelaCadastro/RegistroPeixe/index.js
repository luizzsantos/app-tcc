import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, ScrollView, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Api from "../../../api/api";

export default () => {
    const navigation = useNavigation();

    const [tipo_peixe, setTipoPeixe] = useState('');
    const [quant_peixe, setQuantPeixe] = useState('');
    // const [fase_cultivo, setFaseCultivo] = useState('');
    const [fase_criacao, setFaseCriacao] = useState('');
    const [loading, setLoading] = useState(true);

    const Cadastrapeixe = async () => {
        if (tipo_peixe != '' && quant_peixe != '') {
            setLoading(false);

            let json = await Api.cadastraPeixe(tipo_peixe, quant_peixe, fase_criacao);

            if (json.user_id) {
                Alert.alert(
                    "Sucesso!",
                    "Cadastrado realizado com sucesso...",
                    [
                        {
                            text: 'Ok!', onPress: () => console.log("ok clicado")
                        }
                    ]
                );
                navigation.reset({
                    routes: [{ name: 'Home' }]
                });
            } else {
                Alert.alert(
                    "Ops!",
                    "Aconteceu alguma coisa não esperada.",
                    [
                        {
                            text: "Ok, entendi.", onPress: () => {
                                navigation.reset({
                                    routes: [{ name: 'Home' }]
                                });
                            }
                        }
                    ]
                );
            }
        } else {
            Alert.alert(
                "Ops!",
                "Existem campos vazios! Por favor, preencha todos os campos para poder realizar o cadastro.",
                [
                    {
                        text: "Ok, entendi.", onPress: () => console.log("ok clicado")
                    }
                ]
            );
        }
    }

    function voltar() {
        navigation.goBack();
    }

    return (
        <View>
            <StatusBar barStyle='default' backgroundColor="#236084" />
            <View style={styles.header}>
                <TouchableOpacity onPress={voltar} style={styles.iconVoltar} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                    <Icon name="chevron-left" size={25} color="#FFF" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.textHeader}>Registro de Peixes</Text>
                </View>
            </View>

            <ScrollView style={{ marginBottom: 50 }}>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Tipo de peixe:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='exemplo: Tambaqui'
                        placeholderTextColor='#999'
                        keyboardType={'default'}
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={tipo_peixe}
                        onChangeText={setTipoPeixe}
                    />

                    <Text style={styles.label}>Quantidade de peixes adiquirido:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='exemplo: 50'
                        placeholderTextColor='#999'
                        keyboardType={'decimal-pad'}
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={quant_peixe}
                        onChangeText={setQuantPeixe}
                    />

                    {/* <Text style={styles.label}>Fase de Cultivo:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='exemplo: Alevino'
                        placeholderTextColor='#999'
                        keyboardType={'default'}
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={fase_cultivo}
                        onChangeText={setFaseCultivo}
                    /> */}

                    <Text style={styles.label}>Fase da criação:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='exemplo: alevino, recria ou engorda'
                        placeholderTextColor='#999'
                        keyboardType={'default'}
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={fase_criacao}
                        onChangeText={setFaseCriacao}
                    />
                </View>
                <View style={styles.campoBtn}>
                    <TouchableOpacity onPress={() => Cadastrapeixe()} style={styles.btnSalvar}>
                        <View>
                            {loading ? (
                                <>
                                    <Text style={styles.btnText}>Salvar</Text>
                                </>

                            ) : (
                                    <ActivityIndicator
                                        style={styles.loadingLogin}
                                        visible={loading}
                                        size="small"
                                        color="#FFF"
                                    />
                                )
                            }
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCancelar}>
                        <Text style={styles.btnText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}