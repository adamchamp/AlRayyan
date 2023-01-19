import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {colors} from '../config/theme';
import {LogoHeader} from '../components/LogoHeader';
import {PrayerTable} from '../components/PrayerTable';

const Home = () => {
	const theme = {mode: "light"};
	let activeColors = colors[theme.mode];
	return (
			<View>
				<LogoHeader/>
				<PrayerTable/>

			</View>
			);
};
export default Home;
const styles = StyleSheet.create({
	image:
			{
				justifyContent: 'center',
				height: '60%',
				width: '100%'
			}
});
