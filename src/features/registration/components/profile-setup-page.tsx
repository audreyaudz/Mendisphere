import { Button, Flex, Heading, Spacer, StackDivider, VStack } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps"
import { useNavigate } from "react-router-dom";

import "../scss/setup.scss";


const steps = [
    { label: 'About you' },
    { label: 'Organisation information' },
    { label: 'Get Started' },
];

export default function ProfileSetupPage() {

    const { nextStep, prevStep, activeStep } = useSteps({
        initialStep: 0,
    })

    const navigate = useNavigate();

    return (
        <VStack
            divider={<StackDivider borderColor='#D3D3D3;
            ' />}
            spacing={4}
            align="stretch">
            <Flex className="setupHeader">
                <Heading className="setupHeading">Mindbetter</Heading>
                <Spacer />
                <Steps colorScheme="blue" activeStep={activeStep}>
                    {steps.map(({ label }) => (
                        <Step label={label} key={label}>
                        </Step>
                    ))}
                </Steps>
            </Flex>
            <VStack className="formSize">
                <Flex justify="left">
                    {activeStep === steps.length - 1 ? (
                        <Heading className="formHeading">Just a few more things.</Heading>
                    ) : (
                        <Heading className="formHeading">Let's set your profile up.</Heading>
                    )}
                </Flex>

                <Flex width="100%" justify="flex-end">

                    {activeStep === 0 ? (
                        <Button className="backButton" onClick={activeStep === 0 ? () => navigate("/") : prevStep}>
                            {activeStep === 0 ? "Cancel" : "Back"}
                        </Button>
                    ) : (
                        <Button className="backButton" onClick={prevStep}>Back</Button>
                    )}

                    <Button className="nextButton" onClick={nextStep}>
                        {activeStep === steps.length - 1 ? "Complete profile" : "Next"}
                    </Button>
                </Flex>

            </VStack>

        </VStack>
    )
}