import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomTabNavigator from './navigations/BottomTabNavigator';
import {ThemeContext} from './contexts/ThemeContext';
import {useState} from 'react';


export default function App()
{
	const [theme, setTheme] = useState({mode: "light"});

	const updateTheme = (newTheme) => {
		let mode;
		if (!newTheme)
		{
			mode = theme.mode === "dark" ? "light" : "dark";
			newTheme = {mode};
		}

		setTheme(newTheme);
	}


	return (
			<ThemeContext.Provider value={{theme, updateTheme}}>
				<BottomTabNavigator/>
			</ThemeContext.Provider>

			);
};
