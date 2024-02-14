import { type FC } from 'react'
import { type Event } from '../../types/events'
import { Box, HStack, Image, Text } from 'native-base'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import PressableShrink from '../shared/Buttons'
import { useNavigation } from '@react-navigation/native'
import { type AppStackNavProps } from '../../types/navigator'

type EventCardProps = {
  event: Event
}

const EventCard: FC<EventCardProps> = ({ event }) => {
  const navigation = useNavigation<AppStackNavProps>()
  return (
        <PressableShrink onPress={() => { navigation.navigate('EventScreen', { event }) }}
          style={{ marginHorizontal: 5, marginVertical: 10, width: '100%', height: 220 }}>
        <Box overflow="hidden" rounded="2xl" w="full" h="full" shadow="5" bgColor="white">
            <Image source={event.image} w="full" alt={event.name} h="65%" />
            <HStack w="full" px="2" justifyContent="space-between" alignItems="center">
              <Text my="1" color="black" fontSize="xl" fontWeight="500">
                  {event.name}
              </Text>
              <HStack space="1" alignItems="end">
                <MaterialCIcon name="account-group" size={20} color={'gray'} />
                <Text color="coolGray.800" fontSize="14" fontWeight="600">
                  {event.participants}
                </Text>
                <Text color="coolGray.700" fontSize="13">
                  Participants
                </Text>
              </HStack>
            </HStack>
            <HStack mx="2" space="1">
              <IonIcon name="location" size={18} color={'gray'} />
              <Text color="coolGray.700" fontSize="14" >
                {event.location}
              </Text>
            </HStack>
        </Box>
        </PressableShrink>
  )
}

export default EventCard
