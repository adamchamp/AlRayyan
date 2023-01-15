import React from "react";
import {View, StyleSheet, Text} from 'react-native';

import {colors} from '../config/theme';



const theme = {mode: "light"};
let activeColors = colors[theme.mode];

export const AdhanTime = ({time}) => {


	return (
			<View style={styles.Container}>
				<Text style={styles.text}>{time}</Text>
			</View>

			);
};



const styles = StyleSheet.create({
	Container: {
		backgroundColor: activeColors.primary,
		width: '100%',
		gap: '30',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20
	},

	text: {
		fontSize: 16,
		textAlign: 'center',
		whiteSpace: 'nowrap',
		color: activeColors.white
	}
});
