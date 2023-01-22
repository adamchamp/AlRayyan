import React from "react";
import {View, Image, StyleSheet, Text} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';


export const AnnouncementCard = ({title, description}) => {
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	return (
			<View style={[{backgroundColor: activeColors.primary}, styles.AnnouncementCardContainer]}>
				<Image style={styles.announcementIcon} source = {require('../assets/announcementIcon.png')}/>
				<View style={styles.textGroup}>
					<Text style={[{color: activeColors.white}, styles.title]}>{title}</Text>
					<Text style={[{color: activeColors.white}, styles.description]}>{description}</Text>
				</View>
			</View>
			);
};



const styles = StyleSheet.create({
	AnnouncementCardContainer: {
		display: 'flex',
		flexDirection: 'row',
		width: '94%',
		gap: '30',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 20,
		paddingRight: 30,
		paddingLeft: 30,
		borderRadius: 30,
		margin: 12
	},

	announcementIcon: {
		width: 40,
		height: 35.25,
		margin: 10

	},

	textGroup: {
		display: 'flex',
		flexDirection: 'column',
		gap: 5,
		justifyContent: 'center',
		alignItems: 'center'

	},

	title: {
		alignSelf: 'flex-start',
		fontSize: 22,
		textAlign: 'center',
		whiteSpace: 'nowrap'

	},

	description: {
		fontSize: 13,
		textAlign: 'center',
		whiteSpace: 'nowrap'

	}
});
