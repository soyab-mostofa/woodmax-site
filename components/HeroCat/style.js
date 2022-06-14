import tw from 'tailwind-styled-components';
export const Heading = tw.h1`my-8 text-center tracking-wide text-2xl text-neutral-800`;
export const ImageGrid = tw.div`grid sm:grid-cols-3 grid-cols-2 gap-4 px-4 lg:px-0 container mx-auto max-w-5xl`;
export const ImageBox = tw.div`relative md:h-64 sm:h-52 w-full h-40 after:absolute after:h-full after:bg-neutral-800 after:bg-opacity-50 after:w-full after:hover:bg-opacity-20 after:transition-all after:duration-150`;
export const Text = tw.a`text-neutral-50 font-semibold`;
export const ImageBoxItem = tw.div`relative md:h-64 sm:h-52 w-full h-40`;
