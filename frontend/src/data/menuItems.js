export const menuCategories = ['All', 'Burgers', 'Loaded Fries', 'Combos', 'Mojitos & Shakes', 'Hot Beverages']

export const menuItems = [
  // BURGERS
  { id: 1, name: 'Smash Daddy', category: 'Burgers', price: 340, featured: true, badge: 'FEATURED', description: 'Juicy smashed beef patties, layered with melted cheese, sweet caramelized onions, buttery sautéed mushrooms, crunchy gherkins & our rich, creamy house sauce - all packed inside a brioche bun', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80' },
  { id: 2, name: 'Classic', category: 'Burgers', price: 200, featured: false, badge: '', description: 'Single smash patty, cheese, iceberg lettuce, jalapeños, and our in-house sauce', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80' },
  { id: 3, name: 'Blue Belly', category: 'Burgers', price: 220, featured: false, badge: '', description: 'Single smash patty, cheese, crispy fries, jalapeños, iceberg lettuce, house sauce', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80' },
  { id: 4, name: 'Fancy', category: 'Burgers', price: 220, featured: false, badge: '', description: 'Single smash patty, cheese, half-boiled egg, tomato, iceberg lettuce, jalapeños, house sauce', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80' },
  { id: 5, name: 'Chicken', category: 'Burgers', price: 170, featured: false, badge: '', description: 'Crispy chicken burger with fresh veggies and special sauce', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80' },
  { id: 6, name: 'Hawaiian', category: 'Burgers', price: 230, featured: false, badge: '', description: 'Juicy single beef patty layered with melted cheese, crisp iceberg lettuce, spicy jalapeños, sweet toasted pineapple, signature house sauce', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80' },
  { id: 7, name: 'The Great B', category: 'Burgers', price: 280, featured: false, badge: '', description: 'Double smash patties, melted cheese, iceberg lettuce, jalapeños, Oklahoma-style smashed onions, house sauce', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80' },
  { id: 8, name: 'Triple X', category: 'Burgers', price: 370, featured: false, badge: '', description: 'Triple smash patties stacked high with Oklahoma-style smashed onions. Big, bold, and loaded', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80' },
  { id: 9, name: 'Dorito', category: 'Burgers', price: 260, featured: false, badge: '', description: 'Juicy single beef patty topped with melted cheese, crisp iceberg lettuce, chopped tomato, chopped onion, crunchy Doritos, signature house sauce', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80' },

  // LOADED FRIES
  { id: 10, name: 'Buff (Small)', category: 'Loaded Fries', price: 220, featured: false, badge: '', description: 'Buffalo loaded fries - small portion', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&q=80' },
  { id: 11, name: 'Buff (Large)', category: 'Loaded Fries', price: 300, featured: false, badge: '', description: 'Buffalo loaded fries - large portion', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&q=80' },
  { id: 12, name: 'Chicken', category: 'Loaded Fries', price: 200, featured: false, badge: '', description: 'Chicken loaded fries with cheese and toppings', image: 'https://images.unsplash.com/photo-1573080496987-a199f8cd75c9?w=800&q=80' },
  { id: 13, name: 'Fries', category: 'Loaded Fries', price: 80, featured: false, badge: '', description: 'Classic golden crispy fries', image: 'https://images.unsplash.com/photo-1573080496987-a199f8cd75c9?w=800&q=80' },
  { id: 14, name: 'Nachos', category: 'Loaded Fries', price: 230, featured: false, badge: '', description: 'Loaded nachos with cheese, jalapeños, and all the fixings', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80' },
  { id: 15, name: 'Chicken Strips 3pc', category: 'Loaded Fries', price: 160, featured: false, badge: '', description: 'Crispy breaded chicken strips with dipping sauce', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80' },
  { id: 16, name: 'Korean Hot Wings', category: 'Loaded Fries', price: 220, featured: false, badge: '', description: 'Korean-style spicy glazed chicken wings', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&q=80' },

  // COMBOS
  { id: 17, name: 'Meal For Two', category: 'Combos', price: 622, featured: false, badge: '', description: 'Fancy, Classic, Chicken Loaded, Coke', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80' },
  { id: 18, name: 'Meal For Four', category: 'Combos', price: 844, featured: false, badge: '', description: 'Beef Loaded, Classic, Miniburger, Nachos, Coke', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80' },

  // MOJITOS
  { id: 19, name: 'Chat Pat', category: 'Mojitos & Shakes', price: 120, featured: false, badge: '', description: 'Refreshing chatpata flavored mojito', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80' },
  { id: 20, name: 'Watermelon', category: 'Mojitos & Shakes', price: 120, featured: false, badge: '', description: 'Fresh watermelon mojito with mint', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80' },
  { id: 21, name: 'Blue Curacao', category: 'Mojitos & Shakes', price: 120, featured: false, badge: '', description: 'Beautiful blue curacao mojito', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80' },
  { id: 22, name: 'Green Apple', category: 'Mojitos & Shakes', price: 120, featured: false, badge: '', description: 'Crisp green apple mojito', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80' },
  { id: 23, name: 'Passion Fruit', category: 'Mojitos & Shakes', price: 120, featured: false, badge: '', description: 'Tangy passion fruit mojito', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80' },
  { id: 24, name: 'Iced Tea', category: 'Mojitos & Shakes', price: 130, featured: false, badge: '', description: 'Classic refreshing iced tea', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80' },

  // MILKSHAKES
  { id: 25, name: 'Blueberry', category: 'Mojitos & Shakes', price: 140, featured: false, badge: '', description: 'Fresh blueberry milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80' },
  { id: 26, name: 'Oreo', category: 'Mojitos & Shakes', price: 120, featured: false, badge: '', description: 'Creamy Oreo cookie milkshake', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80' },
  { id: 27, name: 'Shamrock', category: 'Mojitos & Shakes', price: 120, featured: false, badge: '', description: 'Minty fresh shamrock shake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80' },
  { id: 28, name: 'Roasted Cashew', category: 'Mojitos & Shakes', price: 160, featured: false, badge: '', description: 'Rich roasted cashew milkshake', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80' },
  { id: 29, name: 'Avocado', category: 'Mojitos & Shakes', price: 120, featured: false, badge: '', description: 'Creamy avocado milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80' },
  { id: 30, name: 'Mango', category: 'Mojitos & Shakes', price: 120, featured: false, badge: '', description: 'Sweet mango milkshake', image: 'https://images.unsplash.com/photo-994894276910-4097b5e6f8b5?w=800&q=80' },
  { id: 31, name: 'Yellow Vanilla', category: 'Mojitos & Shakes', price: 140, featured: false, badge: '', description: 'Classic vanilla milkshake', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80' },
  { id: 32, name: 'Lotus Biscoff', category: 'Mojitos & Shakes', price: 180, featured: false, badge: '', description: 'Luxurious Lotus Biscoff cookie milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80' },
  { id: 33, name: 'Pistachio Banana', category: 'Mojitos & Shakes', price: 180, featured: false, badge: '', description: 'Pistachio and banana blend milkshake', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80' },
  { id: 34, name: 'Crunchy P.', category: 'Mojitos & Shakes', price: 140, featured: false, badge: '', description: 'Crunchy peanut butter milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80' },

  // HOT BEVERAGES
  { id: 35, name: 'Hot Chocolate', category: 'Hot Beverages', price: 120, featured: false, badge: '', description: 'Rich, creamy hot chocolate', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&q=80' },
]
