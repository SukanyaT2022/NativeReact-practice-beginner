import React from 'react';
import { ScrollView, TextInput, View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const Register = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingView}
        >
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                <TextInput style={styles.input} placeholder="Text Field 1" />
                <TextInput style={styles.input} placeholder="Text Field 2" />
                <TextInput style={styles.input} placeholder="Text Field 3" />
                <TextInput style={styles.input} placeholder="Text Field 4" />
                <TextInput style={styles.input} placeholder="Text Field 1" />
                <TextInput style={styles.input} placeholder="Text Field 2" />
                <TextInput style={styles.input} placeholder="Text Field 3" />
                <TextInput style={styles.input} placeholder="Text Field 4" />
                <TextInput style={styles.input} placeholder="Text Field 1" />
                <TextInput style={styles.input} placeholder="Text Field 2" />
                <TextInput style={styles.input} placeholder="Text Field 3" />
                <TextInput style={styles.input} placeholder="Text Field 4" />
                {/* Add more content here if needed */}
                <View style={styles.spacer} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    keyboardAvoidingView: {
        flex: 1,
    },
    container: {
        padding: 16,
        flexGrow: 1, // Allow content to grow
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    spacer: {
        height: 200, // Just for demonstration
        backgroundColor:'red',
    },
});

export default Register;
