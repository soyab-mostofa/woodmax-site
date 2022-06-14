import React from 'react';
import Seating1 from '@images/Seating1.jpg';
import Seating2 from '@images/Seating2.jpg';
import Storage1 from '@images/Storage1.jpg';
import { Heading } from '@components/style';
import Image from 'next/image';

const Item = ({ item: { image, name } }) => {
  return (
    <div className="relative w-full pb-96">
      <Image
        layout="fill"
        placeholder="blur"
        src={image}
        alt={name}
        objectFit="cover"
      />
      <h4 className="absolute text-lg font-semibold shadow bottom-4 left-4 text-neutral-50">
        {name}
      </h4>
    </div>
  );
};

const Items = [
  { image: Seating1, name: 'Field Collection' },
  { image: Seating2, name: 'Range Collection' },
  { image: Storage1, name: 'Storage Collection' },
];
const UniqueCollection = () => {
  return (
    <div>
      <Heading>Explore each unique collection</Heading>
      <div className="md:flex md:gap-4 md:px-4">
        {Items.map((item) => (
          <Item item={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default UniqueCollection;
