import { type ImageSourcePropType } from 'react-native'

export type Event = {
  name: string
  image: ImageSourcePropType
  description: string
  location: string
  groups: number
  participants: number
}

export type Group = {
  host: string
  participants: string[]
  id: string
  title: string
  schedule: string[]
}
