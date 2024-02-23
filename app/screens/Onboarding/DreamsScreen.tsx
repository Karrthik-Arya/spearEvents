import { useState, type FC } from 'react'
import { type AppStackScreenProps } from '../../types/navigator'
import { Box, CloseIcon, Flex, HStack, Input, Text } from 'native-base'
import LottieView from 'lottie-react-native'
import PressableShrink from '../../components/shared/Buttons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../../utils/api'
import { type User } from '../../types/general'
import useAuthStore from '../../store/authStore'

type DreamsScreenProps = AppStackScreenProps<'DreamsScreen'>

const DreamsScreen: FC<DreamsScreenProps> = ({ navigation }) => {
  const { profile } = useAuthStore()
  const [dreams, setDreams] = useState<string[]>([])
  const [tempVal, setTempVal] = useState('')
  const [colorDictionary, setColorDictionary] = useState<Record<string, string>>({})
  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: async (updatedProfile: User) => { await api.user.updateProfile(updatedProfile) },
    onSuccess: async () => { await queryClient.invalidateQueries({ queryKey: ['profile'] }); navigation.navigate('AboutScreen') }
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

  const removeDream = (dreamToRemove: string) => {
    // Filter out the interest to be removed
    const updatedDreams = dreams.filter(dream => dream !== dreamToRemove)
    // Update the state with the filtered array
    setDreams(updatedDreams)
  }

  if (!profile) return

  return (<Box alignItems="center" flex={1} bgColor={'#FBFAFF'}>
        <Box w="80%" mt="1/4">
        <Text color="blue.300" fontSize="lg">
            Got Any Dream Events ✨
        </Text>
        <Input
        value={tempVal}
        size="xl"
        variant={'filled'}
        isDisabled={dreams.length > 5}
        mt="4"
        placeholder='Edinburgh Fringe Festival, ...'
        focusOutlineColor={'black'}
        backgroundColor={'coolGray.200'}
        onChangeText={(value) => { setTempVal(value) }}
        onSubmitEditing={() => { setDreams([...dreams, tempVal]); setTempVal('') }}
        />
         <Flex w="full" mt="2" direction='row' wrap='wrap'>
            {dreams.map((dream) => (
            <HStack my='1' mx="1" key={dream} p='2' bgColor={getRandomColor(dream)} rounded="full" alignItems={'center'} justifyContent={'center'}>
                <PressableShrink h='3' onPress={() => { removeDream(dream) }}>
                    <CloseIcon color='black' size='3' />
                </PressableShrink>
                <Text ml='1' color='black' fontSize='sm'>
                    {dream}
                </Text>
            </HStack>))}
        </Flex>
        </Box>

        <PressableShrink disabled={updateMutation.isPending} onPress={() => {
          updateMutation.mutate({
            ...profile,
            about: { ...profile.about, opinions: dreams }
          })
        }} w="80%" position='absolute' bottom='72'>
            <Box w="full" h="45" shadow={'4'} rounded="full" alignItems='center' justifyContent='center' bgColor={'yellow.500'}>
                <Text bold fontSize='xl'>
                    Continue
                </Text>
            </Box>
        </PressableShrink>

        <Box position="absolute" w="65%" h="56" bottom="4" left="4" >
            <LottieView style={{ width: '100%', height: '100%' }} autoPlay loop source={require('../../assets/lotties/dreams_anim.json')} />
        </Box>
    </Box>)
}

export default DreamsScreen
