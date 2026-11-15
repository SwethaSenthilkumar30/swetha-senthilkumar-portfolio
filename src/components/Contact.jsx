import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const form = formRef.current;
    if (!form) return;

    const firstName = form.querySelector('#firstName')?.value.trim() || '';
    const lastName = form.querySelector('#lastName')?.value.trim() || '';
    const email = form.querySelector('#email')?.value.trim() || '';
    const message = form.querySelector('#message')?.value.trim() || '';

    if (!firstName || !email || !message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const { serviceId, templateId, publicKey } = emailjsConfig;
    const isConfigured =
      Boolean(serviceId) &&
      Boolean(templateId) &&
      Boolean(publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (!isConfigured) {
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )}`;
      window.open(mailtoUrl, '_blank');
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(serviceId, templateId, form, publicKey);
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error('EmailJS transmission error:', err);
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Parallax Giant "CONTACT" word */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none z-0 flex items-start justify-center overflow-hidden"
      >
        <div
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5 whitespace-nowrap pt-8"
        >
          CONTACT
        </div>
      </motion.div>

      {/* Foreground Container: Aligned to the right */}
      <div className="w-full flex justify-end relative z-10">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white shadow-2xl rounded-tl-3xl md:rounded-tl-[3.5rem]"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between gap-4 mb-12 border-b border-white/20 pb-6">
            <span className="uppercase text-xs tracking-[0.2em] font-mono font-bold text-white/80">
              Reach Me
            </span>

            {socialLinks.instagram ? (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-black/20 hover:bg-black/30 border border-white/20 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm transition-all duration-300"
              >
                DM on Instagram
              </a>
            ) : (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-black/20 hover:bg-black/30 border border-white/20 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm transition-all duration-300"
              >
                Connect on LinkedIn
              </a>
            )}
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column: Underline-only inputs */}
              <div className="flex flex-col gap-8">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    required
                    placeholder="First Name *"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="last_name"
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    placeholder="Email Address *"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Right Column: Message Textarea */}
              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message *"
                  className="w-full flex-1 min-h-[140px] bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
            </div>

            {/* Bottom Actions & Notes */}
            <div className="flex flex-col gap-6 pt-4 border-t border-white/20">
              {/* Permission Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer text-sm text-white/90 select-none">
                <input
                  type="checkbox"
                  required
                  defaultChecked
                  className="mt-1 rounded border-white/40 text-black focus:ring-0 cursor-pointer"
                />
                <span className="leading-snug">
                  I agree that my submitted data is collected and stored to process this inquiry.
                </span>
              </label>

              {/* Response Note */}
              <p className="text-xs text-white/80 leading-relaxed">
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>

              {/* Urgent mailto link */}
              <p className="text-xs text-white/80">
                Need an urgent response?{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline font-bold hover:text-white transition-colors"
                >
                  {personalInfo.emails.primary}
                </a>
              </p>

              {/* Dynamic Submit Pill Button */}
              <div className="pt-2">
                {status === 'sending' && (
                  <button
                    type="button"
                    disabled
                    className="px-8 py-3.5 rounded-full bg-white/20 border border-white/30 text-white/70 font-bold text-base flex items-center justify-center gap-2 cursor-wait"
                  >
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </button>
                )}

                {status === 'success' && (
                  <button
                    type="button"
                    disabled
                    className="px-8 py-3.5 rounded-full bg-emerald-600 border border-emerald-500 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Sent Successfully ✓</span>
                  </button>
                )}

                {status === 'error' && (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-8 py-3.5 rounded-full bg-red-950 border border-red-800 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg hover:bg-red-900 transition-colors"
                  >
                    <span>Failed — Try Again</span>
                  </button>
                )}

                {status === 'idle' && (
                  <button
                    type="submit"
                    className="group px-8 py-3.5 rounded-full border border-white text-white font-bold text-base hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
