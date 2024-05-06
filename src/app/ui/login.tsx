"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { FormEvent } from 'react'

interface creds {

    username: String,
    password: String,
    mail?: String

}
import axios from "axios"
import { useRouter } from "next/navigation"

export function LoginCard() {

    async function onSubmitLogin(event: FormEvent<HTMLFormElement>) {

        event.preventDefault()

        const formData = new FormData(event.currentTarget)


        console.log(formData.get("username"));
        console.log(formData.get("pass"));
        let backend_url = process.env.BACKEND_URL;

        if (backend_url == undefined) {

            backend_url = "https://zlatovlas-delta-notes.shuttleapp.rs"

        }
        console.log(backend_url)

        let username = formData.get("username");
        let password = formData.get("pass");

        if (username != null && password != null) {

            console.log("this is working")

            let creds: creds = {
                username: username.toString(),
                password: password.toString()

            }

            const resp = await axios.post("https://zlatovlas-delta-notes.shuttleapp.rs/auth/login", {

                "username": creds.username,
                "password": creds.password,


            }).then(response => {
                console.log('Status:', response.status);
                if (response.status == 200) {

                    window.location.href = '/home';

                }
                // You can access other response data as well, such as response.data
            })



        }
        else {
            console.log("tf")

        }


        async function onSubmitReg(event: FormEvent<HTMLFormElement>) {

            event.preventDefault()

            const formData = new FormData(event.currentTarget)


            console.log(formData.get("username"));
            console.log(formData.get("pass"));
            console.log(formData.get("mail"));
            let backend_url = process.env.BACKEND_URL;

            if (backend_url == undefined) {

                backend_url = "https://zlatovlas-delta-notes.shuttleapp.rs"

            }
            console.log(backend_url)

            let username = formData.get("username");
            let password = formData.get("pass");
            let mail = formData.get("mail");

            if (username != null && password != null) {

                console.log("this is working")

                let creds: creds = {
                    username: username.toString(),
                    password: password.toString(),
                    mail: mail?.toString(),

                }

                const resp = await axios.post("https://zlatovlas-delta-notes.shuttleapp.rs/auth/register", {

                    "username": creds.username,
                    "password": creds.password,
                    "mail": creds.mail,


                }).then(response => {
                    console.log('Status:', response.status);
                    if (response.status == 200) {

                        window.location.href = '/home';

                    }
                    // You can access other response data as well, such as response.data
                })



            }
            else {
                console.log("tf")

            }


        }

        return (
            <>
                <Tabs defaultValue="login" className="w-[400px]">
                    <form onSubmit={onSubmitLogin}>
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="register">Register</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Login</CardTitle>
                                    <CardDescription>
                                        Login to your account to continue
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Username</Label>
                                        <input name="username" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="username">Password</Label>
                                        <input name="pass" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit">Login</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </form>
                    <form onSubmit={onSubmitReg}>
                        <TabsContent value="register">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Register</CardTitle>
                                    <CardDescription>
                                        Register to continue
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="Username">Username</Label>
                                        <input name="username" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="mail">Email</Label>
                                        <input name="mail" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="password">Password</Label>
                                        <input name="pass" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Save password</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </form>
                </Tabs>
            </>
        )
    }


}
