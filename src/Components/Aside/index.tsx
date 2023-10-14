import {LogoIcon} from "../../Icons";
import {NavLink} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {BiLogIn} from "react-icons/bi";

const Aside = () => {
    const [isProfile, setIsProfile] = useState<boolean>(false)
    const profileRef = useRef<HTMLDivElement | null>(null);


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
            <NavLink to='/'>
                <LogoIcon/>
            </NavLink>

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
