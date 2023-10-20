import Layout from "../Layout";
import MiniInfoCard from "../Components/Card/MiniInfoCard";
import {HiOutlineAcademicCap} from "react-icons/hi";
import {BiBook, BiMoney} from "react-icons/bi";
import {FiClock} from "react-icons/fi";
import {Link} from "react-router-dom";
import {CgMediaPodcast} from "react-icons/cg";
import RecentAnalyze from "../Components/Graphs/RecentAnalyze";

const TeacherDashboard = () => {
    return(
        <Layout>
            <main className="w-full flex gap-4 justify-between" style={{height: 10}}>
                <div className="w-8/12 ">
                    {/*overview*/}
                    <h4 className="mb-2">Overview</h4>
                    <div className="flex gap-4 mb-4 justify-between">
                        <MiniInfoCard name={'number of students'} body={'3'} icon={<HiOutlineAcademicCap color="#FFFFFF" size={16}/>}/>
                        <MiniInfoCard name={'number of courses'} body={'5'} icon={<BiBook color="#FFFFFF" size={16}/>}/>
                        <MiniInfoCard name={'total hour of your course'} body={'60H 39M'} icon={<FiClock color="#FFFFFF" size={16}/>}/>
                        <MiniInfoCard name={'earned money'} body={'45 000 ₸'} icon={<BiMoney color="#FFFFFF" size={16}/>}/>
                    </div>
                    <div className="flex gap-4 justify-between">
                        {/*course editor*/}
                        <div className="w-8/12 rounded-lg shadow p-4 flex flex-col">
                            <h5 className="uppercase mb-2">course editor</h5>
                            <div className="flex items-center gap-4" style={{height: '200px'}}>
                                <img src="/main.png" alt="img:main" className="object-cover w-5/12 h-auto" />
                                <div className="h-full flex flex-col justify-between items-end">
                                    <h4 className="font-bold">Home Security with basic electronics</h4>

                                    <Link to='/teacher/course/edit' className="py-4 px-6 bg-primaryBlue text-totalWhite rounded-lg ">edit course</Link>
                                </div>
                            </div>
                        </div>
                        {/*create new course link*/}
                        <div className="w-3/12 rounded-lg shadow p-4 flex flex-col items-center" style={{height: 'auto'}}>
                            <h5 className="uppercase">create new course</h5>
                            <Link to="/teacher/course/create" className="py-4 px-6 bg-[#13B92E] text-totalWhite rounded-lg my-auto">+ Create</Link>
                        </div>
                    </div>

                </div>
                <div className="w-3/12">
                    <h4 className="mb-2">Most poplar courses</h4>
                    <div className="w-full rounded-lg shadow p-4 flex flex-col mb-4" style={{height: '300px'}}>
                        <h5 className="uppercase mb-2">recent analyze</h5>

                        {/*analyze graph*/}
                        <RecentAnalyze />
                    </div>

                    <h4 className="mb-2">Live Events</h4>
                    <div className="w-full rounded-lg shadow p-4 flex items-center mb-4 gap-2 justify-between">
                        <div className='bg-secondaryCyan rounded-md' style={{width: 56, height: 56}}>

                        </div>
                        <div className="flex flex-col justify-between w-7/12">
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                        </div>
                        <div className="flex flex-col items-center">
                            <CgMediaPodcast size={28}/>
                            <p className="text-red-500">Live</p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default TeacherDashboard
