"use client";

export default function ContactForm() {
  return (
    <section className="border border-neutral-800 py-20 mx-36">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-10 border border-neutral-800 p-10">

          {/* Name & Email */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-8">
              <label className="mb-5 block text-xl font-medium text-white">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Type here"
                className="w-full border-b border-zinc-800 bg-transparent pb-3 text-lg text-white outline-none placeholder:text-stone-500"
              />
            </div>

            <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-8">
              <label className="mb-5 block text-xl font-medium text-white">
                Email
              </label>

              <input
                type="email"
                placeholder="Type here"
                className="w-full border-b border-zinc-800 bg-transparent pb-3 text-lg text-white outline-none placeholder:text-stone-500"
              />
            </div>
          </div>

          {/* Contact Reason */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-800/50 p-10">
            <h3 className="mb-8 text-xl font-medium text-white">
              Why are you contacting us?
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <label className="flex items-center gap-3 text-lg text-white">
                <input type="checkbox" className="h-5 w-5 accent-lime-400" />
                Web Design
              </label>

              <label className="flex items-center gap-3 text-lg text-white">
                <input type="checkbox" className="h-5 w-5 accent-lime-400" />
                Collaboration
              </label>

              <label className="flex items-center gap-3 text-lg text-white">
                <input type="checkbox" className="h-5 w-5 accent-lime-400" />
                Mobile App Design
              </label>
              
              <label className="flex items-center gap-3 text-lg text-white">
                <input type="checkbox" className="h-5 w-5 accent-lime-400" />
                Mobile App Development
              </label>
              
              <label className="flex items-center gap-3 text-lg text-white">
                <input type="checkbox" className="h-5 w-5 accent-lime-400" />
                Digital Marketing
              </label>
              
              <label className="flex items-center gap-3 text-lg text-white">
                <input type="checkbox" className="h-5 w-5 accent-lime-400" />
                AI App
              </label>

              <label className="flex items-center gap-3 text-lg text-white">
                <input type="checkbox" className="h-5 w-5 accent-lime-400" />
                AI Agent
              </label>

              <label className="flex items-center gap-3 text-lg text-white">
                <input type="checkbox" className="h-5 w-5 accent-lime-400" />
                Others
              </label>
            </div>
          </div>

          {/* Budget */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-800/50 p-10">
            <h3 className="text-xl font-medium text-white">
              Your Budget
            </h3>

            <p className="mt-3 text-lg text-neutral-200">
              Slide to indicate your budget range.
            </p>

            <div className="mt-8">
              <input
                type="range"
                min="1000"
                max="5000"
                className="h-2 w-full cursor-pointer accent-lime-400"
              />

              <div className="mt-3 flex justify-between text-white">
                <span>$1,000</span>
                <span>$5,000</span>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-800/50 p-10">
            <label className="mb-5 block text-xl font-medium text-white">
              Your Message
            </label>

            <textarea
              rows={6}
              placeholder="Type here"
              className="w-full resize-none border-b border-zinc-800 bg-transparent text-lg text-white outline-none placeholder:text-stone-500"
            />
          </div>

          {/* Submit Button */}
          <button className="rounded-lg bg-lime-400 px-11 py-4 text-lg font-medium text-zinc-900 transition hover:bg-lime-300">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}