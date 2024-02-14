import { type FC } from 'react'
import { type AppStackScreenProps } from '../../types/navigator'
import { ArrowBackIcon, Avatar, Box, HStack, Image, ScrollView, Text } from 'native-base'
import PressableShrink from '../../components/shared/Buttons'

type GroupScreenProps = AppStackScreenProps<'GroupScreen'>

const GroupScreen: FC<GroupScreenProps> = ({ route, navigation }) => {
  const group = route.params.group
  return (
        <ScrollView flex={1}>
            <Box alignItems="center">
            <PressableShrink position="absolute" top="2" left="2" onPress={() => { navigation.goBack() }}>
            <ArrowBackIcon color="black" size={6} />
            </PressableShrink>
            <Image source={require('../../assets/profile.png')} w="130" h="130" rounded="full" borderColor="green.300" borderWidth="2" alignSelf="center" mt="30"/>
            <Text color="blue.500" bold fontSize="27">
                {group.title}
            </Text>
             <Text color="coolGray.500" italic fontSize="14">
                {`- By ${group.host}`}
            </Text>
              <Box mt="4" rounded="3xl" bgColor="white" shadow="8" w="93%" p="3">
                <Text color="black" fontSize="14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu laoreet urna, id euismod elit. Morbi vel mattis metus, a venenatis ligula. Proin aliquet ipsum justo, nec mollis nisl sodales eu. Curabitur lobortis lorem non odio eleifend vestibulum. Aliquam risus nunc, molestie vitae convallis non, maximus at eros. Aliquam aliquet mi ut neque condimentum efficitur. Phasellus vitae fermentum nunc. Integer a lorem vehicula, cursus eros eu, scelerisque massa. Vivamus eget orci non ipsum feugiat vulputate fringilla vel nisl.
                </Text>
              </Box>
              <HStack my="4" w="90%" justifyContent="space-between">
                <PressableShrink>
                <Box p="3" minW="130" justifyContent="center" rounded="2xl" bgColor="white" shadow="8">
                  <Text color="black" fontSize="18" fontWeight="500">
                    Participants
                  </Text>
                  <HStack my='2' space={1} alignItems="center">
                    <HStack>
                        <Avatar source={require('../../assets/profile4.jpeg')} size={6} />
                        <Avatar source={require('../../assets/profile2.jpeg')} size={6} ml='-2' />
                        <Avatar source={require('../../assets/profile3.webp')} size={6} ml='-2' />
                    </HStack>
                    <Text color="coolGray.500" fontSize="16" >
                        {group.participants.length}
                    </Text>
                    <Text color="coolGray.500" fontSize="12" >
                        members
                    </Text>
                </HStack>

                </Box>
                </PressableShrink>

                {/* <Box p="3" minW="150" justifyContent="center" rounded="2xl" bgColor="white" shadow="8">
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
                </Box> */}
              </HStack>

              <PressableShrink position="fixed" bottom="0" alignSelf="center" w="93%">
                <Box alignItems="center" justifyContent="center" rounded="full" h="50" shadow="8" bgColor="yellow.500" >
                    <Text color="black" fontSize="18" bold >
                        Lesgooo!
                    </Text>
                </Box>
            </PressableShrink>

              </Box>
         </ScrollView>
  )
}

export default GroupScreen
