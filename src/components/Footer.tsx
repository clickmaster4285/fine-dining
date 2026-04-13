export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#hero" className="font-luxury text-2xl font-bold text-gold">
              Luxe<span className="text-foreground">POS</span>
            </a>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Premium restaurant POS solutions designed for fine dining, luxury hotels, and the world's finest hospitality establishments.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="transition-colors hover:text-foreground">Features</a></li>
              <li><a href="#solutions" className="transition-colors hover:text-foreground">Solutions</a></li>
              <li><a href="#how-it-works" className="transition-colors hover:text-foreground">How It Works</a></li>
            
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#hero" className="transition-colors hover:text-foreground">About</a></li>
              <li><a href="#testimonials" className="transition-colors hover:text-foreground">Testimonials</a></li>
              <li><a href="#contact" className="transition-colors hover:text-foreground">Contact</a></li>
              <li><a href="#contact" className="transition-colors hover:text-foreground">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} LuxePOS. All rights reserved. Crafted for the finest dining experiences.
        </div>
      </div>
    </footer>
  );
}
