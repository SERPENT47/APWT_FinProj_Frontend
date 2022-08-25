import axiosConfig from './axiosConfig';

const Logout=()=>{
        let token = localStorage.getItem('_authToken');
        var data=new FormData();
        data.append("token",token);
        axiosConfig.post("logout",data).then((rsp)=>
        {
           localStorage.clear();
           console.log(rsp.data.msg); 
        },
        (er)=>{
            localStorage.clear();
            console.error(er.response.data);
        });
  
}
export default Logout;