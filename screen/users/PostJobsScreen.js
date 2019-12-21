//import liraries
import React, { useState, useCallback, useEffect} from 'react';
import {   StyleSheet , ScrollView,KeyboardAvoidingView, Alert} from 'react-native';
import CustomHeaderButton from '../../components/UI/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import * as jobActions from '../../actions/jobActions';
import {useDispatch, useSelector} from 'react-redux';
import {TextField,View,Text,Button} from 'react-native-ui-lib';

// create a component
const PostJobsScreen = (props) => {

    const dispatch = useDispatch()

    const descriptionErrorMessage = useSelector(state => state.job.descriptionErrorMessage)
    const jobCreated = useSelector(state => state.job.jobCreated)



  const [description, setDescription] = useState('');

  const data = useCallback(() => {
                            const jobData = {
                                description:description,
                            }
                            dispatch(jobActions.postJob(jobData)) 
            
                          

  },[description])


  const submit = async () => {
      await data()
 
  }

  useEffect(()=>{
      if(jobCreated){
          Alert.alert('You created job successfull', 'See you in jobs',
          [
              {
                  text:'yes',
                  onPress:()=>{
                      setDescription('')
                      dispatch(jobActions.clearErrorMessage())
                      props.navigation.openDrawer()
                  }
              }
          ])
      }
  },[jobCreated])

    return (
       <KeyboardAvoidingView  style={{flex:1, paddingHorizontal:6}} enabledKeyboardOffset={350} >
            <ScrollView contentContainerStyle={{alignItems:'center'}}>
                    <View style={styles.formContainer}>
                        
        {
            descriptionErrorMessage != undefined && (<View style={{paddingTop:4}}> 
                                                       <Text style={{color:'red'}}>{descriptionErrorMessage}</Text>
                                                    </View>)
        }
                  
                        <TextField 
                        placeholder="Write something.."
                        value={description} 
                        onChangeText={(desc) => setDescription(desc)}
                        maxLength={300}
                        showCharacterCounter
                        multiline
                        height={300}
                        paddingT-10
                        marginL-5
                        marginR-5
                        />
                    
                      
                    <Button 
                        size={'large'}
                        labelStyle={{letterSpacing: 1,fontWeight:'bold',fontSize:18}}
                        style={{width:'99%',height:42,backgroundColor:'#650d88'}}
                        iconSource={require('../../assets/plus-circle-outline.png')}
                        iconStyle={{tintColor:'#fff',resizeMode:'stretch'}}
                        white
                        label="Add To Do"

                        onPress={submit}/>
 
                 </View>
            </ScrollView>
       </KeyboardAvoidingView>
      
    );
};

const styles = StyleSheet.create({
    formContainer: {
        width:"100%",
        marginTop:15
    },
    label:{
        fontSize:20
    },
    input:{
        paddingHorizontal:2,
        paddingVertical:5,
        backgroundColor:"#f9f7f6",
        height:150,
        fontSize:22,
        borderColor:"#ccc",
        borderWidth:2,
        marginVertical:5,
    },
    phone:{
        paddingHorizontal:2,
        paddingVertical:5,
        backgroundColor:"#f9f7f6",
      
        fontSize:22,
        borderColor:"#ccc",
        borderWidth:2,
        marginVertical:5,
    }
});

PostJobsScreen.navigationOptions = (navData) => {
    return {
        headerTitle:"Add New To Do",
        headerRight:(<HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                          <Item title="menu" iconName="md-menu" onPress={() =>navData.navigation.toggleDrawer()} />
                    </HeaderButtons>)
    }
 }
export default PostJobsScreen;