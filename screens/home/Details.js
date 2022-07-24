import React,{Component} from 'react';
import {View,Text,ImageBackground} from 'react-native'

import {Button} from 'react-native-paper'
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONTS, images } from '../../constants';


class Details extends Component {

    constructor(props) {
        super(props);
        this.state = { 

         }
    }
  
    
    render() { 
        return ( 
            <ImageBackground
            source={images.bg1}
            style={{
                flex:1
            }}
            >
                <Text>
                Details
                </Text>
                
                
            </ImageBackground>
         );
    }
}
 
export default Details;