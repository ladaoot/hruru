import React from "react";

import { chakra, Tabs, Text, TabList } from "@chakra-ui/react";

import HeadTab from "./HeadTab";

export default function HeadTabs(props) {
    console.log(props.select)
    return (
        <Tabs variant={'unstyled'}>
            <TabList >

                {
                    [['Главная', '', props.select[0]], ['Резюме', 'resume', props.select[1]], ['Помощь', 'help', props.select[2]], ['О нас', 'about', props.select[3]]].map(([t, url, sel]) => (
                        <HeadTab text={t} url={url} isSelected={sel} />
                    ))
                }
            </TabList>
        </Tabs>
    )
}