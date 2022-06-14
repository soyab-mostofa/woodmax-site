import tw from 'tailwind-styled-components';
export const Heading = tw.h1`text-5xl font-light text-amber-50`;
export const SpanText = tw.span`font-normal`;
export const SubHeading = tw.h5`font-bold mb-4 mt-2 text-neutral-50`;
export const Button = tw.button`px-8 py-2 bg-gradient-to-br from-amber-200 to bg-amber-300 max-w-max capitalize font-light tracking-wider`;
export const ImageContainer = tw.div`absolute top-0 left-0 h-full w-full  `;
export const Container = tw.div`relative h-[600px]`;
export const OverlayContainer = tw.div` items-center relative z-10 flex flex-col gap-2 pt-32`;
