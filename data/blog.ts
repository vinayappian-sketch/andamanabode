import type { BlogPost } from '../types';
import { BLOG_IMAGE_1, BLOG_IMAGE_2, BLOG_IMAGE_3, BLOG_IMAGE_4 } from '../assets/images';

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'top-10-beaches',
    title: 'Top 10 Must-Visit Beaches in the Andamans',
    excerpt: 'From the world-famous Radhanagar to hidden gems, discover the most breathtaking beaches for your island escape.',
    author: 'Captain Coral',
    date: 'July 15, 2024',
    category: 'Travel Guide',
    imageUrl: BLOG_IMAGE_1,
    content: `
      <p>There's something truly magical about the beaches of the Andaman Islands. The sand isn't just sand; it's a fine, white powder that feels like silk beneath your feet. The water isn't just blue; it's a dazzling spectrum of turquoise, sapphire, and aquamarine that sparkles under the tropical sun.</p>
      <p>In this guide, we'll take you on a journey to the top 10 most breathtaking beaches that should be on every traveler's bucket list.</p>
      <h3>1. Radhanagar Beach, Havelock Island</h3>
      <p>No list is complete without the crown jewel of the Andamans. Consistently ranked among the best beaches in Asia, Radhanagar (Beach No. 7) is a postcard-perfect paradise. Its vast expanse of white sand, framed by lush forest and calm, crystal-clear water, makes it the ideal spot for swimming and watching the sunset.</p>
      <h3>2. Elephant Beach, Havelock Island</h3>
      <p>Famous for its vibrant coral reefs, Elephant Beach is a snorkeler's paradise. You can reach it via a short boat ride or an adventurous trek through the jungle. The waters are teeming with colorful fish and marine life, making it an unforgettable experience.</p>
      <h3>3. Laxmanpur Beach, Neil Island</h3>
      <p>Known for its stunning sunsets and the natural rock bridge formation, Laxmanpur Beach is a must-visit on Neil Island. The shoreline is dotted with beautiful shells and dead corals, making for a fascinating walk.</p>
    `,
  },
  {
    id: 'kayaking-adventure',
    title: 'A Thrilling Kayaking Adventure Through the Mangroves',
    excerpt: 'Paddle through serene mangrove creeks, a unique and peaceful adventure that brings you closer to nature.',
    author: 'Sandy Shells',
    date: 'July 10, 2024',
    category: 'Experiences',
    imageUrl: BLOG_IMAGE_2,
    content: `
      <p>If you're looking for an experience that's both tranquil and adventurous, look no further than mangrove kayaking in the Andamans. As you glide through the narrow, winding waterways, you'll be enveloped by the dense, green canopy of the mangrove forest. The silence is broken only by the gentle splash of your paddle and the chorus of exotic birds.</p>
      <p>This eco-tour offers a unique perspective on the islands' rich biodiversity. It's a chance to disconnect from the world and reconnect with nature in its purest form. It's suitable for all ages and requires no prior kayaking experience, making it a perfect family activity.</p>
    `,
  },
  {
    id: 'packing-guide',
    title: 'The Ultimate Andaman Packing Guide for Adventure Lovers',
    excerpt: 'Don\'t forget these essentials! Our checklist for what to pack for your scuba, trekking, and beach-hopping holiday.',
    author: 'Wally Wave',
    date: 'July 5, 2024',
    category: 'Tips & Tricks',
    imageUrl: BLOG_IMAGE_3,
    content: `
      <p>Packing for the Andamans is all about being prepared for sun, sea, and adventure. Here's a quick checklist to ensure you have everything you need:</p>
      <ul>
        <li><strong>Light Clothing:</strong> Cotton shorts, t-shirts, and dresses are perfect for the tropical climate.</li>
        <li><strong>Swimwear:</strong> Pack at least two pairs so one can dry while you use the other.</li>
        <li><strong>Reef-Safe Sunscreen:</strong> Protect your skin and the delicate coral reefs.</li>
        <li><strong>Waterproof Dry Bag:</strong> Essential for keeping your electronics and valuables safe on boat trips.</li>
        <li><strong>Insect Repellent:</strong> Especially for evenings and jungle treks.</li>
        <li><strong>Sturdy Footwear:</strong> A pair of sandals for the beach and comfortable walking shoes for exploring.</li>
        <li><strong>Basic First-Aid Kit:</strong> For minor cuts and scrapes.</li>
      </ul>
      <p>Packing light and smart will make your island-hopping experience much more comfortable!</p>
    `,
  },
  {
    id: 'neil-island-uncovered',
    title: 'Neil Island Uncovered: The Vegetable Bowl of Andaman',
    excerpt: 'Explore the tranquil charm of Neil Island, known for its lush landscapes, unspoiled beaches, and relaxed vibe.',
    author: 'Captain Coral',
    date: 'June 28, 2024',
    category: 'Destinations',
    imageUrl: BLOG_IMAGE_4,
    content: `
      <p>Neil Island, or Shaheed Dweep, is the quieter, more laid-back cousin of Havelock. Known as the "vegetable bowl" of the Andamans, its landscape is dotted with lush paddy fields, banana plantations, and tropical trees. The pace of life here is wonderfully slow, making it the perfect place to unwind.</p>
      <h3>What to See:</h3>
      <p><strong>Bharatpur Beach:</strong> Famous for its shallow, clear waters and coral reefs, perfect for glass-bottom boat rides and snorkeling.</p>
      <p><strong>Laxmanpur Beach:</strong> Renowned for its breathtaking sunsets and the unique natural rock bridge.</p>
      <p><strong>Sitapur Beach:</strong> The best spot on the island to catch a glorious sunrise.</p>
      <p>Renting a bicycle or scooter is the best way to explore this small, charming island at your own pace.</p>
    `,
  },
];
