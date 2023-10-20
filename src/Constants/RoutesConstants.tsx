import App from "../App";
import Authorization from "../Pages/Authorization";
import TeacherDashboard from "../Pages/TeacherDashboard";
import StudentDashboard from "../Pages/StudentDashboard";
import Chat from "../Pages/Chat";

import {pathNameRawConstants} from "./MainConstants";




const routesConstants = [
    {
        path: pathNameRawConstants.news,
        element: <App/>
    },
    {
        path: pathNameRawConstants.authorization,
        element: <Authorization/>
    },
    {
        path: pathNameRawConstants.dashboardTeacher,
        element: <TeacherDashboard/>
    },
    {
        path: pathNameRawConstants.dashboardStudent,
        element: <StudentDashboard/>
    },
    {
        path: pathNameRawConstants.chat,
        element:  <Chat/>
    }

]

export { routesConstants }
