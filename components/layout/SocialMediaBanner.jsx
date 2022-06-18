import Link from 'next/link';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import tw from 'tailwind-styled-components';
const url = 'https://www.facebook.com/woodmax.bd';
const Text = tw.p`text-sm md:text-lg leading-snug`;
const LinkEl = tw.div`text-sm leading-snug`;
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    translateX: '100vw',
    opacity: 0,
  },
  visible: {
    translateX: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1,
      delay: 1,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    translateX: '100vw',
    transition: {
      ease: 'easeInOut',
      type: 'tween',
      duration: 0,
    },
  },
};

const SocialMediaBanner = ({ showBanner, setShowBanner }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed right-0 z-50 px-4 py-2 shadow-lg before:absolute before:top-0 before:left-0 before:h-1.5 before:w-full w-52 bottom-3.5 bg-neutral-50 text-neutral-900 before:bg-emerald-300 md:w-auto md:max-w-md"
    >
      <div
        className="p-2 pl-0 text-xl cursor-pointer"
        onClick={() => setShowBanner(false)}
      >
        <AiOutlineClose />
      </div>
      <Text>Follow out social media for updates and offers.</Text>
      <Link href={url}>
        <LinkEl className="flex items-center gap-2 px-6 my-2 py-.5 text-base  max-w-fit cursor-pointer md:px-6 md:py-2 md:text-lg bg-blue-900 text-neutral-50 hover:bg-emerald-300 transition-all hover:shadow-lg tracking-wide">
          Like
          <span>
            <BsFacebook />
          </span>
        </LinkEl>
      </Link>
    </motion.div>
  );
};

export default SocialMediaBanner;
