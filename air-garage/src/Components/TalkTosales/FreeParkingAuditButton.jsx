import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function FreeParkingAuditButton() {
  return (
    <Box mt="5%"   >
      <Link  to="/findparking">
        <Button   id="FreeParkingButton"      > GET A FREE PARKING AUDIT</Button>
        </Link>
    </Box>
  )
}
