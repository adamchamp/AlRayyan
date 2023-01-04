import React from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors} from '../config/theme';


export const DateButton = ({date}) => {
	const theme = {mode: "light"};
	let activeColors = colors[theme.mode];

	return (
			<TouchableOpacity  style={[{backgroundColor: activeColors.primary}, styles.dateButton]}>
				<Text style={[{color: activeColors.white}, styles.dateButtonText]}>{date}</Text>
			</TouchableOpacity>
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
