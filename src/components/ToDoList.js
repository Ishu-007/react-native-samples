import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';




const ToDo = () => {
  // tasks state variable
  const [tasks, setTasks] = useState([]);

  // task input state variable
  const [taskInput, setTaskInput] = useState('');

  const addTaskItem = () => {
    //console.log('addTaskItem() is called');
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: taskInput }]);
      setTaskInput('');
    }
  };

  const removeTaskItem = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskItemContainer}>
      <Text style={styles.taskText}>{item.text}</Text>
      <TouchableOpacity onPress={() => removeTaskItem(item.id)}>
        <Image source={require('../assets/images/delete.png')} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.parentContainer}>
      <ImageBackground source={require('../assets/images/grad.jpeg')} style={styles.backgroundImage}>
        <Text style={styles.headerTaskStyle}>Today's tasks</Text>
        <FlatList
          data={tasks}
          renderItem={renderTaskItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />

        <View style={styles.inputContainer}>
          <TextInput
            value={taskInput}
            onChangeText={setTaskInput}
            style={styles.input}
            placeholder="Write a task here..."
          />
          <TouchableOpacity onPress={addTaskItem} >
            <Image source={require('../assets/images/add.png')} style={styles.addIcon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  headerTaskStyle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 20,

  },



  list: {
    flex: 1,
    marginTop: 20,
  },


  taskItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginHorizontal: 18,
    marginVertical: 8,
    flex: 1,
    backgroundColor: '#DEDEDE',
    borderRadius: 10
  },
  taskText: {
    fontSize: 18,
    color: 'grey',
  },
  deleteIcon: {
    height: 24,
    width: 24,
  },



  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#C9C9C9',
    padding: 10,
    fontSize: 18,
    borderRadius: 50,
    marginRight: 10,
    color: 'grey',
  },



  addIcon: {
    backgroundColor: 'transparent',
    height: 55,
    width: 55,
    padding: 10
  },
});

export default ToDo;
