import { FormLabel, Grid, GridItem, Input, Select, Text } from "@chakra-ui/react";

export default function OrgInfoForm() {
    return (
        <Grid
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(3, 1fr)'
            w="100%"
            gap='120px'
        >
            <GridItem colSpan={1}>
                <Text className="formHeading">
                    Organisation information
                </Text>
                <Text className="formDescription">
                    Information about your organisation. This will be displayed on your organisation profile.
                </Text>
            </GridItem>
            <GridItem colSpan={2}>
                <Grid
                    w="100%"
                    templateRows='repeat(5, 1fr)'
                    templateColumns='repeat(3, 1fr)' gap='24px'>
                    <GridItem colSpan={2}>
                        <FormLabel className="formTitle">Name of Organisation*</FormLabel>
                        <Input 
                            className="formInput"
                            placeholder="Enter name here">
                        </Input>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormLabel className="formTitle">UEN*</FormLabel>
                        <Input className="formInput"
                            placeholder="T12345678E">
                        </Input>
                    </GridItem>
                    <GridItem colSpan={3} rowSpan={1}>
                        <FormLabel className="formTitle">Description*</FormLabel>
                        <Input className="formInput"
                            placeholder="What does your organisation do?">
                        </Input>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormLabel className="formTitle">Registered Address*</FormLabel>
                        <Input className="formInput"
                            placeholder="Organisation address here">
                        </Input>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormLabel className="formTitle">Organisation start date*</FormLabel>
                        <Input className="formInput"
                            placeholder="DD/MM/YYYY">
                        </Input>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormLabel className="formTitle">Your role in your organsation*</FormLabel>
                        <Select className="formSelect"
                            placeholder="Select a role (e.g. Founder)">
                            <option value='Founder'>Founder</option>
                            <option value='Executive'>Executive</option>
                            <option value='Staff'>Staff</option>
                        </Select>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormLabel className="formTitle">How many people in your organisation*</FormLabel>
                        <Select className="formSelect">
                            <option value='1-10'>1-10</option>
                            <option value='100'>100</option>
                            <option value='1000'>1000</option>
                            <option value='1000+'>1000+</option>
                        </Select>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    );
}