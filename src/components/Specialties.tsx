'use client';

import Image from 'next/image';
import ScrollRevealText, { ScrollRevealElement } from './ScrollReveal';

const specialties = [
  {
    title: 'Anxiety & Panic',
    description: 'If you\'re dealing with constant worry, racing thoughts, tension in your body, or feeling like you\'re always bracing for something to go wrong—therapy can help you find relief.',
    image: '/images/Image 1.png',
    alt: 'Person experiencing anxiety and racing thoughts'
  },
  {
    title: 'Trauma',
    description: 'I work with adults who have experienced single-incident trauma as well as complex, long-standing patterns. My approach is paced carefully with emphasis on safety and stabilization.',
    image: '/images/Image 2.png',
    alt: 'Person carrying emotional weight from past trauma'
  },
  {
    title: 'Burnout',
    description: 'Many entrepreneurs, creatives, and professionals feel disconnected after years of pushing through stress. Therapy becomes a space to slow down and develop sustainable ways of living.',
    image: '/images/Image 3.png',
    alt: 'Professional experiencing burnout and exhaustion'
  }
];

export default function Specialties() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <ScrollRevealText 
          as="h2" 
          className="text-3xl md:text-display font-medium text-lilac-olive-dark text-center mb-16"
          enableBlur
          blurStrength={4}
        >
          My Specialties
        </ScrollRevealText>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="bg-lilac-cream border-2 border-[#306e78]/50 p-8 flex flex-col rounded-lg"
            >
              <ScrollRevealText 
                as="h3" 
                className="text-subheading font-medium text-lilac-olive-dark mb-4"
                enableBlur
                blurStrength={3}
              >
                {specialty.title}
              </ScrollRevealText>
              <ScrollRevealText 
                as="p" 
                className="text-body text-lilac-olive mb-8 leading-relaxed font-normal flex-1"
                enableBlur
                blurStrength={3}
              >
                {specialty.description}
              </ScrollRevealText>
              <ScrollRevealElement className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden" enableBlur blurStrength={3}>
                <Image
                  src={specialty.image}
                  alt={specialty.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </ScrollRevealElement>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
