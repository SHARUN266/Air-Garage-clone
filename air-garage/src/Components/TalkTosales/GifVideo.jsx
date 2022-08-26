import { Box } from '@chakra-ui/react'
import React from 'react'

export default function GifVideo() {
  return (
<Box data-aos="fade-up" w="100%" h="100vh">
    <video  autoPlay playsInline muted loop>
    <source src="https://uc10ad06a56e4a8c93c878e9a644.dl.dropboxusercontent.com/cd/0/inline/Brr0bsyfORUFoiv6xHNvao3KN0seTGZnHHa-yQVGhKypA9kgWa3KnU3v4BS_kMjDftXrfq52HLAzUSENLws-w3Ts9LZ_riZjjlh-KogziWm-jBIGCiVhTTA8wzmV57LBOObM6Te_CSHo4IPECh2VZ-yPlZ450i7huZMMxx7K8FVrAQ/file#" type="video/mp4"/>
    </video>

</Box>
  )
}
