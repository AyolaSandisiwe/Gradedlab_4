import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeContext';

const ProfileScreen = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={{ color: theme.textColor }}>Name: John Doe</Text>
      <Text style={{ color: theme.textColor }}>Address: 123 Main St</Text>
      <Text style={{ color: theme.textColor }}>Email: johndoe@example.com</Text>
      <Button
        title="Change Theme"
        onPress={() => setTheme({
          textColor: '#FFFFFF',
          backgroundColor: '#000000',
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ProfileScreen;
