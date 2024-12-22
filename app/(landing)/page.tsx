import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ShowCase } from "./show-case";

export default function Home() {
  return (
    <div>
      <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-[768px] w-11/12 mx-auto py-10">
          <div>
            <h1 className="text-4xl md:text-6xl leading-20 font-black">
              Power Your Projects with Bughook UI Components
            </h1>
            <p className="my-5 text-base md:text-lg text-muted-foreground">
              Bughook UI is a powerful collection of pre-built, copy-and-paste
              components that make UI development faster and easier. Fully free,
              and designed for quick integration, BugHook UI helps you build
              stunning interfaces in no time.
            </p>
          </div>
          <Link href={"/docs/button"}>
            <Button variant={"animate"} className="py-1.5 group h-fit">
              Get Started
              <ArrowRight className="group-hover:translate-x-1 duration-300" />
            </Button>
          </Link>
        </div>
      </div>
      <ShowCase/>
    </div>
  );
}
