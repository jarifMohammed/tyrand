import Image from "next/image";

interface SectionBackgroundProps {
  src: string;
  priority?: boolean;
}

export default function SectionBackground({ src, priority = false }: SectionBackgroundProps) {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center animate-image-zoom"
          quality={75}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
        />
        <div
          className="absolute inset-0 animate-bg-glow-slow"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(163, 230, 53, 0.12), transparent 70%)",
            opacity: 0.25,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent animate-border-glow" />
    </>
  );
}
