import React, { Component } from 'react';
import styles from './style';
import { Text, View, FlatList, ActivityIndicator, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';

import { DEV_API } from '@env';
const baseURL = DEV_API;

export default class DetalheTanque extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            data: []
        }
    }

    async loadTanque() {
        const token = await AsyncStorage.getItem('token');
        try {
            await fetch(`${baseURL}/tanque`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        data: res || [],
                        loading: false
                    });
                });
        } catch (error) {
            console.warn(error);
        }
    }

    componentDidMount() {
        this.loadTanque()
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator
                        size="large"
                        color="#236084"
                    />
                    <Text>Aguarde, carregando dados...</Text>
                </View>
            )
        } else {
            if (this.state.data == '') {
                return (
                    <View style={styles.container}>
                        <StatusBar barStyle='default' backgroundColor="#236084" />
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.iconVoltar} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                                <Icon name="chevron-left" size={25} color="#FFF" />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.textHeader}>Detalhes do tanque</Text>
                            </View>
                        </View>
                        <View style={styles.dadosNull}>
                            <Icon name="frown" size={150} color="#bfbfbf" />
                            <Text style={styles.dadosNullText}>Não há dados armazenados...</Text>
                        </View>
                    </View>
                )
            } else {
                return (
                    <View style={styles.container}>
                        <StatusBar barStyle='default' backgroundColor="#236084" />
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.iconVoltar} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                                <Icon name="chevron-left" size={25} color="#FFF" />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.textHeader}>Detalhes do tanque</Text>
                            </View>
                        </View>
                        {/* CARDS */}
                        <View>
                            <View style={styles.containerCard}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={this.state.data}
                                    renderItem={({ item }) => (
                                        <View style={styles.card}>
                                            <View style={styles.TESTE}>
                                                <Text style={styles.cardPropriedade}>Nome do Tanque:</Text>
                                                <TouchableOpacity style={styles.editButton} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                                                    <Icon name="edit" size={20} color="#0d8f45" />
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.trashButton} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                                                    <Icon name="trash-2" size={20} color="#cf4040" />
                                                </TouchableOpacity>
                                                {item.nome_tanque == '' ? (
                                                    <Text style={styles.cardValorNull}>sem nome</Text>
                                                ) : (
                                                    <Text style={styles.cardValor}>{item.nome_tanque}</Text>
                                                )
                                                }
                                            </View>
                                            <View style={styles.TESTE}>
                                                <Text style={styles.cardPropriedade}>Profundidade:</Text>
                                                <Text style={styles.cardValor}>{item.profundidade}</Text>
                                            </View>
                                            <View style={styles.TESTE}>
                                                <Text style={styles.cardPropriedade}>Largura:</Text>
                                                <Text style={styles.cardValor}>{item.largura}</Text>
                                            </View>
                                            <View style={styles.TESTE}>
                                                <Text style={styles.cardPropriedade}>Comprimento:</Text>
                                                <Text style={styles.cardValor}>{item.comprimento}</Text>
                                            </View>
                                            <View style={styles.TESTE}>
                                                <Text style={styles.cardPropriedade}>Tipo de peixe:</Text>
                                                <Text style={styles.cardValor}>{item.tipo_peixe}</Text>
                                            </View>
                                            <View style={styles.TESTE}>
                                                <Text style={styles.cardPropriedade}>Quantidade de Peixe:</Text>
                                                <Text style={styles.cardValor}>{item.quant_peixe}</Text>
                                            </View>
                                            <View>
                                                {item.profundidade > '1.5' ? (
                                                    <Text style={{ textAlign: 'center', color: 'red' }}>A profundidade do tanque é maior que a de 1.5m.</Text>
                                                ) : (<></>)}
                                            </View>

                                            {/* <Text style={styles.cardPropriedade}>PH da água</Text>
                                            {item.ph_agua == '' ? (
                                                <Text style={styles.cardValor}>Não informado...</Text>
                                            ) : (
                                                    <Text style={styles.cardValor}>{item.ph_agua}</Text>
                                                )
                                            } */}

                                            {/* VERIFICA O PH DA AGUA */}
                                            {/* <View>
                                                {item.ph_agua >= '2.0' && item.ph_agua <= '3.9' ? (
                                                    <Text style={{ textAlign: 'center', color: 'red' }}>
                                                        O PH da água informado é considerado como letal para a criação de peixe.
                                                    </Text>
                                                ) : (<></>)}
                                                {item.ph_agua >= '4.0' && item.ph_agua <= '5.9' ? (
                                                    <Text style={{ textAlign: 'center', color: 'orange' }}>
                                                        O PH da água informado indica Aumento do estresse para a criação de peixe.
                                                    </Text>
                                                ) : (<></>)}
                                                {item.ph_agua >= '6.0' && item.ph_agua <= '9.9' ? (
                                                    <Text style={{ textAlign: 'center', color: 'blue' }}>
                                                        O PH da água informado indica que está na faixa desejável para a criação de peixe.
                                                    </Text>
                                                ) : (<></>)}
                                                {item.ph_agua >= '10.0' && item.ph_agua <= '11.9' ? (
                                                    <Text style={{ textAlign: 'center', color: 'orange' }}>
                                                        O PH da água informado indica "Aumento do estresse" para a criação de peixe.
                                                    </Text>
                                                ) : (<></>)}
                                                {item.ph_agua >= '12.0' && item.ph_agua <= '14.9' ? (
                                                    <Text style={{ textAlign: 'center', color: 'red' }}>
                                                        O PH da água informado é considerado como letal para a criação de peixe.
                                                    </Text>
                                                ) : (<></>)}
                                            </View> */}
                                        </View>
                                    )}
                                    keyExtractor={item => item.nome_tanque}
                                />
                            </View>
                        </View>
                    </View>
                )
            }
        }
    }
}