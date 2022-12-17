import { FormLabel, Grid, GridItem, Input, Select, Text } from "@chakra-ui/react";

export default function SupportForm() {
    return (
        <Grid
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(3, 1fr)'
            w="100%"
            gap='120px'
        >
            <GridItem colSpan={1}>
                <Text className="formHeading">
                    How can Mindbetter help you?
                </Text>
                <Text className="formDescription">
                    What do you need most?
                </Text>
            </GridItem>
            <GridItem colSpan={2}>
                <Grid w="100%"
                    templateRows='repeat(3,1fr)'
                    templateColumns='repeat(1, 1fr)' gap='24px'>
                    <GridItem colSpan={1}>
                        <FormLabel className="formTitle">What are you here for?*</FormLabel>
                        <Select className="formSelect"
                            placeholder="Select a reason (e.g. funding)">
                            <option value='Funding'>Funding</option>
                            <option value='Mentorship'>Mentorship</option>
                        </Select>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormLabel className="formTitle">How will it help your organisation?*</FormLabel>
                        <Input className="formInput">
                        </Input>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormLabel className="formTitle">Additional comments?</FormLabel>
                        <Input className="formInput"
                            placeholder="Any comments are welcome! We want to know more about how we can help you.">
                        </Input>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    );
}