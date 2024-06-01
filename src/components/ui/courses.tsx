import { Card, CardDescription, CardTitle } from "./card-hover-effect";
import Link from 'next/link'
export const CourseCard = ({
    items,
}: {
    items: {
        title: string;
        route: string;
    }[];
    className?: string;
}) => {

    return (

        <div className=
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10"
        >
            {items.map(item => (
                <Link
                    className="relative group  block p-2 h-full w-full"
                    href={`${item.route}`}
                >
                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                    </Card>
                </Link>
            ))}

        </div>


    )

}
