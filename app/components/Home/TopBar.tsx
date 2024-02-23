import { HStack, Image, Text } from 'native-base'
import { type FC } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import PressableShrink from '../shared/Buttons'
import { useNavigation } from '@react-navigation/native'
import { type AppStackNavProps } from '../../types/navigator'
import useAuthStore from '../../store/authStore'

const TopBar: FC = () => {
  const { profile } = useAuthStore()
  const navigation = useNavigation<AppStackNavProps>()
  return (
        <HStack w="full" justifyContent="space-between" py="14px" alignItems="center">
            <Icon name='menu' color="black" size={25} />
            <Text color="blue.600" fontSize="xl" bold>
              EventsMeet
            </Text>
            <PressableShrink w='35' h='35' onPress={() => { navigation.navigate('MyProfileScreen') }}>
            <Image
              source={{ uri: profile?.image }}
              rounded="full" borderColor={'green.300'}
              borderWidth={2}
              alt="profile"
              w="35"
              h="35"
            />
            </PressableShrink>
        </HStack>
  )
}

export default TopBar
