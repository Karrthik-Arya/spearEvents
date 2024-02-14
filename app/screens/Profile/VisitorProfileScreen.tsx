import { type FC } from 'react'
import { type AppStackScreenProps } from '../../types/navigator'
import { ArrowBackIcon, Box, HStack, Image, ScrollView, Text } from 'native-base'
import PressableShrink from '../../components/shared/Buttons'

type VisitorProfileScreenProps = AppStackScreenProps<'VisitorProfileScreen'>

const VisitorProfileScreen: FC<VisitorProfileScreenProps> = ({ route, navigation }) => {
  return (
        <ScrollView flex={1}>
            <Box alignItems="center">
            <PressableShrink position="absolute" top="2" left="2" onPress={() => { navigation.goBack() }}>
            <ArrowBackIcon color="black" size={6} />
            </PressableShrink>
            <Image source={require('../../assets/profile.png')} w="130" h="130" rounded="full" borderColor="green.300" borderWidth="2" alignSelf="center" mt="30"/>
            <Text color="blue.500" bold fontSize="27">
                {route.params.name}
            </Text>
              <Box mt="4" rounded="3xl" bgColor="white" shadow="8" w="93%" p="3">
                <Text color="black" fontSize="14">
                I am a passionate and driven individual, dedicated to making a positive impact on the world. With a creative spirit and a heart full of compassion, I strive to innovate and push boundaries in my field. My journey is a testament to my unwavering commitment to excellence.
                </Text>
              </Box>
              <HStack my="4" w="90%" justifyContent="space-between">
                <Box p="3" minW="130" justifyContent="center" rounded="2xl" bgColor="white" shadow="8">
                  <Text color="black" fontSize="18" fontWeight="500">
                    Friends
                  </Text>
                  <HStack space={2}>
                <Text color="coolGray.800" fontSize="14" fontWeight="600">
                  25
                </Text>
                <Text color="coolGray.700" fontSize="13">
                  Friends
                </Text>
                </HStack>

                </Box>

                <Box p="3" minW="150" justifyContent="center" rounded="2xl" bgColor="white" shadow="8">
                <Text color="black" fontSize="18" fontWeight="500">
                    Past Events
                  </Text>
                  <HStack space={2}>
                <Text color="coolGray.800" fontSize="14" fontWeight="600">
                  3
                </Text>
                <Text color="coolGray.700" fontSize="13">
                  Events
                </Text>
                </HStack>
                </Box>
              </HStack>

              <Text color="black" fontSize="20" bold my="2">
                My Upcoming Events
              </Text>
              <Text my="10" color="coolGray.500" fontSize="16">
                No Upcoming Events
              </Text>
              </Box>
         </ScrollView>
  )
}

export default VisitorProfileScreen
