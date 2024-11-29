import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button variant={"animate"} className="py-1.5 group h-fit">
      Get Started
      <ArrowRight className="group-hover:translate-x-1 duration-300" />
    </Button>
  );
}
