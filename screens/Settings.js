import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../config/theme';

const Settings = () => {
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
				<Text>Settings!</Text>
			</View>
			);
};

export default Settings;

const styles = StyleSheet.create({});
