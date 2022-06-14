import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Categories } from './images';
import {
  Heading,
  ImageBox,
  ImageBoxItem,
  ImageGrid,
  Text,
  VideoContainer,
} from './style';

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
      <VideoContainer className="pb-12">
        <Heading>We’re solving the biggest problems in furniture</Heading>
        <div className="bg-gray-brand">
          {showVideo && (
            <ReactPlayer
              className="container relative max-w-5xl mx-auto after:bg-gray-brand/20 after:absolute after:w-full after:h-full after:top-0"
              url={'/assets/interior-video.mp4'}
              playing
              muted
              loop
              height={'auto'}
              width={'100%'}
            />
          )}
        </div>
      </VideoContainer>
    </div>
  );
};

export default HeroCategory;
