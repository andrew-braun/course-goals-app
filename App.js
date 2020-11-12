import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function App() {
	return (
		<View style={{ padding: 30 }}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<TextInput
					placeholder="Course Goal"
					style={{
						borderBottomColor: "black",
						borderBottomWidth: 1,
						marginBottom: 5,
						padding: 5,
						width: "70%",
					}}
				/>
				<Button title="ADD" style={{}} />
			</View>
			<View></View>
		</View>
	);
}

const styles = StyleSheet.create({});
