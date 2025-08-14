"use client";
import React, { useRef, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

interface LogoMarqueeProps {
  items: {
    name: string;
    logo: string;
  }[];
}

export default function LogoMarquee({ items }: LogoMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth;
        setScroll(contentWidth > containerWidth);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [items]);

  return (
    <div className="flex container flex-col items-center justify-center pt-20 space-y-3 w-full">
      <h3 className="text-md md:ext-xl text-foreground/70">
        Algumas das <span className="text-primary font-medium">{items.length}+</span> empresas e instituições parceiras
      </h3>
      <div ref={containerRef} className="w-full overflow-hidden p-4">
        {scroll ? (
          <Marquee
            gradient
            speed={50}
            play
            autoFill
            gradientColor="#090909"
            gradientWidth={125}
          >
            <div ref={contentRef} className="flex">
              {items.map((item, index) => (
                <div key={index} className="mx-4 shrink-0">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="h-16 w-30 mx-auto mb-4 resize-none object-contain"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        ) : (
          <div ref={contentRef} className="flex justify-center">
            {items.map((item, index) => (
              <div key={index} className="mx-4 shrink-0">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="h-30 w-40 mx-auto mb-4 resize-none object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
