import { Box, CardHeader, ChakraProvider, Image, Center, Heading, Input } from "@chakra-ui/react";
import React from "react";
import './login.css'

import back from '../static/background.png'
import pig from '../static/pig.png'

export const Login = () => {
    return (
        <ChakraProvider>
            <Box backgroundImage={back} >
                <Center>
                    <Image objectFit='contain' src={pig} maxW={'100px'} />
                    <form>
                        <Box backgroundColor={'#FFFFFF'} borderWidth={'2px'} borderColor={'#000000'} borderRadius={'8px'} w={'850px'}>
                            <Heading>Вход</Heading>
                            <Input placeholder="Электронная почта" w={'90%'} borderRadius={0} borderEndWidth={'2px'} borderTopWidth={0} borderLeftWidth={0} borderRightWidth={0} />
                            <Input placeholder="Пароль" w={'90%'} />
                        </Box>
                    </form>
                </Center>
            </Box>

        </ChakraProvider>
    )
}