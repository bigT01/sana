import {HiOutlineAcademicCap} from "react-icons/hi";
import {ReactNode} from "react";

type MiniInfoCardProps = {
    name: string,
    icon: ReactNode,
    body: string,
}

const MiniInfoCard = ({name, icon, body}: MiniInfoCardProps) => {
    return(
        <div className="rounded-lg shadow p-4  w-fit animation-scale flex flex-col items-center" style={{border: '1px solid #EBEBEB', minWidth: '180px'}}>
            {/*header*/}
            <div className='flex items-center gap-2 mb-4'>
                <div className='p-1 bg-primaryBlue rounded-md'>
                    {/*<HiOutlineAcademicCap color="#FFFFFF" size={16}/>*/}
                    {icon}
                </div>
                <p className="text-sm" style={{color: '#4F4F4F'}}>{name}</p>
            </div>
            {/*body*/}
            <h3>{body}</h3>
        </div>
    )
}

export default MiniInfoCard
