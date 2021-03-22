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
    tituloCard: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    icone: {
        alignItems: 'center',
        marginTop: 17
    },
    label: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    },
    infoLabel: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#236084',
        marginTop: 5
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    btnDetalhes: {
        alignItems: 'center',
        marginTop: 5,
        height: 40
    },
    textBtnDetalhes: {
        fontSize: 15,
        color: '#0000cc'
    },
    footer: {
        width: '100%',
        height: '10%',
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
        alignItems: 'center'
    },
    container2: {
        width: '100%',
        height: '83%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        width: '50%',
        height: '50%',
        padding: 5
    },
    inner: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 8
    },
})

export default styles