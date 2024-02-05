import { FC } from "react"
import { Outlet } from "react-router-dom"


const Layout: FC = () => {
    return (
        <>
           <div className="flex justify-center">
                <div className="w-96 p-6 shadow-md">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}
  
  export default Layout