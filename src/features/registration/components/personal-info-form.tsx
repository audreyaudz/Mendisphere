import { FormLabel, Grid, GridItem, Input, Select, Text } from "@chakra-ui/react";

export default function PersonalInfoForm() {
    return (
        <Grid
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(3, 1fr)'
            w="100%"
            gap='120px'
        >
            <GridItem colSpan={1}>
                <Text className="formHeading">
                    Personal Info
                </Text>
                <Text className="formDescription">
                    Information about you. This will be displayed on your personal profile.
                </Text>
            </GridItem>
            <GridItem colSpan={2}>
                <Grid w="100%" templateColumns='repeat(3, 1fr)' gap='24px'>
                    <GridItem colSpan={1}>
                        <FormLabel className="formTitle">Title*</FormLabel>
                        <Select className="formSelect">
                            <option value='Mr.'>Mr.</option>
                            <option value='Mrs.'>Mrs.</option>
                            <option value='Ms.'>Ms.</option>
                            <option value='Mx.'>Mx.</option>
                        </Select>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormLabel className="formTitle">Full Name*</FormLabel>
                        <Input className="formInput">
                        </Input>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    );
}