/* QUESTIONS - one block per menu item. Add more by copying a block and putting a comma between blocks.
   Every ingredient must be spelled exactly like a choice in menu-data.js.
   Leave a section out if the item has nothing from it. */
const QUESTIONS = [
  /* ---------- SALADS ---------- */
  { "name": "The Classic",
    "Greens": ["Romaine"], "Proteins": ["Chicken"], "Toppings": ["Grilled Broccoli", "Garlic Croutons"], "Cheese": ["Parmesan"], "Dressing": ["Green Caesar Dressing"] },
  { "name": "The Beartooth",
    "Greens": ["Arugula"], "Proteins": ["Chicken"], "Toppings": ["Roasted Squash and Bell Peppers", "Crispy Chickpeas", "Cucumbers", "Pickled Cabbage and Red Onions", "Parsley"], "Cheese": ["Feta"], "Dressing": ["Peperoncini Vinaigrette"] },
  { "name": "The Buff",
    "Greens": ["Romaine"], "Proteins": ["Buffalo Chicken"], "Toppings": ["Pickled Carrots and Celery", "Garlic Croutons"], "Cheese": ["Blue Cheese"], "Dressing": ["Spicy Ranch"] },
  { "name": "Farmers Market",
    "Greens": ["Arugula"], "Proteins": ["Chicken"], "Toppings": ["Cherry Tomatoes", "Cucumbers", "Pickled Cabbage and Red Onions"], "Cheese": ["Feta"], "Dressing": ["Dijon Vinaigrette"] },
  { "name": "Green River",
    "Greens": ["Mixed Greens"], "Proteins": ["Grilled Salmon"], "Toppings": ["Cherry Tomatoes", "White Beans", "Olives", "Radish", "Hard Boiled Egg"], "Dressing": ["Dijon Vinaigrette"] },
  { "name": "Ja-Pow",
    "Greens": ["Mixed Greens"], "Proteins": ["Grilled Salmon"], "Toppings": ["Green Onions", "Cucumbers", "Kimchi", "Furikake"], "Dressing": ["Carrot Ginger Miso Vinaigrette"] },
  { "name": "The Sawtooth",
    "Greens": ["Kale"], "Proteins": ["Chicken"], "Toppings": ["Roasted Sweet Potato", "Grilled Broccoli", "Candied Pepitas"], "Dressing": ["Toasted Sunflower Seed Vinaigrette"] },
  { "name": "The Vaquero",
    "Greens": ["Romaine"], "Proteins": ["Grilled Steak"], "Toppings": ["Corn Pico", "Avocado", "Radish"], "Cheese": ["Cotija"], "Dressing": ["Avocado Green Goddess"] },

  /* ---------- BOWLS ---------- */
  { "name": "Buffalo Bowl (Does not contain buffalo)",
    "Grains": ["Bulgar Wheat"], "Proteins": ["Chicken"], "Toppings": ["Pickled Carrots and Celery", "Cherry Tomatoes", "Pickled Cabbage and Red Onions", "Garlic Croutons"], "Cheese": ["Blue Cheese"], "Dressing": ["Spicy Ranch"] },
  { "name": "The Middle Fork",
    "Grains": ["Quinoa"], "Proteins": ["Grilled Salmon"], "Toppings": ["Kimchi", "Cucumbers", "Green Onions", "Hard Boiled Egg"], "Dressing": ["Carrot Ginger Miso Vinaigrette"] },
  { "name": "Teton Bowl",
    "Greens": ["Arugula"], "Grains": ["Bulgar Wheat"], "Proteins": ["Chicken"], "Toppings": ["Roasted Squash and Bell Peppers", "Crispy Chickpeas", "Pickled Cabbage and Red Onions"], "Cheese": ["Feta"], "Dressing": ["Tzatziki"] },
  { "name": "The Trailhead",
    "Grains": ["Quinoa"], "Proteins": ["Grilled Steak"], "Toppings": ["Black Beans", "Cherry Tomatoes", "Avocado", "Tortilla Strips"], "Cheese": ["Cotija"], "Dressing": ["Avocado Green Goddess"] },
  { "name": "Uinta Bowl",
    "Greens": ["Kale"], "Grains": ["Farro"], "Proteins": ["Chicken"], "Toppings": ["Cherry Tomatoes", "Roasted Squash and Bell Peppers", "Garlic Croutons"], "Cheese": ["Parmesan"], "Dressing": ["Pesto Vinaigrette"] },
  { "name": "Wasatch Bowl",
    "Greens": ["Kale"], "Grains": ["Farro"], "Proteins": ["Chicken"], "Toppings": ["Grilled Broccoli", "Roasted Sweet Potato", "Candied Pepitas", "Dried Cranberries"], "Dressing": ["Toasted Sunflower Seed Vinaigrette"] },

  /* ---------- PLATES ---------- */
  { "name": "Eddy Out",
    "Grains": ["Quinoa"], "Proteins": ["Grilled Salmon"], "Toppings": ["Green Onions", "Radish", "Kimchi", "Hard Boiled Egg"], "Dressing": ["Carrot Ginger Miso Vinaigrette"] },
  { "name": "Hen House",
    "Grains": ["Farro"], "Proteins": ["Chicken"], "Toppings": ["Grilled Broccoli", "Pickled Cabbage and Red Onions", "Cucumbers", "Cherry Tomatoes"], "Dressing": ["Tzatziki"] },
  { "name": "Open Range",
    "Grains": ["Quinoa"], "Proteins": ["Grilled Steak"], "Toppings": ["Roasted Sweet Potato", "Corn Pico", "Roasted Squash and Bell Peppers", "Avocado"], "Dressing": ["Avocado Green Goddess"] },
  { "name": "Crag Dog",
    "Grains": ["White Rice"], "Proteins": ["Chicken"], "Toppings": ["Roasted Sweet Potato"] }
];