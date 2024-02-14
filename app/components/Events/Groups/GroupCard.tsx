import { Avatar, Box, HStack, Image, Text } from 'native-base'
import { useState, type FC } from 'react'
import PressableShrink from '../../shared/Buttons'
import { useNavigation } from '@react-navigation/native'
import { type AppStackNavProps } from '../../../types/navigator'
import { type Group } from '../../../types/events'

type GroupCardProps = {
  group: Group
}

const GroupCard: FC<GroupCardProps> = ({ group }) => {
  const { title, host, schedule: events } = group
  const navigation = useNavigation<AppStackNavProps>()
  return (
        <PressableShrink onPress={() => { navigation.navigate('GroupScreen', { group }) }} w='45%' mx='2' my='2'>
        <Box w="full" bgColor="white" shadow="2" px="2" py="3" rounded="2xl">

            <Text color="black" fontSize="17" fontWeight="500" >
                {title}
            </Text>
            <Box ml='2' h='20' justifyContent='center'>
                {events.map((event) => (<Text key={event}>
                    {event}
                </Text>))}
            </Box>

            {/* <HStack space={1} alignItems="center">
            <Text color="coolGray.500" fontSize="16" >
                {participants.length}
            </Text>
            <Text color="coolGray.400" fontSize="12" >
                members
            </Text>
            </HStack> */}

            <HStack space={1} alignSelf='flex-end' alignItems="center">
            <Text color="coolGray.500" fontSize="10" >
                {`Hosted By: ${host}`}
            </Text>
            <Avatar size={6} source={require('../../../assets/profile.png')} />
            </HStack>
        </Box>
        </PressableShrink>
  )
}

export default GroupCard
