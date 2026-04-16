const linkedInUrl = "https://linkedin.com/in/durga-prasad-jonnagaddala";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Durga Prasad Jonnagaddala. All rights reserved.</p>
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => {
          event.preventDefault();
          window.open(linkedInUrl, "_blank", "noopener,noreferrer");
        }}
        className="hover:text-primary transition-colors"
      >
        LinkedIn
      </a>
    </div>
  </footer>
);

export default Footer;
