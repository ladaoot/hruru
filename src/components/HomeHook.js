import { SliderMark, SliderTrack, Tooltip, SliderThumb, SliderFilledTrack, position, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ChakraProvider, Stack, Button, Input, Accordion, AccordionItem, AccordionButton, AccordionPanel, Tag, RadioGroup, Radio, Center, Flex } from "@chakra-ui/react";

import './style.css'


import ReactSlider from "react-slider";

import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
} from '@chakra-ui/react'


import Slide from "../moleculs/Slider";

export default function HomeHook() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()


    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(JSON.stringify(values, null, 2))
                localStorage.setItem('findVacancy',JSON.stringify(values, null, 2) )
                resolve()
            }, 3000)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}  >
            <Stack direction={['column', 'row']} w={'1000px'} textAlign='center' justifyContent={'center'} h={'45px'} spacing={'8%'}>
                <Input placeholder='Введите профессию, должность или компанию'
                    borderColor={'#EE7230'}
                    bgColor={'#FFFFFF'}
                    borderWidth={'2px'}
                    h={'45px'}
                    w={'75.5%'}
                    fontFamily={'Open Sans'}
                    fontSize={24}
                    id="find" {...register('find',{})}/>
                <Button
                    height={'45px'}
                    borderRadius={'8px'}
                    borderColor='#EE7230'
                    borderWidth={'2px'}
                    fontFamily={'Open Sans'}
                    fontSize={24}
                    bg={'#FFFFFF'}
                    type="submit">
                    Найти
                </Button>
            </Stack>

        </form>
    )
}