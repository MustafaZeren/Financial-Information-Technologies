//import liraries
import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import {useDispatch} from 'react-redux'
import * as jobActions from '../../actions/authActions'

// create a component
const Logout = (props) => {

    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(jobActions.loggedOut())
        props.navigation.navigate('Auth')

    },[dispatch])

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="green" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default Logout;
