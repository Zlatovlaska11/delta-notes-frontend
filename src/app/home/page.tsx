
'use client'

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { NavBar } from "@/components/ui/navbar";
import Head from "next/head";
import { useRouter } from "next/navigation";

interface Course {
    title: string;
    description: string;
    id: number;
}

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/home/${course.id}`);
    };

    return (
        <div
            className="border rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-64"
            onClick={handleCardClick}
        >
            <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600">{course.description}</p>
            </div>
            <div className="p-4 bg-background text-right">
                <span className="text-blue-500 hover:underline">Go to {course.title}</span>
            </div>
        </div>
    );
};

interface Course {
    title: string;
    description: string;
    id: number;
}

interface CourseGridProps {
    courses: Course[];
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>);
};


export default function HomePage() {



    return (
        <div>
            <NavBar />
            <Head>
                <title>Course Selection</title>
                <meta name="description" content="Course selection using TailwindCSS and Next.js" />
            </Head>

            <main className="flex flex-col items-center justify-center min-h-screen p-4">
                <h1 className="text-4xl font-bold text-center mb-8">Select a Course</h1>
                <div className="w-full max-w-6xl">
                    <CourseGrid courses={Projects} />
                </div>
            </main>
        </div>
    );
}

const Projects = [
    {
        title: "Cestina",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        id: 0,
    },
    {
        title: "Anglictina",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        id: 1,
    },
    {
        title: "Prirodopis",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        id: 2,
    },
    {
        title: "Vypocetka",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        id: 3,
    },
    {
        title: "Site",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        id: 4,
    },
    {
        title: "Fyzika",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        id: 5,
    },
];

