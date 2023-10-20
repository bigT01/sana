import {IPathName, IPathNameRaw, IUserRole} from "./InterfaceConstanats";

const pathNameConstants : IPathName = {
    dashboard: 'Dashboard',
    chat: 'Chat',
    news: 'News'
}

const pathNameRawConstants : IPathNameRaw = {
    dashboardTeacher: '/teacher/dashboard',
    dashboardStudent: '/student/dashboard',
    chat: '/teacher/chat',
    news: '/',
    authorization: '/authorization'
}

const userRole: IUserRole = {
    student: 'student',
    teacher: 'teacher'
}

const PathConstants : any = {}

PathConstants[pathNameRawConstants.news] = pathNameConstants.news
PathConstants[pathNameRawConstants.dashboardTeacher] = pathNameConstants.dashboard
PathConstants[pathNameRawConstants.dashboardStudent] = pathNameConstants.dashboard
PathConstants[pathNameRawConstants.chat] = pathNameConstants.chat


const data = [
    {
        name: 'oct',
        computer_science: 4000,
        mobilography: 2400,
        kazakh_language: 2400,
    },
    {
        name: 'nov',
        computer_science: 3000,
        mobilography: 1398,
        kazakh_language: 3000,
    },
    {
        name: 'dec',
        computer_science: 2000,
        mobilography: 9800,
        kazakh_language: 3200,
    },
    {
        name: 'jan',
        computer_science: 2780,
        mobilography: 3908,
        kazakh_language: 3200,
    },
    {
        name: 'feb',
        computer_science: 1890,
        mobilography: 4800,
        kazakh_language: 10000,
    },
    {
        name: 'mar',
        computer_science: 2390,
        mobilography: 3800,
        kazakh_language: 5000,
    },
    {
        name: 'apr',
        computer_science: 3490,
        mobilography: 4300,
        kazakh_language: 2100,
    },
];


export {
    PathConstants,
    pathNameConstants,
    pathNameRawConstants,
    userRole,
    data
}

