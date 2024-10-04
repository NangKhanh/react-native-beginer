import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { style } from "./style";

export default function Index() {
  const [count, setCount] = useState<number>(0);
  const [textInputValue, setTextInputValue] = useState<string>("");
  const [name, setName] = useState<string>("");


  return (
    <View style={style.container}>
      <Text style={style.h2}>Count: {count}</Text>
      <Text style={style.h2}>Name: {name}</Text>

      <View style={style.inputBox}>
        <TextInput
          style={style.input}
          placeholder="Looking for something?"
          value={textInputValue}
          onChangeText={(text) => setTextInputValue(text)} // Cập nhật giá trị của TextInput
        />
        <View style={style.submitButton}>
          <Button
            color={"snow"}
            onPress={() => setName(textInputValue)}
            title="SaveName"
          />
        </View>
      </View>

      <View style={style.button}>
        <Button
          color={"snow"}
          onPress={() => setCount(count + 1)}
          title="Increase count"
        />
      </View>
    </View>
  );
}
