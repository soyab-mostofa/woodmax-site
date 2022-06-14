import React from 'react';
import {
  Button,
  Container,
  Heading,
  ImageContainer,
  OverlayContainer,
  SpanText,
  SubHeading,
} from './styles';
import HeroImage from '@images/hero-bg.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <Container>
      <OverlayContainer>
        <Heading>
          Memorial day <SpanText>Sale</SpanText>
        </Heading>
        <SubHeading>take up to $1000 off with the code MDS22</SubHeading>
        <Button>shop seating</Button>
      </OverlayContainer>
      <ImageContainer>
        <Image
          alt="hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom center"
          src={HeroImage}
          priority
          placeholder="blur"
        />
      </ImageContainer>
    </Container>
  );
};

export default Hero;
