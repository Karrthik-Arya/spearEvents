import { type FC } from 'react'
import { type AppStackScreenProps } from '../../types/navigator'
import { ArrowBackIcon, Box, Flex, HStack, Image, ScrollView, Text } from 'native-base'
import PressableShrink from '../../components/shared/Buttons'
import useAuthStore from '../../store/authStore'
import useFirebaseLogout from '../../utils/useFirebaseLogout'

type MyProfileScreenProps = AppStackScreenProps<'MyProfileScreen'>

const MyProfileScreen: FC<MyProfileScreenProps> = ({ navigation }) => {
  const { profile } = useAuthStore()

  const { logout } = useFirebaseLogout()

  const onLogout = async () => {
    await logout()
    navigation.reset({ index: 0, routes: [{ name: 'LandingScreen' }] })
  }
  return (
    <>
        <ScrollView flex={1}>
            <Box alignItems="center">
            <PressableShrink position="absolute" top="2" left="2" onPress={() => { navigation.goBack() }}>
            <ArrowBackIcon color="black" size={6} />
            </PressableShrink>
            <Image source={{ uri: profile?.image }} w="130" h="130" rounded="full" borderColor="green.300" borderWidth="2" alignSelf="center" mt="30"/>
            <Text color="blue.500" bold fontSize="27">
                {profile?.username}
            </Text>
              <Box mt="4" rounded="3xl" bgColor="white" shadow="8" w="93%" p="3">
                <Text color="blue.500" fontSize="18" fontWeight="600" mb='1'>
                    Who am I?
                </Text>
                <Text color="black" fontSize="14" ml='1'>
                  {profile?.about.desc}
                </Text>
              </Box>
              <HStack my="4" w="90%" justifyContent="space-between">
                <Box p="3" w="48%" justifyContent="center" rounded="2xl" bgColor="white" shadow="8">
                  <Text color="blue.400" fontSize="18" fontWeight="500">
                    Interests
                  </Text>
                  <Flex mt='2' w="full" direction="row" wrap="wrap">
                    {profile?.about.interests.map(
                      (interest) => (
                      <Box m='1' borderColor='black' borderWidth={1} p="2" key={interest} rounded={'full'} justifyContent="center" alignItems={'center'}>
                        <Text color='black' fontSize='xs'>
                          {interest}
                        </Text>
                    </Box>)
                    )}
                  </Flex>
                </Box>

                <Box p="3" w="48%" justifyContent="center" rounded="2xl" bgColor="white" shadow="8">
                <Text color="blue.400" fontSize="18" fontWeight="500">
                    Dream Events
                  </Text>
                  <Flex mt='2' w="full" direction="row" wrap="wrap">
                    {profile?.about.opinions.map(
                      (dream) => (
                      <Box m='1' borderColor='black' borderWidth={1} p="2" key={dream} rounded={'full'} justifyContent="center" alignItems={'center'}>
                        <Text color='black' fontSize='xs'>
                          {dream}
                        </Text>
                    </Box>)
                    )}
                  </Flex>
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
         <PressableShrink w="90%" h="50" position="fixed" bgColor={'green.100'} bottom="10" alignSelf="center" alignItems={'center'} onPress={onLogout}>
            <Box w="full" h="full" rounded="full" shadow={4} bgColor={'red.600'} alignItems="center" justifyContent='center' >
                <Text color="yellow.200" fontSize="xl">
                    Logout
                </Text>
            </Box>
         </PressableShrink>
         </>
  )
}

export default MyProfileScreen
