import { Box } from 'native-base'
import { type FC } from 'react'
import { type Event } from '../../types/events'
import EventCard from './EventCard'

const EventsDisplay: FC = () => {
  const events: Event[] = [
    {
      name: 'Ed Sheeran Tour',
      description: 'The global sensation is bringing the +–=÷× tour to India for the first time ever (and yes, you can pronounce it as the Mathematics tour!). Celebrating hits from his five albums that we know, love and can’t stop grooving to, this concert offers you a monumental stadium set-up with a centre stage and a mind-blowing experience that is bound to give you the ‘Shivers.’ This is Ed Sheeran in India like you’ve never experienced before! So India, get ready for the ‘Perfect Equation’ coming your way!',
      image: require('../../assets/Events/event1.jpg'),
      location: 'Mahalaxmi Race Course',
      groups: 20,
      participants: 60
    },
    {
      name: 'Trevor Noah Live',
      description: 'The global sensation is bringing the +–=÷× tour to India for the first time ever (and yes, you can pronounce it as the Mathematics tour!). Celebrating hits from his five albums that we know, love and can’t stop grooving to, this concert offers you a monumental stadium set-up with a centre stage and a mind-blowing experience that is bound to give you the ‘Shivers.’ This is Ed Sheeran in India like you’ve never experienced before! So India, get ready for the ‘Perfect Equation’ coming your way!',
      image: require('../../assets/Events/event2.jpeg'),
      location: 'NSCI Dome',
      groups: 12,
      participants: 90
    },
    {
      name: 'Some Play',
      description: 'The global sensation is bringing the +–=÷× tour to India for the first time ever (and yes, you can pronounce it as the Mathematics tour!). Celebrating hits from his five albums that we know, love and can’t stop grooving to, this concert offers you a monumental stadium set-up with a centre stage and a mind-blowing experience that is bound to give you the ‘Shivers.’ This is Ed Sheeran in India like you’ve never experienced before! So India, get ready for the ‘Perfect Equation’ coming your way!',
      image: require('../../assets/Events/event3.jpg'),
      location: 'Prithvi Theatre, Mumbai',
      groups: 5,
      participants: 30
    }
  ]
  return (
        <Box w="full" px="1" alignItems="center">
            {events.map((event, idx) => <EventCard event={event} key={idx} />)}
        </Box>
  )
}
export default EventsDisplay
