"use client";
import React, { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const SubmitButton = ({
  children,
  variant,
}: {
  children: ReactNode;
  variant: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button type="submit" variant={variant}>
          {children}
        </Button>
      )}
    </>
  );
};

export default SubmitButton;
