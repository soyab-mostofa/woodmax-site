import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const icons = [
  { icon: BsFacebook, link: 'https://www.facebook.com/woodmax.bd' },
  { icon: BsTwitter, link: '#' },
  { icon: BsInstagram, link: '#' },
];

const Footer = () => {
  return (
    <div className="bg-gray-brand">
      <div className="container justify-between max-w-5xl px-12 py-12 mx-auto md:flex md:flex-row-reverse">
        <div className="flex items-center justify-center gap-8">
          {icons.map((icon, i) => {
            return (
              <Link passHref as={'a'} href={icon.link} key={i}>
                <icon.icon className="text-3xl cursor-pointer text-emerald-100" />
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col md:items-center md:flex-row ">
          <input
            type="text"
            placeholder="Sign Up for enthralling couch reads"
            className="p-4 mt-8 mb-4 focus:ring-1 focus:ring-gray-brand bg-emerald-100 md:m-0"
          />
          <button className="p-4 md:px-12 bg-emerald-300 text-neutral-900">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
