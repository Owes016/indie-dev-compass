
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-6 px-4 md:px-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          <p>© 2024 ProjectPilot. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
