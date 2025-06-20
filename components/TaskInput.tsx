import { useState } from 'react';
import { View, TextInput } from 'react-native';

export default function TaskInput({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <View className="flex-row items-center gap-2 py-2 px-4">
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Ajouter une tâche..."
        className="flex-1 px-4 py-4 bg-white border border-slate-300 rounded-xl placeholder:text-gray-400"
        onSubmitEditing={handleAdd}
        returnKeyType="done"
        autoCorrect={false}
      />
      {/* <Pressable onPress={handleAdd} className="bg-blue-500 px-4 py-2 rounded-xl">
        <Text className="text-white font-bold">+</Text>
      </Pressable> */}
    </View>
  );
}
