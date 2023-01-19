import React from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';


export const DateButton = ({date}) => {
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	return (
			<View>
				<TouchableOpacity  style={[{backgroundColor: activeColors.primary}, styles.dateButton]}>
					<Text style={[{color: activeColors.white}, styles.dateButtonText]}>{date}</Text>
				</TouchableOpacity>
			</View>
			);
}


const styles = StyleSheet.create({
	dateButton: {
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		width: 45,
		height: 45,
		borderWidth: 0,
		borderRadius: 15,
	},
	dateButtonText: {
		fontSize: 17,
		textAlign: 'center'
	}
});
