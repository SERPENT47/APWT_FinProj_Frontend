import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Registration from  './Registration';
import DoctorView from './DoctorView';
import DoctorUpdate from './DoctorUpdate';
import DoctorDelete from './DoctorDelete';

import PatientRegister from './PatientRegister';
import PatientView from './PatientView';
import PatientUpdate from './PatientUpdate';
import PatientDelete from './PatientDelete.js';

import Drugs from './Drugs';
import DrugsView from './DrugsView';
import DrugsUpdate from './DrugsUpdate';
import DrugsDelete from './DrugsDelete';

import Pharmacy from './Pharmacy';
import PharmacyDelete from './PharmacyDelete';
import PharmacyUpdate from './PharmacyUpdate';
import PharmacyView from './PharmacyView';

import Login from './Login';
import Logout from './Logout';

import Home from './Home';
import Dashboard from './Dashboard';

const Main = ()=>{
    return (
        
        <div>
             <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/view/doctor" element={<DoctorView/>}/>
                    <Route path='/doctor/update/:id/:name' element={<DoctorUpdate/>}/>
                    <Route path='/doctor/delete/:id' element={<DoctorDelete/>}/>

                    <Route path="/pregister" element={<PatientRegister/>}/>

                    <Route path="/view/patient" element={<PatientView/>}/>
                    <Route path='/patient/update/:id/:name' element={<PatientUpdate/>}/>
                    <Route path='/patient/delete/:id' element={<PatientDelete/>}/>

                    <Route path="/drugs" element={<Drugs/>} />
                    <Route path="/view/drugs" element={<DrugsView/>}/>
                    <Route path='/drugs/update/:id/:name' element={<DrugsUpdate/>}/>
                    <Route path='/drugs/delete/:id' element={<DrugsDelete/>}/>

                    <Route path="/pharmacy" element={<Pharmacy/>} />                    
                    <Route path="/view/pharmacy" element={<PharmacyView/>}/>
                    <Route path='/pharmacy/update/:id' element={<PharmacyUpdate/>}/>
                    <Route path='/pharmacy/delete/:id' element={<PharmacyDelete/>}/>                  
                </Routes>
            </BrowserRouter>    
        </div>
    )
}
export default Main;