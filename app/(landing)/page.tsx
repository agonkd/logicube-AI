import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <header>
      <p>LandingPage (Unprotected)</p>
      <Link href="/sign-in">
        <Button>Login</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Register</Button>
      </Link>
    </header>
  );
};

export default LandingPage;
