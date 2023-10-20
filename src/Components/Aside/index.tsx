import {LogoIcon} from "../../Icons";
import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {BiLogIn, BiSolidDashboard} from "react-icons/bi";
import {PathConstants, pathNameConstants, pathNameRawConstants, userRole} from "../../Constants/MainConstants";
import {ILocation} from "../../Constants/InterfaceConstanats";
import {BsChatLeftText} from "react-icons/bs";

const fakeRole = 'teacher'

const Aside = () => {
    const location: ILocation = useLocation()
    const [isProfile, setIsProfile] = useState<boolean>(false)
    const profileRef = useRef<HTMLDivElement | null>(null);

    //constants to style elements
    const centralized = "flex justify-center items-center"
    const sizeOfNavLink = 64


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsProfile(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return(
        <aside className="bg-secondaryBlack h-screen fixed py-8 flex flex-col items-center" style={{width: "10%"}}>
            {/*logo*/}
            <NavLink to='/' className="mb-12">
                <LogoIcon/>
            </NavLink>

            <ul className="h-full w-full flex flex-col gap-4 items-center">
                {/*link to dashboard*/}
                <li className={`h-auto w-auto ${PathConstants[location.pathname] === pathNameConstants.dashboard ? `bg-primaryBlue` : null} rounded-md`} style={{width: sizeOfNavLink, height: sizeOfNavLink}}>
                    <NavLink to={fakeRole === userRole.teacher ? pathNameRawConstants.dashboardTeacher : pathNameRawConstants.dashboardStudent} className={centralized} style={{width: sizeOfNavLink, height: sizeOfNavLink}}>
                        <BiSolidDashboard size={28} color={'#FFFFFF'}/>
                    </NavLink>
                </li>
                {/*link to chat*/}
                <li className={`h-auto w-auto ${PathConstants[location.pathname] === pathNameConstants.chat ? `bg-primaryBlue` : null} rounded-md`} style={{width: sizeOfNavLink, height: sizeOfNavLink}}>
                    <NavLink to={'/teacher/chat'} className={centralized} style={{width: sizeOfNavLink, height: sizeOfNavLink}}>
                        <BsChatLeftText size={28} color={'#FFFFFF'}/>
                    </NavLink>
                </li>
            </ul>

            {/*user profile or link to authorization*/}
            <div className="absolute bottom-8 w-10 h-10" ref={profileRef}>
                <div className="relative w-full h-full">
                    <button className={"w-10 h-10 rounded-full bg-primaryPurple "} onClick={() => setIsProfile(!isProfile)}>

                    </button>
                    {isProfile && <div className="bg-secondaryCyan py-6 px-8 absolute text-white bottom-0 flex rounded-xl " >
                        <NavLink to={'/authorization'} className="flex gap-2 items-center">
                            <BiLogIn/>
                            <span className="text-lg">Login</span>
                        </NavLink>
                    </div>
                    }
                </div>


            </div>

        </aside>
    )
}

export default Aside
