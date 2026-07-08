import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer"

function Parent1(){
    return(
        <div>
            <br></br>
            <h1>Multiple Child Components to Parent Component </h1>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}
export default Parent1;