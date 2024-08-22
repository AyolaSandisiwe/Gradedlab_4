import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CartContext } from './CartContext';

const MenuScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(CartContext);

  const menuItems = [
  
    { id: '1', name: 'Spicy Chicken Wings', description: 'Hot and spicy wings with a kick', price: 65, image: require('../images.jpeg') },
  
    { id: '2', name: 'Honey Mustard Wings', description: 'Sweet and tangy honey mustard wings', price: 70, image: require('../honey.jpeg') },
    { id: '3', name: 'Garlic Parmesan Wings', description: 'Savory garlic and parmesan flavored wings', price: 85, image: require('../garlic.jpeg') },
    { id: '4', name: 'Buffalo Wings', description: 'Classic buffalo wings with a spicy sauce', price: 90, image: require('../buffalo.jpeg') },
     { id: '5', name:'Lemon Pepper Wings', description: 'Zesty lemon pepper seasoning on juicy wings', price: 80, image: require('../lemon.jpeg') },
    { id: '6', name: 'Teriyaki Chicken', description: 'Tender chicken glazed with a savory teriyaki sauce.', price: 95, image: require('../teriyaki.jpg') },
 
  ];

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>R{item.price}</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.profileButtonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  profileButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MenuScreen;

  
