import { Center, Image, Text, VStack } from "@chakra-ui/react";

export default function SignUpWaiting() {
    return (
        <Center >
            <VStack>
                <Image src="/images/cat.png"></Image>
                <Text className="loadingTitle">Welcome, ___! 👋🏻</Text>
                <Text className="loadingSubTitle">We’re setting up your profile right now. This will take just a second!</Text>
                <Text className="loadingInfo">Do you know that there are over 2000 charitable organisations in Singapore? Last year, registered charities attracted approximately S$3.1bn in annual donations.</Text>
            </VStack>
        </Center>
    )
}