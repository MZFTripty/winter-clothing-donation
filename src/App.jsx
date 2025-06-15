import { Route, Routes } from "react-router";
import LogIn from "./pages/login/LogIn";
import ContactUs from "./pages/contactUs/ContactUs";
import Home from "./pages/homePage/Home";
import Navbar from "./pages/homePage/Navbar";
import Footer from "./pages/homePage/Footer";
import Layout from "./Components/Layout";
import DonationCampaign from "./pages/donationCampaign/DonationCampaign";
import HowToHelp from "./pages/howToHelp/HowToHelp";
import Dashboard from "./pages/dashboard/Dashboard";
import DonationDetails from "./pages/donationCampaign/DonationDetails";
import Register from "./pages/register/Register";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="donation-campaigns" element={<DonationCampaign></DonationCampaign>} />
          <Route path="how-to-help" element={<HowToHelp></HowToHelp>} />
          <Route path="dashboard" element={<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>} />
          <Route path="donation-details/:id" element={<PrivateRoutes><DonationDetails></DonationDetails></PrivateRoutes>} />
          
        </Route>
        

        <Route path="login" element={<LogIn></LogIn>}></Route>
        <Route path="register" element={<Register></Register>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        
      </Routes>

      
    </>
  );
}

export default App;
