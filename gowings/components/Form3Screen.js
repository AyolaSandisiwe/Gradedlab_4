import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useFormContext } from './Context';

const Form3Screen = ({ navigation }) => {
    const { updateFormData } = useFormContext();
    const [cardNumber, setCardNumber] = useState('');
    const [expDate, setExpDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = () => {
        updateFormData({ cardNumber, expDate, cvv });
        navigation.navigate('CartScreen');
    };

    return (
        <View style={styles.container}>
            <Text>Payment Details</Text>
            <TextInput 
                style={styles.input}
                placeholder="Card Number"
                value={cardNumber}
                onChangeText={setCardNumber}
                keyboardType="numeric"
            />
            <TextInput 
                style={styles.input}
                placeholder="Expiration Date (MM/YY)"
                value={expDate}
                onChangeText={setExpDate}
            />
            <TextInput 
                style={styles.input}
                placeholder="CVV"
                value={cvv}
                onChangeText={setCvv}
                keyboardType="numeric"
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    input: { borderBottomWidth: 1, marginBottom: 10 }
});

export default Form3Screen;
