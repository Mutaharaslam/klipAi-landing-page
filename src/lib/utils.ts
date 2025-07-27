import { useEffect, useRef, useState } from "react";


// generated this code with AI Prompt
export function useQuadIntersectionObserver(threshold = 0.3) {
  const [leftIn, setLeftIn] = useState(false);
  const [rightIn, setRightIn] = useState(false);
  const [topIn, setTopIn] = useState(false);
  const [bottomIn, setBottomIn] = useState(false);

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftObserver = new IntersectionObserver(
      ([entry]) => setLeftIn(entry?.isIntersecting ?? false),
      { threshold }
    );
    const rightObserver = new IntersectionObserver(
      ([entry]) => setRightIn(entry?.isIntersecting ?? false),
      { threshold }
    );
    const topObserver = new IntersectionObserver(
      ([entry]) => setTopIn(entry?.isIntersecting ?? false),
      { threshold }
    );
    const bottomObserver = new IntersectionObserver(
      ([entry]) => setBottomIn(entry?.isIntersecting ?? false),
      { threshold }
    );
    if (leftRef.current) leftObserver.observe(leftRef.current);
    if (rightRef.current) rightObserver.observe(rightRef.current);
    if (topRef.current) topObserver.observe(topRef.current);
    if (bottomRef.current) bottomObserver.observe(bottomRef.current);
    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
      topObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, [threshold]);

  return { leftIn, rightIn, topIn, bottomIn, leftRef, rightRef, topRef, bottomRef };
}
