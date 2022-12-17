import { Button, Flex, Heading, Spacer, StackDivider, VStack } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps"
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { instanceOfLoginCredentials } from "../../data/auth/loginCredentials";
import OrgInfoForm from "./components/org-info-form";
import PersonalInfoForm from "./components/personal-info-form";
import SignUpWaiting from "./components/sign-up-waiting";
import SupportForm from "./components/support-form";
import "./scss/setup.scss";

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

    // retrieve the login credentials to be used by the auth provider
    // for sign up
    const { state } = useLocation();

    useEffect(() => {
        if (state === null || !instanceOfLoginCredentials(state)) {
            console.log("No credentials passed. Redirecting to signup");
            navigate('/registration');
        }
    })


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
            {activeStep !== steps.length ?
                (
                    <VStack className="formSize">
                        {/* Stepper buttons */}
                        <Flex w="100%" justify="flex-end">
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

                        {/* Stepper Title */}
                        <Flex w="100%">
                            {activeStep === steps.length - 1 ? (
                                <Heading className="stepTitle">Just a few more things.</Heading>
                            ) : (
                                <Heading className="stepTitle">Let's set your profile up.</Heading>
                            )}
                        </Flex>

                        {/* Stepper Forms */}
                        <Flex w="100%">
                            {
                                activeStep === 0 ? (
                                    <PersonalInfoForm />
                                ) : (
                                    activeStep === 1 ? (
                                        <OrgInfoForm />
                                    ) : (
                                        <SupportForm />
                                    ))
                            }

                        </Flex>

                    </VStack>
                ) :
                (
                    <VStack className="formSize">
                        <SignUpWaiting email={state.email} password={state.password} validated={state.validated}/>
                    </VStack>)}

        </VStack>
    )
}