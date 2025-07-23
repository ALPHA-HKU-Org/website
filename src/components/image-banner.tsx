"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface ImageBannerProps {
  images: {
    src: string;
    alt: string;
    className?: string;
  }[];
}

function ParallaxImage({ image }: { image: ImageBannerProps['images'][0] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="relative h-64 overflow-hidden rounded-lg">
      <motion.div style={{ y }} className="absolute inset-0 p-8">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-contain ${image.className || ''}`}
        />
      </motion.div>
    </div>
  )
}

export function ImageBanner({ images = [] }: ImageBannerProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <ParallaxImage key={index} image={image} />
        ))}
      </div>
    </div>
  );
}