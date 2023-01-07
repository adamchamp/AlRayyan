import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import DonateScreen from './screens/DonateScreen';
import SettingsScreen from './screens/SettingsScreen';
import CalendarScreen from './screens/CalendarScreen';

//Screen names
const homeName = "Home";
const eventsName = "Events";
const donateName = "Donate";
const settingsName = "Settings";
const CalendarName = "Calendar";
