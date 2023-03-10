import React from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';


export const PrayerTimeOverlay = ({visible, onPress}) => {
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];
	return (
			<View>

			</View>
			);
};


const styles = StyleSheet.create({
	container: {
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

