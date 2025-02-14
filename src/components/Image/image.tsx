"use client"

import Image from "next/image";
import Link from "next/link";

interface ImageHProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
  className?: string;
  }
  
  const ImageH: React.FC<ImageHProps> = ({ src, alt, width, height, href, className }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
    <Image src={src} alt={alt} width={width} height={height} className={className} />
    </Link>
  );
  };
  

  interface ImageCProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  }
  
  const ImageC: React.FC<ImageCProps> = ({ src, alt, width, height, className }) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} className={className} />
  );
  };

  export  {ImageC , ImageH};