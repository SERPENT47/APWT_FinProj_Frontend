import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./TopMenu";
const Dashboard=()=>{
    const PostStyle={
        marginleft:"20%",
        padding: "10px",
        textalign:"center"
    }
    return(
        <div>  
            <TopMenu/> 
            <h1>Welcome Doctor</h1>
        </div>
    )
}
export default Dashboard;


