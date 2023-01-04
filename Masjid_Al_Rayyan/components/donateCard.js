import React from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';


export const DonateCard = ({title, hadith, translation}) => {

	return (
			<View style = {styles.donationsCardContainer}>
				<Text style = {styles.title}>{title}</Text>
				<View style = {styles.textContainer}>
					<Text style = {styles.contentText}>{hadith}</Text>
					<Text style = {styles.contentText}>{translation}</Text>
				</View>

				<TouchableOpacity  style = {styles.donationButton}>
					<Text style = {styles.donationButtonText}>Donate</Text>
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
		backgroundColor: '#3365a6'
	},
	contentText: {
		color: '#ffffff',
		fontSize: 17,
		textAlign: 'center',
		whiteSpace: 'nowrap'
	},
	title: {
		color: '#ffffff',
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
		backgroundColor: '#ffffff',
		overflow: 'hidden',
	},
	donationButtonText: {
		color: '#3365a6',
		fontSize: 16,
		textAlign: 'center'
	}
});


