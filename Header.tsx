import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Header({ user }: { user: { name: string; avatar: string } }) {
    return (
        <View style={styles.header}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <View>
                <Text style={styles.greeting}>Chào ngày mới</Text>
                <Text style={styles.name}>{user.name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row", // Căn theo chiều ngang
        alignItems: "center", // Căn giữa theo trục dọc
        width: "100%", // Chiếm toàn bộ chiều rộng
        paddingHorizontal: 20, // Canh lề trái phải
        marginBottom: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25, // Bo tròn
        marginRight: 10, // Cách chữ một khoảng
    },
    greeting: {
        fontSize: 14,
        color: "gray", // Chữ xám
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
