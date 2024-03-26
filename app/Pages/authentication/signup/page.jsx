"use client";
import React, { useState } from "react";
import Link from "next/link";
// import { FcGoogle } from "react-icons/fc";
import Footer from "../../../(components)/Footer";
import { Button } from "../../../(components)/ui/button";
import { Input } from "../../../(components)/ui/input";
import { Label } from "../../../(components)/ui/label";
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

const SignupForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Doctor");

  return (
    <>
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
              <CardContent>
                <form onSubmit={handleSubmit} className="mt-4">
                  <main className="max-w-md mx-auto bg-white p-5 rounded-md shadow-sm">
                    <h2 className="text-blue-600 font-bold text-3xl mt-20 leading-normal">
                      START YOUR JOURNEY
                    </h2>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Create new account
                    </h2>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input
                            id="first-name"
                            placeholder="First Name"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input
                            id="last-name"
                            placeholder="Last Name"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="username@knust.edu.gh"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                      </div>
                      <Button type="submit" className="w-full bg-blue-600">
                        Create an account
                      </Button>
                      {/* <Button variant="outline" className="w-full">
                        Sign up with GitHub
                      </Button> */}
                    </div>
                    <div className="mt-4 text-center text-sm">
                      Already have an account?{" "}
                      <Link href="#" className="underline">
                        Sign in
                      </Link>
                    </div>
                  </main>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          {/* Student Section */}
          <TabsContent value="Student">
            <Card>
              <CardContent>
                <form onSubmit={handleSubmit} className="mt-4">
                  <main className="max-w-md mx-auto bg-white p-5 rounded-md shadow-sm">
                    <h2 className="text-blue-600 font-bold text-3xl mt-20 leading-normal">
                      START YOUR JOURNEY
                    </h2>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Create new account
                    </h2>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input
                            id="first-name"
                            placeholder="First Name"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input
                            id="last-name"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="username@st.knust.edu.gh"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <Button
                        variant="outline"
                        type="submit"
                        className="w-full bg-blue-600"
                      >
                        Create an account
                      </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                      Already have an account?{" "}
                      <Link href="#" className="underline">
                        Sign in
                      </Link>
                    </div>
                  </main>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </>
  );
};

export default SignupForm;
