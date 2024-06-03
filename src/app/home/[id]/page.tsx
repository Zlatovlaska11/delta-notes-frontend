"use client"


import { useParams, usePathname } from 'next/navigation'
import CourseGrid from "@/components/ui/courseGrid";
import Head from "next/head";
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';


interface Course {
    title: string;
    description: string;
    url: string;
}
export default function ShowCourseData() {


    const [courses, setCourses] = useState<Course[]>([]);
    const pathParam = usePathname();
    const param = pathParam[pathParam.length - 1];

    useEffect(() => {
        const fetchData = async () => {
            try {

                let backend_url = process.env.BACKEND_URL;

                if (backend_url == undefined) {

                    backend_url = "https://zlatovlas-delta-notes.shuttleapp.rs"

                }
                const response = await axios.post<Course[]>(`${backend_url}/list`, { id: param });
                if (response.status === 200) {
                    setCourses(response.data);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [param]);

    return (
        <div>
            <Head>
                <title>Course Grid</title>
                <meta name="description" content="Course Grid using TailwindCSS and Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center mb-8">Courses</h1>
                <CourseGrid courses={courses} />
            </main>
        </div>
    );
}

