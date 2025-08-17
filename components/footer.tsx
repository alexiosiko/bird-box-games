import React from 'react';
import { Mail, MapPin } from "lucide-react";
import { FaInstagram, FaSteam, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  {
    href: "mailto:birdboxgames@hotmail.com",
    label: "Email",
    icon: <Mail size={28} />,
  },
  {
    href: "https://instagram.com/birdboxgames",
    label: "Instagram",
    icon: <FaInstagram size={28} />,
  },
  {
    href: "https://store.steampowered.com/search/?developer=Bird%20Box%20Games",
    label: "Steam",
    icon: <FaSteam size={28} />,
  },
  {
    href: "https://x.com/birdboxgames",
    label: "Twitter",
    icon: <FaTwitter size={28} />,
  },
//   {
//     href: "https://youtube.com",
//     label: "YouTube",
//     icon: <FaYoutube size={28} />,
//   },
];

export default function Footer() {
  return (
    <footer id='footer' className="py-20 px-6  text-[hsl(var(--muted-foreground))]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Left - Studio Info */}
        <div>
          <h3 className="text-3xl font-bold text-[hsl(var(--primary-foreground))] mb-4">
            Bird Box Studios
          </h3>
          <p className="text-base leading-relaxed">
            Crafting cozy & creative games 🎮 <br />
            Bringing players together through play.
          </p>
          <p className="mt-4 flex items-center justify-center md:justify-start gap-2">
            <MapPin size={18} /> Athens, Greece
          </p>
        </div>

        {/* Middle - Social Icons */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[hsl(var(--primary-foreground))]">
            Connect With Us
          </h4>
          <div className="flex justify-center md:justify-start gap-6">
            {socials.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(var(--primary-foreground))] transition"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Join Team */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[hsl(var(--primary-foreground))]">
            Join the Team
          </h4>
          <p className="text-base mb-4">
            Passionate about making games? <br />
            We’d love to hear from you.
          </p>
          <a
            href="mailto:birdboxgames@hotmail.com?subject=Team Application"
            className="inline-block px-6 py-3 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-xl text-base font-semibold hover:bg-[hsl(var(--secondary))] transition"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12  border-t-2 border-[hsl(var(--border))] pt-6 text-center text-sm">
        © {new Date().getFullYear()} Bird Box Studios. All Rights Reserved.
      </div>
    </footer>
  );
}
