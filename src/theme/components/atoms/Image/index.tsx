import NextImage, { ImageProps } from "next/image";

export default function Image(props: ImageProps) {
  return (
    <NextImage
      {...props}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
