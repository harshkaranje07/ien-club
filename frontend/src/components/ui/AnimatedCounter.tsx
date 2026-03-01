import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  animate,
  useInView,
} from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  isDecimal?: boolean;
}

export function AnimatedCounter({
  value,
  suffix = "",
  isDecimal = false,
}: AnimatedCounterProps) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);

  const [display, setDisplay] = useState(0);

  useEffect(() => {

    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplay(latest);
    });

    return unsubscribe;

  }, [motionValue]);

  useEffect(() => {

    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      });

      return controls.stop;
    }

  }, [isInView, value, motionValue]);

  const formatted = isDecimal
    ? display.toFixed(1)
    : Math.floor(display);

  return <span ref={ref}>{formatted}{suffix}</span>;
}