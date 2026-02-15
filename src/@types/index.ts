
export interface UserType {
    id: number,
    phone: string,
    first_name: string,
    last_name: string,
    is_active: boolean,
    is_staff: boolean
}

export interface ApiResponseType<T>{
     data: {
        refresh: string,
        access: string,
        user: T
    },
    error?: null,
    success: boolean
}


// Sidebar types

export interface SidebarItemsType{
    title:string
    path:string
    Icon?:React.ComponentType<{ className?: string }>
    onClick?:() => void
    isOpen?:boolean
}