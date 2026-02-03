export type Category = 'Small Plates' | 'From the Sea' | 'From the Grill' | 'Salads & Fresh' | 'Desserts' | 'Cocktails';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  image?: string;
  featured?: boolean;
}

export const categories: Category[] = [
  'Small Plates',
  'From the Sea',
  'From the Grill',
  'Salads & Fresh',
  'Desserts',
  'Cocktails',
];

export const menuItems: MenuItem[] = [
  // Small Plates
  {
    id: 'sp1',
    name: 'Grilled Octopus',
    description: 'Tender charred tentacles, chickpea puree, smoked paprika oil, micro herbs.',
    price: '1,400 ALL',
    category: 'Small Plates',
    image: '/menu-item-1.png',
    featured: true,
  },
  {
    id: 'sp2',
    name: 'Burrata & Heirloom Tomatoes',
    description: 'Creamy pugliese burrata, vine-ripened tomatoes, aged balsamic, basil oil.',
    price: '1,200 ALL',
    category: 'Small Plates',
    image: '/menu-item-4.png',
    featured: true,
  },
  {
    id: 'sp3',
    name: 'Tuna Tartare',
    description: 'Hand-cut bluefin tuna, avocado mousse, sesame, yuzu dressing.',
    price: '1,600 ALL',
    category: 'Small Plates',
  },
  {
    id: 'sp4',
    name: 'Crispy Calamari',
    description: 'Lightly fried, lemon aioli, pickled chili, fresh herbs.',
    price: '900 ALL',
    category: 'Small Plates',
  },
  {
    id: 'sp5',
    name: 'Mediterranean Mezze Board',
    description: 'Hummus, tzatziki, baba ganoush, olives, warm flatbread.',
    price: '1,100 ALL',
    category: 'Small Plates',
  },
  {
    id: 'sp6',
    name: 'Beef Carpaccio',
    description: 'Paper-thin aged beef, truffle mayo, arugula, parmesan shavings.',
    price: '1,500 ALL',
    category: 'Small Plates',
  },

  // From the Sea
  {
    id: 'fs1',
    name: 'Adriatic Sea Bass',
    description: 'Whole grilled sea bass, lemon-caper butter, roasted potatoes, seasonal greens.',
    price: '2,200 ALL',
    category: 'From the Sea',
    image: '/menu-item-2.png',
    featured: true,
  },
  {
    id: 'fs2',
    name: 'Tiger Prawn Risotto',
    description: 'Carnaroli rice, saffron broth, pan-seared tiger prawns, lime zest.',
    price: '1,900 ALL',
    category: 'From the Sea',
  },
  {
    id: 'fs3',
    name: 'Grilled Swordfish Steak',
    description: 'Herb-crusted, roasted cherry tomatoes, olive tapenade, arugula.',
    price: '2,100 ALL',
    category: 'From the Sea',
  },
  {
    id: 'fs4',
    name: 'Linguine alle Vongole',
    description: 'Fresh clams, white wine, garlic, chili flakes, parsley.',
    price: '1,600 ALL',
    category: 'From the Sea',
  },
  {
    id: 'fs5',
    name: 'Seafood Platter for Two',
    description: 'Grilled prawns, calamari, mussels, sea bass fillet, lemon butter.',
    price: '4,200 ALL',
    category: 'From the Sea',
  },
  {
    id: 'fs6',
    name: 'Pan-Seared Salmon',
    description: 'Crispy skin, miso glaze, wilted spinach, sesame-ginger dressing.',
    price: '1,800 ALL',
    category: 'From the Sea',
  },

  // From the Grill
  {
    id: 'fg1',
    name: 'Wagyu Beef Burger',
    description: 'Smoked cheddar, caramelized onion, truffle mayo, brioche bun, fries.',
    price: '1,600 ALL',
    category: 'From the Grill',
    featured: true,
  },
  {
    id: 'fg2',
    name: 'Lamb Chops',
    description: 'New Zealand rack, herb crust, roasted vegetables, red wine jus.',
    price: '2,800 ALL',
    category: 'From the Grill',
    image: '/menu-item-3.png',
  },
  {
    id: 'fg3',
    name: 'Black Angus Tagliata',
    description: 'Sliced beef tenderloin, arugula, parmesan, aged balsamic.',
    price: '2,600 ALL',
    category: 'From the Grill',
  },
  {
    id: 'fg4',
    name: 'Grilled Chicken Souvlaki',
    description: 'Marinated thigh meat, tzatziki, warm pita, Greek salad.',
    price: '1,200 ALL',
    category: 'From the Grill',
  },
  {
    id: 'fg5',
    name: 'Pork Belly',
    description: 'Slow-roasted, apple-mustard glaze, creamy polenta, crispy sage.',
    price: '1,500 ALL',
    category: 'From the Grill',
  },
  {
    id: 'fg6',
    name: 'Mixed Grill Platter',
    description: 'Beef, lamb, chicken, grilled vegetables, three house sauces.',
    price: '3,200 ALL',
    category: 'From the Grill',
  },

  // Salads & Fresh
  {
    id: 'sf1',
    name: 'Port Side Salad',
    description: 'Mixed greens, grilled halloumi, pomegranate, walnuts, honey-lemon dressing.',
    price: '900 ALL',
    category: 'Salads & Fresh',
  },
  {
    id: 'sf2',
    name: 'Caesar Salad',
    description: 'Romaine hearts, anchovy dressing, parmesan crisps, sourdough croutons.',
    price: '800 ALL',
    category: 'Salads & Fresh',
  },
  {
    id: 'sf3',
    name: 'Quinoa & Avocado Bowl',
    description: 'Tricolor quinoa, avocado, edamame, mango, citrus-tahini dressing.',
    price: '1,000 ALL',
    category: 'Salads & Fresh',
  },
  {
    id: 'sf4',
    name: 'Caprese',
    description: 'Buffalo mozzarella, vine tomatoes, fresh basil, extra virgin olive oil.',
    price: '900 ALL',
    category: 'Salads & Fresh',
  },
  {
    id: 'sf5',
    name: 'Grilled Prawn Salad',
    description: 'Tiger prawns, rocket, cherry tomatoes, avocado, lime vinaigrette.',
    price: '1,300 ALL',
    category: 'Salads & Fresh',
  },
  {
    id: 'sf6',
    name: 'Watermelon & Feta',
    description: 'Fresh watermelon, crumbled feta, mint, balsamic reduction.',
    price: '700 ALL',
    category: 'Salads & Fresh',
  },

  // Desserts
  {
    id: 'd1',
    name: 'Tiramisu',
    description: 'Classic recipe, mascarpone cream, espresso-soaked ladyfingers, cocoa dust.',
    price: '700 ALL',
    category: 'Desserts',
  },
  {
    id: 'd2',
    name: 'Chocolate Lava Cake',
    description: 'Warm dark chocolate center, vanilla bean gelato, raspberry coulis.',
    price: '800 ALL',
    category: 'Desserts',
  },
  {
    id: 'd3',
    name: 'Panna Cotta',
    description: 'Vanilla bean, passion fruit compote, almond tuile.',
    price: '600 ALL',
    category: 'Desserts',
  },
  {
    id: 'd4',
    name: 'Affogato',
    description: 'Double espresso, artisan vanilla gelato, amaretti biscuit.',
    price: '500 ALL',
    category: 'Desserts',
  },
  {
    id: 'd5',
    name: 'Cheesecake',
    description: 'Baked New York-style, forest berry compote, biscuit crumble.',
    price: '700 ALL',
    category: 'Desserts',
  },
  {
    id: 'd6',
    name: 'Fresh Fruit Platter',
    description: 'Seasonal tropical fruits, honey drizzle, mint.',
    price: '600 ALL',
    category: 'Desserts',
  },

  // Cocktails
  {
    id: 'c1',
    name: 'Port Side Spritz',
    description: 'Aperol, prosecco, elderflower, fresh orange, soda water.',
    price: '800 ALL',
    category: 'Cocktails',
  },
  {
    id: 'c2',
    name: 'Seaside Negroni',
    description: 'Gin, Campari, sweet vermouth, orange peel, rosemary smoke.',
    price: '900 ALL',
    category: 'Cocktails',
  },
  {
    id: 'c3',
    name: 'Adriatic Mule',
    description: 'Vodka, fresh lime, ginger beer, cucumber, mint.',
    price: '800 ALL',
    category: 'Cocktails',
  },
  {
    id: 'c4',
    name: 'Passion Margarita',
    description: 'Tequila, passion fruit, triple sec, lime, chili salt rim.',
    price: '900 ALL',
    category: 'Cocktails',
  },
  {
    id: 'c5',
    name: 'Espresso Martini',
    description: 'Vodka, fresh espresso, coffee liqueur, vanilla syrup.',
    price: '900 ALL',
    category: 'Cocktails',
  },
  {
    id: 'c6',
    name: 'Sunset Sangria',
    description: 'Red wine, brandy, seasonal fruits, cinnamon, citrus.',
    price: '700 ALL',
    category: 'Cocktails',
  },
];
