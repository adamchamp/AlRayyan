import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import DonateScreen from './screens/DonateScreen';
import SettingsScreen from './screens/SettingsScreen';
import CalendarScreen from './screens/CalendarScreen';

//Screen names
const homeName = "Home";
const eventsName = "Events";
const donateName = "Donate";
const settingsName = "Settings";
const CalendarName = "Calendar";

const Tab = createBottomTabNavigator();


function MainContainer()
{
	return (
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName={homeName}
					screenOptions={({ route }) => ({
								tabBarIcon: ({ focused, color, size }) => {
									let iconName;
									let rn = route.name;

									if (rn === homeName)
									{
										iconName = focused ? 'home' : 'home-outline';

									}
									else if (rn === eventsName)
									{
										iconName = focused ? 'list' : 'list-outline';

									}
									else if (rn === settingsName)
									{
										iconName = focused ? 'settings' : 'settings-outline';
									}

									// any component
									return <Ionicons name={iconName} size={size} color={color} />;
								},
						})}
				tabBarOptions={{
						activeTintColor: 'blue',
						inactiveTintColor: 'grey',
						labelStyle: {paddingBottom: 10, fontSize: 10},
						style: {padding: 50, height: 70}
					}}>

				<Tab.Screen name={homeName} component={HomeScreen} />
				<Tab.Screen name={eventsName} component={EventsScreen} />
				<Tab.Screen name={settingsName} component={SettingsScreen} />

			</Tab.Navigator>
			</NavigationContainer>

			);
}

export default MainContainer;
