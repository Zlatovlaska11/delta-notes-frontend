import Image from "next/image";
import { LoginCard } from "../ui/login";

export default function Home() {
    return (
        <main className="h-full">
            <div className="flex items-center justify-center h-full">
                <LoginCard />
            </div>
        </main>
    );
}
