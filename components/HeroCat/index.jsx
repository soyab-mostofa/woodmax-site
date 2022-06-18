import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { attributes, Categories } from './images';
import {
  Heading,
  ImageBox,
  ImageBoxItem,
  ImageGrid,
  Text,
  VideoContainer,
} from './style';

const Badge = ({ attribute: { title, content, image } }) => {
  console.log(image);
  return (
    <div className="flex items-center">
      <div className="p-4 md:basis-44">
        <Image src={image} alt={title} height="100" width="100" />
      </div>
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

const HeroCategory = () => {
  const [showVideo, setShowVideo] = React.useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <div>
      <Heading>Clever designs, delivered free</Heading>
      <ImageGrid>
        {Categories.map((cat, i) => {
          return (
            <ImageBoxItem key={i}>
              <ImageBox>
                <Image
                  alt="image"
                  objectFit="cover"
                  layout="fill"
                  src={cat.image}
                  placeholder="blur"
                />
              </ImageBox>
              <Text className="absolute bottom-2 left-2">{cat.title}</Text>
            </ImageBoxItem>
          );
        })}
      </ImageGrid>
      <div>
        <Heading>We’re solving the biggest problems in furniture</Heading>
        <div className="bg-gray-brand">
          {showVideo && (
            <ReactPlayer
              className="relative mx-auto  after:bg-gray-brand/20 after:absolute after:w-full after:h-full after:top-0"
              url={'/assets/interior-video.mp4'}
              playing
              muted
              loop
              height={'auto'}
              width={'100%'}
            />
          )}
        </div>
      </div>
      <div className="py-4 md:flex bg-emerald-300">
        {attributes.map((attribute) => (
          <Badge key={attribute.title} attribute={attribute} />
        ))}
      </div>
    </div>
  );
};

export default HeroCategory;
