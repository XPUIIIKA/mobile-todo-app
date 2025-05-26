import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { gStyles } from "../styles/gStyles";
import { useState } from "react";
import { ToDoList } from "../components/ToDoList";
import { endpoints, url } from "../gData";

export function SearchTodoPage({navigation}){
	const [todos, setTodos] = useState([]);
	const [title, setTitle] = useState("");

	function goBackBtn(){
		navigation.navigate('Main');
	}

	function searchBtnHandler(title){
		if(!title) return
		fetch(`${url}${endpoints.tasks}`)
		.then(res => res.json())
		.then(data => data.filter(todo => todo.title.toLowerCase().includes(title.toLowerCase())) )
		.then(data => setTodos(data));
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
				<Pressable style={gStyles.button} onPress={() => searchBtnHandler(title)}>
					<Text>Search</Text>
				</Pressable>
			</View>
			{
				<ToDoList todos={todos}/>
			}
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