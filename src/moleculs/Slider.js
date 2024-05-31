import React from "react";

import { Slider, SliderMark, SliderTrack, Tooltip, SliderThumb, SliderFilledTrack } from "@chakra-ui/react";

export default function Slide() {
    const [sliderValue, setSliderValue] = React.useState(45000)
    const [showTooltip, setShowTooltip] = React.useState(false)
    return (
        <Slider
            id='cost'
            defaultValue={45000}
            min={20000}
            max={200000}
            colorScheme='red'
            onChange={(v) => setSliderValue(v)}
            onMouseEnter={() => setShowTooltip(true)}
            w={'60%'}
            step={'5000'}
        >
            <SliderMark value={20000} mt='5' ml='0' fontSize='sm'>
                20 000₽
            </SliderMark>
            <SliderMark value={200000} mt='5' ml='-20' fontSize='sm'>
                200 000₽
            </SliderMark>
            <SliderMark
                value={sliderValue}
                textAlign='center'
                bg='white'
                color='black'
                mt='-5'
                ml='-10'
                w='20'
                borderColor={'#EE7230'}
                borderWidth={'1px'}
            >
                {sliderValue / 1000} 000₽
            </SliderMark>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    )
}