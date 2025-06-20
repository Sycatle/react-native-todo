import { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar, Pressable, Vibration } from 'react-native';
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
    <SafeAreaView className="flex-1 bg-slate-100 pt-6">
      <StatusBar barStyle="dark-content" />
      <View className="flex h-full flex-col gap-4 px-4 py-2">
        <View className="bg-slate-100/50 backdrop-blur-lg flex-row items-center justify-between border-b border-slate-300 py-2 px-4">
          <Text className=" text-3xl font-extrabold tracking-tight text-gray-900">
            📋 Mes tâches
          </Text>
        </View>

        <ScrollView className=" gap-4" showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingBottom: 100 }}
        >
          <Text className="mb-4 text-sm text-gray-500">
            Vous avez {todos.length} tâche{todos.length !== 1 ? 's' : ''} à réaliser.
          </Text>

          {todos.map((todo, index) => (
            <TaskItem key={index} task={todo} onDelete={() => removeTodo(index)} />
          ))}
        </ScrollView>

        <TaskInput onAdd={addTodo} />
      </View>
    </SafeAreaView>
  );
}
