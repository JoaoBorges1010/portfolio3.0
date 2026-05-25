"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

function isLocalAsset(src: string) {
  return src.startsWith("/");
}

function isRemoteAsset(src: string) {
  return src.startsWith("http://") || src.startsWith("https://");
}

export function ProjectImage({
  src,
  alt,
  className,
  fill = false,
  width,
  height,
  sizes,
}: ProjectImageProps) {
  const [useNativeImg, setUseNativeImg] = useState(
    isLocalAsset(src) || !isRemoteAsset(src)
  );

  if (useNativeImg) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={className}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes={sizes ?? "100vw"}
        className={className}
        onError={() => setUseNativeImg(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      unoptimized
      sizes={sizes}
      className={className}
      onError={() => setUseNativeImg(true)}
    />
  );
}
