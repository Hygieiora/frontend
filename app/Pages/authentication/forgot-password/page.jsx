"use client";
import { useState } from "react";
import { Button } from "app/(components)/ui/button";
import { Input } from "app/(components)/ui/input";
import { Label } from "app/(components)/ui/label";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend service
    // The service would then send an OTP to the user's email
    // The user would enter this OTP along with their new password
    // The service would validate the OTP and then update the password in the database
  };

  return (
    <div className="container p-8 m-8 flex items-center justify-center">
      <form action="" onSubmit={handleSubmit} className="w-full">
        <div className="w-full">
          <div className="flex items-center justify-center p-auto">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h2 className="text-blue-600 font-bold text-3xl mt-auto leading-normal">
                  RESET PASSWORD
                </h2>
                <p className="text-balance text-muted-foreground">
                  Enter your email below to reset your password
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
                <div className="">
                  <Label htmlFor="otp">OTP</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter OTP"
                    required
                    value={otp}
                    onChange={handleOtpChange}
                  />
                </div>
                <div className="">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="Enter new password"
                    required
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Reset Password
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
