import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './styles';

export function FrontEnd() { 
  return (
    <KeyboardAvoidingView style={styles.background}> 
      <View style={styles.container}>
        <View style={styles.welcomeBack}> 
          <Text style={styles.welcome}> Perfeito! </Text>
          <Text style={styles.description}> Aqui estão 3 linguagens para esta área! </Text>
        </View>

        <View style={styles.box}>
          <TouchableOpacity style={styles.btnSubmitAluno}>
              <Text style={styles.submitTextAluno}>React.Js</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSubmitCantina}>
              <Text style={styles.submitTextCantina}>JavaScript</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSubmitAdmin}>
              <Text style={styles.submitTextAdmin}>HTML/CSS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

