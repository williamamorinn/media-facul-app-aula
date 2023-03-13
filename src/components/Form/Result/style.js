import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    resultadoMedia: {
        margimBottom: 20,
    },

    info: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
    },

    media: {
        backgroundColor: '#DDD',
        fontSize: 38,
        textAlign: 'center',
        fontWeigth: 'bold',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },

    msgResultado: {
        fontSize: 22,
        color: '#FFF',
        textAlign: 'center',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    },

    corReprovado: {
        backgroundColor: '#D00',
    },

    corProvaFinal: {
        backgroundColor: '#FB0',
    },

    corAprovado: {
        backgroundColor: '#32CD32',
    }
}
);

export default styles