import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./TopMenu";
import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';




const Login=()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [msg,setMsg] = useState("");
    const [errs,setErrs] = useState([]);
    const navigate = useNavigate();


    const PostStyle={
        marginleft:"20%",
        padding: "10px",
        textalign:"center"
    }



    const handleSubmit=(event)=>{
        event.preventDefault();
        var data=new FormData();
        data.append("email",email);
        data.append("password",password);
        axiosConfig.post("login",data).then((rsp)=>
        {
     
           console.log(rsp.data);

           if(rsp.data !=null)
            {
                
                localStorage.setItem('_authToken',rsp.data.tkey);
                Swal.fire({
                icon: 'success',
                title: 'Logged In',
                text: 'Loggin Successful',
                })
                navigate('/dashboard');
           }
        },
        (er)=>{
            setErrs(er.response.data);
            console.error(er.response.data)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong Credentials',
                })

        });
    }

    
    return(
    <div>
        <TopMenu/>

        <h1 style={PostStyle}>Login</h1>

        <form onSubmit={handleSubmit}>

            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                Email:<input  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><span>{errs.email? errs.email[0]:''}</span>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                Password:<input value={password} onChange={(e)=>{setPassword(e.target.value)}} 
                type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/><span>{errs.password? errs.password[0]:''}</span>
            
            </div>
            <input type="submit" value="Login" className="btn btn-success"/> 
        </form>

        
    </div>
    )
}
export default Login;