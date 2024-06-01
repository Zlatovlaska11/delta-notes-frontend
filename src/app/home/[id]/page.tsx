"use client"

import { CourseCard } from '@/components/ui/courses';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function ShowCourseData() {

    const pathname = usePathname()




    // get course info and file storage and finish backned endpoint for login/tegister and courseInfo

    return (
        <>
            <div className='h-5/6 w-full flex flex-row rounded-3xl justify-center align-middle'>
                <div className='bg-red-800 h-52 w-73 '></div>
                <CourseCard items={items}>
                </CourseCard>
            </div>
        </>

    );

}

let items = [
    {
        title: "test",
        route: "/home/test/0"
    },

    {
        title: "test",
        route: "/home/test/0"
    },


    {
        title: "test",
        route: "/home/test/0"
    },

    {
        title: "test",
        route: "/home/test/0"
    },

]


