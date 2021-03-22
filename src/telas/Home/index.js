import React, { useEffect, useState } from 'react'
import { Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/Feather'
import { DEV_API } from '@env';

import AsyncStorage from '@react-native-community/async-storage';

// SEPARADOR
const Separator = () => (
    <View style={styles.separator} />
);

export default function Home({ navigation }) {

    const [total, setTotal] = useState(0);
    const [ultRegi, setUltRegi] = useState('Não há registros')

    async function TotalTanques() {
        const token = await AsyncStorage.getItem('token');
        let baseURL = DEV_API;
        const response = await fetch(`${baseURL}/tanque`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        });
        setTotal(response.headers.get('x-total-count'));
    }

    async function UltimoRegistro() {
        const token = await AsyncStorage.getItem('token');
        let baseURL = DEV_API;
        const response = await fetch(`${baseURL}/peixe`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        });
        setUltRegi(response.headers.get('retorno'));
    }

    useEffect(() => {
        TotalTanques();
        UltimoRegistro();
    }, []);

    // NAVEGA PARA AS TELAS DE CADASTRO
    const CadastroTanque = () => {
        navigation.navigate('CadastroTanque')
    }
    const RegistroPeixe = () => {
        navigation.navigate('RegistroPeixe')
    }
    const RegistroRacao = () => {
        navigation.navigate('RegistroRacao')
    }
    const RegistroTarefas = () => {
        navigation.navigate('RegistroTarefas')
    }

    //NAVEGA PARA AS TELAS DE DETALHES
    const DetalheTanque = () => {
        navigation.navigate('DetalheTanque')
    }

    const DetalhePeixe = () => {
        navigation.navigate('DetalhePeixe')
    }

    // NOVAGEÇÃO DO FOOTER
    const Sobre = () => {
        navigation.navigate('Sobre')
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle='default' backgroundColor="#236084" />
            <View style={styles.header}>
                <View>
                    <Text style={styles.textHeader}>TambaFish</Text>
                </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text style={styles.tituloCard}>Tanques</Text>
                        <TouchableOpacity onPress={CadastroTanque} style={styles.icone}>
                            <Image source={require('../../assets/iconeTanque.png')} />
                        </TouchableOpacity>
                        <Separator />
                        <Text style={styles.label}>Tanques cadastrados:</Text>
                        <Text style={styles.infoLabel}>{total}</Text>
                        <TouchableOpacity onPress={DetalheTanque} style={styles.btnDetalhes}>
                            <Text style={styles.textBtnDetalhes}>Ver detalhes</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text style={styles.tituloCard}>Peixes</Text>
                        <TouchableOpacity onPress={RegistroPeixe} style={styles.icone}>
                            <Image source={require('../../assets/iconePeixe.png')} />
                        </TouchableOpacity>
                        <Separator />
                        <Text style={styles.label}>Último registro:</Text>
                        <Text style={styles.infoLabel}>{ultRegi}</Text>
                        <TouchableOpacity onPress={DetalhePeixe} style={styles.btnDetalhes}>
                            <Text style={styles.textBtnDetalhes}>Ver detalhes</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text style={styles.tituloCard}>Ração</Text>
                        <TouchableOpacity onPress={RegistroRacao} style={styles.icone}>
                            <Image source={require('../../assets/iconeRacao.png')} />
                        </TouchableOpacity>
                        <Separator />
                        <Text style={styles.label}>Tipo de ração usada:</Text>
                        <Text style={styles.infoLabel}>10</Text>
                        <TouchableOpacity style={styles.btnDetalhes}>
                            <Text style={styles.textBtnDetalhes}>Ver detalhes</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text style={styles.tituloCard}>Tarefas</Text>
                        <TouchableOpacity onPress={RegistroTarefas} style={styles.icone}>
                            <Image source={require('../../assets/iconeTarefa.png')} />
                        </TouchableOpacity>
                        <Separator />
                        <Text style={styles.label}>Última terefa cadastrada:</Text>
                        <Text style={styles.infoLabel}>Ração às 10h</Text>
                        <TouchableOpacity style={styles.btnDetalhes}>
                            <Text style={styles.textBtnDetalhes}>Ver detalhes</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            {/* FOOTER */}
            <View style={styles.footer}>
                <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={styles.icon}>
                    <Icon name='home' size={18} color='#FFF' />
                    <Text style={styles.textFooter}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={styles.icon}>
                    <Icon name='user' size={18} color='#FFF' />
                    <Text style={styles.textFooter}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={styles.icon}>
                    <Icon name='activity' size={18} color='#FFF' />
                    <Text style={styles.textFooter}>Atividades</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={styles.icon}>
                    <Icon name='dollar-sign' size={18} color='#FFF' />
                    <Text style={styles.textFooter}>Financeiro</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={Sobre} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={styles.icon}>
                    <Icon name='send' size={18} color='#FFF' />
                    <Text style={styles.textFooter}>Sobre</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}