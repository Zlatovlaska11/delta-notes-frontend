"use client"

import { usePathname } from "next/navigation";
import { useRouter } from 'next/router';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';



const TheGoods: React.FC = () => {


    const { pathname } = window.location;
    const parts = pathname.split('/');
    const id = parts[parts.length - 2];
    const filename = parts[parts.length - 1];


    const [info, setInfo] = useState<string>();

    const fetchData = async () => {
        try {

            const response = await axios.get<string>(`http://127.0.0.1:8080/pptx?id=${id}&filename=${filename}`)
            if (response.status === 200) {
                console.log(response.data)
                setInfo(response.data);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    fetchData()
    if (!info) {
        return <div>Loading...</div>;
    }

    let embed = `https://view.officeapps.live.com/op/embed.aspx?src=${info}`

    return (

        <>
            <div className="h-full w-full flex flex-row align-middle items-center content-center  justify-evenly">

                <div className="w-5/12 bg-black h-4/6">
                    <object data={embed} className="h-full w-full">
                    </object>
                </div>


                <div className="w-5/12 bg-black h-4/6">
                </div>

            </div>

        </>

    );

};

export default TheGoods
