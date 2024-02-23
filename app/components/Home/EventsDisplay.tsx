import { Box, FlatList, Text } from 'native-base'
import { type FC } from 'react'
import { type Event } from '../../types/events'
import EventCard from './EventCard'
import { useQuery } from '@tanstack/react-query'
import api from '../../utils/api'

const EventsDisplay: FC = () => {
  const EventsQuery = useQuery({ queryKey: ['events'], queryFn: api.events.getEvents })
  return (
        <Box w="full" minH="300" px="1" alignItems="center">
          <FlatList
          data={EventsQuery.data?.data}
          renderItem={({ item }) => <EventCard event={item} />}
          ListEmptyComponent={<Box w="full" h="300" alignItems="center" justifyContent='center' >
            <Text color='black' fontSize='md'>
              No Upcoming Events
            </Text>
            </Box>}
          />

            {/* {events.map((event, idx) => <EventCard event={event} key={idx} />)} */}
        </Box>
  )
}
export default EventsDisplay
