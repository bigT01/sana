export interface ILocation {
    hash: string,
    key: string,
    pathname: string,
    search: string,
    state: any
}

export interface IPathName {
    dashboard: 'Dashboard',
    chat: 'Chat',
    news: 'News'
}

export interface IUserRole {
    student: 'student',
    teacher: 'teacher'
}

export interface  IPathNameRaw {
    dashboardTeacher: '/teacher/dashboard',
    dashboardStudent: '/student/dashboard',
    chat: '/teacher/chat',
    news: '/',
    authorization: '/authorization'
}
