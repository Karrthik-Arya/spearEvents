import { type Event } from '../types/events'
import { type User } from '../types/general'
import API from './axios'

const api = {
  auth: { login: async (idToken: string) => await API.post<{ user: User, new: boolean, tokens: { sessionToken: string, refreshToken: string } }>('/auth/login', { idToken }) },
  user: {
    getProfile: async (profileId: string) => await API.get<User>(`/users/${profileId}`),
    getProfiles: async () => await API.get<User[]>('/users'),
    updateProfile: async (user: User) => { await API.put<User>(`/users/${user.id}`, user) }
  },
  events: {
    getEvents: async () => await API.get<Event[]>('/events'),
    createEvent: async (event: Event) => await API.post<Event>('/events', event)
  }
}

export default api
