import { useState } from "react";

const HomeContact = () => {
  let row = window.innerWidth < 640 ? 4 : 3;
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "44489fe6-2dcf-479f-8355-e8fdcf25a069",
          name,
          email,
          message: description,
          subject: "New Portfolio Connection",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setEmail("");
        setName("");
        setDescription("");
        const container = document.getElementById("scroll-container");
        const summary = document.getElementById("summary");

        if (container && summary) {
          container.scrollTo({
            top: summary.offsetTop - container.offsetTop,
            behavior: "smooth",
          });
        }
      } else {
        setStatus(result.message || "Failed to send message.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="h-full lg:ml-auto w-[320px] xs:w-full md:w-[600px] xl:w-[700px] 2xl:w-[820px] max-sx:pb-[10px] flex flex-col gap-[20px] sx:gap-[45px] items-start">
      <h1 className="max-lg:w-full max-lg:text-center text-[36px] xs:text-[48px] xl:text-[68px] font-semibold leading-[1.1em]">
        Let's Create
        <br /> Something <span className="text-purple">Amazing</span>
      </h1>
      <div className="bg-[rgba(43,45,47,255)] w-full lg:w-[600px] p-[20px] rounded-xl">
        <form className="space-y-4" autoComplete="on" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white mb-2 font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              autoComplete="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-[rgba(69,68,70,255)] text-light-font placeholder-light-font focus:outline-none focus:ring-1 focus:ring-purple"
            />
          </div>
          <div>
            <label className="block text-white mb-2 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              required
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your@email.com"
              className="w-full px-4 py-2 rounded-lg bg-[rgba(69,68,70,255)] text-light-font placeholder-light-font focus:outline-none focus:ring-1 focus:ring-purple"
            />
          </div>
          <div>
            <label className="block text-white mb-2 font-semibold">
              Message
            </label>
            <textarea
              placeholder="Your Message ..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={row}
              required
              minLength={10}
              className="w-full px-4 py-2 rounded-lg bg-[rgba(69,68,70,255)] text-light-font placeholder-light-font focus:outline-none focus:ring-1 focus:ring-purple resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple text-white font-semibold rounded-lg"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <p role="status" className="text-center text-purple font-semibold">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default HomeContact;
