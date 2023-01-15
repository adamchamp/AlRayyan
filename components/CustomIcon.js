import * as React from 'react';
import { useFonts } from 'expo-font';
import {View, Text, StyleSheet} from 'react-native';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

const Icon = createIconSetFromIcoMoon(
		require('../assets/icomoon/selection.json'),
		'IcoMoon',
		'icomoon.ttf'
		);

export default function CustomIcon(props)
{
	const [fontsLoaded] = useFonts({
		IcoMoon: require('../assets/icomoon/icomoon.ttf')
	});

	if (!fontsLoaded)
	{
		return null;
	}


	return (
			<View>
				<Icon name={props.name} size={props.size} color="white" />
			</View>
			);
};

const styles = StyleSheet.create({});

