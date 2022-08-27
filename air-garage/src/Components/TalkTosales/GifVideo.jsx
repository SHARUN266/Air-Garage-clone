import { Box } from '@chakra-ui/react'
import React from 'react'


export default function GifVideo() {
  return (
<Box  w="100%" h="100vh">
    <video  autoPlay muted loop>
    <source src="https://ucf944a8710b5234d05c45fb4657.dl.dropboxusercontent.com/cd/0/inline/BrwhHGbnGDJlTKl_rSMa-ZW8rU5T_m0M4ztehW9aPYliKN8hthWBP16snA2Jidnj4iWA7GGSDYEC5eIja2kvVYKMiLEavctcr01Mfia9lFpz61uwD2kbdF78FwXX9TB_GMZiycLIPZ3e1jauRcpgZRwEg3HnKVjj4wxYnZ16X6kKwg/file#" type="video/mp4"/>
    </video>

</Box>
  )
}
