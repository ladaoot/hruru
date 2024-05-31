import { Box, CardHeader, ChakraProvider, Image, Center, Heading, Input, Stack, Text, Button, InputGroup,InputRightElement } from "@chakra-ui/react";
import React from "react";
import './login.css'

import back from '../static/background.png'
import pig from '../static/pig.png'

import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()


    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(JSON.stringify(values, null, 2))
                resolve()
            }, 3000)
        })
    }
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate();
    return (
        <ChakraProvider>
            <Box  marginTop={'5%'} marginEnd={'10%'} >
                <Center>
                    <Image objectFit='contain' src={pig} maxH={'600px'}  marginRight={'20%'}/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box bgColor={'#FFFFFF'} borderWidth={'2px'} borderColor={'#EE7230'} borderRadius={'20px'} w={'650px'} h={'600px'} 
                        
                        >
                            <Stack direction={'row'} marginTop={'10%'} >
                                <Heading marginLeft={'5%'}>Вход</Heading>
                                <Text fontSize={'sm'} marginLeft={'50%'} justifySelf={'end'} onClick={async event => { navigate(`/registration`) }}>Регистрация</Text>
                            </Stack>

                            <Input placeholder="Электронная почта"
                                w={'90%'}
                                borderRadius={0}
                                borderEndWidth={'2px'}
                                borderTopWidth={0}
                                borderLeftWidth={0}
                                borderRightWidth={0}
                                borderColor={'#EE7230'}
                                marginTop={'10%'}
                                id="email"  {...register('email', {})} />

                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder="Пароль"
                                    w={'90%'}
                                    marginTop={'10%'}
                                    borderRadius={0}
                                    borderEndWidth={'2px'}
                                    borderTopWidth={0}
                                    borderLeftWidth={0}
                                    borderRightWidth={0}
                                    borderColor={'#EE7230'}
                                    id="password" {...register('password', {})}
                                />
                                <InputRightElement width='4.5rem' marginTop={'10%'} marginRight={'9%'}>
                                    <Button h='1.75rem' size='sm' onClick={handleClick} >
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Button marginLeft={'35%'}
                                height={'45px'}
                                borderRadius={'8px'}
                                borderColor='#EE7230'
                                borderWidth={'2px'}
                                fontFamily={'Open Sans'}
                                fontSize={24}
                                bg={'#FFFFFF'}
                                w={'200px'}
                                type="submit"
                                marginTop={'10%'} >Войти в акаунт</Button>
                            <Stack direction={'row'} marginLeft={'2%'} marginTop={'10%'}>
                                <Text fontSize={'sm'} marginLeft={'5%'}>Забыли пароль?</Text>
                                <Text marginLeft={'50%'} fontSize={'sm'}>Восстановите аккаунт</Text>
                            </Stack>
                        </Box>
                    </form>
                </Center>
            </Box>

        </ChakraProvider>
    )
}