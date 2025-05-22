import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { StatusIndicator } from "./StatusIndicator";
import { colors, gStyles } from "../../styles/gStyles";

export function ToDo({todo}){
	return(
		<View style={[styles.element, todo.isDeleted? styles.elementIsDelete : styles.elementIsReal]}>
			<View style={styles.titleBlock}>
				<Text>{todo.title}</Text>
				<StatusIndicator status={todo.status}/>
			</View>
			<Text style={gStyles.littleText}>{todo.description}</Text>
			<View>
				<View style={styles.titleBlock}>
					<Pressable style={styles.button}>
						<Text>Change</Text>
					</Pressable>
					<Pressable style={styles.button}>
						<Text>{todo.isDeleted === true ? "Return": "Delete"}</Text>
					</Pressable>
					<Pressable style={[styles.button, {width: 102, alignItems: "center"}]}>
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
	button:{
		marginLeft: 10,
		marginRight: 10,
		padding: 10,
		borderRadius: 15,
		backgroundColor: colors.forButtons
	}
});