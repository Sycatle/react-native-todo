import { useEffect, useState } from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { loadTodos } from '../lib/storage';
import '../global.css';

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    loadTodos().then((todos) => setCount(todos.length));
  }, []);

  return (
      <View className="my-10 flex-1 items-center justify-center bg-slate-100 px-6"
      style={{ height: screenHeight, justifyContent: 'center', alignItems: 'center' }}>
        <Text className="text-3xl mb-4 font-extrabold tracking-tight text-black">
          👋 Bonjour Charlie !
        </Text>
        <Text className="text-center mb-4 text-xl font-semibold text-gray-600">
          Encore une belle journée pour concrétiser vos projets.
        </Text>
        <Link href="/tasks" asChild>
          <Pressable className="rounded-xl bg-black px-4 py-4 active:opacity-80">
            <Text className="text-base font-bold text-white">📋 Voir mes tâches ({count})</Text>
          </Pressable>
        </Link>
      </View>

  );
}
