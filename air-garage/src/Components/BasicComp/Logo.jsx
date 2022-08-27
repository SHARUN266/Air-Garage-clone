import React from 'react'
import {Image} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/">
    <Image
    h="45.51"
    src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png"
    alt="logo"
  />
  </Link>
  )
}
