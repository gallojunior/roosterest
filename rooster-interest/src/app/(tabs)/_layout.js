import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { theme } from '../../theme';
import Avatar from "../../components/Avatar";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: theme.colors.white,
      tabBarInactiveTintColor: theme.colors.gray[700],
      tabBarStyle: {
        backgroundColor: theme.colors.black,
        borderColor: theme.colors.black,
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="search" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="chatbubble-ellipses" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => (
            <Avatar imageUrl="https://github.com/gallojunior.png"/>
          )
        }}
      />
    </Tabs>
  );
}