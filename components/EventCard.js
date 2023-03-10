import React from "react";
import {View, Image, StyleSheet, Text} from 'react-native';

import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';



export const EventCard = ({title, time, location, host}) => {
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	return (
			<View style={[{backgroundColor: activeColors.primary}, styles.EventsCardContainer]}>
				<Image style = {styles.ImageEventsCard} source = {require('../assets/eventsImage.png')}/>
				<View style = {styles.textGroup}>
					<Text style={[{color: activeColors.white}, styles.title]}>{title}</Text>
					<View style = {styles.contentGroup}>
						<Text style={[{color: activeColors.white}, styles.contentText]}>{time}</Text>
						<Text style={[{color: activeColors.white}, styles.contentText]}>{location}</Text>
						<Text style={[{color: activeColors.white}, styles.contentText]}>{host}</Text>
					</View>
				</View>
			</View>
			);
}


const styles = StyleSheet.create({
	EventsCardContainer: {
		width: '94%',
		gap: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderRadius: 30,
		paddingRight: 20,
		margin: 12
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
