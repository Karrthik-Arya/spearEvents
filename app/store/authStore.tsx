import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { zustandStorage } from './mmkvStorage'
import { type User } from '../types/general'

interface AuthState {
  sessionToken: string | null
  setSessionToken: (sessionToken: string) => void
  refreshToken: string | null
  setRefreshToken: (refreshToken: string) => void
  profileId: string | null
  setProfileId: (profileId: string) => void
  profile: User | null
  setProfile: (profile: User | null) => void
  onboarded: boolean
  setOnboarded: (onboarded: boolean) => void
}

const useAuthStore = create<AuthState>()(
  persist(
    devtools((set) => ({
      sessionToken: null,
      setSessionToken: (sessionToken) => { set({ sessionToken }) },
      refreshToken: null,
      setRefreshToken: (refreshToken) => { set({ refreshToken }) },
      profileId: null,
      setProfileId: (profileId) => { set({ profileId }) },
      profile: null,
      setProfile: (profile) => { set({ profile }) },
      onboarded: false,
      setOnboarded: (onboarded) => { set({ onboarded }) }
    })),
    { name: 'auth-store', getStorage: () => zustandStorage }
  )
)

export default useAuthStore
