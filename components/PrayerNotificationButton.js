import React from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors} from '../config/theme';



export const PrayerNotificationButton = ({backgroundColor, iconColor}) => {
	const theme = {mode: "light"};
	let activeColors = colors[theme.mode];

	return (
			<TouchableOpacity  style={[{backgroundColor: backgroundColor}, styles.PrayerNotificationButton]}>
				<Image style = {styles.PrayerNotificationIcon} source = {require('../assets/eventsImage.png')}/>
			</TouchableOpacity>
			);
}


const styles = StyleSheet.create({
	PrayerNotificationButton: {
		paddingTop: 10,
		paddingRight: 18,
		paddingBottom: 10,
		paddingLeft: 18,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		borderWidth: 0,
		borderRadius: 30
	},
	PrayerNotificationIcon: {
		width: '50%',
		height: '100%',
		borderTopLeftRadius: 30,
		borderBottomLeftRadius: 30

	}
});

