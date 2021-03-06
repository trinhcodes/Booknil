import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import AudioBook from '../assets/audiobook.png';


export default function BookItem(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BookItem</Text>
            <Image style={styles.bookImage} source={AudioBook} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16
    },
    
    bookImage: {
        width: 64,
        height: 64
    },
   
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
});