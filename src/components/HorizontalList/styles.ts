import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    containerList: {
        marginVertical: 5,
        paddingVertical: 10
    },

    list: {
        paddingVertical: 0,
        paddingHorizontal: 15
    },

    titleList: {
        color: '#FFFFFF',
        fontWeight: 700,
        fontSize: 18,
        textTransform: 'capitalize',
        letterSpacing: 0.3,
        marginLeft: 15,
        marginBottom: 15
    },

    cardItem: {
        width: 140,
        marginRight: 15,
        borderRadius: 10,
        backgroundColor: '#5A189A',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginBottom: 8
    },

    cardImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },

    cardTitleWrapper: {
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4
    },

    cardTitle: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 500,
        textTransform: 'capitalize',
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 15,

        letterSpacing: 0.3
    
    }

})