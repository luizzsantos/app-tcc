import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import styles from './style';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export default function Sobre({ navigation }) {

    const Home = () => {
        navigation.navigate('Home');
    }

    return (

        <View style={styles.container}>
            <StatusBar barStyle='default' backgroundColor="#236084" />
            <View style={styles.header}>
                <View>
                    <Text style={styles.textHeader}>Quem somos nós?</Text>
                </View>
            </View>

            <ScrollView>
                {/* ARMANDO */}
                {/* <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <Image style={styles.imagem} source={require('../../assets/armando.jpg')} />
                        <Text style={styles.text}>Armando Santos</Text>
                        <Text style={styles.label}>Orientador do trabalho</Text>
                        <Text style={styles.label}>Universidade do Estado do Pará - Campus XV</Text>
                        <Text></Text>
                        <Text style={styles.frase}>"Eu gosto de pescar"</Text>
                    </View>
                </View> */}

                <View style={styles.card}>
                    {/* ADRIANO */}
                    <View style={styles.cardContent}>
                        <Image style={styles.imagem} source={require('../../assets/eumesmo.jpg')} />
                        <Text style={styles.text}>Adriano Mendes</Text>
                        <Text style={styles.label}>Acadêmico em Análise e Desenvolvimento de Sistemas</Text>
                        <Text style={styles.label}>Universidade do Estado do Pará - Campus XV</Text>
                        <Text></Text>
                        <Text style={styles.frase}>"Melhor professor, o fracasso é."</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    {/* LUIZ */}
                    <View style={styles.cardContent}>
                        <Image style={styles.imagem} source={require('../../assets/luiz.jpg')} />
                        <Text style={styles.text}>Luiz Santos</Text>
                        <Text style={styles.label}>Acadêmico em Análise e Desenvolvimento de Sistemas</Text>
                        <Text style={styles.label}>Universidade do Estado do Pará - Campus XV</Text>
                        <Text></Text>
                        <Text style={styles.frase}>"Alguma coisa."</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    {/* WYRLEM */}
                    <View style={styles.cardContent}>
                        <Image style={styles.imagem} source={require('../../assets/wyrlem.jpg')} />
                        <Text style={styles.text}>Wyrlem Cristian</Text>
                        <Text style={styles.label}>Acadêmico em Análise e Desenvolvimento de Sistemas</Text>
                        <Text style={styles.label}>Universidade do Estado do Pará - Campus XV</Text>
                        <Text></Text>
                        <Text style={styles.frase}>"Alguma coisa."</Text>
                    </View>
                </View>
            </ScrollView>

            {/* FOOTER */}
            <View style={styles.footer}>
                <TouchableOpacity onPress={Home} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={styles.icon}>
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
                <TouchableOpacity onPress={Sobre} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={styles.icon}>
                    <Icon name='send' size={18} color='#FFF' />
                    <Text style={styles.textFooter}>Sobre</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}