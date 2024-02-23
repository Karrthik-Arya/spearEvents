import { useState, type FC } from 'react'
import { type AppStackScreenProps } from '../../types/navigator'
import { ArrowBackIcon, Box, FormControl, HStack, Input, Text, VStack, WarningOutlineIcon } from 'native-base'
import PressableShrink from '../../components/shared/Buttons'
import { type Event } from '../../types/events'
import { createFormFactory } from '@tanstack/react-form'
import api from '../../utils/api'
import useAuthStore from '../../store/authStore'
import { useQueryClient } from '@tanstack/react-query'
// import { Cloudinary } from '@cloudinary/url-gen'
// import FeatherIcon from 'react-native-vector-icons/Feather'
// import { launchImageLibrary } from 'react-native-image-picker'
// import { upload, type UploadApiOptions } from 'cloudinary-react-native'

type CreateEventScreenProps = AppStackScreenProps<'CreateEventScreen'>

// const cld = new Cloudinary({
//   cloud: {
//     cloudName: 'drsf41scb',
//     apiKey: Config.CLOUDINARY_API_KEY,
//     apiSecret: Config.CLOUDINARY_API_SECRET
//   },
//   url: {
//     secure: true
//   }
// })

const CreateEventScreen: FC<CreateEventScreenProps> = ({ navigation }) => {
  const formFactory = createFormFactory<Event>({
    defaultValues: {
      title: '',
      image: '',
      description: '',
      location: '',
      groups: 0,
      participants: 0,
      eventTime: '0'
    }
  })

  const { profile } = useAuthStore()
  const queryClient = useQueryClient()
  const [loading, setLoading] = useState(false)

  const form = formFactory.useForm({
    onSubmit: async ({ value }) => {
      try {
        setLoading(true)
        await api.events.createEvent({ ...value, ownerId: profile?.id })
        await queryClient.invalidateQueries([{ queryKey: ['events'] }])
        navigation.goBack()
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }
  })

  const onSubmit = async () => {
    await form.handleSubmit()
  }

  //   const getImagePicker = async (field: FieldApi<any, any>) => {
  //     try {
  //     //   const options: UploadApiOptions = {
  //     //     upload_preset: 'event-upload',
  //     //     unsigned: true
  //     //   }
  //       const img = await launchImageLibrary({ mediaType: 'photo' })
  //       console.log(img)
  //       //   field.handleChange(img.assets[0].uri)
  //     //   await upload(cld, {
  //     //     file: img.assets[0].uri,
  //     //     options,
  //     //     callback: (error: any, response: any) => {
  //     //       console.log(error)
  //     //       console.log(response)
  //     //     }
  //     //   })
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   }
  return (
    <Box flex={1} bgColor={'white'} alignItems={'center'}>
        <HStack w="full" py='14px'>
            <PressableShrink w="10%" justifyContent='center' alignItems='center' h="10" onPress={() => { navigation.goBack() }}>
                <ArrowBackIcon alignSelf='center' m='2' color="black" size="6"/>
            </PressableShrink>
            <Text w='80%' textAlign='center' color="blue.600" fontSize="xl" bold>
              EventsMeet
            </Text>
        </HStack>

        <Text mt="2" textAlign='center' letterSpacing={'md'} fontSize="xl" fontWeight='500'>
          {"Let's Create an Event"}
        </Text>

        <form.Provider>
        <VStack mt="4" w="full" alignItems="center" space="5">
        <form.Field name="title">
        {(field) =>
            <FormControl w="80%">
                <FormControl.Label _text={{ color: 'black' }}>{field.name.charAt(0).toUpperCase() + field.name.slice(1)}</FormControl.Label>
                <Input value={field.state.value} onChangeText={field.handleChange} outlineColor={'black'} placeholder="Whats the occasion?" variant={'rounded'} />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Bleh!! Pls Enter an appropriate response
                </FormControl.ErrorMessage>
            </FormControl>
        }
        </form.Field>

        <form.Field name="description">
        {(field) =>
        <FormControl w="80%" >
                <FormControl.Label _text={{ color: 'black' }} >{field.name.charAt(0).toUpperCase() + field.name.slice(1)}</FormControl.Label>
                <Input value={field.state.value} onChangeText={field.handleChange} outlineColor={'black'} minH="40" placeholder="Tell us more" variant={'outline'} multiline />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Bleh!! Pls Enter an appropriate response
                </FormControl.ErrorMessage>
        </FormControl>}
        </form.Field>

        <form.Field name="location">
        {(field) =>
        <FormControl w="80%" >
                <FormControl.Label _text={{ color: 'black' }}>{field.name.charAt(0).toUpperCase() + field.name.slice(1)}</FormControl.Label>
                <Input value={field.state.value} onChangeText={field.handleChange} outlineColor={'black'} placeholder="So where's it?" variant={'rounded'} />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Bleh!! Pls Enter an appropriate response
                </FormControl.ErrorMessage>
        </FormControl>}
        </form.Field>

        {/* <form.Field name="image">
        {(field) =>
        <FormControl w="80%" >
                <FormControl.Label _text={{ color: 'black' }}>{field.name.charAt(0).toUpperCase() + field.name.slice(1)}</FormControl.Label>
                <PressableShrink onPress={async () => { await getImagePicker(field) }} my="2" w="60%" h="35">
                    <HStack w="full" bgColor={'purple.500'} alignItems="center" justifyContent="center" space="2" rounded="full" h="35">
                        <Text color="white" bold fontSize="md">
                           {`${field.state.value !== '' ? 'Uploaded' : 'Upload'}`}
                        </Text>
                        <FeatherIcon name={field.state.value !== '' ? 'check' : 'upload'} size={18} color="white" />
                    </HStack>
                </PressableShrink>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Bleh!! Pls Enter an appropriate response
                </FormControl.ErrorMessage>
        </FormControl>}
        </form.Field> */}
        </VStack>

         <PressableShrink disabled={loading} onPress={onSubmit} w="80%" position='absolute' bottom='4'>
            <Box w="full" h="45" shadow={'4'} rounded="full" alignItems='center' justifyContent='center' bgColor={'yellow.500'}>
                <Text bold fontSize='18'>
                    Let the Event Begin!
                </Text>
            </Box>
        </PressableShrink>
        </form.Provider>
    </Box>)
}

export default CreateEventScreen
