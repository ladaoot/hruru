import React from "react";

import { Stack, Center, Button } from "@chakra-ui/react";

import { Logo } from "../moleculs/Logo";
import HeadTabs from "../moleculs/HeaderTabs";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
    const array = Array();
    const navigate = useNavigate();

    var text = ""
    for (let index = 0; index < 4; index++) {
        array.push(props.ind == index)
    }
    return (
        <Stack direction={['column', 'row']} spacing='100px' justifyContent={'center'} bgColor={"#FFFFFF"}>
            <Logo />
            <HeadTabs select={array} />
            <Center height={'75px'} >

                <Button
                    height={'40px'}
                    borderRadius={'8px'}
                    borderColor='#EE7230'
                    borderWidth={'2px'}
                    fontFamily={'Open Sans'}
                    fontSize={24}
                    bg={'#FFFFFF'}
                    onClick={async event => { localStorage.getItem('jwt') ? navigate(`/cabinet/${localStorage.getItem('userType')}`) : navigate("/login") }}>
                    {
                        localStorage.getItem('jwt') ? "Личный кабинет" : "Вход"

                    }
                </Button>
            </Center>

        </Stack>
    )
}