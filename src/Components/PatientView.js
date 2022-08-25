import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
import TopMenu from './TopMenu';
const PatientView=()=>{
    var index=1;
    var type="Admin";
    const[view,setView]=useState([]);
    useEffect(()=>{
        axiosConfig.get("patient").then((rsp)=>{
        setView(rsp.data);
        console.log(rsp.data);
        },(er)=>{

        })

    },[]); 
    return(
        <div>
            <TopMenu/>      
            <br></br>
            <h4>Patient List</h4><br></br>
             <table style={{border: "3px solid rgb(0, 0, 0)"}}>
               <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
               </thead> 
                    {view.map(v=>(
                <tbody key={index++}>        
                <tr>
                    <td >{v.id}</td>
                    <td >{v.name}</td>
                    <td>{
                        type===v.type ? " ":<Link to={`/patient/update/${v.id}/${v.name}`}>View Details||</Link>}
                        {type===v.type ? " ":<Link to={`/patient/delete/${v.id}`}>Delete</Link>}
                    </td>
                </tr>
            </tbody>
                    ))}
            </table> 
        </div>
    )
}
export default PatientView;