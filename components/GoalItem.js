import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
	return (
		<View style={styles.goalItem}>
			<Text>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	goalItem: {
		margin: 5,
		padding: 10,
		borderColor: "black",
		borderWidth: 2,
		borderRadius: 5,
		backgroundColor: "#ccc",
	},
});

export default GoalItem;
