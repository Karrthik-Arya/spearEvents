import { GoogleSignin } from '@react-native-google-signin/google-signin'
import Config from 'react-native-config'
import auth from '@react-native-firebase/auth'
import useAuthStore from '../store/authStore'
import api from './api'

const useFirebaseLogin = () => {
  GoogleSignin.configure({
    webClientId: Config.GOOGLE_WEB_CLIENT_ID,
    offlineAccess: true
  })

  const { setSessionToken, setRefreshToken, setProfile, setProfileId } = useAuthStore()

  const login = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken)
      const user = await auth().signInWithCredential(googleCredential)
      const idToken = await user.user.getIdToken()

      const myUser = await api.auth.login(idToken)
      setSessionToken(myUser.data.tokens.sessionToken)
      setRefreshToken(myUser.data.tokens.refreshToken)
      setProfileId(myUser.data.user.id)
      setProfile(myUser.data.user)
      return myUser.data
    } catch (error) {
      console.log(error)
    }
  }

  return { login }
}

export default useFirebaseLogin
