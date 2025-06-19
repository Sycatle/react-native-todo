import './global.css';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-black">Welcome to Todo.</Text>
      <Text className="text-sm text-gray-600">
        by Sycatle
      </Text>
    </View>
  );
}
