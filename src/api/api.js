import { DEV_API } from '@env';
import AsyncStorage from '@react-native-community/async-storage';

const baseURL = DEV_API;

export default {

    //rota de login
    login: async (nome, senha) => {
        const req = await fetch(`${baseURL}/session`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, senha })
        });
        const json = await req.json();
        return json;
    },

    //rota de cadastro de usuário
    cadastroUsuario: async (nome, senha, cidade, estado) => {
        const req = await fetch(`${baseURL}/usuario`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, senha, cidade, estado })
        });
        const json = await req.json();
        return json;
    },

    //rota de cadastro de tanque
    cadastraTanque: async (nome_tanque, profundidade, largura, comprimento, tipo_peixe, quant_peixe) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${baseURL}/tanque`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ nome_tanque, profundidade, largura, comprimento, tipo_peixe, quant_peixe })
        });
        const json = await req.json();
        return json;
    },

    //cadastro de peixe
    cadastraPeixe: async (tipo_peixe, quant_peixe, fase_criacao) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${baseURL}/peixe`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ tipo_peixe, quant_peixe, fase_criacao })
        });
        const json = await req.json();
        return json;
    }
};