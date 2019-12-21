//import liraries
import React from 'react';
import { StyleSheet,ScrollView} from 'react-native';
import * as Facebook from 'expo-facebook'
import * as firebase from 'firebase'
import {View,Button,Image} from 'react-native-ui-lib';

const facebookIcon = require('../../assets/facebook.png');

// create a component
const AuthScreen = (props) => {

facebook = async () => {
    const {type, token}  =   await Facebook.logInWithReadPermissionsAsync("2586273934813170", {
                                                                permission:"public_profile"
                                                        })

       if(type == "success"){
           const credential =  firebase.auth.FacebookAuthProvider.credential(token)

           firebase.auth().signInWithCredential(credential)
           .then(() => this.props.navigation.navigate('Jobs'))
           .catch(error => {
               console.log(error)
           })
       }

       

       }
    return (
        <View flex paddingH-25 paddingT-100 useSafeArea backgroundColor={'white'} style={{width:'100%',height:'100%'}}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"> 


            <View flex center marginT-100>
                <Image
                        source={require('../../assets/logo.png')}>   
                </Image>
            </View>
           
    
        <View marginT-50 center>

 
          <Button 
          size={'large'}
          labelStyle={{letterSpacing: 1,fontWeight:'bold',fontSize:22,color:'white'}}
          style={{width:'95%',height:50}}
          
          backgroundColor='blue'
          iconSource={facebookIcon}
          iconStyle={{tintColor: 'white',resizeMode:'stretch',width:30,height:30,}}
          iconOnLeft
          
          label="Login with Facebook"
          marginT-15

          onPress={facebook}/>

          
          
        </View>
        
         
        
        </ScrollView>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default AuthScreen;
