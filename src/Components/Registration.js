import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
const Register=()=>{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[conf_password,setConf_password]=useState("");
    const[type,setType]=useState("");
    const [msg,setMsg] = useState("");
    const [errs,setErrs] = useState([]);
    const PostStyle={
        padding: "10px",
        textalign:"center"
    }
    const upload=(event)=>{
        event.preventDefault();
        var data=new FormData();
        data.append("name",name);
        data.append("email",email);
        data.append("password",password);
        data.append("conf_password",conf_password);
        data.append("type",type);
        axiosConfig.post("register",data).then((rsp)=>
        {
           setMsg(rsp.data.msg); 
        },
        (er)=>{
            setErrs(er.response.data);
            console.error(er.response.data);
        });
    }
    return(
    <div>
        <h1 style={PostStyle}>Registration</h1>
        <form onSubmit={upload}>
            <fieldset>
                Name:<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"/><span>{errs.name? errs.name[0]:''}</span><br></br><br></br>
                Email:<input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text"/><span>{errs.email? errs.email[0]:''}</span><br></br><br></br>
                Password:<input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"/><span>{errs.password? errs.password[0]:''}</span><br></br><br></br>
                Confirm Password:<input value={conf_password} onChange={(e)=>{setConf_password(e.target.value)}} type="password"/><span>{errs.conf_password? errs.conf_password[0]:''}</span><br></br><br></br>
                Type: 
                Patient<input type="radio" value="Patient" name={type} onChange={e=>setType(e.target.value)}/>
                Doctor<input type="radio" value="Doctor" name={type} onChange={e=>setType(e.target.value)}/>
                Employee<input type="radio" value="Employee" name={type} onChange={e=>setType(e.target.value)}/> <span>{errs.type? errs.type[0]:''}</span>
                <br/><br></br>
                <input className={'btn btn-success'} type="submit" value="Register"/>
                <a href="/home" className="btn btn-success">Home</a>
                
            </fieldset>
        </form>
        <h4>{msg}</h4>
    </div>
    )
}
export default Register;