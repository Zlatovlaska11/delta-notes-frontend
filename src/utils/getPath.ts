import { useRouter } from "next/router";

export default function getPath() {

    const router = useRouter()


    return router.query.id



}
