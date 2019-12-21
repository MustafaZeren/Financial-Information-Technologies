//import liraries
import React, { useState, useCallback } from 'react';
import { StyleSheet , ScrollView ,KeyboardAvoidingView, Alert} from 'react-native';
import CustomHeaderButton from '../../components/UI/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import * as jobActions from '../../actions/jobActions';
import {useDispatch, useSelector} from 'react-redux';
import {TextField,View,Text,Button} from 'react-native-ui-lib';




// create a component
const EditModeScreen = (props) => {

    const dispatch = useDispatch()

    const descriptionErrorMessage = useSelector(state => state.job.descriptionErrorMessage)
    const jobCreated = useSelector(state => state.job.jobCreated)
    const userOwnJobs = useSelector(state => state.job.userOwnJobs)
    const id  = props.navigation.getParam('id')

    const toUpdate = userOwnJobs ? userOwnJobs.find( job => job.id === id) :[]


  const [description, setDescription] = useState(toUpdate ? toUpdate.description : '');
  const [loading, setLoading] = useState(false)

  const data = useCallback(() => {
                            const jobData = {
                                description:description,
                            }

                            dispatch(jobActions.updateJob(id, jobData) )
                          
            
                          

  },[description, userOwnJobs])


  const submit = async () => {
      setLoading(true)
      await data()
      setLoading(false)

      Alert.alert('Your data has been successfully updated', 'You will go to jobs',
      [
          {
              text:'yes',
              onPress:()=>{
                  setDescription('')
                  dispatch(jobActions.clearErrorMessage())
                  props.navigation.navigate('Jobs')
              }
          }
      ])
 
  }



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
                                             iconSource={require('../../assets/comment-edit-outline.png')}
                                             iconStyle={{tintColor:'#fff',resizeMode:'stretch'}}
                                             white
                                             label="Edit"
                     
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
});

EditModeScreen.navigationOptions = (navData) => {
    return {
        headerTitle:"Edit Job",
        headerRight:(<HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                          <Item title="menu" iconName="md-menu" onPress={() =>navData.navigation.toggleDrawer()} />
                    </HeaderButtons>)
    }
 }
 
 

 


//make this component available to the app
export default EditModeScreen;
