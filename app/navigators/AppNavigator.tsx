import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { useEffect, type FC } from 'react'
import { type AppStackParamList } from '../types/navigator'
import HomeScreen from '../screens/HomeScreen'
import EventScreen from '../screens/Events/EventScreen'
import GroupsScreen from '../screens/Events/GroupsScreen'
import VisitorProfileScreen from '../screens/Profile/VisitorProfileScreen'
import GroupScreen from '../screens/Events/GroupScreen'
import useAuthStore from '../store/authStore'
import LandingScreen from '../screens/Onboarding/LandingScreen'
import MyProfileScreen from '../screens/Profile/MyProfileScreen'
import InterestsScreen from '../screens/Onboarding/InterestsScreen'
import DreamsScreen from '../screens/Onboarding/DreamsScreen'
import AboutScreen from '../screens/Onboarding/AbtScreen'
import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'
import CreateEventScreen from '../screens/Events/CreateEventScreen'
import CreateGroupScreen from '../screens/Events/CreateGroupScreen'
import GroupJoinedScreen from '../screens/Events/GroupJoinedScreen'

const Stack = createStackNavigator<AppStackParamList>()

const AppNavigator: FC = () => {
  const { onboarded, profileId, setProfile } = useAuthStore()

  const profileQuery = useQuery({
    queryKey: ['profile', profileId],
    queryFn: async () => await api.user.getProfile(profileId),
    enabled: profileId !== null
  })

  useEffect(() => {
    if (profileQuery.isSuccess) { setProfile(profileQuery.data.data) }
  }, [profileQuery.data])
  return (
        <Stack.Navigator initialRouteName={onboarded ? 'HomeScreen' : 'LandingScreen'} screenOptions={{ headerShown: false }}>
            {onboarded &&
            <Stack.Group>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="EventScreen" component={EventScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
              <Stack.Screen name="GroupsScreen" component={GroupsScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
              <Stack.Screen name='MyProfileScreen' component={MyProfileScreen} />
              <Stack.Screen name="VisitorProfileScreen" component={VisitorProfileScreen} />
              <Stack.Screen name="GroupScreen" component={GroupScreen} />
              <Stack.Screen name="CreateEventScreen" component={CreateEventScreen} />
              <Stack.Screen name='CreateGroupScreen' component={CreateGroupScreen} />
              <Stack.Screen name='GroupJoinedScreen' component={GroupJoinedScreen} />
            </Stack.Group>}
            <Stack.Group>
              <Stack.Screen name='LandingScreen' component={LandingScreen} />
              <Stack.Screen name='InterestsScreen' component={InterestsScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
              <Stack.Screen name='DreamsScreen' component={DreamsScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
              <Stack.Screen name='AboutScreen' component={AboutScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            </Stack.Group>
        </Stack.Navigator>
  )
}

export default AppNavigator
