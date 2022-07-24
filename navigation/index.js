import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack'
import {Login,Signup} from '../screens'
import { AsyncStorage } from 'react-native';
import {AuthContext} from '../screens/contexts/AuthContext';
import CustomDrawer from './CustomDrawer'

const Stack=createStackNavigator()




const Navigation =()=> {


    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
              return {
                ...prevState,
                isSignout:action.token
               
              };
            case 'SIGN_IN':
              return {
                ...prevState,
                isSignout: false,
                
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignout: true,
                
              };
          }
        },
        {
          
          isSignout: false,
        }
      );


      React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
          let userToken;
    
          try {
            userToken = await AsyncStorage.getItem('userToken');
          } catch (e) {
            // Restoring token failed
          }
    
          // After restoring token, we may need to validate it in production apps
    
          // This will switch to the App screen or Auth screen and this loading
          // screen will be unmounted and thrown away.
          dispatch({ type: 'RESTORE_TOKEN', token: true });
        };
    
        bootstrapAsync();
      }, []);



      const authContext = React.useMemo(
        () => ({
          signIn: async (data) => {

            dispatch({ type: 'SIGN_IN'});
          },
          signOut: () => dispatch({ type: 'SIGN_OUT' }),
     
        }),
        []
      );
    
    
        return ( 
            <>
      
      <NavigationContainer>
      <AuthContext.Provider value={authContext}>

            <Stack.Navigator
            screenOptions={{
                headerShown:false,
                cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
                animationEnabled:true
                
            }}
            >
                {
                    state.isSignout?(
                        <>
                        <Stack.Screen name='Login' component={Login} />


                        <Stack.Screen name='Signup' component={Signup} />
                        </>
                    ):(
                    <>
                        <Stack.Screen name='MainApp' component={CustomDrawer} />

                </>

                )
                }


            

            </Stack.Navigator>
    </AuthContext.Provider>


           </NavigationContainer>
    
            
            
            </>




        //     <Authcontext.Provider value={authContext}>
               

        //  </AuthContext.Provider>         

        )



          
    
}
 
export default Navigation;