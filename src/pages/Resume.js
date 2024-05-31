import { ChakraProvider, Stack, Button, Box, Text, Input, Accordion, AccordionItem, AccordionButton, AccordionPanel, Tag, RadioGroup, Radio, Center, Flex, List, ListItem, Card, CardBody, Heading, Image, CardFooter, Badge } from "@chakra-ui/react";

import { LuSettings2 } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

import React from "react";
import Header from "../components/Header";
import Slide from "../moleculs/Slider";
import FilterHookForm from "../components/FiterHookForm";
import HomeHook from "../components/HomeHook";
import Footer from "../components/Footer";
import FilterHookResume from "../components/FilterHookResume";
import ResumeHook from "../components/ResumeHook";

const resume = [
    {
        id: 1,
        image: "https://photo-ideal.ru/upload/iblock/9b4/xfoto_na_rezyume_27.jpg.pagespeed.ic.bOQvWYodh3.jpg",
        title: "Разработчик Rust",
        info: "• Профессиональный HR, c опытом более 10 лет в крупных компаниях.\t• Начинала с управления проектами рекрутмента для FMCG-компаний.\t• После координировала одно из направлений поиска и подбора персонала Газпром...",
        name: "Диана Скрипченко",
        city: "Москва"

    },
    {
        id: 2,
        image: "https://photo-ideal.ru/upload/iblock/ef2/foto_dlya_rezyume_22.jpg",
        title: "Менеджер по рекламе",
        info: "• Профессиональный Продакт-менеджер с 12-летним опытом работы в IT.• Провел за год 300+ консультаций.• Мои ученики устраиваются в Яндекс, Сбер, Ozon, hh.ru и другие компании...",
        name: "Артем Еникеев",
        city: "Санкт-Питербург"
    },
    {
        id: 3,
        image: "https://media.istockphoto.com/id/1318482009/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%B0-%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=pBTeXEenXtio37m6ldLJWKjU-o9IkAU5VNRDrcZciEw=",
        title: "Data Engineer",
        info: "Буду полезна как молодым специалистам, так и руководителям в сферах: медицина, фарма, образование, бьюти-индустрия, HR, административный блок, HoReCa. • 11 лет успешного опыта в HR и карьерном консультировании: ведущие холдинговы...",
        name: "Маргарита Николаева",
        city: "Тюмень"

    }
]


export const Resume = () => {
    const navigationEntries = window.performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0 && navigationEntries[0].type === 'reload') {
        console.log("Page was reloaded");
        console.log(localStorage.getItem('filterResume'))
        console.log(localStorage.getItem('findResume'))
        localStorage.removeItem('filterResume')
        localStorage.removeItem('findResume')
        localStorage.setItem('jwt','rtrtrtrtr')
        localStorage.setItem('userType', 'user')

        localStorage.setItem('resume', JSON.stringify(resume))
        console.log(localStorage.getItem('resume'))
    }

    const navigate = useNavigate();
    return (
        <ChakraProvider>
            <Header ind={1} />
            <Accordion bgColor={'#EE723025'} allowToggle>
                <AccordionItem>
                    <h2>
                        <Stack direction={['column', 'row']} justifyContent={'center'} marginTop={'2%'} marginBottom={'2%'}>
                            <ResumeHook />
                            <AccordionButton w={'45px'}
                                h={'45px'}
                                padding={0}
                                borderColor={'#EE7230'}
                                borderWidth={'2px'}
                                marginRight={0}
                                borderRadius={'8px'}
                                justifyContent={'center'}
                                bgColor={'#FFFFFF'} marginLeft={'4%'}>
                                <LuSettings2 />
                            </AccordionButton>
                        </Stack>
                    </h2>
                    <AccordionPanel pb={4} bgGradient={'linear( #EE723000 , #3C74A870 50%)'} >
                        <FilterHookResume />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Heading marginLeft={'17.5%'} marginTop={'2%'} textColor={'#EE7230'}>Найдено {JSON.parse(localStorage.getItem('resume')).length} резюме</Heading>
            <List spacing={'2%'} marginTop={'2%'}  >
                {
                    JSON.parse(localStorage.getItem('resume')).map((data) => {
                        return (
                            <ListItem justifyContent={'center'}>
                                <Center>

                                    <Card variant='outline'
                                        direction={'row'}
                                        h={'250px'}
                                        justifyContent={'center'}
                                        borderWidth={'2px'}
                                        w={'65%'}
                                        borderRadius={0}
                                        shadow={'xl'}
                                        onClick={async event => { navigate(`/resume/${data.id}`) }}>
                                        <Image objectFit='cover' src={data.image} w={'20%'}  h={'90%'} borderRadius={'8px'} marginTop={'1%'}/>
                                        <Stack w={'70%'}>
                                            <CardBody>
                                                <Heading textColor={'#EE7230'}>{data.title}</Heading>
                                                <Text fontSize={24}>{data.name}</Text>
                                                <Text >{data.info}</Text>
                                            </CardBody>
                                            <CardFooter>
                                                <Stack direction={'row'} justifyContent={'center'}>
                                                    <Badge fontSize='smaller' h={'20px'} colorScheme='red' borderRadius={'6px'} >{data.city}
                                                    </Badge>
                                                </Stack>
                                            </CardFooter>
                                        </Stack>

                                    </Card>
                                </Center>
                            </ListItem>)
                    })
                }

            </List>
            <Box>
                <Footer />
            </Box>
        </ChakraProvider>
    )
}