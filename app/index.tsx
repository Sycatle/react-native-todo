import { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { loadTodos } from '../lib/storage';
import '../global.css';

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    loadTodos().then((todos) => setCount(todos.length));
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <View className="flex-1 items-center justify-center gap-4">
      <Text className="px-8 text-center text-xl font-semibold text-gray-800">
        Bonjour, vous avez {count} tâche{count !== 1 ? 's' : ''} à réaliser aujourd\u2019hui.
      </Text>
      <Link href="/tasks" asChild>
        <Pressable className="rounded-xl bg-blue-500 px-4 py-3">
          <Text className="font-bold text-white">\ud83d\udccb Voir mes tâches</Text>
        </Pressable>
      </Link>
      </View>
    </SafeAreaView>
  );
}
