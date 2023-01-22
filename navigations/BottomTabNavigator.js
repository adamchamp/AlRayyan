import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreenNavigator from './HomeScreenNavigator';

import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';
import {ROUTES} from '../config';
import {Home, Events, Donate, Settings} from '../screens';
import CustomIcon from '../components/CustomIcon.js';
//import CustomTabBarButton from '../components/CustomTabBarButton';
//import CustomTabBar from '../components/CustomTabBar';


const Tab = createBottomTabNavigator();


function BottomTabNavigator()
{
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	return (
			<NavigationContainer>
				<Tab.Navigator

					initialRouteName={ROUTES.HOME}

					screenOptions={({ route }) => ({

								headerShown: false,
								tabBarShowLabel: false,
								tabBarInactiveTintColor: 'white',
								tabBarStyle: styles.tabBarStyle,
								tabBarActiveTintColor: 'white',
								tabBarActiveBackgroundColor: 'gold',

								tabBarIcon: ({color, size, focused}) => {
									let iconName;

									if (route.name === ROUTES.HOMESCREENNAVIGATOR)
									{
										iconName = focused ? 'homeIcon' : 'homeIcon';
									}
									else if (route.name === ROUTES.SETTINGS)
									{
										iconName = focused ? 'settingsIcon' : 'settingsIcon';
									}
									else if (route.name === ROUTES.DONATE)
									{
										iconName = focused ? 'donateIcon' : 'donateIcon';
									}
									else if (route.name === ROUTES.EVENTS)
									{
										iconName = focused ? 'eventsIcon' : 'eventsIcon';
									}

									return <CustomIcon name={iconName} size={40} color={color}/>;
								}
						})}
				>


				<Tab.Screen name={ROUTES.HOMESCREENNAVIGATOR} component={HomeScreenNavigator} />


				<Tab.Screen name={ROUTES.EVENTS} component={Events} />


				<Tab.Screen name={ROUTES.DONATE} component={Donate} />


				<Tab.Screen name={ROUTES.SETTINGS} component={Settings} />


			</Tab.Navigator>
			</NavigationContainer>
			);
}

export default BottomTabNavigator;


const styles = StyleSheet.create({
	tabBarStyle: {
		position: 'absolute',
		backgroundColor: "black",
		borderTopWidth: 0,
		height: '10%'
	}
});

