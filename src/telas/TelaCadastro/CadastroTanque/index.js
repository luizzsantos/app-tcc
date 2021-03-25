import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, ScrollView, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Api from "../../../api/api";

export default () => {
    const navigation = useNavigation();

    const [nome_tanque, setNomeTanque] = useState('');
    const [profundidade, setProfundidade] = useState('');
    const [largura, setlargura] = useState('');
    const [comprimento, setComprimento] = useState('');
    const [tipo_peixe, setTipoPeixe] = useState('');
    const [quant_peixe, setQuantPeixe] = useState('');
    const [loading, setLoading] = useState(true);


    const Cadastratanque = async () => {
        if (profundidade != '' && largura != '' && comprimento != '' && tipo_peixe != '' && quant_peixe != '') {
            setLoading(false);

            let json = await Api.cadastraTanque(nome_tanque, profundidade, largura, comprimento, tipo_peixe, quant_peixe);

            if (json.user_id != '') {
                if (profundidade > '1.50') {
                    Alert.alert(
                        "Tanque cadastrado! Mas, atenção.",
                        "A profundidade do tanque é maior que 1,50m. Esse detalhe é fundamental para facilitar o momento de subida da rede, no procedimento de captura (ou colheita) dos peixes.",
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
                        "Sucesso!",
                        "Tanque cadastrado com sucesso...",
                        [
                            {
                                text: 'Ok!', onPress: () => console.log("ok clicado")
                            }
                        ]
                    );
                    navigation.reset({
                        routes: [{ name: 'Home' }]
                    });
                }
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
        navigation.goBack()
    }

    return (
        <View>
            <StatusBar barStyle='default' backgroundColor="#236084" />
            <View style={styles.header}>
                <TouchableOpacity onPress={voltar} style={styles.iconVoltar} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                    <Icon name="chevron-left" size={25} color="#FFF" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.textHeader}>Registro de Tanques</Text>
                </View>
            </View>

            <ScrollView style={{ marginBottom: 50 }}>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Identificação do Tanque:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='exemplo: tanque 1'
                        placeholderTextColor='#999'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={nome_tanque}
                        onChangeText={setNomeTanque}
                    />

                    <Text style={styles.label}>Profundidade do Tanque:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='exemplo: 2.22'
                        placeholderTextColor='#999'
                        keyboardType={'decimal-pad'}
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={profundidade}
                        onChangeText={setProfundidade}
                    />

                    <Text style={styles.label}>Largura do Tanque:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='exemplo: 2.22'
                        placeholderTextColor='#999'
                        keyboardType={'decimal-pad'}
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={largura}
                        onChangeText={setlargura}
                    />

                    <Text style={styles.label}>Comprimento do Tanque:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='exemplo: 2.22'
                        placeholderTextColor='#999'
                        keyboardType={'decimal-pad'}
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={comprimento}
                        onChangeText={setComprimento}
                    />

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

                    <Text style={styles.label}>Quantidade de peixes no Tanque:</Text>
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
                </View>
                <View style={styles.campoBtn}>
                    <TouchableOpacity onPress={() => Cadastratanque()} style={styles.btnSalvar}>
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