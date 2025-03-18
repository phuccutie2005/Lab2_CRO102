import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer({ timeUpdate, backgroundColor }: { timeUpdate: string; backgroundColor: string }) {
    return (
        <View style={[styles.footer, { backgroundColor }]}>
            <Text style={styles.text}>Thời gian bạn cập nhật thông tin: {timeUpdate}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        paddingVertical: 10,
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#ddd",
    },
    text: {
        color: "black",
        fontSize: 14,
    },
});
