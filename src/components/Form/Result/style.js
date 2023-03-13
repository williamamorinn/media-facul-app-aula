import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    resultadoMedia: {
        margimBottom: 20,
    },

    info: {
        textAlign: 'center',
        fontSize: 18,
        margimBottom: 10,
    },

    media: {
        bachgroundcolor: 'DDD',
        fontSize: 38,
        textAlign: 'center',
        fontWeigth: 'bold',
        padding: 10,
        bordTopLeftRadius: 10,
        bordTopRigthtRadius: 10,

    },

    msgResultado: {
        fontSize: 22,
        color: '#FFF',
        textAlign: 'center',
        padding: 10,
        bordBottomLeftRadius: 10,
        bordBottomRigthRadius: 10,

    },

    corReprovado: {
        backgroundcolor: '#000',
    },

    corProvaFinal: {
        backgroundcolor: '#FB0',
    },

    corAprovado: {
        backgroundColor: '#32CD32',
    }
}
);

export default styles