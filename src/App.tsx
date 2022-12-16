import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import { Route, Routes } from "react-router-dom";
import Landing from "./features/landing/Landing";
import LoginPage from "./features/login/login-page";
import ProfileSetupPage from "./features/registration/components/profile-setup-page";
import RegistrationPage from "./features/registration/registration-page";
import UserDashboardPage from "./features/user-dashboard/user-dashboard-page";
import { AuthProvider } from "./services/firebase/authProvider";

const theme = extendTheme({
  components: {
    Steps,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="dashboard" element={<UserDashboardPage />} />
          <Route path="profile-setup" element={<ProfileSetupPage />} />
        </Routes>
      </AuthProvider>
    </ChakraProvider>);
};

export default App;
