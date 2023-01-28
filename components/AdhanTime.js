import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';




export const AdhanTime = (props) => {
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	return (
			<View style={[{backgroundColor: props.color}, styles.container]}>
				<Text style={[{color: props.textColor}, styles.text]}>{props.time}</Text>
			</View>

			);
};



const styles = StyleSheet.create({
	container: {
		width: '100%',
		gap: '30',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		height: 44
	},

	text: {
		fontSize: 16,
		textAlign: 'center',
		whiteSpace: 'nowrap',
	}
});

