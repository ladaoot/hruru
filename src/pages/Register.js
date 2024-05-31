import { Box, CardHeader, ChakraProvider, Image, Center, Heading, Input, Stack, Text, Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import './login.css'

import back from '../static/background.png'
import pig from '../static/pig.png'

import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();
    return (
        <ChakraProvider>
            <Box backgroundColor={'#00000000'} marginTop={'5%'} marginEnd={'10%'} >
                <Center>
                    <Image objectFit='contain' src={pig} maxH={'600px'} />
                    <Box bgColor={'#FFFFFF'} borderWidth={'2px'} borderColor={'#EE7230'} borderRadius={'20px'} w={'650px'} h={'400px'} marginLeft={'20%'}

                    >
                        <Stack direction={'row'} marginTop={'10%'} >
                            <Heading marginLeft={'5%'}>Регистрация</Heading>
                            <Text fontSize={'sm'} marginLeft={'50%'} justifySelf={'end'} onClick={async event => { navigate(`/login`) }}>Вход</Text>

                        </Stack>
                        <Stack justifyContent={'center'} marginLeft={'20%'}>
                        <Button 
                            height={'45px'}
                            borderRadius={'8px'}
                            borderColor='#EE7230'
                            borderWidth={'2px'}
                            fontFamily={'Open Sans'}
                            fontSize={24}
                            bg={'#FFFFFF'}
                            w={'400px'}
                            onClick={async event => { navigate(`/registration/user`) }}
                            marginTop={'10%'} >Соискатель работы</Button>
                        <Button 
                            height={'45px'}
                            borderRadius={'8px'}
                            borderColor='#EE7230'
                            borderWidth={'2px'}
                            fontFamily={'Open Sans'}
                            fontSize={24}
                            bg={'#FFFFFF'}
                            w={'400px'}
                            onClick={async event => { navigate(`/registration/company`) }}
                            marginTop={'10%'} >Компания или работадатель</Button>
                            </Stack>
                        <Stack direction={'row'} marginLeft={'2%'} marginTop={'10%'}>
                        </Stack>
                    </Box>
                </Center>
            </Box>

        </ChakraProvider>
    )
}