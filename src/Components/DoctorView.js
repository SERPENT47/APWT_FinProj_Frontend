import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
const DoctorView=()=>{
    var index=1;
    var type="Admin";
    const[view,setView]=useState([]);
    useEffect(()=>{
        axiosConfig.get("doctor").then((rsp)=>{
        setView(rsp.data);
        console.log(rsp.data);
        },(er)=>{

        })

    },[]); 
    return(
        <div>
            <br></br>
            <h4>Doctor List</h4><br></br>
             <table style={{border: "3px solid rgb(0, 0, 0)"}}>
               <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
               </thead> 
                    {view.map(v=>(
                <tbody key={index++}>        
                <tr>
                    <td >{v.id}</td>
                    <td >{v.name}</td>
                    <td >{v.email}</td>
                    <td >{v.type}</td>
                    <td>{
                        type===v.type ? " ":<Link to={`/doctor/update/${v.id}/${v.name}`}>Update||</Link>}
                        {type===v.type ? " ":<Link to={`/doctor/delete/${v.id}`}>Delete</Link>}
                    </td>
                </tr>
            </tbody>
                    ))}
            </table> 
        </div>
    )
}
export default DoctorView;