import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Join The DigiSoft Experience</h3>
              <p className="text-gray-400 mb-6">Top Notch Enterprise Solutions.</p>
              <img
                src="https://ext.same-assets.com/2316678046/3641641356.png"
                alt="DigiSoft Logo"
                className="h-12 mb-4"
              />
            </div>

            <div className="mb-4">
              <p className="text-gray-300 mb-4">Nairobi Garage, Delta Corner Annex, Ring Rd Westlands Ln</p>
              <div className="space-y-2">
                <a href="tel:+254702378070" className="flex items-center text-gray-300 hover:text-primary">
                  <img src="https://ext.same-assets.com/2316678046/3783633550.svg" alt="Phone" className="w-4 h-4 mr-2" />
                  +254702378070
                </a>
                <a href="mailto:info@digisoftke.com" className="flex items-center text-gray-300 hover:text-primary">
                  <img src="https://ext.same-assets.com/2316678046/2563901416.svg" alt="Email" className="w-4 h-4 mr-2" />
                  info@digisoftke.com
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-primary font-bold mb-4">Social</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.facebook.com/people/Digisoft-Consulting-Services/61556460785865/?mibextid=ZbWKwL" className="text-gray-300 hover:text-primary flex items-center">
                  <Facebook size={16} className="mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/digisoftconsultingservices/" className="text-gray-300 hover:text-primary flex items-center">
                  <Instagram size={16} className="mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/digisoft-consulting-services-ltd/" className="text-gray-300 hover:text-primary flex items-center">
                  <Linkedin size={16} className="mr-2" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/digisoftltd" className="text-gray-300 hover:text-primary flex items-center">
                  <Twitter size={16} className="mr-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@DigisoftConsultingServices" className="text-gray-300 hover:text-primary flex items-center">
                  <Youtube size={16} className="mr-2" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-primary font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-gray-300 hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-primary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-primary font-bold mb-4">Useful Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about-us" className="text-gray-300 hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="text-gray-300 hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="text-gray-300 hover:text-primary">
                  Terms & condition
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 flex justify-between items-center">
          <a href="https://digisoftke.com/" className="text-primary font-bold">
            Digi Soft.
          </a>
          <p className="text-gray-400 text-sm">© 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
