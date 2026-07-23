import Image from "next/image";

const brands = [
  "/images/brands/logo-1.svg",
  "/images/brands/logo-2.svg",
  "/images/brands/logo-3.svg",
  "/images/brands/logo-4.svg",
  "/images/brands/logo-5.svg",
  "/images/brands/logo-6.svg",
];

export default function TrustedCompanies() {
  return (
    <section>
      <div className="mx-36">
        <div className="relative border-x border-b border-neutral-800 bg-neutral-900/20 py-10">
          {/* Badge */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-full border border-neutral-800 bg-[#111111] px-6 py-3 text-center">
              <span className="text-lg font-medium text-white">
                Trusted By 250+ Companies
              </span>
            </div>
          </div>

          {/* Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {brands.map((logo, index) => (
              <div
                key={index}
                className="flex h-32 items-center justify-center border-r border-neutral-800 last:border-r-0"
              >
                <Image
                  src={logo}
                  alt={`Brand ${index + 1}`}
                  width={140}
                  height={48}
                  className="h-12 w-auto opacity-80 transition hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}