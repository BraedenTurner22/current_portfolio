"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [displayPos, setDisplayPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

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

    const onMouseLeave = () => setVisible(false);
    const onDocMouseOut = (e: MouseEvent) => {
      if (!(e.relatedTarget || (e as any).toElement)) setVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseout", onDocMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseout", onDocMouseOut);
    };
  }, []);

  useEffect(() => {
    let frame: number;
    const animate = () => {
      setDisplayPos(({ x, y }) => ({
        x: x + (mousePos.x - x) * 0.15,
        y: y + (mousePos.y - y) * 0.15,
      }));
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [mousePos]);

  return (
    <div
      className={`
        fixed pointer-events-none z-50
        transform -translate-x-1/2 -translate-y-1/2
        transition-transform ease-out duration-500
        transition-opacity duration-500 bg-orange-300/50

        /* opacity: hide when off-screen */
        ${visible ? "opacity-100" : "opacity-0"}

        /* scale: shrink when hovering a pointer */
        ${hovered ? "scale-0" : "scale-100"}

        hidden xl:block
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
