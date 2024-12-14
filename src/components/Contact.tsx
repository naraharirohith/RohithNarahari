import React from 'react';
import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { links } from '../config/links';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
          <a 
            href={`mailto:${links.social.email}`}
            className="flex items-center space-x-2 text-gray-300 hover:text-white"
          >
            <Mail size={20} />
            <span>{links.social.email}</span>
          </a>
          <a 
            href={`tel:${links.social.phone}`}
            className="flex items-center space-x-2 text-gray-300 hover:text-white"
          >
            <Phone size={20} />
            <span>{links.social.phone}</span>
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href={links.social.github} className="text-gray-300 hover:text-white">
            <Github size={24} />
          </a>
          <a href={links.social.linkedin} className="text-gray-300 hover:text-white">
            <Linkedin size={24} />
          </a>
          <a href={links.social.twitter} className="text-gray-300 hover:text-white">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}