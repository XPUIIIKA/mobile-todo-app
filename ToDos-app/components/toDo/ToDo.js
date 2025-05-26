import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { StatusIndicator } from "./StatusIndicator";
import { colors, gStyles } from "../../styles/gStyles";
import { useState } from "react";
import { endpoints, url } from "../../gData";

export function ToDo({todo, fetchTodos}){
	const [isChangeMode, setChangeMode] = useState(false);
	const [title, setTitle] = useState(todo.title);
	const [description, setDiscription] = useState(todo.description);

	function changeBtnHandler(){
		setChangeMode(!isChangeMode)
	}

	function saveBtnHandler(){
		fetch(`${url}${endpoints.tasks}/${todo.id}`,{
			method: 'PATCH',
			body: JSON.stringify({
				title,
				description
			})
		})
		.then(res => setChangeMode(false))
		.then(res => fetchTodos());
	}

	function deleteBtnHandler(){
		fetch(`${url}${endpoints.tasks}/${todo.id}`,{
			method: 'PATCH',
			body: JSON.stringify({
				isDeleted: !todo.isDeleted
			})
		})
		.then(res => fetchTodos())
	}

	function completedBtnHandler(){
		fetch(`${url}${endpoints.tasks}/${todo.id}`,{
			method: 'PATCH',
			body: JSON.stringify({
				status: todo.status === "completed" ? "uncompleted": "completed"
			})
		})
		.then(res => fetchTodos())
	}
	
	return(
		<View style={[styles.element, todo.isDeleted? styles.elementIsDelete : styles.elementIsReal]}>
			<View style={styles.titleBlock}>
				{
					isChangeMode
					? <TextInput style={gStyles.input}
						placeholder="Enter title:"
						value={title}
						onChangeText={setTitle}
						/>
					: <Text>{todo.title}</Text>
				}
				<StatusIndicator status={todo.status}/>
			</View>
			{
					isChangeMode
					? <TextInput style={gStyles.bigInput}
						multiline={true}
						numberOfLines={4}
						placeholder="Enter description:"
						value={description}
						onChangeText={setDiscription}/>
					: <Text style={gStyles.littleText}>{todo.description}</Text>
			}
			{
				isChangeMode
				? <Pressable style={[gStyles.button, {width: 'auto'}, styles.btnPosition]} onPress={saveBtnHandler}>
					 <Text>Save</Text>
				 </Pressable>
				: <></>
			}
			<View>
				<View style={styles.titleBlock}>
					<Pressable style={[gStyles.button, styles.btnPosition]} onPress={changeBtnHandler}>
						<Text>Change</Text>
					</Pressable>
					<Pressable style={[gStyles.button, styles.btnPosition]} onPress={deleteBtnHandler}>
						<Text>{todo.isDeleted === true ? "Return": "Delete"}</Text>
					</Pressable>
					<Pressable style={[gStyles.button, styles.btnPosition, {width: 102}]} onPress={completedBtnHandler}>
						<Text>{todo.status === "completed"? "Uncompleted": "Completed"}</Text>
					</Pressable>
				</View>
				<Text style={gStyles.littleText}>{todo.createdAt}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	element:{
		backgroundColor: colors.forTextBlock,
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 15,
		padding: 10
	},
	elementIsDelete:{
		backgroundColor: colors.forDeletedTasks,
	},
	elementIsReal:{
		backgroundColor: colors.forRealTasks,
	},
	titleBlock:{
		marginTop: 5,
		marginBottom: 5,
		flexDirection: 'row'
	},
	btnPosition:{
		marginLeft: 10,
		marginRight: 10,
	}
});