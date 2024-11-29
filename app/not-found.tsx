import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col w-11/12 mx-auto gap-y-6 items-center mt-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="md:text-xl text-center text-muted-foreground">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
      <Link href="/" className="">
        <Button>Go Back Home</Button>
      </Link>
    </div>
  );
}
