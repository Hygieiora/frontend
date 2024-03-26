import React, { useState } from "react";
// ... other imports

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
              <form onSubmit={handleSubmit}>
                {/* ... rest of your form */}
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
                {/* ... rest of your form */}
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        {/* ... rest of your component */}
      </Tabs>
    </div>
  );
}
