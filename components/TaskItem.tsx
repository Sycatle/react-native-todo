import { View, Text, Pressable } from 'react-native';

export default function TaskItem({ task, onDelete }: { task: string; onDelete: () => void }) {
  return (
    <View className="flex-row justify-between items-center bg-white border border-slate-300 px-4 py-3 mb-2 rounded-xl shadow-xs">
      <Text className="text-base text-gray-800">{task}</Text>
      <Pressable onPress={onDelete}>
        <Text className="text-red-500 font-bold">Suppr</Text>
      </Pressable>
    </View>
  );
}
