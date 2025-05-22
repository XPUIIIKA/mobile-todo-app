import { ScrollView, StyleSheet, View } from "react-native";
import { ToDo } from "./toDo/ToDo";

export function ToDoList({todos}){
	return(
		<ScrollView style ={styles.todoList}>
			{todos.map(todo => <ToDo key={todo.id} todo={todo}> </ToDo>)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	todoList: {
		width: '95%',
	}
});