import { ScrollView, StyleSheet, Text } from "react-native";
import { ToDo } from "./toDo/ToDo";

export function ToDoList({todos, fetchTodos}){
	if(!todos.length){
		return(<Text style={{marginTop: 10}}>Not found</Text>);
	}
	return(
		<ScrollView style ={styles.todoList}>
			{todos.map(todo => <ToDo key={todo.id} todo={todo} fetchTodos={fetchTodos}> </ToDo>)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	todoList: {
		width: '95%',
		marginTop: 3,
		borderRadius: 15
	}
});