import { FadeText } from "@/components/ui/fade-text";

const lists = [
  "Effortless component integration with BugHook UI",
  "Reusable UI elements to speed up development", 
  "Simplify your workflow with pre-built components",
  "Customizable, responsive, and lightweight UI", 
  "Copy-paste-ready components for seamless implementation",
  "Clean, animated, and interactive components at your fingertips",
];

export default function FadeTextDemo() {
  return (
    <div>
      <ul className="list-disc flex flex-col gap-3">
        {lists.map((item: string, index: number) => (
          <FadeText key={index} delay={0.3 + 0.15 * index}>
            <li className="font-semibold text-muted-foreground">{item}</li>
          </FadeText>
        ))}
      </ul>
    </div>
  );
}
