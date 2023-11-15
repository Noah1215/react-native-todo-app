import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import Fallback from "../component/Fallback";

// const dummyData = [
//   {
//     id: "01",
//     title: "Watch movie",
//   },
//   {
//     id: "02",
//     title: "C/C++ Tutoring",
//   },
// ];

const TodoScreen = () => {
  //Init local states
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);
  //Handle Add Todo
  const handleAddTodo = () => {
    //structure of a single toto item
    // {
    //     id:
    //     title:
    // }
    if (todo === "") {
      return;
    }

    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  //Handle Delete Todo
  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  //Handle Edit Todo
  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  //Handle Update Todo
  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }

      return item;
    });

    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo("");
  };

  //Render Todo
  const renderTodo = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#445E93",
          borderRadius: 6,
          paddingHorizontal: 16,
          paddingVertical: 4,
          marginBottom: 6,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
          elevation: 1,
        }}
      >
        <Text
          style={{ color: "#FFF", fontSize: 16, fontWeight: "800", flex: 1 }}
        >
          {item.title}
        </Text>
        <IconButton
          icon="pencil"
          iconColor="#FFF"
          onPress={() => handleEditTodo(item)}
        />
        <IconButton
          icon="trash-can"
          iconColor="#FFF"
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    );
  };
  return (
    <View style={{ marginHorizontal: 16 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 6,
          marginTop: 30,
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}
        placeholder="Add a Task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      ></TextInput>

      {editedTodo ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#276FBF",
            borderRadius: 6,
            paddingVertical: 12,
            marginVertical: 24,
            alignItems: "center",
          }}
          onPress={() => handleUpdateTodo()}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "#276FBF",
            borderRadius: 6,
            paddingVertical: 12,
            marginVertical: 24,
            alignItems: "center",
          }}
          onPress={() => handleAddTodo()}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
      )}

      {/* Render Todo List */}
      <FlatList data={todoList} renderItem={renderTodo} />
      {todoList.length === 0 && <Fallback />}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
