
import {useParams} from 'react-router-dom';
import {useState,useEffect}  from 'react';
import axiosConfig from './axiosConfig';
const DrugsDelete=()=>{ 
    const{id}=useParams()
    const[errs,setErrs]=useState("");
    useEffect(()=>{
        axiosConfig.post("drugs/delete/"+id).
        then((succ)=>{
            //setMsg(succ.data.msg);
            window.location.href="/view/drugs";
        },(err)=>{ 
            console.error(err.response.data);
            //debugger;
        })
    },[]);
}
export default DrugsDelete;