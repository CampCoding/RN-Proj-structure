import React,{Component} from 'react';
import {View,Text,ImageBackground} from 'react-native'




class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { 

         }
    }
  
    
    render() { 
        return ( 
            <View style={{
                flex:1,
                backgroundColor:"#fff"
            }}
            >
                <Text>
                    Home
                </Text>
                
                
            </View>
         );
    }
}
 
export default Home;