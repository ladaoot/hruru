
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

export default function FilterHookForm() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    const [value, setValue] = useState(45000);

    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(JSON.stringify(values, null, 2))
                resolve()
                localStorage.setItem('filterVacancy', JSON.stringify(values, null, 2))
            }, 3000)
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}  >
            <Stack justifyContent={'center'}  >
                <FormControl isInvalid={errors.name}>

                    <Stack direction={['column', 'row']} h={'45px'} justifyContent={'center'} >
                        <Tag borderColor={'#EE7230'}
                            bgColor={'#FFFFFF'}
                            textColor={'#EE7230'}
                            fontFamily={'Open Sans'}
                            borderWidth={'2px'}
                            fontSize={24}
                            w={'10%'}
                            h={'45px'}
                            justifyContent={'center'}>
                            Компания
                        </Tag>
                        <Input id='company' placeholder="Введите название компании"
                            borderColor={'#EE7230'}
                            bgColor={'#FFFFFF'}
                            borderWidth={'2px'}
                            h={'45px'}
                            w={'45%'}
                            fontFamily={'Open Sans'}
                            fontSize={24}
                            {...register('company', {})}
                            marginLeft={'2%'}

                        />
                    </Stack>
                    <Stack direction={['column', 'row']} h={'45px'} justifyContent={'center'} marginTop={'2%'} >
                        <Tag borderColor={'#EE7230'}
                            bgColor={'#FFFFFF'}
                            textColor={'#EE7230'}
                            fontFamily={'Open Sans'}
                            borderWidth={'2px'}
                            fontSize={24}
                            w={'10%'}
                            h={'45px'}
                            justifyContent={'center'}>
                            Город
                        </Tag>
                        <Input placeholder="Введите наименование города"
                            borderColor={'#EE7230'}
                            bgColor={'#FFFFFF'}
                            borderWidth={'2px'}
                            h={'45px'}
                            w={'45%'}
                            fontFamily={'Open Sans'}
                            fontSize={24}
                            id='city' {...register('city', {})}
                            marginLeft={'2%'} />
                    </Stack>
                    <Stack direction={['column', 'row']} h={'45px'} justifyContent={'center'} marginTop={'2%'}  >
                        <Tag borderColor={'#EE7230'}
                            bgColor={'#FFFFFF'}
                            textColor={'#EE7230'}
                            fontFamily={'Open Sans'}
                            borderWidth={'2px'}
                            fontSize={24}
                            w={'10%'}
                            h={'45px'}
                            justifyContent={'center'}>
                            Метро
                        </Tag>
                        <Input placeholder="Введите станцию метро"
                            borderColor={'#EE7230'}
                            bgColor={'#FFFFFF'}
                            borderWidth={'2px'}
                            h={'45px'}
                            w={'45%'}
                            fontFamily={'Open Sans'}
                            fontSize={24}
                            id='metro' {...register('metro', {})}
                            marginLeft={'2%'} />
                    </Stack>
                    <Stack direction={['column', 'row']} h={'45px'} justifyContent={'center'} marginTop={'2%'} >
                        <Tag borderColor={'#EE7230'}
                            bgColor={'#FFFFFF'}
                            textColor={'#EE7230'}
                            fontFamily={'Open Sans'}
                            borderWidth={'2px'}
                            fontSize={24}
                            w={'10%'}
                            justifyContent={'center'}
                            h={'45px'}>
                            Заработок, ₽
                        </Tag>
                        <Box w={'45%'} marginLeft={'2%'}>
                            <p style={{ marginLeft: `${((value - 20000) / 5000) * (790 / ((200000 - 20000) / 5000))}px` }} className="point_lable">{value}</p>
                            <input type="range" style={{ width: `100%` }}
                                id="cost" name="volume" min="20000" max="200000" defaultValue={'45000'} step={'5000'} {...register('cost', {})}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </Box>

                    </Stack>

                    <Stack direction={['column', 'row']} h={'45px'} justifyContent={'center'} marginTop={'2%'}  >
                        <Tag borderColor={'#EE7230'}
                            bgColor={'#FFFFFF'}
                            textColor={'#EE7230'}
                            fontFamily={'Open Sans'}
                            borderWidth={'2px'}
                            fontSize={24}
                            w={'10%'}
                            justifyContent={'center'}
                            h={'45px'}>
                            Опыт работы
                        </Tag>
                        <div style={{ width: `45%`, marginLeft: `2%` }}   >
                            <input type="radio" id="don't mind" name="expirience" value="null" className="radio" style={{ marginTop: `2%` }} {...register('expirience', {})} />
                            <label for="don't mind" style={{ marginLeft: `10px`, marginTop: `5px`, justifySelf: `center`, marginTop: `2%` }}>Не имеет значения</label>

                            <input type="radio" id="zero" name="expirience" value="0" className="radio" style={{ marginTop: `2%` }} {...register('expirience', {})} />
                            <label for="zero" style={{ marginLeft: `10px`, marginTop: `5px`, marginTop: `2%` }}>Нет опыта</label>

                            <input type="radio" id="more one" name="expirience" value="1-3" className="radio" style={{ marginTop: `2%` }} {...register('expirience', {})} />
                            <label for="more one" style={{ marginLeft: `10px`, marginTop: `5px`, marginTop: `2%` }}>От 1 года до 3 лет</label>

                            <input type="radio" id="more tree" name="expirience" value="3-6" className="radio" style={{ marginTop: `2%` }} {...register('expirience', {})} />
                            <label for="more tree" style={{ marginLeft: `10px`, marginTop: `5px`, marginTop: `2%` }}>От 3 до 6 лет</label>

                            <input type="radio" id="more_six" name="expirience" value="6" className="radio" style={{ marginTop: `2%` }} {...register('expirience', {})} />
                            <label for="more_six" style={{ marginLeft: `10px`, marginTop: `5px`, marginTop: `2%` }}>Более 6 лет</label>
                        </div>
                    </Stack>
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <Button
                    marginLeft={'45%'}
                    height={'45px'}
                    borderRadius={'8px'}
                    borderColor='#EE7230'
                    borderWidth={'2px'}
                    fontFamily={'Open Sans'}
                    fontSize={24}
                    bg={'#FFFFFF'}
                    w={'200px'}
                    type="submit"
                    marginTop={'2%'} >
                    Применить
                </Button>
            </Stack>
        </form >
    )
}
