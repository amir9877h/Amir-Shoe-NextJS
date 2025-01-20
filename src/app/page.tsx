import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <Button asChild>
        <LoginLink>Login</LoginLink>
      </Button>
      <Button asChild>
        <RegisterLink>SignUp</RegisterLink>
      </Button>
      <Link href={`/dashboard`}>go to Dashboard</Link>
    </div>
  );
}
