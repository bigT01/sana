import React, {ReactNode} from "react";
import Aside from "../Components/Aside";
import Header from "../Components/Header";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}:LayoutProps) => {
    return(
        <div className={" max-w-screen max-h-screen w-full"}>
            <Aside/>

            <div className="h-full ml-auto px-6 py-6" style={{width: "90%"}}>
                <Header/>
                {children}
            </div>
        </div>
    )
}

export default Layout
