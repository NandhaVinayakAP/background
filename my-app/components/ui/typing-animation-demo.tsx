import { TypingAnimation } from "@/components/ui/typing-animation";

export function TypingAnimationDemo() {
  return (
    <TypingAnimation
      className="text-4xl font-bold text-white"
      text="Nandha Vinayak A P"
      style={{ fontSize: 'clamp(1rem, 3vw, 2rem)' }}
    />
  );
}

