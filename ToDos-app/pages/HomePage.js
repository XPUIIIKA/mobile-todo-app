import { gStyles } from "../styles/gStyles";
import { Text, View } from "react-native";

export function HomePage(){
	return(
		<View style={gStyles.pageBody}>
			<View style = {gStyles.textBlock}>
				<Text style = {gStyles.titleText}>Hello</Text>
			</View>				
			<View style = {gStyles.textBlock}>
				<Text style = {gStyles.text}>This app your good friend in planning something big</Text>
			</View>
			<View style = {gStyles.btnBlock}>
				<Text style = {gStyles.text}>Add new todo</Text>
			</View>
			<View style = {gStyles.btnBlock}>
				<Text style = {gStyles.text}>Search todo</Text>
			</View>
		</View>
	);
}