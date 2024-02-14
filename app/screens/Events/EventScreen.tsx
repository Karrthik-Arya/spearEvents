import { type FC } from 'react'
import { type AppStackScreenProps } from '../../types/navigator'
import { ArrowBackIcon, Box, HStack, Image, ScrollView, Text } from 'native-base'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import PressableShrink from '../../components/shared/Buttons'
import Animated, { BounceInDown } from 'react-native-reanimated'

type EventScreenProps = AppStackScreenProps<'EventScreen'>

const EventScreen: FC<EventScreenProps> = ({ route, navigation }) => {
  const event = route.params.event
  return (
        <>
        <Image position="absolute" source={event.image} w="full" h="600" alt="event bg" />
        <Box bg={{
          linearGradient: {
            colors: ['transparent', 'black'],
            start: [0, 0],
            end: [0, 1]
          }
        }} position="absolute" w="full" h="600" />
        {/* <HStack position="absolute" p="14px"> */}
          <PressableShrink zIndex={30} position="absolute" top="2" left="2" w="10" h="10" onPress={() => { navigation.goBack() }}>
            <Box rounded="full" w="10" h="10" p="3" bgColor="rgba(255,255,255, 0.4)">
              <ArrowBackIcon color="white" w="10" h="10"/>
            </Box>
          </PressableShrink>
        {/* </HStack> */}

        <ScrollView w="full">
            <Animated.View entering={BounceInDown}>
            <Box alignItems="center" mt="300" bgColor="coolGray.100" roundedTop="3xl" w="full" minH="600">
              <Text mt="2" textAlign="center" color="black" bold w="80%" fontSize="2xl">
                {event.name}
              </Text>
              <HStack mb="4" space="1">
              <IonIcon name="location" size={20} color={'gray'} />
              <Text color="coolGray.500" fontSize="16" >
                {event.location}
              </Text>
            </HStack>
            <Text mb="2" alignSelf="flex-start" mx="5" color="black" fontSize="20" fontWeight="600">
              About the Event
            </Text>
              <Box rounded="3xl" bgColor="white" shadow="8" w="93%" p="3">
                <Text color="black" fontSize="14">
                  {event.description}
                </Text>
              </Box>
              <HStack my="4" w="90%" justifyContent="space-between">
                <Box p="3" rounded="2xl" bgColor="white" shadow="8">
                  <Text color="black" fontSize="18" fontWeight="500">
                    Groups
                  </Text>
                <HStack mt="1" space="1" alignItems="end">
                <MaterialCIcon name="account-group" size={20} color={'gray'} />
                <Text color="coolGray.800" fontSize="14" fontWeight="600">
                  {event.groups}
                </Text>
                <Text color="coolGray.700" fontSize="13">
                  Groups
                </Text>
              </HStack>
                </Box>

                <Box p="3" rounded="2xl" bgColor="white" shadow="8">
                <Text color="black" fontSize="18" fontWeight="500">
                    Participants
                  </Text>
                <HStack space="1" mt="1" alignItems="end">
                <MaterialCIcon name="account-group" size={20} color={'gray'} />
                <Text color="coolGray.800" fontSize="14" fontWeight="600">
                  {event.participants}
                </Text>
                <Text color="coolGray.700" fontSize="13">
                  Participants
                </Text>
              </HStack>
                </Box>
              </HStack>

              <PressableShrink mt="4" w="93%" onPress={() => { navigation.navigate('GroupsScreen', { eventId: '1234' }) }}>
              <Box alignItems="center" justifyContent="center" rounded="full" h="50" shadow="8" bgColor="yellow.500" >
                <Text color="black" fontSize="18" bold >
                  Count me In!
                </Text>
              </Box>
              </PressableShrink>
            </Box>
            </Animated.View>
        </ScrollView>
        </>
  )
}

export default EventScreen
