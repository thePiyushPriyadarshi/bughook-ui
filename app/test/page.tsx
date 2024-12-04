import { TextShimmer } from "@/components/ui/text-shimmer";

export default function TestPage() {
  return (
    <div
      className="flex flex-col items-center
     justify-center gap-10 my-10"
    >
      <div className="my-10">
        <TextShimmer variant="default" className="text-xl">Generating code...</TextShimmer>
      </div>
    </div>
  );
}
