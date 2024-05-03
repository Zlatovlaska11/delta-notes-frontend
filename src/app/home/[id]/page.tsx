
"use client"

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function ShowCourseData() {

  const pathname = usePathname()

  let path = pathname;


    // get course info and file storage and finish backned endpoint for login/tegister and courseInfo

    return (
        <h1> {`you are at ${pathname}`} </h1>

    );

}



