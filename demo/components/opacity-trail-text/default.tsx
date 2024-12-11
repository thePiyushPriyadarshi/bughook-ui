import { OpacityTrailText } from "@/components/ui/opacity-trail-text";

export default function OpacityTrailTextDemo() {
  return (
    <div className="mb-96">
      <div className="h-[350px] text-2xl md:text-5xl text-center">
        Scroll down to reveal the opacity trail effect
      </div>
      <OpacityTrailText
        className="text-3xl gap-x-2"
        text="BugHook UI is an innovative and dynamic React and Next.js-based UI component library designed for modern web developers. Its primary focus is to provide highly reusable, animated components that developers can effortlessly integrate into their projects. With a sleek design philosophy and a user-centric approach, BugHook UI simplifies the process of building stunning interfaces."
      />
    </div>
  );
}
