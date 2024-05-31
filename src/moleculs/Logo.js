import React from "react"
import { Image } from "@chakra-ui/react"
import logo from '../static/logo.png'
export const Logo = ()=>{
return(<Image
                    width={'150px'}
                    height={'45px'}
                    margin={'20px'}
                    objectFit='cover'
                    src={logo}
                    alt='HRURU logo'
                />)}