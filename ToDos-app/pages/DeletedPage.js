import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ToDoList } from "../components/ToDoList";
import { gStyles } from "../styles/gStyles";

export function DeletedPage(){
	const [todos, setTodos] = useState([]);

	useEffect(() =>{
		fetch("http://localhost:3000/tasks?isDeleted=true") 
		.then(res => res.json())
		.then(todos => setTodos(todos))
	}, []);

	return(
		<View style={gStyles.pageBody}>
			<View style={gStyles.textBlock}>
				<Text style={gStyles.titleText}>Deleted todos page</Text>
			</View>
			<View style={gStyles.contentBlock}>
				{
					todos? <ToDoList todos={todos}/> : <Text>Not found</Text>
				}
			</View>
		</View>
	);		
}