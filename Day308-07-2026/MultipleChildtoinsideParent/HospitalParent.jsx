import Doctor from "./Doctor";
import Patient from "./Patient";
import Appointment from "./Appointment";
import Pharmacy from "./Pharmacy";
function HospitalParent(){
    return(
        <>
        <h1>KIMS Hospital</h1>
        <Doctor/>
        <Patient/>
        <Appointment/>
        <Pharmacy/>
        </>
    )
}
export default HospitalParent