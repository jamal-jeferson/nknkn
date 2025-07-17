import React from 'react';
import BaseProductPage from '../../components/shared/BaseProductPage';

const RugbyJerseysPage: React.FC = () => (
  <BaseProductPage
    title="Rugby Jerseys"
    description="Professional rugby jerseys designed for maximum performance and durability on the field"
    heroImage="/sublimated-card.jpg"
    kitIncludes={[
      'Custom sublimated rugby jersey',
      'Reinforced collar and seams',
      'Moisture-wicking fabric',
      'Team colors and logos',
      'Player names and numbers available'
    ]}
    fabricSpecs={[
      'Durable performance blend',
      'Lightweight & breathable',
      'Reinforced seams for durability',
      'Sweat-resistant finish',
      'Designed for active use'
    ]}
    sizes={{
      youth: ['6-8', '10-12', '14-16'],
      adult: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL']
    }}
    colors={[
      { name: 'navy', hex: '#000080' },
      { name: 'black', hex: '#000000' },
      { name: 'white', hex: '#FFFFFF' },
      { name: 'red', hex: '#FF0000' },
      { name: 'green', hex: '#008000' },
      { name: 'royal', hex: '#4169E1' },
      { name: 'maroon', hex: '#800000' },
      { name: 'purple', hex: '#800080' }
    ]}
    features={[
      {
        title: 'Professional Grade',
        description: 'Built to withstand the toughest rugby matches and training sessions'
      },
      {
        title: 'Custom Design',
        description: 'Full sublimation printing allows for unlimited design possibilities'
      },
      {
        title: 'Team Ready',
        description: 'Perfect for school teams, clubs, and professional rugby organizations'
      }
    ]}
  />
);

export default RugbyJerseysPage;