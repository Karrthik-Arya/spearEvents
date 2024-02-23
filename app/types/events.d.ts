import { type ImageSourcePropType } from 'react-native'

export type Event = {
  title: string
  image: string
  description: string
  location: string
  groups: number
  participants: number
  eventTime: string
}

export type Group = {
  host: string
  participants: string[]
  id: string
  title: string
  schedule: string[]
  tags?: string[]
}
