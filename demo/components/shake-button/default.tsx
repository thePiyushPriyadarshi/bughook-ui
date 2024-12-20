import { ShakeButton } from "@/components/ui/shake-button";
import { Bell } from "lucide-react";

export default function ButtonDemo(){
    return (
        <ShakeButton icon={<Bell/>}>Notifications</ShakeButton>
    )
}