import React from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../config/theme';
import * as WebBrowser from 'expo-web-browser';
const donationsWebsiteURL = 'https://globalislamic.org/projects/general-donation/';


export const DonateCard = ({title, hadith, translation}) => {
	const theme = {mode: "light"};
	let activeColors = colors[theme.mode];

	return (
			<View style={[{backgroundColor: activeColors.primary}, styles.donationsCardContainer]}>
				<Text style={[{color: activeColors.white}, styles.title]}>{title}</Text>
				<View style = {styles.textContainer}>
					<Text style={[{color: activeColors.white}, styles.contentText, {marginBottom: 10}]}>{hadith}</Text>
					<Text style={[{color: activeColors.white}, styles.contentText]}>{translation}</Text>
				</View>

				<TouchableOpacity  style={[{backgroundColor: activeColors.white}, styles.donationButton]} onPress = {() => WebBrowser.openBrowserAsync(donationsWebsiteURL)}>
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
		borderRadius: 30,
		marginTop: 10,
		marginBottom: 10
	},
	contentText: {
		fontSize: 16,
		textAlign: 'center',
		whiteSpace: 'nowrap'
	},
	title: {
		fontSize: 27,
		textAlign: 'center'

	},
	textContainer: {
		gap: 15,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		marginBottom: 10


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
		overflow: 'hidden'
	},
	donationButtonText: {
		fontSize: 16,
		textAlign: 'center'
	}
});
