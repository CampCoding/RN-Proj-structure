import React,{Component} from 'react';
import {View,Text, } from 'react-native'
import {UserContext} from '../contexts/UserContext'
import {Button} from 'react-native-paper'
import { COLORS, FONTS } from '../../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import {Header} from '../../components';



class Signup extends Component {
    static contextType=UserContext

    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    

   
    render() { 
        return ( 
            <View
            style={{
                padding:20
            }}
            >
                <Header title="Signup"/>
                <Text>
                    Signup
                </Text>
                <Text>
                    {this.context.mname}
                </Text>
                <Button
                color={COLORS.primary}
                labelStyle={{
                    ...FONTS.h2
                   
                }}
                style={{
                    width:RFValue(140)
                }}
                mode='contained'
                onPress={()=> this.context.changename()}
                >
                    change name
                    

                </Button>
            </View>
         );
    }
}
 
export default Signup;