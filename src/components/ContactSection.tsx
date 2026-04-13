import { useState } from "react";
import contactBg from "@/assets/contact-bg.jpg";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 z-0">
        <img src={contactBg} alt="" loading="lazy" width={1920} height={1080} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
              Get Started
            </p>
            <h2 className="font-luxury text-3xl font-bold md:text-5xl">
              Transform Your Dining Experience with a{" "}
              <span className="gold-text">Private Demo</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Discover how LuxePOS can elevate your restaurant operations. Limited onboarding slots available for this quarter.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium">350 Fifth Avenue, Suite 7200, New York, NY 10118</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">concierge@luxepos.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 (800) 555-LUXE</p>
                </div>
              </div>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-lg border border-gold/20 bg-gold/5 px-4 py-2 text-sm text-gold">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
              Limited onboarding slots available
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="font-luxury text-2xl font-bold">Thank You</h3>
                <p className="mt-2 text-muted-foreground">
                  Our concierge team will reach out within 24 hours to schedule your private demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-muted-foreground">Name</label>
                  <input
                    type="text"
                    required
                    className="h-11 w-full rounded-lg border border-border bg-input px-4 text-sm text-foreground outline-none transition-colors focus:border-gold placeholder:text-muted-foreground"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-muted-foreground">Email</label>
                  <input
                    type="email"
                    required
                    className="h-11 w-full rounded-lg border border-border bg-input px-4 text-sm text-foreground outline-none transition-colors focus:border-gold placeholder:text-muted-foreground"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-muted-foreground">Phone</label>
                  <input
                    type="tel"
                    className="h-11 w-full rounded-lg border border-border bg-input px-4 text-sm text-foreground outline-none transition-colors focus:border-gold placeholder:text-muted-foreground"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-muted-foreground">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold resize-none placeholder:text-muted-foreground"
                    placeholder="Tell us about your restaurant..."
                  />
                </div>
                <button
                  type="submit"
                  className="gold-gradient animate-glow-pulse h-12 w-full rounded-lg text-sm font-semibold text-primary-foreground transition-all duration-500 hover:opacity-90"
                >
                  Request Private Demo
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
