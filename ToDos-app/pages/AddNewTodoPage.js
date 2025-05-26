import { Pressable, StyleSheet, View } from "react-native";
import { colors, gStyles } from "../styles/gStyles";
import { Text, TextInput } from "react-native-web";
import { useState } from "react";

export function AddNewTodoPage({navigation}){
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	function maxId(todos){
		if(!todos.length) return 0
		const ids = todos.map(todo => todo.id)
		return Math.max(...ids);
	}

	async function newId(){
		const id = await fetch('http://localhost:3000/tasks')
		.then(response => response.json())
		.then(todos => maxId(todos) + 1)
		return id
	}

	function goBackBtn(){
		navigation.navigate('Main');
	}

	function clearBtnHandler(){
		setTitle('')
		setDescription('')
	}	

	async function addBtnHandler(title, description){
		const newTodo = {
			id: String(await newId()),
			title,
			description,
			status: "uncompleted",
			isDeleted: false,
			createdAt: new Date().toISOString()
		}
		if (!title) return

		fetch('http://localhost:3000/tasks', {
			method: "POST",
			body: JSON.stringify(newTodo)
		})

	}

	return(
		<View style={gStyles.pageBody}>

			<View style = {gStyles.textBlock}>
				<Text style = {gStyles.titleText}>New todo</Text>
			</View>	
			<View style={styles.div}>
				<TextInput
				style={gStyles.input}
				value={title}
				onChangeText={setTitle}
				placeholder="Enter title:"
				/>				
				<TextInput
				multiline={true}
				numberOfLines={4}
				style={styles.bigInput}
				value={description}
				onChangeText={setDescription}
				placeholder="Enter description:"
				/>
				<View style={styles.divBtn}>
					<Pressable style={gStyles.button} onPress={clearBtnHandler}>
						<Text>Clear</Text>
					</Pressable>
					<Pressable style={[gStyles.button, styles.btnPosition]} onPress={() => addBtnHandler(title, description)}>
						<Text>Add</Text>
					</Pressable>
				</View>
			</View>

			<Pressable style={[gStyles.goBackBtn, styles.btnPosition]} onPress={goBackBtn}>
				<Text style={{fontSize: 20}}>Go back</Text>
			</Pressable>
		</View>

	);
}

const styles = StyleSheet.create({
	div:{
		padding: 10,
		marginTop: 30,
		marginBottom: 30,
		backgroundColor: colors.forContentBlock,
		width: '90%',
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	bigInput:{
		width: "80%",
		minHeight: 180,
		maxHeight: 180,
		margenTop: 10,
		marginBottom: 10,
		fontSize: 18,
		borderWidth: 1,
		borderRadius: 15,
		textAlignVertical: 'top',
		padding: 8,
		color: colors.forText
	},
	divBtn:{
		flex: 1,
		flexDirection: 'row',
		width: '100%'
	},
	btnPosition:{
		marginLeft: 15
	}
});