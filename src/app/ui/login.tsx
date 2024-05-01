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

export function LoginCard() {





    return (
        <>
            <Tabs defaultValue="login" className="w-[400px]">
                <form>
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
                                    <Input id="name" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Password</Label>
                                    <Input id="username" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Login</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </form>
                <form>
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
                                    <Input id="username" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="mail">Email</Label>
                                    <Input id="mail" type="email" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" />
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



