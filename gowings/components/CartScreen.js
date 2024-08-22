import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useCartContext } from './Context';

const CartScreen = ({ navigation }) => {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useCartContext();

    const handleCheckout = () => {
        clearCart();
        navigation.navigate('Checkout');
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Price: ${item.price}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item)} />
            <Button 
                title="Update Quantity" 
                onPress={() => updateQuantity(item.id, item.quantity + 1)} 
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text>Cart</Text>
            <FlatList 
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            <Text>Total Cost: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</Text>
            <Button title="Proceed to Checkout" onPress={handleCheckout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    itemContainer: { marginBottom: 10 }
});

export default CartScreen;
