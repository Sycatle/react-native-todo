# 📝 Todo List — React Native + Expo

Une application mobile minimaliste de gestion de tâches, construite avec :

- ⚛️ **React Native** via **Expo**
- 💨 **NativeWind** (TailwindCSS v3)
- 🧭 **expo-router** pour la navigation fluide
- 💾 **AsyncStorage** pour la persistance locale
- 🎯 UX native mobile (swipe, modals, transitions)

---

## 🚀 Fonctionnalités

- Accueil personnalisé :  
  → *"Bonjour Charlie, vous avez 3 tâches à faire aujourd’hui."*

- Ajout de tâche rapide (input stylé, focus-friendly)

- Suppression via **appui long** et **menu contextuel**

- Persistance locale des données (même après redémarrage)

- Navigation native entre les écrans (avec effet slide-in)

---

## 🧱 Structure technique

```
app/
├── _layout.tsx      # Stack navigation
├── index.tsx        # Accueil
├── tasks.tsx        # Liste des tâches

components/
├── TaskInput.tsx
├── TaskItem.tsx

lib/
├── storage.ts       # Persistance AsyncStorage
```

---

## 🛠 Installation

```bash
git clone https://github.com/Sycatle/react-native-todo.git
cd ton-repo
npm install
```

---

## 📱 Lancer le projet

### ▶️ Expo

```bash
npx expo start
```

> ✅ Fonctionne sur Android, iOS et Web (PWA)

---

## 🧪 Build

### Web (auto-hébergeable) :

```bash
npx expo export:web
```

### Android/iOS :

```bash
npx expo install eas-cli
eas build --platform android
eas build --platform ios
```

---

## 🧠 Auteur

Développé par [@charlieintech](https://instagram.com/charlieintech)  
🛠 Projet personnel — apprentissage React Native moderne + UX pro mobile

---

## 📄 Licence

MIT – libre d’utilisation, même en commercial.
