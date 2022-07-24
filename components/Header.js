import React from 'react'
import {View,Text} from 'react-native'
import { COLORS } from '../constants'
import { UserContext } from '../screens/contexts/UserContext'

class Header extends React.Component{
    static contextType=UserContext
    render(){
        return(
<View>
                <View style={{
                    backgroundColor:COLORS.white,
                    borderRadius:8,
                    height:60,
                    width:"100%",
                    alignItems:"center",
                    justifyContent:"center"
                }} >
                    <Text>{this.props.title}</Text>
                    <Text>{this.context.mname}</Text>

                </View>
            </View>
        )
    }
        
            
          
    
}


export default Header
   
