import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useFormContext } from './Context';

const Form2Screen = ({ navigation }) => {
    const { updateFormData } = useFormContext();
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const handleSubmit = () => {
        updateFormData({ address, city, state, zip });
        navigation.navigate('Form3');
    };

    return (
        <View style={styles.container}>
            <Text>Address Details</Text>
            <TextInput 
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
            />
            <TextInput 
                style={styles.input}
                placeholder="City"
                value={city}
                onChangeText={setCity}
            />
            <TextInput 
                style={styles.input}
                placeholder="State"
                value={state}
                onChangeText={setState}
            />
            <TextInput 
                style={styles.input}
                placeholder="Zip Code"
                value={zip}
                onChangeText={setZip}
                keyboardType="numeric"
            />
            <Button title="Next" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    input: { borderBottomWidth: 1, marginBottom: 10 }
});

export default Form2Screen;
