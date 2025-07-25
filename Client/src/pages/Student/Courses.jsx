import { Skeleton } from '@/components/ui/skeleton';
import React, { useEffect } from 'react'
import Course from './Course';
import { useGetPublishedCourseQuery } from '@/store/api/CreateCourseApi';

function Courses() {

    const {data,isLoading,refetch,isSuccess,isError} = useGetPublishedCourseQuery()
 
              useEffect(()=>{
                refetch()
              },[data,isLoading,isSuccess])
         if(isError){
                return <>
                       <div className=' '>
                          <div className='text-center text-3xl text-red-500'>Failed to load courses, please try again later.</div>
                       </div>
                 </>
         }

  return (
    <>
       <div className='bg-gray-50 dark:bg-gray-900'>
               <div className='max-w-screen-xl mx-auto p-6'>
                       <h2 className='font-bold text-3xl text-center mb-10'>Our Courses</h2>
                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'> 

                       {
                        isLoading ? Array.from({length:12}).map((_,index)=> <CourseSkeleton key={index}/>) : (
                         data?.courses &&  data?.courses.map((course,index)=> <Course course={course} key={index}  />)
                        )
                       }
                   </div>        
               </div>
       </div>
    </>
  )
}

export default Courses


const CourseSkeleton = () => {
    return (
         <div className='bg-white  shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden'>
             <Skeleton className='w-full h-36'/>
             <div className='px-5 py-4 space-y-3'>
                   <Skeleton className='h-6 w-3/4'/>
                 <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                               <Skeleton className='h-6 w-6 rounded-full'/>
                               <Skeleton className='h-4 w-20'/>
                        </div>
                            <Skeleton className='h-6 w-16'/>
                 </div>
                 <Skeleton className='h-4 w-1/4'/>
             </div>
         </div>
    )
}