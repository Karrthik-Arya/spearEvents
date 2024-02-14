import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { type FC } from 'react'
import { type AppStackParamList } from '../types/navigator'
import HomeScreen from '../screens/HomeScreen'
import EventScreen from '../screens/Events/EventScreen'
import GroupsScreen from '../screens/Events/GroupsScreen'
import VisitorProfileScreen from '../screens/Profile/VisitorProfileScreen'
import GroupScreen from '../screens/Events/GroupScreen'

const Stack = createStackNavigator<AppStackParamList>()

const AppNavigator: FC = () => {
  return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="EventScreen" component={EventScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="GroupsScreen" component={GroupsScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="VisitorProfileScreen" component={VisitorProfileScreen} />
            <Stack.Screen name="GroupScreen" component={GroupScreen} />
        </Stack.Navigator>
  )
}

export default AppNavigator
