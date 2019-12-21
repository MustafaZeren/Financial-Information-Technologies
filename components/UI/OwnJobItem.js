//import liraries
import React from 'react';
import { StyleSheet } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { View, Text } from 'react-native-ui-lib'

// create a component
const OwnJobItem = (props) => {
    return (
        <View style={styles.container}>                
            <Swipeout 
                    right={[
                        {
                        text: 'Delete',
                        onPress:()=>{props.deleteJob()},
                        backgroundColor: 'red', 
                        color: 'white',
                        }]}
                    left={[
                            {
                            text: 'Edit',
                            onPress:()=>{props.editJob()},
                            backgroundColor: 'orange', 
                            color: 'white',
                            }
                        ]}
                    style={{backgroundColor:props.bgColor,width:380,borderRadius:30}}>  
                        <View padding-20>
                            <Text text70 dark10>
                                {props.description}
                            </Text>
                        </View>
            </Swipeout>  
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:3
    }
});

export default OwnJobItem;
