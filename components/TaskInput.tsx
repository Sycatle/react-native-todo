import { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';

export default function TaskInput({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <View className="flex-row items-center gap-2 mt-auto py-2 bg-gray-100">
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Ajouter une tâche..."
        className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-xl placeholder:text-gray-400"
        onSubmitEditing={handleAdd}
        returnKeyType="done"
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
      <Pressable onPress={handleAdd} className="bg-blue-500 px-4 py-2 rounded-xl">
        <Text className="text-white font-bold">+</Text>
      </Pressable>
    </View>
  );
}
