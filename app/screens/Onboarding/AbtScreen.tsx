import { useState, type FC } from 'react'
import { type AppStackScreenProps } from '../../types/navigator'
import { Box, Input, Text } from 'native-base'
import useAuthStore from '../../store/authStore'
import LottieView from 'lottie-react-native'
import PressableShrink from '../../components/shared/Buttons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../../utils/api'
import { type User } from '../../types/general'

type AboutScreenProps = AppStackScreenProps<'AboutScreen'>

const AboutScreen: FC<AboutScreenProps> = ({ navigation }) => {
  const [about, setAbout] = useState('')
  const { profile, setOnboarded } = useAuthStore()
  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: async (updatedProfile: User) => { await api.user.updateProfile(updatedProfile) },
    onSuccess: async () => { await queryClient.invalidateQueries({ queryKey: ['profile'] }); setOnboarded(true); navigation.navigate('HomeScreen') }
  })

  const onNext = () => {
    if (!profile) return
    updateMutation.mutate({ ...profile, about: { ...profile.about, desc: about } })
  }

  return (<Box alignItems="center" flex={1} bgColor={'blue.700'}>
        <Text color="white" bold fontSize="2xl" mt="1/4">
            {'To finish it off'}
        </Text>
        <Box w="80%" mt="1/6">
        <Text color="white" fontSize="lg">
            What makes you interesting? 😎
        </Text>
        <Input
        value={about}
        size="lg"
        variant={'filled'}
        mt="4"
        h={'40'}
        multiline={true}
        isInvalid={about.length > 100}
        placeholder='Something abt you in less than 100 characters'
        focusOutlineColor={'black'}
        backgroundColor={'white'}
        onChangeText={(value) => { setAbout(value) }}
        />
        </Box>

        <PressableShrink disabled={updateMutation.isPending || about.length > 100} onPress={onNext} w="80%" position='absolute' bottom='72'>
            <Box w="full" h="45" shadow={'4'} rounded="full" alignItems='center' justifyContent='center' bgColor={'yellow.500'}>
                <Text bold fontSize='xl'>
                    Continue
                </Text>
            </Box>
        </PressableShrink>

        <Box position="absolute" w="60%" h="40" bottom="4" right="4" >
            <LottieView style={{ width: '100%', height: '100%' }} autoPlay loop source={require('../../assets/lotties/about_anim.json')} />
        </Box>
    </Box>)
}

export default AboutScreen
