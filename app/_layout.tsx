// app/_layout.js
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="LoginSelection" />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="diet" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="progresst" />
    </Stack>
  );
}