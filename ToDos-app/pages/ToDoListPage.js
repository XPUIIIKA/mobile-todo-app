import { Text, View } from "react-native";
import { gStyles } from "../styles/gStyles";
import { StatusBar } from "../components/StatusBar";
import { useCallback, useState } from "react";
import { ToDoList } from "../components/ToDoList";
import { endpoints, url } from "../gData";
import { useFocusEffect } from "@react-navigation/native";

export function ToDoListPage(){
	const [status, setStatus] = useState("all");
	const [todos, setTodos] = useState([]);

	function fetchTodos(){
		if (status === "all"){
			fetch(`${url}${endpoints.tasks}?isDeleted=false`)
			.then(res => res.json())
			.then(todos => setTodos(todos))
		}
		else{
			fetch(`${url}${endpoints.tasks}?isDeleted=false&status=${status}`)
			.then(res => res.json())
			.then(todos => setTodos(todos))
		}
	}

	useFocusEffect(
		useCallback(() => {
		  fetchTodos();
		}, [status])
	  );

	return(
		<View style={gStyles.pageBody}>
			<View style={gStyles.textBlock}>
				<Text style={gStyles.titleText}>Todo list page</Text>
			</View>
			<View style={gStyles.contentBlock}>
				<StatusBar setStatus={setStatus}/>
				{
					<ToDoList todos={todos} fetchTodos={fetchTodos}/>
				}
			</View>
		</View>
	);
}