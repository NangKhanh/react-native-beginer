import { StyleSheet } from "react-native";

export const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        h2: {
            fontSize: 20
        },
        button: {
            backgroundColor: 'tomato'
        },
        submitButton: {
            height: '100%',
            backgroundColor: 'tomato',
            flexDirection : 'row',
            alignItems: 'center'
        },
        input: {
            borderWidth: 1,
            borderColor: 'tomato',
            paddingLeft : 10,
            paddingRight: 20,
            fontSize: 20,
            width: 200,
            height: '100%'
        },
        inputBox: {
            height: 45,
            flexDirection : 'row',
            alignItems: "center",
            marginBottom: 10,
            gap: 5
        }
    }
)




