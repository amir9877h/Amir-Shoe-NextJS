"use client";

import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface CustomToastProps {
  title: string;
  description: string;
  variant?: "default" | "destructive";
  duration?: number;
  redirectTo?: string | null;
}

export default function CustomToast({
  title,
  description,
  variant = "default",
  duration = 2000, // Default 2 seconds
  redirectTo = null,
}: CustomToastProps) {
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (redirectTo) router.push(redirectTo);
    // Show the toast
    toast({
      title,
      description,
      variant,
      duration,
    });

    // // Set up the redirect timer
    // const redirectTimer = setTimeout(() => {
    //   console.log("Redirecting...");
    //   if (onExit) {
    //     onExit();
    //   }
    //   // router.push("/");
    // }, duration + 100); // Add a small buffer after the toast duration

    // Cleanup the timer if the component unmounts
    // return () => {
    //   clearTimeout(redirectTimer);
    // };
  }, [title, description, variant, duration, router, redirectTo, toast]);

  return null;
}
