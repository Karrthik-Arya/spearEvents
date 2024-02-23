import axios, { type AxiosError } from 'axios'
import Config from 'react-native-config'
import useAuthStore from '../store/authStore'

// Create an Axios instance
const API = axios.create({
  baseURL: Config.API_URL, // Your API base URL from environment variables
  timeout: 10000 // Adjust timeout as needed
})

// Add a request interceptor to attach authToken to requests
API.interceptors.request.use(
  async (config) => {
    const { sessionToken } = useAuthStore.getState() // Get authToken from Zustand store
    if (sessionToken !== null) {
      config.headers.Authorization = `Bearer ${sessionToken}`
    }
    return config
  },
  async (error) => {
    // Handle request errors
    return await Promise.reject(error)
  }
)

API.interceptors.response.use(
  (response) => {
    return response
  },
  async (error: AxiosError) => {
    const originalRequest = error.config
    if (originalRequest && error.response !== null && error?.response?.status === 403 && error.config && !error.config?._isRetry) {
      error.config._isRetry = true

      try {
        // Call your refresh token endpoint to get a new access token
        const refreshToken = useAuthStore.getState().refreshToken
        const response = await API.post('/auth/refresh-token', { refreshToken })
        const newAccessToken = response.data.accessToken

        // Update the access token in Zustand store
        useAuthStore.setState({ sessionToken: newAccessToken })

        // Retry the original request with the new access token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        return await API(originalRequest)
      } catch (refreshError) {
        // Handle refresh token failure (e.g., logout user, redirect to login page)
        console.error('Failed to refresh token:', refreshError)
        // Optionally, logout the user or redirect to the login page
        // Example: logoutUser();
        throw refreshError
      }
    }
    return await Promise.reject(error)
  }
)

export default API
