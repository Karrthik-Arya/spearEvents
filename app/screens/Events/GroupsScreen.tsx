import { useState, type FC } from 'react'
import { type AppStackScreenProps } from '../../types/navigator'
import { ArrowBackIcon, Box, FlatList, HStack, ScrollView, Text } from 'native-base'
import GroupCard from '../../components/Events/Groups/GroupCard'
import PressableShrink from '../../components/shared/Buttons'
import { type Group } from '../../types/events'

type GroupsScreenProps = AppStackScreenProps<'GroupsScreen'>

const GroupsScreen: FC<GroupsScreenProps> = ({ navigation }) => {
  const groups: Group[] = [{
    id: 'Group-1',
    title: 'Group-1',
    participants: ['anakin', 'luffy', 'ahsoka'],
    host: 'Team Spear',
    schedule: ['Ice Breaking Meet', 'The Event', 'After Party']
  },
  {
    id: 'Group-2',
    title: 'Group-1',
    participants: ['anakin', 'luffy', 'ahsoka', 'zoro'],
    host: 'Team Spear',
    schedule: ['Ice Breaking Meet', 'The Event', 'After Party']
  },
  {
    id: 'Group-3',
    title: 'Group-1',
    participants: ['anakin', 'luffy'],
    host: 'anakin',
    schedule: ['Ice Breaking Meet', 'The Event', 'After Party']
  },
  {
    id: 'Group-4',
    title: 'Group-1',
    participants: ['anakin', 'luffy', 'ahsoka', 'zoro'],
    host: 'anakin',
    schedule: ['Ice Breaking Meet', 'The Event', 'After Party']
  },
  {
    id: 'Group-5',
    title: 'Group-1',
    participants: ['anakin', 'luffy', 'ahsoka', 'zoro', 'snips'],
    host: 'anakin',
    schedule: ['Ice Breaking Meet', 'The Event', 'After Party']
  }]

  return (
    <>
    {/* <ScrollView flex={1}> */}
        <HStack space={10} p="14px" alignItems="center">
            <PressableShrink onPress={() => { navigation.goBack() }}>
            <ArrowBackIcon color="coolGray.700" size={6} />
            </PressableShrink>
            <Text color="black" fontSize="23" fontWeight="600">
                Pick Your Poison
            </Text>
        </HStack>

        <Box px="14px">
          <FlatList
            data={groups}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GroupCard group={item} />
            )}
            numColumns={2}
          />
        </Box>
    {/* </ScrollView> */}
    {/* <PressableShrink position="fixed" bottom="5" alignSelf="center" w="93%">
        <Box alignItems="center" justifyContent="center" rounded="full" h="50" shadow="8" bgColor="yellow.500" >
            <Text color="black" fontSize="18" bold >
                Join Group
            </Text>
         </Box>
    </PressableShrink> */}
    </>
  )
}

export default GroupsScreen
