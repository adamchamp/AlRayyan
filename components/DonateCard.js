import React from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

import {colors} from '../config/theme';


export const DonateCard = ({title, hadith, translation}) => {
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	return (
			<View style={[{backgroundColor: activeColors.primary}, styles.donationsCardContainer]}>
				<Text style={[{color: activeColors.white}, styles.title]}>{title}</Text>
				<View style = {styles.textContainer}>
					<Text style={[{color: activeColors.white}, styles.contentText]}>{hadith}</Text>
					<Text style={[{color: activeColors.white}, styles.contentText]}>{translation}</Text>
				</View>

				<TouchableOpacity  style={[{backgroundColor: activeColors.white}, styles.donationButton]}>
					<Text style={[{color: activeColors.primary}, styles.donationButtonText]}>Donate</Text>
				</TouchableOpacity>

			</View>
			);
}


const styles = StyleSheet.create({
	donationsCardContainer: {
		width: '100%',
		gap: 20,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
		paddingTop: 30,
		paddingBottom: 30,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 30
	},
	contentText: {
		fontSize: 17,
		textAlign: 'center',
		whiteSpace: 'nowrap'
	},
	title: {
		fontSize: 28,
		textAlign: 'center'

	},
	textContainer: {
		gap: 10,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'

	},
	donationButton: {
		gap: 0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignSelf: 'center',
		alignItems: 'center',
		paddingTop: 20,
		paddingRight: 65,
		paddingBottom: 19,
		paddingLeft: 65,
		borderWidth: 0,
		borderRadius: 30,
		boxSizing: 'content-box',
		overflow: 'hidden',
	},
	donationButtonText: {
		fontSize: 16,
		textAlign: 'center'
	}
});


