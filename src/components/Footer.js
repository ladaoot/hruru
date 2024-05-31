import React from "react";
import { Text, Center, Image , Box} from "@chakra-ui/react";
import logo from "../static/logo.png"

export default function Footer(props) {
    return (
        <Box marginTop={'2%'} justifyContent={'center'}>
        <Center>
            <Image src={logo} />
        </Center>
        <Center>
            <Text  fontSize={'20px'} textColor={'#EE7230'} marginBottom={'50'} as={'b'}>2024</Text>
        </Center>
        </Box>
    )
}
