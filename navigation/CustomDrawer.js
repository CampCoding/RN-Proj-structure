import * as React from 'react';
import { Button, View,Text,Image } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView ,useDrawerProgress,DrawerItemList} from '@react-navigation/drawer';
import {Home,Details} from '../screens'
import { COLORS, FONTS, icons, images, SIZES } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { AuthContext } from '../screens/contexts/AuthContext';



const Drawer = createDrawerNavigator();


const CustomDrawerItem=({label,icon,onPress})=>{
    return(
        <TouchableOpacity
        style={{
            flexDirection:"row",
            height:40,
            marginBottom:SIZES.base,
            alignItems:"center",
            paddingLeft:SIZES.radius,
            borderRadius:SIZES.base,
            backgroundColor:COLORS.lightGray1
        }}
        onPress={onPress}
        >
            <Image
            source={icon}
            
            style={{
                width:20,
                height:20,
               
            }}
            />
            <Text
            style={{
                marginLeft:15,
                fontSize:SIZES.h3,
                fontWeight:"bold"
            }}
            >
{label}

            </Text>

        </TouchableOpacity>

    )
        
}





const DrawerScreenContainer=({children})=>{
    const progress = useDrawerProgress();
    const scale = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [1, 0.8],
    });
    const borderRadius = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [0, 25],
    });

  
      return (
        <Animated.View
          style={{
            flex: 1,
            overflow: 'hidden',
            transform: [{scale}],
            borderRadius: borderRadius,
          }}>
          {children}
        </Animated.View>
      );
}


function CustomDrawerContent({navigation}) {
    const {signOut}=React.useContext(AuthContext)
    return (
      <DrawerContentScrollView 
      scrollEnabled={true}
      contentContainerStyle={{flex:1}}
      >
        <View
        style={{
            flex:1,
            paddingHorizontal:SIZES.radius
        }}
        >
        <View style={{height:30}}/>
<View style={{
alignItems:"center",
justifyContent:"center"
}} >
<Image
            source={images.mainLogo}
            style={{
                width:80,
                height:80,
                borderRadius:SIZES.radius
            }}
            resizeMode='contain'
            />
            <Text>اهلا</Text>

</View>

            <View
            style={{
                flex:1,
                marginTop:SIZES.radius
            }}
            >
                <CustomDrawerItem
                label={"الرئيسية"}
                onPress={()=>{
                    navigation.navigate("Home")
                }}
                icon={icons.user}
                
                />
                   <CustomDrawerItem
                label={"التفاصيل"}
                onPress={()=>{
                    navigation.navigate("Details")
                }}
                icon={icons.like}
                
                />
            </View>

            <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          <CustomDrawerItem
            label={"تسجيل الخروج"}
            icon={icons.user}
            onPress={() => {
                signOut()
            }}
          />
        </View>
            

        </View>


      
      </DrawerContentScrollView>
 
    );
  }

const CustomDrawer=()=> {

  return (
    <View style={{flex:1,backgroundColor:COLORS.primary}} >

      <Drawer.Navigator
   
     screenOptions={{
         headerShown:false,
         drawerType:"slide",
         overlayColor:COLORS.transparent,
         drawerStyle:{
             flex:1,
             width:"65%",
             paddingLeft:20,
             backgroundColor:COLORS.transparent
         },
         sceneContainerStyle:{
             backgroundColor:COLORS.transparent
         }
         

     }}
     initialRouteName="Home"
     drawerContent={props=>{
        return(
            <CustomDrawerContent
            navigation={props.navigation}
            />
        )
    }}
      >

        
        <Drawer.Screen name="Home">

            {
                props=>(
                    <DrawerScreenContainer>
                        <Home {...props} />
                    </DrawerScreenContainer>
                )
            }
        </Drawer.Screen>

        <Drawer.Screen name="Details">
            {
                props=>(
                    <DrawerScreenContainer>
                        <Details {...props} />
                    </DrawerScreenContainer>
                )
            }
            </Drawer.Screen>
      
      </Drawer.Navigator>
    </View>

  );
}

export default CustomDrawer