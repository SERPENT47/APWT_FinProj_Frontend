import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MenuItem from './MenuItem';
const TopMenu=()=>{
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">MENU</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link" href="/view/doctor">Doctor List</a>
                <a class="nav-item nav-link" href="/pharmacy">Add Pharmacy</a>
                <a class="nav-item nav-link" href="/view/pharmacy">Pharmacy</a>
                <a class="nav-item nav-link" href="/drugs">Add Drug</a>
                <a class="nav-item nav-link" href="/view/drugs">Drug List</a>
                <a class="nav-item nav-link" href="/pregister">Patient Register</a>
                <a class="nav-item nav-link" href="/view/patient">Patient List</a>
                <a class="nav-item nav-link" href="/logout">Logout</a>
                </div>
            </div>
            </nav> 
        </div>
    )
}
export default TopMenu;