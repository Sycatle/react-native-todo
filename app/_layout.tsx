import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerBackTitle: 'Retour' }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="tasks"
        options={{ title: '📋 Mes tâches', animation: 'slide_from_right' }}
      />
    </Stack>
  );
}
