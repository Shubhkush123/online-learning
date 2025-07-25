import { ChartNoAxesColumn, SquareLibrary } from 'lucide-react'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>

     <div className='flex'>    
         <div className='hidden lg:block w-[250px] sm:w-[300px] space-y-8 border-r border-gray-300 dark:border-gray-700 bg-[#f0f0f0]   p-5 sticky top-0 h-screen dark:bg-gray-800 '>
                <div className='flex flex-col space-y-4 pt-16'>
                    <NavLink to={"dashboard"} className="flex items-center gap-2">
                            <ChartNoAxesColumn size={22}/>
                        <h2 className='text-xl   font-bold'>Dashboard</h2>
                    </NavLink>
                    <NavLink to={"course"} className="flex items-center gap-2">
                            <SquareLibrary size={22}/>
                        <h2 className='text-xl  font-bold'>Course</h2>
                    </NavLink>
                </div>
        </div>
        <div className='flex-1 md:p-24 p-2 bg-white dark:bg-gray-900'>
            <Outlet />
        </div>
     </div>

    </>
  )
}

export default Sidebar