import { useState } from 'react';
import { View, Text, Pressable, Modal, TouchableWithoutFeedback } from 'react-native';

export default function TaskItem({
  task,
  onDelete,
}: {
  task: string;
  onDelete: () => void;
}) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <Pressable
        onLongPress={() => setShowOptions(true)}
        className="bg-white border border-slate-300 px-4 py-3 mb-2 rounded-xl shadow-xs"
      >
        <Text className="text-base text-gray-800">{task}</Text>
      </Pressable>

      <Modal
        visible={showOptions}
        transparent
        animationType="fade"
        onRequestClose={() => setShowOptions(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowOptions(false)}>
          <View className="flex-1 justify-end bg-black/30">
            <View className="bg-white px-6 py-4 rounded-t-2xl shadow-lg">
              <Text className="text-sm text-gray-500 mb-2">Que souhaitez-vous faire ?</Text>
              <Pressable
                onPress={() => {
                  setShowOptions(false);
                  onDelete();
                }}
                className="py-3"
              >
                <Text className="text-red-500 font-bold text-base">🗑 Supprimer la tâche</Text>
              </Pressable>
              <Pressable onPress={() => setShowOptions(false)} className="py-3">
                <Text className="text-gray-700 text-base">Annuler</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}
