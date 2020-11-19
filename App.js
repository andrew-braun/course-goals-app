import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [goalList, setGoalList] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const updateGoalList = (goalTitle) => {
		setGoalList((goalList) => [
			...goalList,
			{ id: Math.floor(Math.random() * 1000).toString(), value: goalTitle },
		]);
		console.log(goalList);
		setModalIsOpen(false);
	};

	const addGoal = () => {
		setModalIsOpen(true);
	};
	const deleteGoal = (goalId) => {
		setGoalList(goalList.filter((goal) => goal.id !== goalId));
	};

	const cancelAddGoal = () => {
		setModalIsOpen(false);
	};

	return (
		<View style={styles.screen}>
			<FlatList
				keyExtractor={(item) => item.id}
				data={goalList}
				style={styles.goalList}
				renderItem={(itemData) => (
					<GoalItem
						title={itemData.item.value}
						id={itemData.item.id}
						onDelete={deleteGoal}
					/>
				)}
			/>
			<View style={styles.addButton}>
				<Button title="Add New Goal" onPress={addGoal} />
			</View>
			<GoalInput
				onPress={updateGoalList}
				visible={modalIsOpen}
				cancelAddGoal={cancelAddGoal}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		paddingTop: 50,
		backgroundColor: "red",
	},
	goalList: {
		width: "80%",
	},
	addButton: {
		position: "absolute",
		bottom: 0,
		left: 0,
		padding: 20,
		width: "100%",
	},
});
