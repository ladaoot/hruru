import { ChakraProvider, Stack, Button,Box, Text, Input, Accordion, AccordionItem, AccordionButton, AccordionPanel, Tag, RadioGroup, Radio, Center, Flex, List, ListItem, Card, CardBody, Heading, Image, CardFooter } from "@chakra-ui/react";

import { LuSettings2 } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

import React from "react";
import Header from "../components/Header";
import Slide from "../moleculs/Slider";
import FilterHookForm from "../components/FiterHookForm";
import HomeHook from "../components/HomeHook";
import Footer from "../components/Footer";

const vacancy = [
    {
        id: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Meta_Inc._logo.jpg",
        title: "Разработчик Rust",
        cost: "от 120 000₽",
        company: "Meta",
        experience: "от 6 лет"

    },
    {
        id: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1280px-Coca-Cola_logo.svg.png",
        title: "Менеджер по рекламе",
        cost: "от 70 000₽",
        company: "Coca Cola",
        experience: "от 3 до 6 лет "
    },
    {
        id: 3,
        image: "https://w7.pngwing.com/pngs/426/895/png-transparent-google-logo-google-doodle-google-search-design-tshirt-company-text-trademark.png",
        title: "Data Engineer",
        cost: "до 90 000₽",
        company: "Google",
        experience: "Не имеет значения"

    }
]


export const Home = () => {
    const navigationEntries = window.performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0 && navigationEntries[0].type === 'reload') {
        console.log("Page was reloaded");
        console.log(localStorage.getItem('filterVacancy'))
        console.log(localStorage.getItem('findVacancy'))
        localStorage.removeItem('filterVacancy')
        localStorage.removeItem('findVacancy')

        localStorage.setItem('vacancy', JSON.stringify(vacancy))
        console.log(localStorage.getItem('vacancy'))
    }

    const navigate = useNavigate();
    return (
        <ChakraProvider>
            <Header ind={0} />
            <Accordion bgColor={'#EE723025'} allowToggle>
                <AccordionItem>
                    <h2>
                        <Stack direction={['column', 'row']} justifyContent={'center'} marginTop={'2%'} marginBottom={'2%'}>
                            <HomeHook />
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
                    <AccordionPanel pb={4} bgGradient={'linear( #EE723005 , #3C74A870 50%)'} >
                        <FilterHookForm />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Heading marginLeft={'17.5%'} marginTop={'2%'} textColor={'#EE7230'}>Найдено {JSON.parse(localStorage.getItem('vacancy')).length} вакансий</Heading>
            <List spacing={'2%'} marginTop={'2%'}  >
                {
                    JSON.parse(localStorage.getItem('vacancy')).map((data) => {
                        return (
                            <ListItem justifyContent={'center'}>
                                <Center>

                                    <Card variant='outline'
                                        direction={'row'}
                                        h={'200px'}
                                        justifyContent={'center'}
                                        borderWidth={'2px'}
                                        w={'65%'}
                                        borderRadius={0}
                                        shadow={'xl'}
                                        onClick={async event => { navigate(`/vacancy/${data.id}`) }}>
                                        <Stack w={'70%'}>
                                            <CardBody>
                                                <Heading textColor={'#EE7230'}>{data.title}</Heading>
                                                <Text fontSize={24}>{data.cost}</Text>
                                                <Text >{data.company}</Text>
                                            </CardBody>
                                            <CardFooter>
                                                <Stack direction={'row'} justifyContent={'center'}>
                                                    <IoBriefcaseOutline />
                                                    <Text fontSize='smaller' h={'16px'}>{data.experience}
                                                    </Text>
                                                </Stack>
                                            </CardFooter>
                                        </Stack>
                                        <Image objectFit='contain' src={data.image} maxW={'30%'} />
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