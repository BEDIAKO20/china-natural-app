import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginHome from '../components/LoginHome/Login';
import Doctor from '../components/Doctor/Doctor';
import Acupressure from '../components/Acupressure/Acup';
import  Massage from '../components/Massage/Massage';
import  Nurse from '../components/Nurse/Nurse';
import Pharmacy from '../components/Pharmacy/Pharmacy';
import Laboratory from '../components/Laboratory/Lab'
import Gym from '../components/Gym/Gym'
import Physiotherap from '../components/Physiotherap/Physiotherap'
import LabDoctor from '../components/Doctor/LabDoctor';
import { PhaDoctor } from '../components/Doctor/PhaDoctor';

function router() {
  return (
    <div>
        <BrowserRouter>
       
        <Routes>
        
             <Route path={'/'} element={<Navigate to={'/loginHome/'}/>}/>
             <Route path={'/loginHome'} element={<LoginHome/>} />
              <Route  path={'/doctor'} element={<Doctor/>}/>
               <Route  path={'/acupressure'} element={<Acupressure/>}/>
                 <Route   path={'/nurse'} element={<Nurse/>}/>  
                 <Route  path={'/massage'} element={<Massage/>}/>
                 <Route  path={'/pharmacy'} element={<Pharmacy/>}/>
                 <Route path={'/laboratory'} element={<Laboratory/>}/>
                 <Route path={'/gym'} element={<Gym/>}/>
                 <Route path={'/physiotherap'} element={<Physiotherap/>}/>
                 <Route path={'/labDoctor'} element={<LabDoctor/>}/>
                 <Route path={'/phaDoctor'} element={<PhaDoctor/>}/>
                  </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default router