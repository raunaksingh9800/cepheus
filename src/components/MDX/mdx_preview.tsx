"use client"
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useState, useEffect } from "react";

const mdxContent = `
## Hello, MDX! 🚀

This is an **MDX** string rendered inside a Next.js component.


`;

export default function MDXRenderer() {
  const [mdxSource, setMdxSource] = useState<any>(null);

  useEffect(() => {
    const loadMDX = async () => {
      const serialized = await serialize(mdxContent);
      setMdxSource(serialized);
    };

    loadMDX();
  }, []);

  if (!mdxSource) return <p>Loading...</p>;

  return (
    <div className=" text-white">
    <MDXRemote {...mdxSource} />
    </div>);
}
