import { PulseButton } from "@/components/ui/pulse-button";
import { ShakeButton } from "@/components/ui/shake-button";
import { Bell } from "lucide-react";

const Page = () => {
  return (
    <div className="w-11/12 mt-[5vh] flex gap-5 mx-auto">
      <ShakeButton variant={"secondary"} icon={<Bell />}>Notification</ShakeButton>
      <ShakeButton variant={"secondary"} className="rounded-full w-10 h-10" icon={<Bell />}/>
      {/* </ShakeButton> */}

      <PulseButton>Komal</PulseButton>
    </div>
  );
};

export default Page;
