import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{LogoHeader} from './components/LogoHeader';
import{AnnouncementCard} from './components/AnnouncementCard';
import{DonateCard} from './components/DonateCard';
import{EventCard} from './components/EventCard';



export default function App()
{
	return (
			<View style={styles.container}>

				<Text>Text here</Text>
				<DonateCard title="Title" hadith="hadith" translation="translation"/>



				<StatusBar style="auto" />
			</View>
			);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
