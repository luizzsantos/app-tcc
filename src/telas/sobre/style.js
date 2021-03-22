import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e0e0"
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
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 7
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5
    },
    frase: {
        fontStyle: 'italic'
    },
    imagem: {
        width: 90,
        height: 90,
        borderRadius: 100
    },
    card: {
        marginTop: 10,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#FFF',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 19,
        marginVertical: 6
    },
    cardContent: {
        alignItems: 'center',
        marginHorizontal: 18,
        marginVertical: 10
    },
    footer: {
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#236084'
    },
    textFooter: {
        color: '#FFF',
        fontSize: 16,
        alignItems: 'center'
    },
    icon: {
        alignItems: 'center',
        marginTop: 6
    },
})

export default styles