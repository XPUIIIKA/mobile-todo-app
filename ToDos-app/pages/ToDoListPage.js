import { Text, View } from "react-native";
import { gStyles } from "../styles/gStyles";
import { StatusBar } from "../components/StatusBar";
import { useEffect, useState } from "react";
import { ToDoList } from "../components/ToDoList";

export function ToDoListPage(){
	const [status, setStatus] = useState("all");
	const [todos, setTodos] = useState([]);

	useEffect(() =>{
		if (status === "all"){
			fetch("http://localhost:3000/tasks?isDeleted=false")
			.then(res => res.json())
			.then(todos => setTodos(todos))
		}
		else{
			fetch(`http://localhost:3000/tasks?isDeleted=false&status=${status}`)
			.then(res => res.json())
			.then(todos => setTodos(todos))
		}
	}, [status]);

	return(
		<View style={gStyles.pageBody}>
			<View style={gStyles.textBlock}>
				<Text style={gStyles.titleText}>Todo list page</Text>
			</View>
			<View style={gStyles.contentBlock}>
				<StatusBar setStatus={setStatus}/>
				{
					todos.length? <ToDoList todos={todos}/> : <Text>Not found</Text>
				}
			</View>
		</View>
	);
}