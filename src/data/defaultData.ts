import { DayOfWeek, DAYS_OF_WEEK, Meal, PantryItem, WeeklyPlan, NotionSyncConfig } from '../types';

export const INITIAL_PANTRY_ITEMS: PantryItem[] = [
  { id: 'p1', name: 'Baby Spinach (Organic)', category: 'Produce', quantity: '1 bag (200g)', daysUntilExpiry: 1 },
  { id: 'p2', name: 'Fresh Cilantro & Limes', category: 'Produce', quantity: '1 bunch + 3 limes', daysUntilExpiry: 2 },
  { id: 'p3', name: 'Ripe Hass Avocados', category: 'Produce', quantity: '2 avocados', daysUntilExpiry: 2 },
  { id: 'p4', name: 'Smoked Cheddar Cheese', category: 'Dairy & Eggs', quantity: '150g block', daysUntilExpiry: 3 },
  { id: 'p5', name: 'Greek Yogurt / Crema', category: 'Dairy & Eggs', quantity: '1 tub (300g)', daysUntilExpiry: 2 },
  { id: 'p6', name: 'Brioche Burger Buns', category: 'Bakery', quantity: '4 buns', daysUntilExpiry: 3 },
  { id: 'p7', name: 'Free-range Eggs', category: 'Dairy & Eggs', quantity: '6 eggs', daysUntilExpiry: 4 },
  { id: 'p8', name: 'Red Bell Peppers', category: 'Produce', quantity: '2 peppers', daysUntilExpiry: 4 },
  { id: 'p9', name: 'Ground Turkey / Lean Beef', category: 'Meat & Seafood', quantity: '500g', daysUntilExpiry: 2 },
  { id: 'p10', name: 'Flour Tortillas', category: 'Bakery', quantity: '8 pack', daysUntilExpiry: 5 },
  { id: 'p11', name: 'Black Beans & Corn', category: 'Pantry', quantity: '2 cans', daysUntilExpiry: 45 },
  { id: 'p12', name: 'Chipotle in Adobo', category: 'Sauces & Condiments', quantity: '1 small jar', daysUntilExpiry: 14 }
];

export const RECIPE_CATALOG: Meal[] = [
  {
    id: 'rec-1',
    title: 'Retro Smash Burger & Crispy Wedge Fries',
    mealType: 'dinner',
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    tags: ['80s Diner Classic', 'High Protein', 'Eat Fresh'],
    calorieEstimate: 680,
    gordoPortionNotes: 'Double patty with extra melted cheddar & caramelized onion smash',
    flacoPortionNotes: 'Single patty on toasted brioche bun with lettuce wrap style option',
    notes: 'Hot griddle smash! Press paper-thin for maximum crispy lace edges. Serve with homemade secret sauce.',
    leftoverSuitability: 'cook_fresh_only',
    reheatInstructions: 'Not recommended for leftovers. Assembled buns and crispy smashed patties get soggy if stored.',
    usesExpiringItemIds: ['p4', 'p6'],
    ingredients: [
      { id: 'i1', name: 'Lean Ground Beef', amount: '450g', category: 'Meat & Seafood' },
      { id: 'i2', name: 'Brioche Buns', amount: '2-4 buns', category: 'Bakery', isExpiring: true },
      { id: 'i3', name: 'Smoked Cheddar', amount: '4 slices', category: 'Dairy & Eggs', isExpiring: true },
      { id: 'i4', name: 'Yellow Onion', amount: '1 large (shaved)', category: 'Produce' },
      { id: 'i5', name: 'Russet Potatoes', amount: '2 medium', category: 'Produce' },
      { id: 'i6', name: 'Pickles & Special Sauce', amount: '3 tbsp', category: 'Sauces & Condiments' }
    ]
  },
  {
    id: 'rec-2',
    title: 'El Gordito Fiesta Taco Salad Bowl',
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    tags: ['Quick Prep', 'Gluten Free', 'Expiring Hero'],
    calorieEstimate: 510,
    gordoPortionNotes: 'Generous scoop of seasoned black beans, crushed tortilla chips & extra cheese',
    flacoPortionNotes: 'Heavy on baby spinach bed, fresh cilantro lime dressing & sliced avocado',
    notes: 'Uses up the expiring spinach and cilantro. Toss everything in warm skillet pan-crisped spices.',
    leftoverSuitability: 'cook_fresh_only',
    reheatInstructions: 'Best fresh! Tender baby spinach and creamy avocado oxidize and wilt quickly after tossing.',
    usesExpiringItemIds: ['p1', 'p2', 'p3'],
    ingredients: [
      { id: 'i7', name: 'Baby Spinach', amount: '150g', category: 'Produce', isExpiring: true },
      { id: 'i8', name: 'Ground Turkey or Beef', amount: '250g', category: 'Meat & Seafood', isExpiring: true },
      { id: 'i9', name: 'Hass Avocado', amount: '1 sliced', category: 'Produce', isExpiring: true },
      { id: 'i10', name: 'Black Beans & Sweet Corn', amount: '1 cup', category: 'Pantry' },
      { id: 'i11', name: 'Fresh Cilantro & Lime', amount: 'To taste', category: 'Produce', isExpiring: true },
      { id: 'i12', name: 'Greek Crema Dressing', amount: '3 tbsp', category: 'Dairy & Eggs' }
    ]
  },
  {
    id: 'rec-3',
    title: 'Crispy Fish Fillet & Tartar Slaw Sandwiches',
    mealType: 'lunch',
    prepTime: 15,
    cookTime: 12,
    servings: 2,
    tags: ['Drive-Thru Style', 'Seafood', 'Eat Fresh'],
    calorieEstimate: 540,
    gordoPortionNotes: 'Two thick fillets on sesame bun with lemon pepper dusted potato chips',
    flacoPortionNotes: 'Light tartar yogurt smear with oversized crunchy red cabbage slaw',
    notes: '80s Friday fast-food fish sandwich homage! Golden panko crust pan fried to crunchy perfection.',
    leftoverSuitability: 'cook_fresh_only',
    reheatInstructions: 'Cook fresh only. Fried panko fish becomes soft and loses its crunch once refrigerated.',
    usesExpiringItemIds: ['p5'],
    ingredients: [
      { id: 'i13', name: 'White Fish Fillets (Cod/Haddock)', amount: '350g', category: 'Meat & Seafood' },
      { id: 'i14', name: 'Brioche or Sesame Buns', amount: '2 buns', category: 'Bakery' },
      { id: 'i15', name: 'Shredded Cabbage', amount: '2 cups', category: 'Produce' },
      { id: 'i16', name: 'Homemade Tartar Sauce', amount: '3 tbsp', category: 'Sauces & Condiments' },
      { id: 'i17', name: 'Lemon Wedges', amount: '1 lemon', category: 'Produce' }
    ]
  },
  {
    id: 'rec-4',
    title: 'Sizzling Steak & Pepper Fajita Skillet',
    mealType: 'dinner',
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    tags: ['Cast Iron', 'High Protein', 'Diner Sizzle'],
    calorieEstimate: 620,
    gordoPortionNotes: '4 warm flour tortillas, steak strips with charred onions and salsa verde',
    flacoPortionNotes: '2 tortillas, double seared peppers, avocado slices and dollop of crema',
    notes: 'Super hot skillet gives that iconic sizzle! Squeeze fresh lime right before serving.',
    leftoverSuitability: 'good',
    reheatInstructions: 'Reheats nicely! Toss steak strips & peppers in a hot skillet for 2 minutes to revive the sear.',
    usesExpiringItemIds: ['p2', 'p3', 'p8'],
    ingredients: [
      { id: 'i18', name: 'Flank or Skirt Steak', amount: '400g', category: 'Meat & Seafood' },
      { id: 'i19', name: 'Bell Peppers (Red & Green)', amount: '2 sliced', category: 'Produce', isExpiring: true },
      { id: 'i20', name: 'Yellow Onion', amount: '1 sliced', category: 'Produce' },
      { id: 'i21', name: 'Flour Tortillas', amount: '6 small', category: 'Bakery' },
      { id: 'i22', name: 'Avocado & Lime', amount: '1 avocado', category: 'Produce', isExpiring: true },
      { id: 'i23', name: 'Fajita Seasoning (Cumin, Paprika, Garlic)', amount: '2 tbsp', category: 'Pantry' }
    ]
  },
  {
    id: 'rec-5',
    title: 'Chipotle Chicken Burrito Bowls for Two',
    mealType: 'dinner',
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    tags: ['Meal Prep Star', 'Batch Friendly', 'Mexican-American'],
    calorieEstimate: 590,
    gordoPortionNotes: 'Extra cilantro-lime rice with double chicken & shredded cheese',
    flacoPortionNotes: 'Cauliflower/brown rice base with extra pico de gallo and grilled peppers',
    notes: 'Marinate chicken thighs in adobo sauce and garlic. Easy cleanup one-pan skillet grill.',
    leftoverSuitability: 'excellent',
    reheatInstructions: 'Superb leftover! Flavors meld overnight. Microwave 2 mins covered with a damp paper towel or warm in skillet.',
    usesExpiringItemIds: ['p2', 'p5', 'p8'],
    ingredients: [
      { id: 'i24', name: 'Boneless Chicken Thighs', amount: '450g', category: 'Meat & Seafood' },
      { id: 'i25', name: 'Long Grain Rice or Brown Rice', amount: '1 cup uncooked', category: 'Pantry' },
      { id: 'i26', name: 'Bell Pepper & Onion', amount: '1 of each', category: 'Produce', isExpiring: true },
      { id: 'i27', name: 'Black Beans', amount: '1 can rinsed', category: 'Pantry' },
      { id: 'i28', name: 'Chipotle in Adobo', amount: '1 tbsp minced', category: 'Sauces & Condiments' },
      { id: 'i29', name: 'Greek Yogurt Crema', amount: '3 tbsp', category: 'Dairy & Eggs', isExpiring: true }
    ]
  },
  {
    id: 'rec-6',
    title: 'Classic Club Sandwich & Warm Tomato Bisque',
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    tags: ['Diner Comfort', 'Quick 15m', 'Eat Fresh'],
    calorieEstimate: 520,
    gordoPortionNotes: 'Triple-decker stacked with roasted turkey, crisp bacon & dijon mayo',
    flacoPortionNotes: 'Open-faced toasted wheat bread with smoked turkey and herb salad',
    notes: 'Cut on the diagonal with diner toothpick frills! Serve with warm basil tomato soup.',
    leftoverSuitability: 'cook_fresh_only',
    reheatInstructions: 'Soup reheats great, but assemble sandwiches fresh right before eating so bread stays crisp.',
    usesExpiringItemIds: ['p1', 'p4'],
    ingredients: [
      { id: 'i30', name: 'Smoked Turkey Breast', amount: '200g sliced', category: 'Meat & Seafood' },
      { id: 'i31', name: 'Crispy Bacon Strips', amount: '4 strips', category: 'Meat & Seafood' },
      { id: 'i32', name: 'Toasted Sandwich Bread', amount: '4-6 slices', category: 'Bakery' },
      { id: 'i33', name: 'Spinach & Sliced Tomato', amount: '1 cup', category: 'Produce', isExpiring: true },
      { id: 'i34', name: 'Prepared Tomato Bisque', amount: '2 bowls', category: 'Pantry' }
    ]
  },
  {
    id: 'rec-7',
    title: '80s Crispy Golden Chicken Tenders & Honey Mustard',
    mealType: 'dinner',
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    tags: ['Fan Favorite', 'Crispy', 'Fast Food Nostalgia'],
    calorieEstimate: 610,
    gordoPortionNotes: 'Basket of 5 large tenders with double waffle potato dippers',
    flacoPortionNotes: 'Air-fried crunchy tenders served over mixed garden greens & honey mustard',
    notes: 'Cornflake crumb crust seasoned with garlic powder and smoked paprika. Incredibly crunchy!',
    leftoverSuitability: 'good',
    reheatInstructions: 'Reheat in toaster oven or air fryer at 375°F (190°C) for 4 minutes to restore maximum crispiness.',
    usesExpiringItemIds: ['p7'],
    ingredients: [
      { id: 'i35', name: 'Chicken Breast Tenderloins', amount: '450g', category: 'Meat & Seafood' },
      { id: 'i36', name: 'Eggs (for wash)', amount: '2 eggs beaten', category: 'Dairy & Eggs', isExpiring: true },
      { id: 'i37', name: 'Crushed Cornflakes or Panko', amount: '1.5 cups', category: 'Pantry' },
      { id: 'i38', name: 'Dijon Mustard & Honey', amount: '2 tbsp each', category: 'Sauces & Condiments' },
      { id: 'i39', name: 'Baby Carrots or Celery', amount: '1 cup sticks', category: 'Produce' }
    ]
  },
  {
    id: 'rec-8',
    title: 'Flaco’s Zesty Lemon Herb Orzo & Seared Salmon',
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    tags: ['Mediterranean', 'Heart Healthy', 'Omega-3'],
    calorieEstimate: 570,
    gordoPortionNotes: 'Generous salmon fillet with extra garlic butter parmesan orzo',
    flacoPortionNotes: 'Pan-seared salmon with lemon herb zest, baby spinach wilted in pan',
    notes: 'Cook orzo in vegetable broth for maximum savory flavor. 20-minute dinner elegance.',
    leftoverSuitability: 'good',
    reheatInstructions: 'Orzo reheats wonderfully with a splash of broth. Reheat salmon gently on low power to prevent overcooking.',
    usesExpiringItemIds: ['p1', 'p2'],
    ingredients: [
      { id: 'i40', name: 'Salmon Fillets', amount: '350g', category: 'Meat & Seafood' },
      { id: 'i41', name: 'Orzo Pasta', amount: '1 cup', category: 'Pantry' },
      { id: 'i42', name: 'Baby Spinach', amount: '100g (wilted in)', category: 'Produce', isExpiring: true },
      { id: 'i43', name: 'Lemon & Fresh Herbs', amount: '1 lemon + herbs', category: 'Produce', isExpiring: true },
      { id: 'i44', name: 'Feta or Parmesan Crumbles', amount: '2 tbsp', category: 'Dairy & Eggs' }
    ]
  },
  {
    id: 'rec-9',
    title: 'Diner Huevos Rancheros Deluxe',
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    tags: ['Brunch Classic', 'Quick 10m', 'Eat Fresh'],
    calorieEstimate: 490,
    gordoPortionNotes: 'Three sunny side up eggs on double fried corn tortillas with chorizo',
    flacoPortionNotes: 'Two poached eggs on toasted tortilla with black bean puree and fresh pico',
    notes: 'Warm tortillas on the open burner for charred aroma. Top with warm salsa ranchera.',
    leftoverSuitability: 'cook_fresh_only',
    reheatInstructions: 'Must eat fresh! Runny eggs and crispy warmed tortillas cannot be stored as leftovers.',
    usesExpiringItemIds: ['p3', 'p4', 'p7'],
    ingredients: [
      { id: 'i45', name: 'Fresh Eggs', amount: '4-5 eggs', category: 'Dairy & Eggs', isExpiring: true },
      { id: 'i46', name: 'Corn or Flour Tortillas', amount: '4 tortillas', category: 'Bakery' },
      { id: 'i47', name: 'Warm Refried or Black Beans', amount: '1 cup', category: 'Pantry' },
      { id: 'i48', name: 'Shredded Cheddar', amount: '40g', category: 'Dairy & Eggs', isExpiring: true },
      { id: 'i49', name: 'Avocado & Ranchero Salsa', amount: '1 avocado', category: 'Produce', isExpiring: true }
    ]
  },
  {
    id: 'rec-10',
    title: 'Slow-Cooked Barbacoa Beef Quesadillas & Rice',
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    tags: ['Mexican-American', 'Batch Friendly', 'Comfort Food'],
    calorieEstimate: 660,
    gordoPortionNotes: 'Double filled quesadilla with extra melted cheese and chipotle mayo dip',
    flacoPortionNotes: 'Crisp griddled quesadilla loaded with caramelized onions & fresh salsa',
    notes: 'Griddle in light butter until golden brown and flaky. The shredded barbacoa beef keeps for 4 days!',
    leftoverSuitability: 'excellent',
    reheatInstructions: 'Batch star! Keep shredded beef in airtight tub; reheat in skillet for 2 mins or make fresh warm wraps.',
    usesExpiringItemIds: ['p4', 'p5'],
    ingredients: [
      { id: 'i50', name: 'Shredded Seasoned Beef or Pork', amount: '350g', category: 'Meat & Seafood' },
      { id: 'i51', name: 'Large Flour Tortillas', amount: '4 large', category: 'Bakery' },
      { id: 'i52', name: 'Cheddar & Monterey Jack', amount: '120g shredded', category: 'Dairy & Eggs', isExpiring: true },
      { id: 'i53', name: 'Pickled Jalapeños', amount: '2 tbsp', category: 'Pantry' },
      { id: 'i54', name: 'Crema & Guacamole', amount: '4 tbsp', category: 'Dairy & Eggs', isExpiring: true }
    ]
  },
  {
    id: 'rec-11',
    title: 'Sesame Ginger Chicken Noodle Bowl',
    mealType: 'dinner',
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    tags: ['Takeout Favorite', 'Batch Friendly', 'Vibrant'],
    calorieEstimate: 530,
    gordoPortionNotes: 'Hearty noodles tossed in rich toasted sesame oil and roasted peanuts',
    flacoPortionNotes: 'Half noodle half crisp cabbage slaw with chili garlic lime crunch',
    notes: 'Whisk dressing in advance: soy sauce, honey, grated ginger, rice vinegar and sesame oil.',
    leftoverSuitability: 'excellent',
    reheatInstructions: 'Incredible cold or warm! Noodles soak up the sesame ginger dressing overnight. Eat chilled or microwave 90 seconds.',
    usesExpiringItemIds: ['p8'],
    ingredients: [
      { id: 'i55', name: 'Chicken Breast Strips', amount: '350g', category: 'Meat & Seafood' },
      { id: 'i56', name: 'Ramen or Rice Noodles', amount: '180g dry', category: 'Pantry' },
      { id: 'i57', name: 'Bell Pepper & Scallions', amount: '1 pepper + 3 scallions', category: 'Produce', isExpiring: true },
      { id: 'i58', name: 'Toasted Sesame Dressing', amount: '4 tbsp', category: 'Sauces & Condiments' },
      { id: 'i59', name: 'Crushed Peanuts', amount: '2 tbsp', category: 'Pantry' }
    ]
  },
  {
    id: 'rec-12',
    title: 'Retro Turkey BLT Wrap with Chipotle Mayo',
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    tags: ['Quick 10m', 'Diner Lunch', 'Eat Fresh'],
    calorieEstimate: 480,
    gordoPortionNotes: 'Loaded with double turkey, 4 bacon slices & spicy chipotle ranch',
    flacoPortionNotes: 'Wheat wrap packed with leafy spinach, ripe tomato and light crema',
    notes: 'Wrap tightly in parchment paper and slice at 45 degree angle just like an 80s diner order.',
    leftoverSuitability: 'cook_fresh_only',
    reheatInstructions: 'Eat fresh! Sliced fresh tomatoes make wrap tortillas soggy if saved overnight.',
    usesExpiringItemIds: ['p1', 'p10'],
    ingredients: [
      { id: 'i60', name: 'Roasted Turkey Breast', amount: '200g', category: 'Meat & Seafood' },
      { id: 'i61', name: 'Bacon Rashers', amount: '4 cooked crispy', category: 'Meat & Seafood' },
      { id: 'i62', name: 'Large Soft Tortillas', amount: '2 wraps', category: 'Bakery', isExpiring: true },
      { id: 'i63', name: 'Baby Spinach & Tomato', amount: '1.5 cups', category: 'Produce', isExpiring: true },
      { id: 'i64', name: 'Chipotle Mayo', amount: '2 tbsp', category: 'Sauces & Condiments' }
    ]
  },
  {
    id: 'rec-13',
    title: 'Sunday Roast Herb Chicken with Crispy Garlic Potatoes',
    mealType: 'dinner',
    prepTime: 15,
    cookTime: 35,
    servings: 2,
    tags: ['Weekend Feast', 'Batch Friendly', 'Roast Magic'],
    calorieEstimate: 690,
    gordoPortionNotes: 'Drumsticks and thighs with extra roasted butter potatoes & pan gravy',
    flacoPortionNotes: 'Herb roasted chicken breast with rosemary carrots & steamed greens',
    notes: 'The golden centerpiece of Sunday! Roast chicken skin seasoned with rosemary, thyme and smoked paprika.',
    leftoverSuitability: 'excellent',
    reheatInstructions: 'Legendary leftovers! Shred meat into wraps, salads, or warm with roasted potatoes in oven at 350°F.',
    usesExpiringItemIds: [],
    ingredients: [
      { id: 'i65', name: 'Bone-in Herb Chicken Cuts', amount: '600g', category: 'Meat & Seafood' },
      { id: 'i66', name: 'Baby Yellow Potatoes', amount: '400g quartered', category: 'Produce' },
      { id: 'i67', name: 'Fresh Rosemary & Garlic', amount: '4 cloves + herbs', category: 'Produce' },
      { id: 'i68', name: 'Olive Oil & Butter', amount: '2 tbsp', category: 'Pantry' },
      { id: 'i69', name: 'Carrots or Green Beans', amount: '200g', category: 'Produce' }
    ]
  },
  {
    id: 'rec-14',
    title: 'Big Batch 80s Chuck Wagon Chili & Smoked Cheddar',
    mealType: 'dinner',
    prepTime: 15,
    cookTime: 25,
    servings: 2,
    tags: ['Batch Hero', 'Comfort Food', 'High Protein'],
    calorieEstimate: 640,
    gordoPortionNotes: 'Large bowl with crushed tortilla chips, extra cheese & diced raw onions',
    flacoPortionNotes: 'Medium bowl with dollop of greek crema, fresh cilantro and lime wedge',
    notes: 'Classic thick diner chili! Simmered with ground beef, kidney beans, cumin, and rich cocoa chili paste.',
    leftoverSuitability: 'excellent',
    reheatInstructions: 'Tastes even better on days 2 and 3! Simmer 3 mins in small saucepan or microwave 2 mins covered.',
    usesExpiringItemIds: ['p4', 'p9'],
    ingredients: [
      { id: 'i75', name: 'Lean Ground Beef or Turkey', amount: '500g', category: 'Meat & Seafood', isExpiring: true },
      { id: 'i76', name: 'Kidney Beans & Black Beans', amount: '2 cans drained', category: 'Pantry' },
      { id: 'i77', name: 'Crushed Canned Tomatoes', amount: '1 large can (800g)', category: 'Pantry' },
      { id: 'i78', name: 'Chili Powder & Cumin', amount: '2.5 tbsp', category: 'Pantry' },
      { id: 'i79', name: 'Smoked Cheddar', amount: '60g shredded', category: 'Dairy & Eggs', isExpiring: true }
    ]
  }
];

// Helper to construct a leftover meal object linked to a previous day's batch cook
export function createLeftoverFromMeal(
  sourceMeal: Meal,
  sourceDay: DayOfWeek,
  sourceMealType: 'lunch' | 'dinner'
): Meal {
  return {
    ...sourceMeal,
    id: `leftover-${sourceMeal.id}-${Date.now()}`,
    title: `🔄 Leftover: ${sourceMeal.title.replace('for Two', '').trim()}`,
    prepTime: 3,
    cookTime: 0,
    isLeftover: true,
    sourceDay,
    sourceMealType,
    sourceMealTitle: sourceMeal.title,
    notes: `Zero effort! Reheat from ${sourceDay} ${sourceMealType}. ${sourceMeal.reheatInstructions || 'Microwave 2 minutes covered.'}`,
    tags: ['Leftovers', 'Zero Cooking', 'Quick 3m Reheat']
  };
}

// Initial Weekly Plan showcasing low cooking effort through smart batching & leftovers
export const INITIAL_WEEKLY_PLAN: WeeklyPlan = {
  id: 'week-1',
  weekName: 'Week of Monday, Oct 12',
  startDate: '2026-10-12',
  days: {
    Monday: {
      day: 'Monday',
      dateLabel: 'Oct 12',
      lunch: { ...RECIPE_CATALOG[1] }, // Fiesta Taco Salad (Cook fresh, uses expiring items)
      dinner: { 
        ...RECIPE_CATALOG[4], // Chipotle Chicken Burrito Bowls
        isBatchCook: true,
        batchServings: 4,
        notes: 'Cook a DOUBLE BATCH tonight (4 servings total)! Saves tomorrow’s lunch with zero cooking.'
      }
    },
    Tuesday: {
      day: 'Tuesday',
      dateLabel: 'Oct 13',
      lunch: {
        ...RECIPE_CATALOG[4],
        id: 'leftover-mon-dinner',
        title: '🔄 Leftover: Chipotle Chicken Burrito Bowls',
        prepTime: 3,
        cookTime: 0,
        isLeftover: true,
        sourceDay: 'Monday',
        sourceMealType: 'dinner',
        sourceMealTitle: 'Chipotle Chicken Burrito Bowls',
        tags: ['Leftovers', 'Zero Cooking', 'Quick 3m Reheat'],
        notes: 'Reheat from Monday’s double batch. Microwave 2 minutes with damp paper towel.'
      },
      dinner: { 
        ...RECIPE_CATALOG[9], // Slow Cooked Barbacoa Beef
        isBatchCook: true,
        batchServings: 4,
        notes: 'Double batch shredded barbacoa beef! Half goes onto tonight’s skillet, half saved for Wednesday lunch.'
      }
    },
    Wednesday: {
      day: 'Wednesday',
      dateLabel: 'Oct 14',
      lunch: {
        ...RECIPE_CATALOG[9],
        id: 'leftover-tue-dinner',
        title: '🔄 Leftover: Shredded Barbacoa Beef Rice Bowls',
        prepTime: 3,
        cookTime: 0,
        isLeftover: true,
        sourceDay: 'Tuesday',
        sourceMealType: 'dinner',
        sourceMealTitle: 'Slow-Cooked Barbacoa Beef',
        tags: ['Leftovers', 'Zero Cooking', 'Quick 3m Reheat'],
        notes: 'Reheat from Tuesday’s batch. Warm beef in skillet 2 mins; serve over warm rice.'
      },
      dinner: { ...RECIPE_CATALOG[3] } // Sizzling Steak & Pepper Fajita Skillet (Fresh, 15m)
    },
    Thursday: {
      day: 'Thursday',
      dateLabel: 'Oct 15',
      lunch: { ...RECIPE_CATALOG[8] }, // Huevos Rancheros (Cook Fresh 10m)
      dinner: { 
        ...RECIPE_CATALOG[13], // Big Batch Chuck Wagon Chili
        isBatchCook: true,
        batchServings: 4,
        notes: 'Cook full pot of chili (4 servings)! Chili tastes even better the next day as spices deepen.'
      }
    },
    Friday: {
      day: 'Friday',
      dateLabel: 'Oct 16',
      lunch: {
        ...RECIPE_CATALOG[13],
        id: 'leftover-thu-dinner',
        title: '🔄 Leftover: 80s Chuck Wagon Chili & Toasted Buns',
        prepTime: 3,
        cookTime: 0,
        isLeftover: true,
        sourceDay: 'Thursday',
        sourceMealType: 'dinner',
        sourceMealTitle: 'Big Batch 80s Chuck Wagon Chili',
        tags: ['Leftovers', 'Zero Cooking', 'Quick 3m Reheat'],
        notes: 'Reheat chili in microwave or small pan. Spoon over toasted buns or eat with cheddar.'
      },
      dinner: { ...RECIPE_CATALOG[0] } // Friday Night Diner Smash Burgers (Cook Fresh, 15m)
    },
    Saturday: {
      day: 'Saturday',
      dateLabel: 'Oct 17',
      lunch: { ...RECIPE_CATALOG[11] }, // Turkey BLT Wrap (Fresh, 10m)
      dinner: { 
        ...RECIPE_CATALOG[10], // Sesame Ginger Noodles
        isBatchCook: true,
        batchServings: 4,
        notes: 'Make double batch of sesame ginger noodles! Chills in fridge perfectly for easy Sunday lunch.'
      }
    },
    Sunday: {
      day: 'Sunday',
      dateLabel: 'Oct 18',
      lunch: {
        ...RECIPE_CATALOG[10],
        id: 'leftover-sat-dinner',
        title: '🔄 Leftover: Chilled Sesame Ginger Noodle Bowls',
        prepTime: 2,
        cookTime: 0,
        isLeftover: true,
        sourceDay: 'Saturday',
        sourceMealType: 'dinner',
        sourceMealTitle: 'Sesame Ginger Chicken Noodle Bowl',
        tags: ['Leftovers', 'Zero Cooking', 'Chilled Lunch'],
        notes: 'Enjoy chilled straight from the fridge or warmed for 60 seconds! No cooking required.'
      },
      dinner: { ...RECIPE_CATALOG[12] } // Sunday Roast Herb Chicken (Fresh roast feast!)
    }
  }
};

export const INITIAL_NOTION_CONFIG: NotionSyncConfig = {
  databaseId: 'notion_db_84e12c9b4f7a2139',
  apiKeyDraft: 'secret_notion_client_preview_key',
  isConnected: false,
  status: 'ready_to_connect',
  targetDatabaseName: 'El Gordo & El Flaco Recipes'
};
