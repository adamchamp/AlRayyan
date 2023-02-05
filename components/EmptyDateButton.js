import React from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';



export const EmptyDateButton = () => {
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];
	return (
			<View>
				<View  style={styles.dateButton}>
				</View>
			</View>
			);
}


const styles = StyleSheet.create({
	dateButton: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		width: '90%',
		aspectRatio: 1 / 1,
		borderWidth: 0,
		borderRadius: 15
	},
	dateButtonText: {
		fontSize: 17,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	}
});
