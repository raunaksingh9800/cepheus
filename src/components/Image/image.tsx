"use client"

import Image from "next/image";
import Link from "next/link";

interface ImageHProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    herf: string;
  }
  
  const ImageH: React.FC<ImageHProps> = ({ src, alt, width, height, herf }) => {
    return (
        <Link href={herf} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} width={width} height={height} />
       
      </Link>
    );
  };
  

  interface ImageCProps {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
  
  const ImageC: React.FC<ImageCProps> = ({ src, alt, width, height }) => {
    return (
        <Image src={src} alt={alt} width={width} height={height} />
    );
  };

  export  {ImageC , ImageH};