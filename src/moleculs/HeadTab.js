import React from "react";
import { useNavigate } from "react-router-dom";
import { chakra, Text } from "@chakra-ui/react";

export default function HeadTab(props) {

    const navigate = useNavigate();
    if (props.isSelected) {
        return (

            <chakra.tab
                bg='#FFFFFF'
                textColor='#000000'
                // borderColor='#EBCA83'
                // borderWidth={2}

                borderBottomColor='#EE7230'
                fontFamily='Open Sans'

                borderBottomWidth={'2px'}  height={'40px'} margin={"20px"} fontSize={24} width='120px'

                _hover={{
                    bg: '#EE723025' 
                }}
                onClick={async event => { navigate(`/${props.url}`) }}

            >
                <Text align={'center'}   >
                    {props.text}
                </Text>
            </chakra.tab>)
    } else {
        return (

            <chakra.tab
            textColor='#000000'
            // borderColor='#EBCA83'
            // borderWidth={2}

            // borderBottomColor='#EE7230'
            fontFamily='Open Sans'

            // borderBottomWidth={'2px'} 
             height={'40px'} margin={"20px"} fontSize={24} width='120px'

             _hover={{
                bg: '#EE723025' 
            }}
            onClick={async event => { navigate(`/${props.url}`) }}

            >
                <Text align={'center'}   >
                    {props.text}
                </Text>
            </chakra.tab>)
    }

}