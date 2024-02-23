import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import useAuthStore from '../store/authStore'

const useFirebaseLogout = () => {
  const { setSessionToken, setRefreshToken, setProfile, setProfileId } = useAuthStore()
  const logout = async () => {
    try {
      await auth().signOut()
      await GoogleSignin.revokeAccess()
      setSessionToken('')
      setRefreshToken('')
      setProfile(null)
      setProfileId('')
    } catch (error) {
      console.log(error)
    }
  }

  return { logout }
}

export default useFirebaseLogout
