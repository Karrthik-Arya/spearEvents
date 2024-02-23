import { type StackNavigationProp, type StackScreenProps } from '@react-navigation/stack'
import { type Group, type Event } from './events'

export type AppStackParamList = {
  'HomeScreen': undefined
  'EventScreen': { event: Event }
  'GroupsScreen': { eventId: string }
  'VisitorProfileScreen': { name: string }
  'MyProfileScreen': undefined
  'GroupScreen': { group: Group }
  'CreateEventScreen': undefined
  'CreateGroupScreen': { eventId: string }
  'GroupJoinedScreen': { groupId: string }

  // public screens
  'LandingScreen': undefined
  'InterestsScreen': undefined
  'DreamsScreen': undefined
  'AboutScreen': undefined
}

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<AppStackParamList, T>
export type AppStackNavProps = StackNavigationProp<AppStackParamList>
