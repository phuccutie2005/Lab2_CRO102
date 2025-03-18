import React, { useState, useCallback } from "react";
import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

const colors = ["white", "gray", "yellow", "red", "blue", "orange"];

export default function Main() {
  // State lưu thông tin người dùng
  const [user, setUser] = useState({
    name: "Chưa có tên",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  });

  // State lưu thông tin nhập vào TextInput (không làm re-render)
  const [inputName, setInputName] = useState("");
  const [inputAvatar, setInputAvatar] = useState("");

  // State lưu màu nền footer
  const [footerColor, setFooterColor] = useState(colors[0]);

  // State lưu thời gian cập nhật
  const [lastTimeUpdate, setLastTimeUpdate] = useState("");

  // Hàm cập nhật thông tin user
  const onUpdateInfo = useCallback(() => {
    if (!inputName.trim() || !inputAvatar.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    setUser({ name: inputName, avatar: inputAvatar });

    // Cập nhật thời gian
    const currentDate = new Date();
    const dateString = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    const timeString = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    setLastTimeUpdate(`${timeString} - ${dateString}`);
  }, [inputName, inputAvatar]);

  // Hàm đổi màu footer ngẫu nhiên
  const onClickChangeBgFooter = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setFooterColor(colors[randomIndex]);
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header user={user} />

      {/* Input nhập thông tin */}
      <TextInput
        style={styles.input}
        placeholder="Nhập tên mới"
        value={inputName}
        onChangeText={setInputName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dán địa chỉ avatar mới"
        value={inputAvatar}
        onChangeText={setInputAvatar}
      />

      {/* Nút bấm */}
      <View style={styles.buttonContainer}>
        <Button title="CẬP NHẬT THÔNG TIN" onPress={onUpdateInfo} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="ĐỔI MÀU FOOTER" onPress={onClickChangeBgFooter} />
      </View>

      {/* Footer */}
      <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
    </View>
  );
}

// Style cho ứng dụng
const styles = StyleSheet.create({
  container: {
    flex: 1, // Đảm bảo layout full màn hình
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: "80%", // Để nút đẹp hơn
    marginBottom: 10, // Tạo khoảng cách giữa các nút
  },
});
