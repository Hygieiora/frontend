"use client";
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "app/(components)/ui/button";
import { Input } from "app/(components)/ui/input";
import { Label } from "app/(components)/ui/label";
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "app/(components)/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "app/(components)/ui/tabs";
export default function Dashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Doctor");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = () => {
    const re =
      userType === "Doctor"
        ? /^[a-z0-9]+@knust\.edu\.gh$/
        : /^[a-z0-9]+@st\.knust\.edu\.gh$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail()) {
      alert("Invalid email format for " + userType);
      return;
    }
    // Continue with form submission
  };

  return (
    <div className="container p-8 m-8 flex items-center justify-center ">
      <Tabs defaultValue="Doctor" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Doctor" onClick={() => setUserType("Doctor")}>
            Doctor
          </TabsTrigger>
          <TabsTrigger value="Student" onClick={() => setUserType("Student")}>
            Student
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Doctor">
          <Card>
            <CardContent className="space-y-2">
              <form action="" onSubmit={handleSubmit}>
                <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
                  <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                      <div className="grid gap-2 text-center">
                        <h2 className="text-blue-600 font-bold text-3xl mt-10 leading-normal">
                          WELCOME BACK
                        </h2>
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                          Enter your email below to login to your account
                        </p>
                      </div>
                      <div className="grid gap-4">
                        <div className="">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="username@knust.edu.gh"
                            required
                            value={email}
                            onChange={handleEmailChange}
                          />
                        </div>

                        <div className="grid gap-2">
                          <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link
                              href="/forgot-password"
                              className="ml-auto inline-block text-sm underline"
                            >
                              Forgot your password?
                            </Link>
                          </div>
                          <Input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={handlePasswordChange}
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Login
                        </Button>
                        {/* <Button variant="outline" className="w-full">
                        Login with Google
                      </Button> */}
                      </div>
                      <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link
                          href="/Pages/authentication/signup"
                          className="underline"
                        >
                          Sign up
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <div className="hidden bg-muted lg:block">
                     <Image
                      src="/.png"
                      alt="Image"
                      width="1920"
                      height="1080"
                      className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    /> 
                  </div> */}
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Student">
          <Card>
            <CardContent className="space-y-2">
              <form action="" onSubmit={handleSubmit}>
                <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
                  <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                      <div className="grid gap-2 text-center">
                        <h2 className="text-blue-600 font-bold text-3xl mt-10 leading-normal">
                          WELCOME BACK
                        </h2>
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                          Enter your email below to login to your account
                        </p>
                      </div>
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="m@knust.edu.gh"
                            required
                            value={email}
                            onChange={handleEmailChange}
                          />
                        </div>
                        <div className="grid gap-2">
                          <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link
                              href=""
                              className="ml-auto inline-block text-sm underline"
                            >
                              Forgot your password?
                            </Link>
                          </div>
                          <Input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={handlePasswordChange}
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Login
                        </Button>
                        {/* <Button variant="outline" className="w-full">
                        Login with Google
                      </Button> */}
                      </div>
                      <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link
                          href="/Pages/authentication/signup"
                          className="underline"
                        >
                          Sign up
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <div className="hidden bg-muted lg:block">
                     <Image
                      src="/splash.png"
                      alt="Image"
                      width="1920"
                      height="1080"
                      className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    /> 
                  </div> */}
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
