import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { gStyles } from "../styles/gStyles";
import { useState } from "react";
import { ToDoList } from "../components/ToDoList";

export function SearchTodoPage({navigation}){
	const [todos, setTodos] = useState([]);
	const [title, setTitle] = useState("");

	function goBackBtn(){
		navigation.navigate('Main');
	}
	return(
	<View style={gStyles.pageBody}>

		<View style = {gStyles.textBlock}>
			<Text style = {gStyles.titleText}>Search todo</Text>
		</View>	

		<View style={gStyles.contentBlock}>
			<View style={styles.inputDiv}>
				<TextInput
				value={title}
				style={gStyles.input}
				placeholder="Enter title:"
				onChangeText={setTitle}
				/>
				<Pressable style={gStyles.button}>
					<Text>Search</Text>
				</Pressable>
			</View>
			<View style={{marginTop: 10}}>
			{
				todos.length? <ToDoList todos={todos}/> : <Text>Not found</Text>
			}
			</View>
		</View>

		<Pressable style={gStyles.goBackBtn} onPress={goBackBtn}>
			<Text style={{fontSize: 20}}>Go back</Text>
		</Pressable>
	</View>
	);
}

const styles = StyleSheet.create({
	inputDiv: {
		alignItems: 'center',
		marginTop: 10
	}
});