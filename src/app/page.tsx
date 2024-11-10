import { Metadata } from "next";
import Data from "./data/page";
import Home1 from "@/components/Dashboard/Home/page";
import SignIn from "./auth/signin/page";
import SignUp from "./auth/signup/page";
import {Header} from "@/components/sections/Header"

export const metadata: Metadata = {
  title:
    "Insight | Recommendation platform ",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
        <Home1 />
    </>
  );
}
