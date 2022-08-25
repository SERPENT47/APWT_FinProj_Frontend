import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Home=()=>{
    const PostStyle={
        marginleft:"20%",
        padding: "10px",
        textalign:"center"
    }
    return(
        <div>  
            <h1>HOME</h1>
            <a href="/login" className="btn btn-success">Login</a>
            <a href="/register" className="btn btn-success">Register</a>
        </div>
    )
}
export default Home;


