import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../config/theme';

const Calendar = () => {
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
				<Text>Calendar!</Text>
			</View>
			);
};

export default Calendar;

const styles = StyleSheet.create({});

