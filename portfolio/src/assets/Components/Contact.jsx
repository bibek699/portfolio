import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-green-400 py-16 px-6 rounded">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Contact Me
        </h2>

        <p className="text-gray-600 mb-8">
          Feel free to reach out on any of my social platforms:
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 text-4xl text-gray-700">

          {/* Instagram */}
          <a
            href="https://instagram.com/bibek_0708"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-800 transition"
          >
            <FaInstagram />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9779805188296"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-800 transition"
          >
            <FaWhatsapp />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/bibek.kandel" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a>

        </div>
      </div>
    </section>
  );
}
