import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ToDoList } from "../components/ToDoList";
import { gStyles } from "../styles/gStyles";
import { endpoints, url } from "../gData";

export function DeletedPage(){
	const [todos, setTodos] = useState([]);

	useEffect(() =>{
		fetch(`${url}${endpoints.tasks}?isDeleted=true`) 
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
					<ToDoList todos={todos}/>
				}
			</View>
		</View>
	);		
}