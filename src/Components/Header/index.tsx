import {AiOutlineBell, AiOutlineSetting} from "react-icons/ai";

const Header = () => {
    return(
        <header className="pb-6">
            <div className="flex justify-between items-center">
                {/*page title*/}
                <h3>News page</h3>

                <div className="flex gap-4">
                    <AiOutlineBell color={"secondaryGrey"} size={28}/>
                    <AiOutlineSetting color={"secondaryGrey"} size={28}/>
                </div>
            </div>



        </header>
    )
}

export default Header
