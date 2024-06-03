// components/CourseCard.tsx

import Link from 'next/link';

interface Course {
    title: string;
    description: string;
    url: string;
}

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <div className="border rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600">{course.description}</p>
            </div>
            <div className="p-4 bg-background text-right">
                <Link href={course.url} legacyBehavior>
                    <a className="text-cyan-500 hover:underline">Open Course</a>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;

