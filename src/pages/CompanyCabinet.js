import { Box, CardHeader, ChakraProvider, Image, Center, Heading, Input, Stack, Text, Button, InputGroup, InputRightElement, Tag, Card, CardBody } from "@chakra-ui/react";
import React from "react";
import './login.css'

import back from '../static/background.png'
import pig from '../static/pig.png'

import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import '../index.css'

const user = [{
    name: "Bosco di Ciliegi",
    image: "https://cdn.worldvectorlogo.com/logos/bosco-di-ciliegi-family.svg",
    phone: "+7 900 7006050",
    email: "bbosdci@gmail.ru",
    info: "Bosco di Сiliegi – это более 200 магазинов модной одежды, обуви и аксессуаров. Наши магазины расположены в исторических торговых центрах Москвы, Санкт-Петербурга, Самары, Сочи. В пространство Bosco di Сiliegi входят магазины косметики и парфюмерии Articoli by Bosco, салоны красоты Articoli Salon&Spa и Dior Institut, ювелирные и часовые бутики Sublime by Bosco, стоматологическая клиника Bosco Clinica, а также ресторация Bosco – 2 ресторана Bosco Cafe и BarBosco."
}]

export const CompanyCabinet = () => {
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

    const navigationEntries = window.performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0 && navigationEntries[0].type === 'reload') {
        console.log("Page was reloaded");

        localStorage.setItem('userInformation', JSON.stringify(user))
    }

    const [isActive, setIsActive] = useState(false);


    return (
        <ChakraProvider>
            <Box backgroundColor={'#00000000'} marginTop={'5%'} marginEnd={'10%'} >
                <Center>
                    <Box bgColor={'#FFFFFF'} borderWidth={'2px'} borderColor={'#EE7230'} borderRadius={'50px'} w={'850px'}>
                        {
                            JSON.parse(localStorage.getItem('userInformation')).map((data) => {
                                return (
                                    <Stack direction={'row'}>
                                        <Box w={'50%'} marginTop={'10%'} marginLeft={'5%'}>
                                            <Heading>Личный кабинет</Heading>
                                            <Tag marginTop={'10%'} >Название:</Tag>
                                            <Text w={'90%'}
                                                marginTop={'5%'}
                                                borderRadius={0}
                                                borderBottomWidth={'2px'}
                                                borderColor={'#EE7230'}>{data.name}</Text>
                                            <Tag marginTop={'10%'}>Email:</Tag>
                                            <Text w={'90%'}
                                                marginTop={'5%'}
                                                borderRadius={0}
                                                borderBottomWidth={'2px'}
                                                borderColor={'#EE7230'}>{data.email}</Text>
                                            <Tag marginTop={'10%'}>Контактный телефон:</Tag>
                                            <Text w={'90%'}
                                                marginTop={'5%'}
                                                borderRadius={0}
                                                borderBottomWidth={'2px'}
                                                borderColor={'#EE7230'}
                                                marginBottom={'10%'}>{data.phone}</Text>
                                        </Box>
                                        <Card w={'70%'} borderRadius={'50px'}>
                                            <CardBody justifyContent={'center'} >
                                                <Box borderColor={'#EE7230'} borderWidth={'2px'} w={'40%'} marginLeft={'30%'} marginBottom={'10%'} marginTop={'10%'}>
                                                    <Image src={data.image} /></Box>
                                                <Tag  >О компании:</Tag>
                                                <div className={isActive ? " text-block_active" : 'text-block'}>
                                                    {data.info}
                                                </div>
                                                <Button 
                                                height={'40px'}
                                                borderRadius={'full'}
                                                borderColor='#EE7230'
                                                borderWidth={'2px'}
                                                fontFamily={'Open Sans'}
                                                fontSize={24}
                                                bg={'#FFFFFF'}
                                                marginLeft={'30%'} marginTop={'2%'} onClick={() => setIsActive(!isActive)}>{
                                                    isActive ? "Свернуть" : "Развернуть"
                                                }</Button>
                                            </CardBody>
                                        </Card>
                                    </Stack>
                                )
                            })
                        }
                        {/* <Stack direction={'row'}>
                            <Box>
                                <Heading>Личный кабинет</Heading>
                                <Tag>Название:</Tag>
                                <Text></Text>
                                <Tag>Email:</Tag>
                                <Text></Text>
                                <Tag>Контактный телефон:</Tag>
                                <Text></Text>
                            </Box>
                        </Stack> */}
                    </Box>
                </Center>
            </Box>

        </ChakraProvider>
    )
}