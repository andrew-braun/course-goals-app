import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

const GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState("");
	const { onPress } = props;

	const updateGoalInput = (textInput) => {
		setEnteredGoal(textInput);
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholder="Course Goal"
				style={styles.itemInput}
				onChangeText={updateGoalInput}
				value={enteredGoal}
			/>
			<Button title="ADD" onPress={onPress.bind(this, enteredGoal)} />
		</View>
	);
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
