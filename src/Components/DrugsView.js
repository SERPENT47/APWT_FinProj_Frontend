import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
import TopMenu from "./TopMenu";
const DrugsView=()=>
{
    var index=1;
    const[view,setView]=useState([]);
    useEffect(()=>{
        axiosConfig.get("drugs").then((rsp)=>{
        setView(rsp.data);
        },(er)=>{

        })

    },[]); 
    return(
        <div>
            <TopMenu/>      
             <table style={{border: "3px solid rgb(0, 0, 0)"}}>
               <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Formula</th>
                    <th>Price</th>
                    <th>Available</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
               </thead> 
                    {view.map(v=>(
                <tbody key={index++}>        
                <tr>
                    <td >{v.id}</td>
                    <td >{v.name}</td>
                    <td >{v.formula}</td>
                    <td >{v.price}</td>
                    <td >{v.available}</td>
                    <td>{v.price*v.available}</td>
                    <td><Link to={`/drugs/update/${v.id}/${v.name}`}>Update</Link>
                    ||<Link to={`/drugs/delete/${v.id}`}>Delete</Link></td>
                </tr>
            </tbody>
                    ))}
            </table> 
        </div>
    )
}
export default DrugsView;