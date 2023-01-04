import React from "react";
import {View, Image, StyleSheet, Text} from 'react-native';



export const EventCard = ({}
) => {
	return (
			<View style={styles.EventsCardContainer}>
				<Image style = {styles.ImageEventsCard} source = {require('../assets/Eventsimage.png')}/>
				<View style = {styles.textGroup}>
					<Text style = {styles.title}>Title</Text>
					<View style = {styles.contentGroup}>
						<Text style = {styles.contentText}>Time of the event</Text>
						<Text style = {styles.contentText}>Location of the event</Text>
						<Text style = {styles.contentText}>Host for the event</Text>
					</View>
				</View>
			</View>
			);
}


const styles = StyleSheet.create({
	EventsCardContainer: {
		width: '100.1%',
		gap: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderRadius: 30,
		backgroundColor: '#3365a6'
	},
	textGroup: {
		height: 70,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start'

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
		alignItems: 'center'
	},
	contentText: {
		color: '#ffffff',
		fontSize: 13,
		textAlign: 'center',
		whiteSpace: 'nowrap'

	},
	ImageEventsCard: {
		width: '53.6%',
		alignSelf: 'stretch'
	}
});

