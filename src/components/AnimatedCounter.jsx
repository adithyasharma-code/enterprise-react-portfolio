import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1800,
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        let start = 0;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
          start += increment;

          if (start >= value) {
            start = value;
            clearInterval(timer);
          }

          setCount(Math.floor(start));
        }, 16);
      },
      {
        threshold: 0.4,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}