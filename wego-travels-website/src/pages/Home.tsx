import React from 'react';
import { HeroSlider, SlideData } from '../components/HeroSlider';
const homeSlides: SlideData[] = [{
  id: 'bali',
  title: 'Bali',
  subtitle: 'Indonesia',
  description: 'Experience the magic of the Island of the Gods. From ancient temples to pristine beaches, Bali offers a spiritual and visual feast for every traveler.',
  image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2000',
  ctaLink: '/destinations',
  ctaText: 'Explore More'
}, {
  id: 'thailand',
  title: 'Thailand',
  subtitle: 'Southeast Asia',
  description: 'The Land of Smiles awaits. Immerse yourself in bustling markets, ornate shrines, and the crystal-clear waters of the Andaman Sea.',
  image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=2000',
  ctaLink: '/destinations',
  ctaText: 'Explore More'
}, {
  id: 'kerala',
  title: 'Kerala',
  subtitle: 'India',
  description: "God's Own Country. Glide through the tranquil backwaters, explore lush tea plantations, and rejuvenate your soul with Ayurveda.",
  image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=2000',
  ctaLink: '/destinations',
  ctaText: 'Explore More'
}, {
  id: 'japan',
  title: 'Kyoto',
  subtitle: 'Japan',
  description: 'Where tradition meets modernity. Walk through thousands of vermilion torii gates and witness the timeless beauty of cherry blossoms.',
  image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2000',
  ctaLink: '/destinations',
  ctaText: 'Explore More'
}
];
export function Home() {
  return <div className="h-screen w-full relative">
    <HeroSlider slides={homeSlides} />
  </div>;
}