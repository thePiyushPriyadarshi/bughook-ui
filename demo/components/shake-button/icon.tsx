import { ShakeButton } from "@/components/ui/shake-button";
import { Bell, Edit2, Trash2 } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-5">
      <ShakeButton variant={"secondary"} className="rounded-full w-10 h-10" icon={<Bell />} />
      <ShakeButton variant={"secondary"} className="rounded-full w-10 h-10" icon={<Trash2 className="text-rose-500" />} />
      <ShakeButton variant={"secondary"} className="rounded-full w-10 h-10" icon={<Edit2  />} />
    </div>
  );
}
