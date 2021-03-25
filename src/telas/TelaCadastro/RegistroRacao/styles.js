import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebebeb"
    },
    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#236084'
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
        letterSpacing: 1
    },
    iconVoltar: {
        position: 'absolute',
        left: 16
    },
    containerForm: {
        flex: 1,
        padding: 10
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 5,
        fontSize: 17
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#ddd',
        paddingHorizontal: 10,
        fontSize: 15,
        color: '#444',
        height: 40,
        borderRadius: 5,
        marginBottom: 10
    },
    campoBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 40,
    },
    btnSalvar: {
        height: 42,
        backgroundColor: '#0d8f45',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 45
    },
    btnCancelar: {
        height: 42,
        backgroundColor: '#cf4040',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 35
    },
    btnText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default styles