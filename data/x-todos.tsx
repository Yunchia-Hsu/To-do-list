import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Todo({ item, onDelete }) {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.text}</Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
      >
        <Text style={styles.deleteText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  todoText: {
    fontSize: 16,
  },
  deleteButton: {
    paddingHorizontal: 10,
  },
  deleteText: {
    fontSize: 18,
    color: 'red',
  },
});
