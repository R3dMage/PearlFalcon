import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TabLayout(){
    return (
        <Tabs 
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle:{
                    backgroundColor: '#25292e',
                }
            }}
        >

            <Tabs.Screen 
                name='index' 
                options={{ 
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}/>
                    ),
                }}
                 />
            
            <Tabs.Screen 
                name='friends' 
                options={{ 
                    title: 'Friends',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name = {focused ? 'people-sharp' : 'people-outline'} color={color} size={24}/>
                    ),
                }} />
            
                <Tabs.Screen 
                    name='settings' 
                    options={{ 
                        title: 'Settings',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name = {focused ? 'settings-sharp' : 'settings-outline'} color={color} size={24}/>
                        ),
                    }} />
        </Tabs>
    );
}