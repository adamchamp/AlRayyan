import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// import Announcement from './Announcement';
import {colors} from '../config/theme';
import {LogoHeader} from '../components/LogoHeader';
import {EventCard} from '../components/EventCard';
import {AnnouncementCard} from '../components/AnnouncementCard';


const Stack = createStackNavigator();

function Events(
{ navigation }) {
	return (
			<View>
				<LogoHeader/>
				<Button
					title="Go to Announcement"
					onPress={() => navigation.navigate('Announcement')}
					/>

				<EventCard title={"Events"} time={"10:00 PM"} location={"Mississauga"} host={"By Malik Samouh"}/>

				<EventCard title={"Events"} time={"10:00 PM"} location={"Mississauga"} host={"By Malik Samouh"}/>

				<EventCard title={"Events"} time={"10:00 PM"} location={"Mississauga"} host={"By Malik Samouh"}/>
			</View>
			);
}

function Announcement(
{ navigation }) {
	return (
			<View>
				<LogoHeader/>
				<Button
					title="Go to Event"
					onPress={() => navigation.navigate('Events')}
					/>
				<AnnouncementCard title={"Announcement Number 1"} description={"There will be a meeting at the following location: Adress"} />
				<AnnouncementCard title={"Announcement Number 2"} description={"There will be a meeting at the following location: Adress"} />
				<AnnouncementCard title={"Announcement Number 3"} description={"There will be a meeting at the following location: Adress"} />

			</View>
			);
}

export default function App()
{
	return (
			<Stack.Navigator>
				<Stack.Screen name="Events" component={Events} />
				<Stack.Screen name="Announcement" component={Announcement} />
			</Stack.Navigator>
			);
}

const styles = StyleSheet.create({
	container:
			{
				marginTop: 10,
				padding: 10
			}

});
