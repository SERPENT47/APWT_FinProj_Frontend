
import {useParams} from 'react-router-dom';
import {useState,useEffect}  from 'react';
import axiosConfig from './axiosConfig';
const DoctorDelete=()=>{
    const{id} = useParams();
    useEffect(()=>{
        axiosConfig.post("doctor/delete/"+id).
        then((succ)=>{
            window.location.href="/view/doctor";
        },(err)=>{ 
            // window.location.href="/";// setErrs(errs);
            //debugger;
        })
    },[]);
}
export default DoctorDelete;