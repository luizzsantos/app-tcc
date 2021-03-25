import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, ScrollView, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);

    const CadastraRacao = async () => {
        setLoading(false);

        Alert.alert('Deu certo')
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
                    <Text style={styles.textHeader}>Registro de Ração</Text>
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

                    />

                    <Text style={styles.label}>Quantidade de peixes adiquirido:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='exemplo: 50'
                        placeholderTextColor='#999'
                        keyboardType={'decimal-pad'}
                        autoCapitalize='none'
                        autoCorrect={false}

                    />

                    <Text style={styles.label}>Fase da criação:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='exemplo: alevino, recria ou engorda'
                        placeholderTextColor='#999'
                        keyboardType={'default'}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.campoBtn}>
                    <TouchableOpacity onPress={() => CadastraRacao()} style={styles.btnSalvar}>
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