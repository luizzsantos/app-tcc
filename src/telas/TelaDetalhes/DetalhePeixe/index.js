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

    async loadPeixe() {
        const token = await AsyncStorage.getItem('token');
        try {
            await fetch(`${baseURL}/peixe`, {
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
        this.loadPeixe();
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
                                <Text style={styles.textHeader}>Detalhes peixes</Text>
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
                                <Text style={styles.textHeader}>Detalhes peixes</Text>
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
                                                <Text style={styles.cardPropriedade}>Tipo de peixe:</Text>
                                                <TouchableOpacity
                                                    style={styles.editButton}
                                                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                                >
                                                    <Icon name="edit" size={20} color="#0d8f45" />
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={styles.trashButton}
                                                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                                >
                                                    <Icon name="trash-2" size={20} color="#cf4040" />
                                                </TouchableOpacity>

                                                <Text style={styles.cardValor}>{item.tipo_peixe}</Text>
                                            </View>
                                            <View style={styles.TESTE}>
                                                <Text style={styles.cardPropriedade}>Quantidade de peixe:</Text>
                                                <Text style={styles.cardValor}>{item.quant_peixe}</Text>
                                            </View>
                                            <View style={styles.TESTE}>
                                                <Text style={styles.cardPropriedade}>Fase de criação:</Text>
                                                {item.fase_criacao == '' ? (
                                                    <Text style={styles.cardValorNull}>não informado</Text>
                                                ) : (
                                                    <Text style={styles.cardValor}>{item.fase_criacao}</Text>
                                                )
                                                }
                                            </View>
                                            <View style={styles.TESTE}>
                                                <Text style={styles.cardPropriedade}>Ração sujerida:</Text>
                                                {item.fase_criacao == 'alevino' ? (<Text style={styles.cardValor}>farelada/pó</Text>) : (<></>)}
                                                {item.fase_criacao == 'recria' ? (<Text style={styles.cardValor}>grânulos 1mm/8mm</Text>) : (<></>)}
                                                {item.fase_criacao == 'engorda' ? (<Text style={styles.cardValor}>grânulos 8mm/10mm</Text>) : (<></>)}
                                                {item.fase_criacao == '' ? (<Text style={styles.cardValorNull}>nada a sugerir</Text>) : (<></>)}
                                            </View>
                                            <View style={styles.TESTE}>
                                                <Text style={styles.cardPropriedade}>Data do cadastro:</Text>
                                                <Text style={styles.cardValor}>{Intl.DateTimeFormat('pt-BR').format(item.created_at)}</Text>
                                            </View>
                                            <View>
                                                {item.fase_criacao == 'alevino' ? (
                                                    <Text style={{ textAlign: 'center', color: 'blue', marginTop: 5, fontSize: 15 }}>
                                                        Na fase de <Text style={{ fontWeight: 'bold' }}>alevinagem</Text> o ideal é que a alimentação seja feita 6 vezes ao dia.
                                                    </Text>
                                                ) : (<></>)}
                                                {item.fase_criacao == 'recria' ? (
                                                    <Text style={{ textAlign: 'center', color: 'blue', marginTop: 5, fontSize: 15 }}>
                                                        Na fase de <Text style={{ fontWeight: 'bold' }}>recria</Text> o ideal é que a alimentação seja feita 4 vezes ao dia.
                                                    </Text>
                                                ) : (<></>)}
                                                {item.fase_criacao == 'engorda' ? (
                                                    <Text style={{ textAlign: 'center', color: 'blue', marginTop: 5, fontSize: 15 }}>
                                                        Na fase de <Text style={{ fontWeight: 'bold' }}>engorda</Text> o ideal é que a alimentação seja feita 3 vezes ao dia.
                                                    </Text>
                                                ) : (<></>)}
                                            </View>
                                        </View>
                                    )}
                                    keyExtractor={item => item.id.toString()}
                                />
                            </View>
                        </View>
                    </View>
                )
            }
        }
    }
}