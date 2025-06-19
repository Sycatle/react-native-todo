import { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import { loadTodos, saveTodos } from './lib/storage';
import './global.css';

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    loadTodos().then(setTodos);
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text: string) => setTodos([text, ...todos]);
  const removeTodo = (index: number) => setTodos((prev) => prev.filter((_, i) => i !== index));

  return (
    <SafeAreaView className="flex-1 bg-gray-100 pt-6">
      <StatusBar barStyle="dark-content" />
      <View className="px-4 pb-4">
        <Text className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900">
          📋 Mes Tâches
        </Text>
        <Text className="mb-4 text-base text-gray-500">Organise ta journée efficacement.</Text>

        <ScrollView
          className="mt-6 space-y-3"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}>
          {todos.map((todo, index) => (
            <TaskItem key={index} task={todo} onDelete={() => removeTodo(index)} />
          ))}
        </ScrollView>
        
        <TaskInput onAdd={addTodo} />
      </View>
    </SafeAreaView>
  );
}
