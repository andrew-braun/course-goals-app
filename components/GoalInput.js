import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button, Modal } from "react-native";

const GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState("");
	const { onPress, visible, cancelAddGoal } = props;

	const updateGoalInput = (textInput) => {
		setEnteredGoal(textInput);
	};

	const addGoal = () => {
		onPress(enteredGoal);
		setEnteredGoal("");
	};

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.itemInput}
					onChangeText={updateGoalInput}
					value={enteredGoal}
				/>
				<View style={styles.inputButtons}>
					<View style={styles.button}>
						<Button title="CANCEL" color="orange" onPress={cancelAddGoal} />
					</View>
					<View style={styles.button}>
						<Button title="ADD" onPress={addGoal} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	itemInput: {
		borderBottomColor: "black",
		borderBottomWidth: 1,
		marginBottom: 1,
		padding: 5,
		width: "70%",
	},
	inputButtons: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "60%",
		padding: 10,
	},
	button: {
		width: "45%",
	},
});

export default GoalInput;
