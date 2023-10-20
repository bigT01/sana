import {AiOutlineBell, AiOutlineSetting} from "react-icons/ai";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {ILocation} from "../../Constants/InterfaceConstanats";
import {PathConstants} from "../../Constants/MainConstants";

const Header = () => {
    const [pathName, setPathName] = useState<string>('')

    const location : ILocation = useLocation()

    useEffect(() => {
        //by hash table sorting the element to find and change header
        setPathName(PathConstants[location.pathname])
    }, [])

    return(
        <header className="pb-6">
            <div className="flex justify-between items-center">
                {/*page title*/}
                <h3>{pathName}</h3>

                <div className="flex gap-4">
                    <AiOutlineBell color={"secondaryGrey"} size={28}/>
                    <AiOutlineSetting color={"secondaryGrey"} size={28}/>
                </div>
            </div>

        </header>
    )
}

export default Header
