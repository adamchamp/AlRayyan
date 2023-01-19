import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';


const CustomTabBarButton = props => {
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

};
export default CustomTabBarButton;

const styles = StyleSheet.create({});
