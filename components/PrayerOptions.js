import {ThemeContext} from '../contexts/ThemeContext';
import {PrayerSetting} from '../components/PrayerSetting'
import {colors} from '../config/theme';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const PrayerOptions = ({prayer}) => {
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];
	let i = 'Fajr'

	return (
			<View>
			    <Text style={[{color: activeColors.white, fontSize: 20}]}>{prayer}</Text>
			    <PrayerSetting name = 'Fajr'/>


			</View>
			);
}

const styles = StyleSheet.create({
	container: {
		width: '80%',
		gap: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'stretch',
		paddingTop: 30,
		paddingBottom: 3,
		paddingLeft: 30,
		paddingRight: 30,
		borderRadius: 30,
		marginTop: 10,
		marginBottom: 10
	}

});