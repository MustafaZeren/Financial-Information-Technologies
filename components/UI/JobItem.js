//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const JobItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={{...styles.card,backgroundColor:props.bgColor}}>
                 <Text style={{fontSize:20,lineHeight:22}}>{props.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding:8
    },
    card:{
        elevation:5,
        borderRadius:10,
        padding:8
    }
});

export default JobItem;
