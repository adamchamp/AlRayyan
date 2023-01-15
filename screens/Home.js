import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../config/theme';
import CustomIcon from '../components/CustomIcon.js';

const Home = () => {
	const theme = {mode: "light"};
	let activeColors = colors[theme.mode];

	return (
			<View
				style={{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: activeColors.white
							}}>
				<Text>Home!</Text>

			</View>
			);
};

export default Home;

const styles = StyleSheet.create({});
