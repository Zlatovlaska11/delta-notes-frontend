
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function Home() {



    return (
        <>
            <h1 className="flex flex-row justify-center items-center  h-20 "> {"Kurzy"} </h1>

            <div className="flex flex-row justify-center items-center h-5/6">

                <HoverEffect items={Projects} />

            </div>

        </>
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

export default Home;
