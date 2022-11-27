import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Landing from './pages/Landing';
import Ngo from './pages/Ngo';
import DonerRegistration from './pages/DonerRegistration';
import NgoRegistration from './pages/NgoRegistration';
import SuccessfullDonation from './pages/SuccessfullDonation';
import Donerlogin from './pages/Donerlogin';
import Logout from './pages/Logout';
import DonerdonationTable from './components/Tables/DonerdonationTable';
import Adminlanding from './pages/Adminlanding';
import Ngo_list from './components/Tables/Ngo_list';
import Ngologin from './pages/NgoLogin';
import NgoLanding from './pages/NgoLanding';
import NgoDonations from './components/Tables/NgoDonations';
import NgoRequests from './pages/NgoRequests';
import Requestview from './pages/Requestview';

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/ngo" element={<Ngo />} />
              <Route path="/doner_registration" element={<DonerRegistration/>} />
              <Route path="/ngo_registration" element={<NgoRegistration/>} />
              <Route path="/successfull_donation" element={<SuccessfullDonation/>} />
              <Route path="/doner_login" element={<Donerlogin/>} />
              <Route path="/logout" element={<Logout/>} />
              <Route path="/doner_donation_table" element={<DonerdonationTable/>} />
              <Route path="/adminlanding" element={<Adminlanding/>} />
              <Route path="/ngo_list" element={<Ngo_list/>} />
              <Route path="/ngo_login" element={<Ngologin/>} />
              <Route path="/ngo_landing" element={<NgoLanding/>} />
              <Route path="/ngo_donations" element={<NgoDonations/>} />
              <Route path="/ngo_requests" element={<NgoRequests/>} />
              <Route path="/requestview" element={<Requestview/>} />
            </Routes>
        </BrowserRouter>
      </ChakraProvider>
    
    </>
  );
}

export default App;
