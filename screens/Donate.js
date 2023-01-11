import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../config/theme';

const Donate = () => {
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
				<Text>Donate!</Text>
			</View>
			);
};

export default Donate;

const styles = StyleSheet.create({});
