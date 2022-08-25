
import {useParams} from 'react-router-dom';
import {useState,useEffect}  from 'react';
import axiosConfig from './axiosConfig';
const PatientDelete=()=>{
    const{id} = useParams();
    useEffect(()=>{
        axiosConfig.post("patient/delete/"+id).
        then((succ)=>{
            window.location.href="/view/patient";
        },(err)=>{ 
            // window.location.href="/";// setErrs(errs);
            //debugger;
        })
    },[]);
}
export default PatientDelete;