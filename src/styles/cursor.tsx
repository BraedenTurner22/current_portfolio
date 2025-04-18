"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [displayPos, setDisplayPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  // 1) Track real mouse movement, enter, and leave
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const node = document.elementFromPoint(e.clientX, e.clientY);
      if (node instanceof Element) {
        setHovered(window.getComputedStyle(node).cursor === "pointer");
      } else {
        setHovered(false);
      }
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    // Some browsers fire “mouseout” on document when you leave the viewport:
    document.addEventListener("mouseout", (e) => {
      if (!(e.relatedTarget || (e as any).toElement)) {
        setVisible(false);
      }
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseout", () => {});
    };
  }, []);

  // 2) Smooth animation loop
  useEffect(() => {
    let rafId: number;
    const animate = () => {
      setDisplayPos(({ x, y }) => ({
        x: x + (mousePos.x - x) * 0.15,
        y: y + (mousePos.y - y) * 0.15,
      }));
      rafId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(rafId);
  }, [mousePos]);

  // 3) Render: hide cursor when either it’s “hovered” (pointer) or truly invisible
  return (
    <div
      className={`
        fixed pointer-events-none z-50
        transform -translate-x-1/2 -translate-y-1/2
        transition-transform ease-out duration-[200ms]
        transition-opacity duration-200
        bg-orange-300/50
        ${hovered || !visible ? "opacity-0" : "opacity-100 scale-100"}
      `}
      style={{
        left: displayPos.x,
        top: displayPos.y,
        width: 20,
        height: 20,
        borderRadius: "50%",
      }}
    />
  );
}
