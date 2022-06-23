import React,{Fragment} from "react";
import Header from "../componet/Header/header";
import UserStatus from "../componet/Main/UserStatus/status";
import '../screens/style.css'

const HomeScreen = ()=>{
    return(
        <Fragment>
            <Header></Header>
            <div className="container__main">
                <UserStatus/>
            </div>
        </Fragment>
    )

}

export default HomeScreen;