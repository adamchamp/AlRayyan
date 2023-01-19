import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';




export const AdhanTime = ({time}) => {
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	return (
			<View style={[{backgroundColor: activeColors.primary}, styles.container]}>
				<Text style={[{color: activeColors.white}, styles.text]}>{time}</Text>
			</View>

			);
};



const styles = StyleSheet.create({
	container: {
		width: '100%',
		gap: '30',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20
	},

	text: {
		fontSize: 16,
		textAlign: 'center',
		whiteSpace: 'nowrap',
	}
});

