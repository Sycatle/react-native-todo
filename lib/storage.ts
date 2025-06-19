// lib/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@my_todo_list';

export async function saveTodos(todos: string[]) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (err) {
    console.error('❌ Erreur lors de la sauvegarde', err);
  }
}

export async function loadTodos(): Promise<string[]> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('❌ Erreur lors du chargement', err);
    return [];
  }
}
export async function clearTodos() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('❌ Erreur lors de la suppression', err);
  }
}
export async function updateTodo(index: number, newTodo: string) {
  try {
    const todos = await loadTodos();
    if (index >= 0 && index < todos.length) {
      todos[index] = newTodo;
      await saveTodos(todos);
    } else {
      console.error('❌ Index hors limites');
    }
  } catch (err) {
    console.error('❌ Erreur lors de la mise à jour', err);
  }
}
