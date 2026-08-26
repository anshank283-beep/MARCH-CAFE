export const menuCategories = ['All', 'Burgers', 'Loaded Fries & Sides', 'Hot Beverages', 'Combos', 'Mojitos', 'Milkshakes']

export const menuItems = [
  // BURGERS
  { id: 1, name: 'Smash Daddy', category: 'Burgers', price: 340, featured: true, badge: 'TRUE LOVE IS A DOUBLE PATTY', description: 'Juicy smashed beef patties, melted cheese, sweet caramelized onions, sautéed mushrooms, crunchy gherkins, creamy house sauce, brioche bun', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80' },
  { id: 2, name: 'Classic', category: 'Burgers', price: 200, featured: false, badge: '', description: 'Single smash patty, cheese, iceberg lettuce, jalapeños, in-house sauce', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80' },
  { id: 3, name: 'Blue Belly', category: 'Burgers', price: 220, featured: false, badge: '', description: 'Single smash patty, cheese, crispy fries, jalapeños, iceberg lettuce, in-house sauce', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80' },
  { id: 4, name: 'Fancy', category: 'Burgers', price: 220, featured: false, badge: '', description: 'Single smash patty, cheese, half-boiled egg, tomato, iceberg lettuce, jalapeños, in-house sauce', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80' },
  { id: 5, name: 'Chicken', category: 'Burgers', price: 170, featured: false, badge: '', description: 'Crispy chicken patty with fresh veggies and special sauce', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80' },
  { id: 6, name: 'Hawaiian', category: 'Burgers', price: 230, featured: false, badge: 'TROPICAL', description: 'Juicy single beef patty, melted cheese crisp, iceberg lettuce, spicy jalapeños, sweet toasted pineapple, signature sauce', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80' },
  { id: 7, name: 'The Great B', category: 'Burgers', price: 280, featured: true, badge: 'DOUBLE TROUBLE', description: 'Double smash patties, melted cheese, iceberg lettuce, jalapeños, Oklahoma-style smashed onions, in-house sauce', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80' },
  { id: 8, name: 'Triple X', category: 'Burgers', price: 370, featured: true, badge: 'TRIPLE THREAT', description: 'Triple smash patties stacked high with Oklahoma-style smashed onions', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80' },
  { id: 9, name: 'Dorito', category: 'Burgers', price: 260, featured: false, badge: 'CRUNCHY', description: 'Juicy single beef patty, melted cheese, iceberg lettuce, tomato, onion, Doritos, signature sauce', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80' },
  { id: 10, name: 'Mini Burger 5pc', category: 'Burgers', price: 180, featured: false, badge: 'SHAREABLE', description: 'Small single smash patty, cheese, Oklahoma-style smashed onions, iceberg lettuce, jalapeños, signature sauce', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80' },
  { id: 11, name: 'Nashville', category: 'Burgers', price: 0, featured: false, badge: 'COMING SOON', description: 'Spicy Nashville-style chicken burger - coming soon!', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80' },

  // LOADED FRIES & SIDES
  { id: 12, name: 'Buff Loaded Fries (Small)', category: 'Loaded Fries & Sides', price: 220, featured: true, badge: 'BESTSELLER', description: 'Crispy fries loaded with buffalo chicken, cheese sauce, and toppings', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&q=80' },
  { id: 13, name: 'Buff Loaded Fries (Large)', category: 'Loaded Fries & Sides', price: 300, featured: false, badge: '', description: 'Extra large portion of our famous buffalo loaded fries', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&q=80' },
  { id: 14, name: 'Chicken Loaded Fries', category: 'Loaded Fries & Sides', price: 200, featured: false, badge: '', description: 'Crispy fries topped with seasoned chicken and cheese', image: 'https://images.unsplash.com/photo-1573080496987-a199f8cd75c9?w=800&q=80' },
  { id: 15, name: 'Fries', category: 'Loaded Fries & Sides', price: 80, featured: false, badge: '', description: 'Classic golden crispy fries', image: 'https://images.unsplash.com/photo-1573080496987-a199f8cd75c9?w=800&q=80' },
  { id: 16, name: 'Nachos', category: 'Loaded Fries & Sides', price: 230, featured: true, badge: 'CRUNCHY', description: 'Loaded nachos with cheese, jalapeños, and all the fixings', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80' },
  { id: 17, name: 'Chicken Strips 3pc', category: 'Loaded Fries & Sides', price: 160, featured: false, badge: '', description: 'Crispy breaded chicken strips with dipping sauce', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80' },
  { id: 18, name: 'Korean Hot Wings', category: 'Loaded Fries & Sides', price: 220, featured: true, badge: 'SPICY', description: 'Korean-style spicy glazed chicken wings', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&q=80' },

  // HOT BEVERAGES
  { id: 19, name: 'Hot Chocolate', category: 'Hot Beverages', price: 120, featured: true, badge: 'COZY', description: 'Rich, creamy hot chocolate topped with whipped cream', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&q=80' },

  // COMBOS
  { id: 20, name: 'Meal for Two', category: 'Combos', price: 622, featured: true, badge: 'PERFECT PAIR', description: 'Fancy, Classic, Chicken Loaded, Coke', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80' },
  { id: 21, name: 'Meal for Four', category: 'Combos', price: 844, featured: true, badge: 'FEAST', description: 'Beef Loaded, Classic, Mini Burger, Nachos, Coke', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80' },

  // MOJITOS
  { id: 22, name: 'Chat Pat', category: 'Mojitos', price: 120, featured: false, badge: '', description: 'Refreshing chatpata flavored mojito', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80' },
  { id: 23, name: 'Watermelon', category: 'Mojitos', price: 120, featured: true, badge: 'REFRESHING', description: 'Fresh watermelon mojito with mint', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80' },
  { id: 24, name: 'Blue Curacao', category: 'Mojitos', price: 120, featured: true, badge: 'VIBRANT', description: 'Beautiful blue curacao mojito', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80' },
  { id: 25, name: 'Bubble Gum Mojito', category: 'Mojitos', price: 130, featured: false, badge: 'FUN', description: 'Sweet bubble gum flavored mojito', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80' },
  { id: 26, name: 'Green Apple', category: 'Mojitos', price: 120, featured: false, badge: '', description: 'Crisp green apple mojito', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80' },
  { id: 27, name: 'Passion Fruit', category: 'Mojitos', price: 120, featured: true, badge: 'TROPICAL', description: 'Tangy passion fruit mojito', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80' },
  { id: 28, name: 'Iced Tea', category: 'Mojitos', price: 130, featured: false, badge: '', description: 'Classic refreshing iced tea', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80' },

  // MILKSHAKES
  { id: 29, name: 'Blueberry', category: 'Milkshakes', price: 140, featured: false, badge: '', description: 'Fresh blueberry milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80' },
  { id: 30, name: 'Oreo', category: 'Milkshakes', price: 120, featured: true, badge: 'CLASSIC', description: 'Creamy Oreo cookie milkshake', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80' },
  { id: 31, name: 'Shamrock', category: 'Milkshakes', price: 120, featured: false, badge: '', description: 'Minty fresh shamrock shake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80' },
  { id: 32, name: 'Roasted Cashew', category: 'Milkshakes', price: 160, featured: true, badge: 'NUTTY', description: 'Rich roasted cashew milkshake', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80' },
  { id: 33, name: 'Avocado', category: 'Milkshakes', price: 120, featured: false, badge: '', description: 'Creamy avocado milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80' },
  { id: 34, name: 'Mango', category: 'Milkshakes', price: 120, featured: true, badge: 'TROPICAL', description: 'Sweet mango milkshake', image: 'https://images.unsplash.com/photo-994894276910-4097b5e6f8b5?w=800&q=80' },
  { id: 35, name: 'Yellow Vanilla', category: 'Milkshakes', price: 140, featured: false, badge: '', description: 'Classic vanilla milkshake', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80' },
  { id: 36, name: 'Lotus Biscoff', category: 'Milkshakes', price: 180, featured: true, badge: 'PREMIUM', description: 'Luxurious Lotus Biscoff cookie milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80' },
  { id: 37, name: 'Pistachio Banana', category: 'Milkshakes', price: 180, featured: true, badge: 'CREAMY', description: 'Pistachio and banana blend milkshake', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80' },
  { id: 38, name: 'Crunchy P.', category: 'Milkshakes', price: 140, featured: false, badge: '', description: 'Crunchy peanut butter milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80' },
]
