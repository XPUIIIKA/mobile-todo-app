import { gStyles } from "../styles/gStyles";
import { Pressable, Text, View } from "react-native";

export function HomePage({navigation}){

	function addBtnHandler(){
		navigation.navigate('AddTodo');
	}

	function searchBtnHandler(){
		navigation.navigate('SearchTodo')
	}

	return(
		<View style={gStyles.pageBody}>
			<View style = {gStyles.textBlock}>
				<Text style = {gStyles.titleText}>Hello</Text>
			</View>				
			<View style = {gStyles.textBlock}>
				<Text style = {gStyles.text}>This app your good friend in planning something big</Text>
			</View>
			<Pressable style = {gStyles.btnBlock} onPress={addBtnHandler}>
				<Text style = {gStyles.text}>Add new todo</Text>
			</Pressable>
			<Pressable style = {gStyles.btnBlock} onPress={searchBtnHandler}>
				<Text style = {gStyles.text}>Search todo</Text>
			</Pressable>
		</View>
	);
}