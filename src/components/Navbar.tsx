import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
      { label: "About", href: "#about" },
      { label: "Education", href: "#education" },
      { label: "Experience", href: "#experience" },
      { label: "What I Do", href: "#expertise" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ];


  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm",
      )}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Name */}
        <a
          href="#"
          className="text-xl font-bold font-poppins text-slate-900 hover:text-blue-600 transition-colors"
        >
          Patel <span className="text-blue-600">Nirmal N.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-blue-600 font-medium relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Nirmal_Patel_AI_ML_Resume.pdf"
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-800 text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Nirmal_Patel_AI_ML_Resume.pdf"
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-blue-700 transition"
            >
              Resume
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
