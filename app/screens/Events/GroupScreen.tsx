import { type FC } from 'react'
import { type AppStackScreenProps } from '../../types/navigator'
import { ArrowBackIcon, Avatar, Box, Flex, HStack, Image, ScrollView, Text } from 'native-base'
import PressableShrink from '../../components/shared/Buttons'

type GroupScreenProps = AppStackScreenProps<'GroupScreen'>

const GroupScreen: FC<GroupScreenProps> = ({ route, navigation }) => {
  const group = route.params.group
  const tags = ['After Party', 'Cafe Meet']
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
                Looking for young people excited to witness the event and meet new people while having the time of their lives. Current plan is to meet-up by 1pm and have drinks at mia cuccina, bandra, and then proceeding to the concert. Following that we’ll have an afterparty at bandra social.
                </Text>
              </Box>
              <HStack my="4" w="90%" justifyContent="space-between">
                <PressableShrink w="48%" h="120">
                <Box p="3" minW="130" justifyContent="center" rounded="2xl" bgColor="white" shadow="8">
                  <Text color="blue.400" fontSize="18" fontWeight="500">
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

                <Box p="3" w="48%" justifyContent="center" rounded="2xl" bgColor="white" shadow="8">
                  <Text color="blue.400" fontSize="18" fontWeight="500">
                    Tags
                  </Text>
                  <Flex mt='2' w="full" direction="row" wrap="wrap">
                    {tags.map(
                      (tag) => (
                      <Box m='1' borderColor='black' borderWidth={1} p="2" key={tag} rounded={'full'} justifyContent="center" alignItems={'center'}>
                        <Text color='black' fontSize='xs'>
                          {tag}
                        </Text>
                    </Box>)
                    )}
                  </Flex>
                </Box>

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

              <PressableShrink h="50" onPress={() => { navigation.navigate('GroupJoinedScreen', { groupId: group.id }) }} position="fixed" bottom="0" alignSelf="center" w="93%">
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
