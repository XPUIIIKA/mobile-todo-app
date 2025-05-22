import { StyleSheet } from "react-native";

export const colors = {
	forBody: '#E6F7FD',
	forTextBlock: '#53c7ed',
	forRealTasks: '#53c7ed',
	forDeletedTasks: '#CD5C5C',
	forBtnBlock: '#00B7EB',
	forTitle: '#1A3E72',
	forText: '#1A3E72',
	forContentBlock: '#88d9f2',
	forCompleted: '#3bff58',
	forUncompleted: '#ff1c42',
	forButtons: '#3b83ff'
}

export const gStyles = StyleSheet.create({
	pageBody: {
		flex: 1,
		backgroundColor: colors.forBody,
		padding: 20,
		paddingTop: 30,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	contentBlock:{
		flex: 1,
		marginTop: 30,
		marginBottom: 30,
		backgroundColor: colors.forContentBlock,
		width: '90%',
		minHeight: 80,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	textBlock:{
		flex: 1,
		marginTop: 30,
		maxHeight: 50,
		width: '70%',
		borderRadius: 15,
		backgroundColor: colors.forTextBlock,
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnBlock:{
		marginTop: 30,
		width: '60%',
		height: 50,
		borderRadius: 15,
		backgroundColor: colors.forBtnBlock,
		alignItems: 'center',
		justifyContent: 'center'
	},
	titleText:{
		fontSize: 28,
		color: colors.forTitle
	},
	text: {
		fontSize: 17,
		textAlign: 'center',
		color: colors.forText
	},	
	littleText: {
		fontSize: 14,
		color: colors.forText
	},
});