import React from 'react';
import { HeroSlider, SlideData } from '../components/HeroSlider';
const homeSlides: SlideData[] = [{
  id: 'yiwu',
  title: 'Yiwu Market',
  subtitle: 'China',
  description: 'Discover the world’s largest wholesale market in Yiwu, China. With thousands of suppliers and endless product varieties, Yiwu International Trade Market is a global hub for sourcing, trading, and business opportunities.',
  image: '/home_images/home_image_01.jpg',
  ctaLink: '/destinations',
  ctaText: 'Explore More'
}, {
  id: 'thailand',
  title: 'Thailand',
  subtitle: 'Southeast Asia',
  description: 'Thailand, the Land of Smiles, is a treasure of culture, cuisine, and natural beauty. From the bustling streets and vibrant night markets of Bangkok to the ornate temples of Chiang Mai, and the stunning beaches and limestone cliffs of Phuket and Krabi, Thailand offers unforgettable experiences for every traveler.',
  image: '/home_images/home_image_02.jpg',
  ctaLink: '/destinations',
  ctaText: 'Explore More'
}, {
  id: 'dubai',
  title: 'Dubai',
  subtitle: 'United Arab Emirates',
  description: 'The city of luxury and innovation. Marvel at the towering Burj Khalifa, explore futuristic architecture, enjoy vibrant nightlife, and experience world-class shopping and entertainment.',
  image: '/home_images/home_image_03.jpg',
  ctaLink: '/destinations',
  ctaText: 'Explore More'
},
{
  id: 'maldives',
  title: 'Maldives',
  subtitle: 'Indian Ocean',
  description: 'A tropical paradise of white sandy beaches and crystal-clear waters. Relax in overwater bungalows, snorkel among vibrant coral reefs, and soak in the serene island vibes.',
  image: '/home_images/home_image_04.jpg',
  ctaLink: '/destinations',
  ctaText: 'Explore More'
}
];
export function Home() {
  return <div className="h-screen w-full relative">
    <HeroSlider slides={homeSlides} />
  </div>;
}