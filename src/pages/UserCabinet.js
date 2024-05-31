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
    name: "Екатерина",
    surname: "Попова",
    image: "https://media.istockphoto.com/id/1185367863/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%83%D0%BB%D1%8B%D0%B1%D0%B0%D1%8F%D1%81%D1%8C-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82.jpg?s=612x612&w=0&k=20&c=_4xyNyhwAf5zH4HRs932z1DV97h9pciJEPOxEiBdLy0=",
    phone: "+7 900 8007060",
    email: "ekpop1709@mail.ru",
    info: "Дипломированный карьерный консультант и психолог, mагистерская степень в области управления персоналом, HR- эксперт со стажем более 10 лет. Помогу выстроить максимально короткий путь для достижения карьерных целей.• >1500 проведённых собеседований;• >800 карьерных консультаций. • >1000 продающих резюме и сопроводительных писем; Основные специализации: продажи, FMCG, медицина/фармацевтика, рабочие специальности, строительство, наука/образование, средний и высший менеджмент, страхование, управление персоналом. Приглашаю найти работу, которая принесет удовольствие и доход.Записывайся на консультацию."
}]

export const UserCabinet = () => {
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
                                            <Tag marginTop={'10%'} >Имя:</Tag>
                                            <Text w={'90%'}
                                                marginTop={'5%'}
                                                borderRadius={0}
                                                borderBottomWidth={'2px'}
                                                borderColor={'#EE7230'}>{data.name}</Text>
                                            <Tag marginTop={'10%'} >Фамилия:</Tag>
                                            <Text w={'90%'}
                                                marginTop={'5%'}
                                                borderRadius={0}
                                                borderBottomWidth={'2px'}
                                                borderColor={'#EE7230'}>{data.surname}</Text>
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
                                                <Box borderColor={'#EE7230'} borderWidth={'2px'} w={'40%'} borderRadius={'full'} marginLeft={'30%'} marginBottom={'10%'} marginTop={'15%'}>
                                                    <Image src={data.image} objectFit={'cover'} borderRadius={'full'} /></Box>
                                                <Tag  >Обо мне:</Tag>
                                                <div className={isActive ? " text-block_active" : 'text-block'}>
                                                    {data.info}
                                                </div>
                                                <Button
                                                    height={'40px'}
                                                    borderRadius={'8px'}
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
                    </Box>
                </Center>
            </Box>

        </ChakraProvider>
    )
}