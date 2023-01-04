import React from "react";
import {View, Image, StyleSheet, Text} from 'react-native';



export const EventCard = ({title, time, location, host}
) => {
	return (
			<View style={styles.EventsCardContainer}>
				<Image style = {styles.ImageEventsCard} source = {require('../assets/eventsImage.png')}/>
				<View style = {styles.textGroup}>
					<Text style = {styles.title}>{title}</Text>
					<View style = {styles.contentGroup}>
						<Text style = {styles.contentText}>{time}</Text>
						<Text style = {styles.contentText}>{location}</Text>
						<Text style = {styles.contentText}>{host}</Text>
					</View>
				</View>
			</View>
			);
}


const styles = StyleSheet.create({
	EventsCardContainer: {
		width: '100%',
		gap: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderRadius: 30,
		backgroundColor: '#3365a6',
		paddingRight: 20
	},
	textGroup: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingTop: 30,
		paddingBottom: 30

	},
	title: {
		color: '#ffffff',
		fontSize: 22,
		textAlign: 'center',
		whiteSpace: 'nowrap'
	},
	contentGroup: {
		gap: 20,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		paddingLeft: 20
	},
	contentText: {
		color: '#ffffff',
		fontSize: 13,
		whiteSpace: 'nowrap'

	},
	ImageEventsCard: {
		width: '50%',
		height: '100%',
		borderTopLeftRadius: 30,
		borderBottomLeftRadius: 30

	}
});

