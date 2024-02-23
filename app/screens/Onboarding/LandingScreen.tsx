import { useState, type FC } from 'react'
import { type AppStackScreenProps } from '../../types/navigator'
import { Box, HStack, Text } from 'native-base'
import useFirebaseLogin from '../../utils/useFirebaseLogin'
import LottieView from 'lottie-react-native'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import PressableShrink from '../../components/shared/Buttons'

type LandingScreenProps = AppStackScreenProps<'LandingScreen'>

const LandingScreen: FC<LandingScreenProps> = ({ navigation }) => {
  const { login } = useFirebaseLogin()
  const [loading, setLoading] = useState(false)

  const onPressSignin = async () => {
    setLoading(true);
    const loginRes = await login()
    if (loginRes?.new) {
      navigation.navigate('InterestsScreen')
    } else { navigation.navigate('HomeScreen') }
    setLoading(false);
  }

  return (
        <Box w="full" h="full" alignItems='center'>
            <Text color="blue.600" fontSize="3xl" alignSelf={'center'} marginTop={50} bold>
              EventsMeet
            </Text>
            <Box w="70%" h="40%" marginTop="10" >
                <LottieView
                source={require('../../assets/lotties/home_anim.json')}
                style={{ width: '100%', height: '100%' }}
                autoPlay
                loop
                />
            </Box>
             <Text color="black" fontSize="md" w="75%" textAlign={'center'} marginTop={15}>
              Welcome to the future of socialization
            </Text>

            <PressableShrink disabled={loading} onPress={onPressSignin} mt="10" w="70%" h="6%" >
                <HStack justifyContent="center" shadow={'8'} alignItems='center' w="full" h="full" rounded='full' bgColor='violet.700'>
                    <FAIcon name='google' size={20} color={'white'} />
                    <Text ml="3" color='white' bold>
                        Sign In with Google
                    </Text>
                </HStack>
            </PressableShrink>
        </Box>
  )
}

export default LandingScreen
