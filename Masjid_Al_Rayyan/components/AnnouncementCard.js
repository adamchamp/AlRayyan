import React from "react";
import {View, Image, StyleSheet, Text} from 'react-native';



export const AnnouncementCard = ({}) => {
	return (
			<View style={styles.AnnouncementCardContainer}>
				<Image style={styles.announcementIcon} source = {require('../assets/announcementIcon.png')}/>
				<View style={styles.textGroup}>
					<Text style={styles.title}>Title</Text>
					<Text style={styles.description}>Announcment Description</Text>
				</View>
			</View>
			);
}



const styles = StyleSheet.create({
	AnnouncementCardContainer: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		gap: 30,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 20,
		paddingRight: 30,
		paddingLeft: 30,
		borderRadius: 30,
		backgroundColor: '#3365a6'
	},

	announcementIcon: {
		width: 40,
		height: 35.25

	},

	textGroup: {
		gap: 5,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'

	},

	title: {
		alignSelf: 'flex-start',
		color: '#ffffff',
		fontSize: 22,
		textAlign: 'center',
		whiteSpace: 'nowrap'

	},

	description: {
		color: '#ffffff',
		fontSize: 13,
		textAlign: 'center',
		whiteSpace: 'nowrap'

	}
});

