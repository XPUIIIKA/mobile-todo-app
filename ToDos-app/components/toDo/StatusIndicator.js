import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/gStyles";

export function StatusIndicator({status}){
	return(
		<View style={styles.div}>
			<Text style={{opacity: 0.5}}>{status}</Text>
			<View style={[styles.indicator, styles[status]]}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	div:{
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 'auto',
		width: 82
	},
	indicator:{
		marginTop:5,
		width: 16,
		height: 16,
		borderRadius: 8
	},
	completed:{
		backgroundColor: colors.forCompleted
	},
	uncompleted:{
		backgroundColor: colors.forUncompleted
	}
});