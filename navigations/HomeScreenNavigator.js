import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {Home, Calendar} from '../screens';
import {ROUTES} from '../config';

const Stack = createStackNavigator();

function HomeScreenNavigator()
{
	console.log(Stack);
	return (
			<Stack.Navigator
				screenOptions={{
								headerShown: false
							}}
				initialRouteName={ROUTES.HOME}>
				<Stack.Screen name={ROUTES.HOME} component={Home} />
				<Stack.Screen name={ROUTES.CALENDAR} component={Calendar} />
			</Stack.Navigator>
			);
}

export default HomeScreenNavigator;
