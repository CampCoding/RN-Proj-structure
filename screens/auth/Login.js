import React,{Component} from 'react';
import {View,Text,ImageBackground} from 'react-native'

import {Button} from 'react-native-paper'
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONTS, images } from '../../constants';
import {UserContext} from '../contexts/UserContext'
import {AuthContext} from '../contexts/AuthContext'
import Header from '../../components/Header';


class Login extends Component {

    static contextType=UserContext
    
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    componentDidMount(){
        console.log(this.context)
    }
 



    
    render() { 
        return ( 
            <AuthContext.Consumer>
                {
                    (authCon)=>{
                        return(
                            <ImageBackground
                            source={images.bg1}
                            style={{
                                flex:1,
                                padding:20
                            }}
                            >


                            <Header title="Login" />
                                <Text>
                                    aaaa
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
                                onPress={()=> this.props.navigation.navigate("Signup")}
                                >
                                    Signup
                                    
                
                                </Button>
                
                                <Button
                                color={COLORS.primary}
                                labelStyle={{
                                    ...FONTS.h2
                                   
                                }}
                                style={{
                                    width:RFValue(140)
                                }}
                                mode='contained'
                                onPress={()=> {
                                    console.log(authCon)
                                    authCon.signIn()
                                }}
                                >
                                    Home
                                    
                
                                </Button>
                                
                            </ImageBackground>
                        )
                    }
                }
            </AuthContext.Consumer>
          
         );
    }
}
 
export default Login;