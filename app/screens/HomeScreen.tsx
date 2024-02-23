import { AddIcon, Box, HStack, ScrollView, Text } from 'native-base'
import { useEffect, type FC } from 'react'
import TopBar from '../components/Home/TopBar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import EventsDisplay from '../components/Home/EventsDisplay'
import { type AppStackScreenProps } from '../types/navigator'

type HomeScreenProps = AppStackScreenProps<'HomeScreen'>

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
        <Box flex={1} px="14px">
          <TopBar />
          <HStack w="full" justifyContent="space-between" alignItems="center">
            <Text color="coolGray.600" fontSize="23" fontWeight="400">
              Active Events
            </Text>

            <TouchableOpacity onPress={() => { navigation.navigate('CreateEventScreen') } }>
              <Box mx="1" shadow="9" bgColor="white" rounded="full" p="1.5">
                <AddIcon color="blue.600" w="8" h="8"/>
              </Box>
            </TouchableOpacity>
          </HStack>

          <EventsDisplay />
        </Box>
  )
}

export default HomeScreen
