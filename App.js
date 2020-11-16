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
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [goalList, setGoalList] = useState([]);

	const updateGoalList = (goalTitle) => {
		setGoalList((goalList) => [
			...goalList,
			{ id: (Math.random() * 1000).toString(), value: goalTitle },
		]);
		console.log(goalList);
	};

	return (
		<View style={styles.screen}>
			<GoalInput onPress={updateGoalList} />

			<FlatList
				keyExtractor={(item, index) => item.id}
				data={goalList}
				renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
});
