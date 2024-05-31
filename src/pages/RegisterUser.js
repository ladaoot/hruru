import { Box, CardHeader, ChakraProvider, Image, Center, Heading, Input, Stack, Text, Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import './login.css'

import back from '../static/background.png'
import pig from '../static/pig.png'

import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

export const RegisterUser = () => {
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

    const [show1, setShow1] = React.useState(false)
    const handleClick1 = () => setShow1(!show1)
    const navigate = useNavigate();
    return (
        <ChakraProvider>
            <Box backgroundColor={'#00000000'} marginTop={'5%'} marginEnd={'10%'} >
                <Center>
                    <Image objectFit='contain' src={pig} maxH={'600px'} marginRight={'20%'} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box bgColor={'#FFFFFF'} borderWidth={'2px'} borderColor={'#EE7230'} borderRadius={'20px'} w={'750px'} h={'950px'}

                        >
                            <Stack direction={'row'} marginTop={'10%'} >
                                <Heading marginLeft={'5%'}>Регистрация</Heading>
                                <Text fontSize={'sm'} marginLeft={'50%'} justifySelf={'end'} onClick={async event => { navigate(`/login`) }}>Вход</Text>
                            </Stack>

                            <Input placeholder="Имя"
                                w={'90%'}
                                borderRadius={0}
                                borderEndWidth={'2px'}
                                borderTopWidth={0}
                                borderLeftWidth={0}
                                borderRightWidth={0}
                                borderColor={'#EE7230'}
                                marginTop={'10%'}
                                id="name"  {...register('name', {})} />
                            <Input placeholder="Фамилия"
                                w={'90%'}
                                borderRadius={0}
                                borderEndWidth={'2px'}
                                borderTopWidth={0}
                                borderLeftWidth={0}
                                borderRightWidth={0}
                                borderColor={'#EE7230'}
                                marginTop={'10%'}
                                id="surname"  {...register('surname', {})} />
                            <Input placeholder="Контактный телефон"
                                w={'90%'}
                                borderRadius={0}
                                borderEndWidth={'2px'}
                                borderTopWidth={0}
                                borderLeftWidth={0}
                                borderRightWidth={0}
                                borderColor={'#EE7230'}
                                marginTop={'10%'}
                                id="phone"  {...register('phone', {})} />
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
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show1 ? 'text' : 'password'}
                                    placeholder="Повтарите Пароль"
                                    w={'90%'}
                                    marginTop={'10%'}
                                    borderRadius={0}
                                    borderEndWidth={'2px'}
                                    borderTopWidth={0}
                                    borderLeftWidth={0}
                                    borderRightWidth={0}
                                    borderColor={'#EE7230'}
                                />
                                <InputRightElement width='4.5rem' marginTop={'10%'} marginRight={'9%'}>
                                    <Button h='1.75rem' size='sm' onClick={handleClick1} >
                                        {show1 ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Button marginLeft={'30%'}
                                height={'45px'}
                                borderRadius={'8px'}
                                borderColor='#EE7230'
                                borderWidth={'2px'}
                                fontFamily={'Open Sans'}
                                fontSize={24}
                                bg={'#FFFFFF'}
                                w={'300px'}
                                type="submit"
                                marginTop={'10%'} >Зарегистрироваться</Button>
                        </Box>
                    </form>
                </Center>
            </Box>

        </ChakraProvider>
    )
}