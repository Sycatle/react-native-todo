import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';
import { loadTodos, saveTodos } from '../lib/storage';
import '../global.css';

export default function TasksScreen() {
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
      keyboardVerticalOffset={80} // Ajuste selon le header
    >
        {/* <StatusBar barStyle="dark-content" /> */}
        <View className="flex-1 h-full flex-col gap-4 px-4 py-4 bg-slate-200">
          <ScrollView
            className="gap-4"
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{ paddingBottom: 100 }}>
            <Text className="mb-4 text-sm text-gray-500">
              Vous avez {todos.length} tâche{todos.length !== 1 ? 's' : ''} à réaliser.
            </Text>
            {todos.map((todo, index) => (
              <TaskItem key={index} task={todo} onDelete={() => removeTodo(index)} />
            ))}
          </ScrollView>
          <TaskInput onAdd={addTodo} />
        </View>
    </KeyboardAvoidingView>
  );
}
