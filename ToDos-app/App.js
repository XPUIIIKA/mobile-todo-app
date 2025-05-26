import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DeletedPage } from "./pages/DeletedPage";
import { HomePage } from "./pages/HomePage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { NavigationContainer } from "@react-navigation/native";
import { AddNewTodoPage } from "./pages/AddNewTodoPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchTodoPage } from "./pages/SearchTodoPage";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function HomeStackScreen(){
    return(
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name={"Main"} component={HomePage}/>
        <Stack.Screen name={"AddTodo"} component={AddNewTodoPage}/>
        <Stack.Screen name={"SearchTodo"} component={SearchTodoPage}/>
      </Stack.Navigator>);
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Todos" component={ToDoListPage}/>
        <Tab.Screen name="Deleted" component={DeletedPage}/>
      </Tab.Navigator>
    </NavigationContainer>
    );
}