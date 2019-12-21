
import React, { useEffect} from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase'
import {useDispatch} from 'react-redux';
import * as authActions from '../actions/authActions'

var firebaseConfig = {
  apiKey: "AIzaSyCBSBUGSi5plmhZc-XZr1eC7mPuski7118",
  authDomain: "jobsapp-519bf.firebaseapp.com",
  databaseURL: "https://jobsapp-519bf.firebaseio.com",
  projectId: "jobsapp-519bf",
  storageBucket: "jobsapp-519bf.appspot.com",
  messagingSenderId: "790358484997",
  appId: "1:790358484997:web:c1cad24dc0d5d97348946c",
  measurementId: "G-BPQ2Z6XTEM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// create a component
const StarupScreen = (props) => {
  const dispatch = useDispatch()

      const tryLogin = async () => {
                          try{
                            await firebase.auth().onAuthStateChanged(user => {
   
                              if(user != null) {
                                
                                    dispatch(authActions.loggedIn(user.uid, user.getIdToken, user.displayName, user.photoURL ))

                                    props.navigation.navigate('Jobs')

                              }else{
                                     
                                      props.navigation.navigate('Auth')
                              }

                            })
                          }catch{
                            console.log('errrors')
                          }
      }


      useEffect(() => {
           tryLogin()
      },[])

  return (
    <View style={{alignItems:'center', justifyContent:'center', flex:1}} >
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};



//make this component available to the app
export default StarupScreen;
