import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {colors}
from '../config/theme';
import {LogoHeader}
from '../components/LogoHeader';

const Home = () => {
	const theme = {mode: "light"};
	let activeColors = colors[theme.mode];
	return (
			<View>
				<LogoHeader/>
				<Image style={styles.image} source ={require('../assets/asr.png')}/>



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
