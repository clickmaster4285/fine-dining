import { useState } from "react";
import contactBg from "@/assets/contact-bg.jpg";
import { MapPin, Mail, Phone, Send, Clock, MessageSquare, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const LOCATION = {
  fullAddress:
    "Paris Shopping Mall, 4th floor, Main PWD Rd, PWD Housing Society Sector A, Islamabad, Punjab 45700, Pakistan",
};

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  LOCATION.fullAddress
)}&output=embed`;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          phone: form.phone,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please try again or email concierge@luxepos.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 z-0">
        <img src={contactBg} alt="" loading="lazy" width={1920} height={1080} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT SIDE - CONTENT */}
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

            {/* CONTACT CARDS - 2 per row */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address Card */}
              <div className="glass-card p-6 flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-sm text-muted-foreground">
                    {LOCATION.fullAddress}
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="glass-card p-6 flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-sm">marketing@clickmasters.pk</p>
                  <p className="text-sm">info@clickmasters.pk</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass-card p-6 flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-sm">+92 333-1116842</p>
                  <p className="text-sm">+92 332-5394285</p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="glass-card p-6 flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold">Hours</p>
                  <p className="text-sm">Mon - Sat: 9AM - 8PM</p>
                
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="mt-6 rounded-xl overflow-hidden border border-gold/20">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="200"
                loading="lazy"
                className="w-full"
                title="Office Location Map"
              />
            </div>

            {/* DIRECTIONS LINK */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                LOCATION.fullAddress
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold text-sm hover:underline mt-3"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>

            {/* Status Badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-gold/20 bg-gold/5 px-4 py-2 text-sm text-gold">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
              Limited onboarding slots available
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-3 pb-2 border-b border-border">
                <div className="p-2 rounded-lg bg-gold/10">
                  <MessageSquare className="h-5 w-5 text-gold" />
                </div>
                <h1 className="text-xl font-bold">Request a Private Demo</h1>
              </div>

              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full h-11"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full h-11"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Phone Number <span className="text-muted-foreground text-xs">(Optional)</span>
                </label>
                <Input
                  type="tel"
                  placeholder="+92 30000-00000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full h-11"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  placeholder="Tell us about your restaurant..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="gold-gradient animate-glow-pulse w-full flex items-center justify-center gap-2 h-12 text-sm font-semibold text-primary-foreground transition-all duration-500 hover:opacity-90"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Request Private Demo"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}