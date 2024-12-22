import CodeSnippetDemo from "@/demo/components/code-snippet/default";
import ShakeButtonDemoIcon from "@/demo/components/shake-button/icon";
import ShakeButtonDemoDefault from "@/demo/components/shake-button/default";
import TextShimmerDemo from "@/demo/components/text-shimmer/default";
import GeminiEffectDemo from "@/demo/components/gemini-effect/default";
import { OpacityTrailText } from "@/components/ui/opacity-trail-text";
import { FadeText } from "@/components/ui/fade-text";

export function ShowCase() {
  return (
    <div className="bg-white/80 dark:bg-black/80">
      <h2 className="text-5xl md:text-7xl text-center font-semibold">
        <FadeText>Show Case</FadeText>
        <div className="flex items-center justify-center gap-3">
            <span className="w-60 h-1 rounded-full bg-primary/50"></span>
            <span className="w-3 h-1 rounded-full bg-primary/50"></span>
            <span className="w-1 h-1 rounded-full bg-primary/50"></span>
        </div>
      </h2>
      <div className="w-11/12 rounded-lg py-10  mx-auto grid grid-cols-3 md:grid-cols-5 gap-5">
        <div className="col-span-3 border h-[500px] p-3 rounded-lg flex gap-5 flex-col items-center justify-center">
          <GeminiEffectDemo />
        </div>
        <div className="col-span-3 md:col-span-2 flex flex-col h-full items-center gap-3">
          <div className="border p-3 rounded-lg">
            <OpacityTrailText
              className="text-xl flex items-center gap-x-2"
              text="BugHook UI is an innovative and dynamic React and Next.js-based UI component library designed for modern web developers. Its primary focus is to provide highly reusable, animated components that developers can effortlessly integrate into their projects. With a sleek design philosophy and a user-centric approach, BugHook UI simplifies the process of building stunning interfaces."
            />
          </div>
          <div className="flex w-full h-full border p-3 rounded-lg gap-5 flex-col items-center justify-center ">
            <ShakeButtonDemoIcon />
            <ShakeButtonDemoDefault />
            <TextShimmerDemo />
          </div>
        </div>
        <div className="col-span-3 md:col-span-5 p-3 border flex items-center justify-center rounded-lg overflow-auto no-scrollbar">
          <CodeSnippetDemo />
        </div>
      </div>
    </div>
  );
}
