import { StyleSheet, View, Pressable, Text } from "react-native";
import { colors } from "../styles/gStyles";

export function StatusBar({setStatus}){
	const statuses = {
		all: "all",
		onlyCompleted: "completed",
		onlyUncompleted: "uncompleted"
	}
	return(
		<View style={styles.statusBar}>
			<Pressable style={styles.button} onPress={() => setStatus(statuses.all)}>
				<Text style={styles.buttonText}>All</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => setStatus(statuses.onlyCompleted)}>
				<Text style={styles.buttonText}>Completed</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => setStatus(statuses.onlyUncompleted)}>
				<Text style={styles.buttonText}>Uncompleted</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	statusBar:{
		flexDirection: 'row',
		height: 60,
		width: '100%',
		backgroundColor: colors.forBtnBlock,
		borderRadius: 15,
		overflow: 'hidden'
	},
	button: {
		flex: 1,
		backgroundColor: colors.forButtons,
		marginHorizontal: 2,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	  },
	buttonText:{
		color: colors.forText
	}
});    
