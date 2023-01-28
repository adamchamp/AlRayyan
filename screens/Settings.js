import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../config/theme';
import {NotificationCol, PrayerCol} from '../components';
const Settings = () => {
	const theme = {mode: "light"};
	let activeColors = colors[theme.mode];
	return (
			<View style={[{backgroundColor: activeColors.background}, styles.container]}>

			</View>
			);
};
export default Settings;
const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
