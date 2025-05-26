import { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { ToDoList } from "../components/ToDoList";
import { gStyles } from "../styles/gStyles";
import { endpoints, url } from "../gData";
import { useFocusEffect } from "@react-navigation/native";

export function DeletedPage(){
	const [todos, setTodos] = useState([]);

	function fetchTodos(){
		fetch(`${url}${endpoints.tasks}?isDeleted=true`) 
		.then(res => res.json())
		.then(todos => setTodos(todos))
	}

	useFocusEffect(
		useCallback(() => {
		  fetchTodos();
		}, [])
	  );

	return(
		<View style={gStyles.pageBody}>
			<View style={gStyles.textBlock}>
				<Text style={gStyles.titleText}>Deleted todos page</Text>
			</View>
			<View style={gStyles.contentBlock}>
				{
					<ToDoList todos={todos} fetchTodos={fetchTodos}/>
				}
			</View>
		</View>
	);		
}