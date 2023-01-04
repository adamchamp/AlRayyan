import React from "react";
import {View, Image, StyleSheet, Text, Button, Alert} from 'react-native';


export const DonateCard = ({}) => {

	return (
			<View style = {styles.donationsCardContainer}>
				<Text style = {styles.title}>Title</Text>
				<View style = {styles.textContainer}>
					<Text style = {styles.contentText}>حديث عن الصدقة</Text>
					<Text style = {styles.contentText}>English translation</Text>
				</View>


				<Button title="Donate" onPress={() => Alert.alert('Simple Button pressed')} style = {styles.donationButton}/>
			</View>
			);
}


const styles = StyleSheet.create({
	DonationsCardContainer: {
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
		padding: 0,
		paddingTop: 20,
		paddingRight: 65,
		paddingBottom: 19,
		paddingLeft: 65,
		borderWidth: 0,
		borderRadius: 30,
		boxSizing: 'content-box',
		backgroundColor: '#ffffff',
		overflow: 'hidden',
		cursor: 'pointer'
	},
	donationsButtonText: {
		width: '100%',
		height: '21',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#3365a6',
		fontSize: 16,
		textAlign: 'center'

	}
});


