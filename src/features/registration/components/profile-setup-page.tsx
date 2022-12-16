import { Box, Flex, Heading, Spacer, StackDivider, VStack } from "@chakra-ui/react";
import "../scss/setup.scss";

export default function ProfileSetupPage() {
    return (
        <VStack
            divider={<StackDivider borderColor='#D3D3D3;
            ' />}
            spacing={4}
            align="stretch">
            <Flex className="setupHeader">
               <Heading className="setupHeading">Mindbetter</Heading>

                <Spacer />
                <Box p='4' bg='green.400'>
                    Box 2
                </Box>
            </Flex>
            <Box>
                Form content WIP
            </Box>

        </VStack>
    )
}