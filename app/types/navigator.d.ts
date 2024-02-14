import { type StackNavigationProp, type StackScreenProps } from '@react-navigation/stack'
import { type Group, type Event } from './events'

export type AppStackParamList = {
  'HomeScreen': undefined
  'EventScreen': { event: Event }
  'GroupsScreen': { eventId: string }
  'VisitorProfileScreen': { name: string }
  'GroupScreen': { group: Group }
}

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<AppStackParamList, T>
export type AppStackNavProps = StackNavigationProp<AppStackParamList>
