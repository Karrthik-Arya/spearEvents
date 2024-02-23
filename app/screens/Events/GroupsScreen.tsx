import { type FC } from 'react'
import { type AppStackScreenProps } from '../../types/navigator'
import { AddIcon, ArrowBackIcon, Box, FlatList, HStack, Text } from 'native-base'
import GroupCard from '../../components/Events/Groups/GroupCard'
import PressableShrink from '../../components/shared/Buttons'
import { type Group } from '../../types/events'

type GroupsScreenProps = AppStackScreenProps<'GroupsScreen'>

const GroupsScreen: FC<GroupsScreenProps> = ({ navigation, route }) => {
  const groups: Array<Group | null> = [{
    id: 'Group-1',
    title: "Spear's Group",
    participants: ['anakin', 'luffy', 'ahsoka', 'someone', 'someone else', 'test-user'],
    host: 'Team Spear',
    schedule: ['Ice Breaking Meet', 'The Event', 'After Party']
  },
  {
    id: 'Group-2',
    title: "Karrthik's Gang",
    participants: ['anakin', 'luffy', 'ahsoka', 'zoro'],
    host: 'karrthikarya',
    schedule: ['Ice Breaking Meet', 'The Event', 'After Party']
  }, null]

  return (
    <>
    {/* <ScrollView flex={1}> */}
        <HStack space={10} p="14px" alignItems="center">
            <PressableShrink w="6" h="6" onPress={() => { navigation.goBack() }}>
            <ArrowBackIcon color="coolGray.700" size={6} />
            </PressableShrink>
            <Text color="black" fontSize="23" fontWeight="600">
                Pick Your Poison
            </Text>
        </HStack>

        <Box px="14px">
          <FlatList
            data={groups}
            keyExtractor={(item) => item?.id ?? '1'}
            renderItem={({ item }) => item === null
              ? (
              <PressableShrink onPress={() => { navigation.navigate('CreateGroupScreen', route.params) }} w="45%" h="160" mx='2' my='2'>
                <Box w="full" h="full" bgColor="white" shadow="2" px="2" py="3" alignItems="center" justifyContent="center" rounded="2xl">
                  <AddIcon color="black" size={8} />
                  <Text color="black" mt="2" fontSize={'md'}>
                    Create your group
                  </Text>
                </Box>
              </PressableShrink>
                )
              : (
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
