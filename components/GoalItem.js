import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
	return (
		<TouchableOpacity
			onPress={props.onDelete.bind(this, props.id)}
			activeOpacity={0.8}
			style={styles.goalItem}
		>
			<View>
				<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	goalItem: {
		flex: 1,
		margin: 5,
		padding: 10,
		borderColor: "black",
		borderWidth: 2,
		borderRadius: 5,
		backgroundColor: "#ccc",
	},
});

export default GoalItem;
