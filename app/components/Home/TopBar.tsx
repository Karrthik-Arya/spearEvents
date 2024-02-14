import { HStack, Image, Text } from 'native-base'
import { type FC } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const TopBar: FC = () => {
  return (
        <HStack w="full" justifyContent="space-between" py="14px" alignItems="center">
            <Icon name='menu' color="black" size={25} />
            <Text color="blue.600" fontSize="xl" bold>
              EventsMeet
            </Text>
            <Image
              source={require('../../assets/profile.png')}
              rounded="full" borderColor={'green.300'}
              borderWidth={2}
              alt="profile"
              w="35"
              h="35"
            />
        </HStack>
  )
}

export default TopBar
