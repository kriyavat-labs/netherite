import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function GetStarted() {
  return (
    <section className="flex justify-center items-center h-screen font-sans">
      <Card className="w-[400px] bg-gradient-to-t from-white to-gray-50">
        <CardHeader>
          <div className="w-12 h-12 bg-neutral-800 rounded-full mx-auto"></div>
          <h1 className="font-semibold text-neutral-800 text-2xl text-center">
            The only visual bookmarking tool you need.
          </h1>
        </CardHeader>
        <CardContent>
          <Button className="w-full flex gap-2 items-center">
            <FaGoogle /> Continue with Google
          </Button>
          <p className="mt-3 text-sm text-center text-neutral-500">
            By clicking continuing, you agree to{" "}
            <span className="font-medium text-neutral-800">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="font-medium text-neutral-800">Privacy Policy</span>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
