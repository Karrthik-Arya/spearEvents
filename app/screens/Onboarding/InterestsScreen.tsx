import { useState, type FC } from 'react'
import { type AppStackScreenProps } from '../../types/navigator'
import { Box, CloseIcon, Flex, HStack, Input, Text } from 'native-base'
import useAuthStore from '../../store/authStore'
import LottieView from 'lottie-react-native'
import PressableShrink from '../../components/shared/Buttons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { type User } from '../../types/general'
import api from '../../utils/api'

type InterestsScreenProps = AppStackScreenProps<'InterestsScreen'>

const InterestsScreen: FC<InterestsScreenProps> = ({ navigation }) => {
  const { profile } = useAuthStore()
  const [interests, setInterests] = useState<string[]>([])
  const [tempVal, setTempVal] = useState('')
  const [colorDictionary, setColorDictionary] = useState<Record<string, string>>({})
  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: async (updatedProfile: User) => { await api.user.updateProfile(updatedProfile) },
    onSuccess: async () => { await queryClient.invalidateQueries({ queryKey: ['profile'] }); navigation.navigate('DreamsScreen') },
    onError: (error) => { console.log(error) }
  })

  const getRandomColor = (key: string) => {
    if (key === '') return
    // If color for the key is already generated, return it
    if (colorDictionary[key]) {
      return colorDictionary[key]
    }

    // Generating random values for red, green, and blue channels
    const red = Math.floor(Math.random() * 150) + 100 // Random value between 100 and 250
    const green = Math.floor(Math.random() * 150) + 100 // Random value between 100 and 250
    const blue = Math.floor(Math.random() * 150) + 50 // Random value between 100 and 250
    const color = `rgba(${red}, ${green}, ${blue}, 0.8)` // Adding alpha value of 0.1

    // Update the color dictionary with the generated color
    setColorDictionary(prevState => ({ ...prevState, [key]: color }))

    return color
  }

  const removeInterest = (interestToRemove: string) => {
    // Filter out the interest to be removed
    const updatedInterests = interests.filter(interest => interest !== interestToRemove)
    // Update the state with the filtered array
    setInterests(updatedInterests)
  }

  if (!profile) return

  return (<Box alignItems="center" flex={1} bgColor={'blue.700'}>
        <Text color="white" bold fontSize="2xl" mt="1/4">
            {`Welcome ${profile?.username}!`}
        </Text>
        <Text color="coolGray.100" fontSize="md" mt='10'>
            A couple of questions before starting
        </Text>
        <Box w="80%" mt="1/6">
        <Text color="white" fontSize="lg">
            So what lights your fire 🔥
        </Text>
        <Input
        value={tempVal}
        size="xl"
        variant={'filled'}
        isDisabled={interests.length > 5}
        mt="4"
        placeholder='Dancing, Comedy...'
        focusOutlineColor={'black'}
        backgroundColor={'white'}
        onChangeText={(value) => { setTempVal(value) }}
        onSubmitEditing={() => { setInterests([...interests, tempVal]); setTempVal('') }}
        />
         <Flex w="full" mt="2" direction='row' wrap='wrap'>
            {interests.map((interest) => (
            <HStack my='1' mx="1" key={interest} p='2' bgColor={getRandomColor(interest)} rounded="full" alignItems={'center'} justifyContent={'center'}>
                <PressableShrink h='3' onPress={() => { removeInterest(interest) }}>
                    <CloseIcon color='black' size='3' />
                </PressableShrink>
                <Text ml='1' color='black' fontSize='sm'>
                    {interest}
                </Text>
            </HStack>))}
        </Flex>
        </Box>

        <PressableShrink disabled={updateMutation.isPending} onPress={() => { updateMutation.mutate({ ...profile, about: { ...profile.about, interests } }) }} w="80%" position='absolute' bottom='56'>
            <Box w="full" h="45" shadow={'4'} rounded="full" alignItems='center' justifyContent='center' bgColor={'yellow.500'}>
                <Text bold fontSize='xl'>
                    Continue
                </Text>
            </Box>
        </PressableShrink>

        <Box position="absolute" w="40%" h="40" bottom="4" right="4" >
            <LottieView style={{ width: '100%', height: '100%' }} autoPlay loop source={require('../../assets/lotties/interest_anim.json')} />
        </Box>
    </Box>)
}

export default InterestsScreen
