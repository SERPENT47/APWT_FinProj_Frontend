import {useParams} from 'react-router-dom';
import {useState,useEffect}  from 'react';
import axiosConfig from './axiosConfig';
const PatientUpdate=()=>{
    const{id}=useParams();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[age,setAge]=useState("");
    const[phone,setPhone]=useState("");
    const[prescription,setPrescription]=useState("");
    const [msg,setMsg] = useState("");  
    const[view,setView]=useState([]);
    useEffect(()=>{
        axiosConfig.get(`patient/${id}`).then((rsp)=>{
        setView(rsp.data);
        },(er)=>{

        })
  },[]); 
    const[errs,setErrs]=useState({});
    const upload=(event)=>{
        event.preventDefault();
        var data=new FormData();
        data.append("name",name);
        data.append("email",email);
        data.append("age",age);
        data.append("phone",phone);
        data.append("prescription",prescription);

        axiosConfig.post("patient/update/"+id,data).then((rsp)=>
        {
           setMsg(rsp.data.msg); 
        },
        (er)=>{
            setErrs(er.response.data);
        });
    }
    
    return(
        <div>
            <h1>Update id:{id}</h1>
        <form onSubmit={upload}>
            <fieldset>
                Name:<input value={view.name} onChange={(e)=>{setName(e.target.value)}} type="text" disabled/><span>{errs.name? errs.name[0]:''}</span><br></br><br></br>
                Email:<input value={view.email} onChange={(e)=>{setEmail(e.target.value)}} type="text" disabled/><span>{errs.email? errs.email[0]:''}</span><br></br><br></br>
                Age:<input value={view.age} onChange={(e)=>{setAge(e.target.value)}} type="text" disabled/><span>{errs.age? errs.age[0]:''}</span><br></br><br></br>
                Phone:<input value={view.phone} onChange={(e)=>{setPhone(e.target.value)}} type="text" disabled/><span>{errs.phone? errs.phone[0]:''}</span><br></br><br></br>
                Prescription:<input value={view.prescription} onChange={(e)=>{setPrescription(e.target.value)}} type="text" /><span>{errs.prescription? errs.prescription[0]:''}</span><br></br><br></br>

                <input type="submit" value="Update"/><br></br>
                
            </fieldset>
        </form>
        <h1>{msg}</h1>
        </div>
    )
}
export default PatientUpdate;