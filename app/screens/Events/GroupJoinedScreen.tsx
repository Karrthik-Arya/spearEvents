import LottieView from 'lottie-react-native'
import { ArrowBackIcon, Box, Text } from 'native-base'
import { type FC } from 'react'
import { type AppStackScreenProps } from '../../types/navigator'
import PressableShrink from '../../components/shared/Buttons'
import { Linking } from 'react-native'

type GroupJoinedScreenProps = AppStackScreenProps<'GroupJoinedScreen'>

const GroupJoinedScreen: FC<GroupJoinedScreenProps> = ({ navigation }) => {
  const onPressDiscord = async () => {
    await Linking.openURL('https://discord.gg/5aEqDx39')
  }
  return (<Box flex={1} bgColor={'white'} justifyContent={'center'} alignItems={'center'}>
        <PressableShrink position="absolute" top="4" left="4" onPress={() => { navigation.goBack() }}>
            <ArrowBackIcon color="black" size={6} />
        </PressableShrink>
        <Box w="70%" h="50%">
            <LottieView loop={false} style={{ width: '100%', height: '100%' }} autoPlay source={require('../../assets/lotties/success_anim.json')} />
        </Box>

        <PressableShrink onPress={onPressDiscord} mt="10" w="80%" h="20">
            <Box bgColor={'blue.200'} rounded={'full'} p="2" justifyContent={'center'} alignItems={'center'}>
            <Text textAlign='center' w="full" color='black' fontSize={'sm'} >
                Join Discord to meet your group members
            </Text>
            </Box>
        </PressableShrink>
    </Box>)
}

export default GroupJoinedScreen
