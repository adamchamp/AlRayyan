import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../config/theme';

const Events = () => {
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
				<Text>Events!</Text>
			</View>
			);
};

export default Events;

const styles = StyleSheet.create({});
