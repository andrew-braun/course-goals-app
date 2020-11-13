import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Button,
	Text,
	ScrollView,
	FlatList,
} from "react-native";

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState("");
	const [goalList, setGoalList] = useState([]);

	const updateGoalInput = (textInput) => {
		setEnteredGoal(textInput);
	};

	const updateGoalList = () => {
		setGoalList((goalList) => [...goalList, enteredGoal]);
		console.log(goalList);
	};

	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.itemInput}
					onChangeText={updateGoalInput}
					value={enteredGoal}
				/>
				<Button title="ADD" onPress={updateGoalList} />
			</View>
			<ScrollView>
				{goalList.map((goal, index) => (
					<View style={styles.goalItem} key={index}>
						<Text>{goal}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	itemInput: {
		borderBottomColor: "black",
		borderBottomWidth: 1,
		marginBottom: 5,
		padding: 5,
		width: "70%",
	},
	goalItem: {
		margin: 5,
		padding: 10,
		borderColor: "black",
		borderWidth: 2,
		borderRadius: 5,
		backgroundColor: "#ccc",
	},
});
