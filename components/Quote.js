import React,{ useState } from 'react';
import { 
    StyleSheet, Text, ScrollView, 
    View, TextInput, TouchableOpacity 
} from 'react-native';

export default function Quotepage() {
    const [name, nameChange] = useState('');
    const [email, emailChange] = useState('');
    const [phone, phoneChange] = useState('');
    const [message, messageChange] = useState('');
    const [submitError, setError] = useState(false);
    const [submitted, trySubmit] = useState(false);

    const postMessage = () => {
        if (!name | !email | !message) {
            setError(true);
        }
        else {
            setError(false);
            trySubmit(true);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {submitError
                    ? <Text style={styles.status}>You didn't enter Name, Email or Message</Text>
                    : <Text style={styles.status}>Enter the requested information</Text>
                }
                {submitted
                    ? <Text style={styles.status}>Name: {name} Email: {email}</Text>
                    : <Text style={styles.req}>* is required</Text>
                }

                <Text style={styles.label}>Name *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => nameChange(text)}
                    value={name}
                />

                <Text style={styles.label}>Email *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => emailChange(text)}
                    value={email}
                />

                <Text style={styles.label}>Phone</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(number) => phoneChange(number)}
                    value={phone}
                    keyboardType='phone-pad'
                />

                <Text style={styles.label}>Message *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => messageChange(text)}
                    value={message}
                    multiline
                    numberOfLines={6}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => postMessage()}
                >
                    <Text>Submit Quote</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1, 
        fontSize: 26,
        fontFamily: 'OpenSans',
        width: 250
    },
    label: {
        fontSize: 18,
        fontFamily: 'OpenSans',
        paddingTop: 20
    },
    req: {
        fontFamily: 'OpenSans',
        paddingTop: 10,
        fontStyle: 'italic',
        color: 'red'
    },
    multi: {
        borderColor: 'black',
        borderWidth: 1, 
        fontSize: 16,
        fontFamily: 'OpenSans',
        width: 300
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 40
    },
    status: {
        paddingTop: 10,
        paddingBottom: 15
    }
});