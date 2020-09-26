import * as React from 'react';
import{TextInput,View,StyleSheet,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';


export default class WriteStoryScreen extends React.component{
    render(){
        return(
            <View style = {styles.container}>
                <Header
                    backgroundColor={"pink"}
                    centerComponent={{
                        text :'Story Hub-1',
                        style:{
                            color :'red',
                            fontSize:22,
                            fontStyle:'italic',
                        }
                    }}
                />
                <TextInput
                placeholder="Title Of Story"
                />
                <TextInput
                placeholder="Author Of Story"
                />
                <TextInput
                placeholder="writeStory"
                />

            <TouchableOpacity style={styles.button}>
                <Text>Submit</Text>
            </TouchableOpacity>

            </View>
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button :{
        backgroundColor:'pink',
        alignItems:'center',
        alignSelf:'center',
    }
    
  });
