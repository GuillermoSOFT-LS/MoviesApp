import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

const Tabslayout = ()=> {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#9b0c0c',
            tabBarInactiveTintColor: 'white',

            tabBarStyle: {
                backgroundColor: 'black',
                borderTopWidth: 0,
            }

        }}>
            <Tabs.Screen
            name='index'
            options={{
                title: 'Home',
                tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size}/>
            }}
            />
            <Tabs.Screen
                name='Configuracion'
                options={{
                    title: 'Setting',
                    tabBarIcon: ({color, size}) => <Ionicons name='settings' color={color} size={size}/>
                }}
            />
        </Tabs>
    )
}

export default Tabslayout;