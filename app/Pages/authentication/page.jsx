import { Button } from "app/(components)/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "app/(components)/ui/card";
import { Input } from "app/(components)/ui/input";
import { Label } from "app/(components)/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "app/(components)/ui/tabs";

export default function DoctorOrStudent() {
  return (
    <div className="container p-8 m-8 flex items-center justify-center ">
      <Tabs defaultValue="Doctor" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Doctor">Doctor</TabsTrigger>
          <TabsTrigger value="Student">Student</TabsTrigger>
        </TabsList>
        <TabsContent value="Doctor">
          <Card>
            <CardHeader>
              <CardTitle>Doctor</CardTitle>
              <CardDescription>
                Are you a Doctor? Login or Signup here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
              <Button className="">Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Student">
          <Card>
            <CardHeader>
              <CardTitle>Student</CardTitle>
              <CardDescription>
                Are you a Student, Login or Signup here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current Student</Label>
                <Input id="current" type="Student" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New Student</Label>
                <Input id="new" type="Student" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Student</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
