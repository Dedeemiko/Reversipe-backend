/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

export async function seed(knex) {
  await knex('recipes').del();
  await knex('recipes').insert([
    {
      title: 'Jollof Rice',
      ingredients: '1 pound parboiled rice, 1 can tomato puree-400 grams, 1 onion, sliced, 3 cloves garlic, 4 teaspoons olive oil, 6 small or 3 large red bell peppers, seeded and sliced, 1 bunch thyme, leaves picked, 1 teaspoon white pepper, 8 chicken bouillon cubes (recommended: Maggi or Goya)',
      instructions: 'With blender, blend tomatoes, onions, red pepper, and garlic until smooth. Add bouillon cubes, thyme and white pepper. Add olive oil to the blended paste, and set the mixture aside. Add 4 cups of water into a pot. Wash the rice in hot water until the water is clear. Drain through a fine sieve. Pour the rice and blended mixture into the pot of water and stir with wooden spoon. Set the stove to medium heat and place pot on stove, then let it cook for 45 minutes while stirring every 15 minutes.',
      picture_link: null,
      place_of_origin: 'West Africa',
      estimated_time: 60
    },
    {
      title: 'Neely\'s Alfredo Pasta',
      ingredients: '1 pound linguine, Kosher salt, 4 slices bacon, thinly sliced, 1 onion, finely chopped, 2 cloves garlic, chopped, 1/4 teaspoon red pepper flakes, Freshly ground black pepper, 1/2 cup heavy cream, 2 tablespoons finely grated fontina cheese, 1 lemon, zested, 4 tablespoons chiffonade basil leaves',
      instructions: 'Bring a large pot of salted water over medium heat to a boil. Add the linguine and cook until al dente. Cook the bacon in a large saucepan, over medium heat, until crisp. Remove the bacon with a slotted spoon to a paper towel lined plate. Add the onions and garlic to the pan and saute until tender, roughly 3 minutes. Stir in the red pepper flakes, season with salt and pepper, to taste, and saute until fragrant. Add the heavy cream and simmer until thick, about 4 minutes. Stir in the cheese and lemon zest. Drain the linguine and add to the saucepan. Carefully toss the pasta in the sauce. Add the bacon and season with salt and pepper, to taste. Transfer to a large platter and garnish with basil. Serve immediately while hot.',
      picture_link: 'rYW8yg73TevZSgIxkx3MX6FhP5/OvI',
      place_of_origin: 'Italy',
      estimated_time: 30
    },
    {
      title: 'Roasted Fingerling Potatoes with Fresh Herbs and Garlic',
      ingredients: '2 pints fingerling potatoes, 2 sprigs fresh rosemary, 2 to 3 sprigs fresh sage, 3 sprigs fresh thyme, 6 cloves garlic, left unpeeled, 3 tablespoons extra-virgin olive oil, plus for sheet pan, Salt and pepper',
      instructions: 'Preheat oven to 500 degrees F and place a baking sheet inside to heat. Add potatoes, rosemary, sage, thyme, and garlic to a medium bowl. Drizzle with olive oil, and season with salt and pepper. Remove sheet pan from oven, lightly coat with olive oil, and pour potatoes onto pan. Place potatoes in oven and reduce heat to 425 degrees F. Roast for 20 minutes, or until crispy on outside and tender on inside.',
      picture_link: '1zuaUKLM.DCYd0JrIaRhd5yEPJbqbZK',
      place_of_origin: 'United States',
      estimated_time: 25
    },
    {
      title: 'Nachos',
      ingredients: '1 bag white corn chips, 3 cups freshly grated Monterey Jack cheese, 1 jar jalapeno slices, optional',
      instructions: 'Preheat the oven to 350 degrees F. Lay the whole tortilla chips in an ovenproof dish. Sprinkle over the cheese, add jalapeno slices if using, and repeat the process until you have 3 layers. Bake until the cheese has melted.',
      picture_link: 'kt5fdHWv4wEs.Ooukc5ZnJMTFFQYY5W',
      place_of_origin: 'Mexico',
      estimated_time: 15
    },
    {
      title: 'Short Ribs of Beef',
      ingredients: '1/4 cup olive oil, Four 8-ounce boneless beef short ribs, 1/2 teaspoon salt, 1/2 teaspoon black pepper, 1/2 teaspoon garlic salt, 1/2 teaspoon seasoned salt, 1 cup all-purpose flour, 6 cloves garlic, smashed, 2 carrots, peeled and diced small, 2 stalks celery, diced small, 1 Vidalia onion, diced small, 1 cup red wine, 2 cups chicken stock, 2 cups veal stock or beef stock, 2 cups water, One 14.5-ounce can peeled plum tomatoes, 2 tablespoons Worcestershire sauce, 6 medium red potatoes, diced small, with skin on',
      instructions: 'Preheat oven to 325 degrees F. In a large ovenproof saute pan or roasting pan, heat the olive oil over medium-high heat. Sprinkle the short ribs on all sides with the salt, pepper, garlic salt, and seasoned salt. Pat the seasonings into the meat. Dredge the short ribs in the flour and pat off any excess flour. Place the short ribs in the pan and sear until browned on both sides, 2 to 3 minutes. Add the garlic, carrots, celery, and onions and saute for 3 minutes. Add the wine and simmer for 5 minutes. Stir in the chicken stock, veal stock, water, undrained tomatoes, and Worcestershire sauce. Bring to a simmer. Cover and place in the oven. Roast for 2 hours. Then add the potatoes, cover, and roast for an additional 30 minutes.',
      picture_link: '3H5rKMRN9BT/J73I3FSbE8dHsJp4sG2',
      place_of_origin: 'United States',
      estimated_time: 150
    },
    {
      title: 'Paprika-Buttermilk Chicken Tenders',
      ingredients: '2 tablespoons smoked sweet paprika, 1 tablespoon granulated garlic, 1 tablespoon granulated onion, 1 tablespoon poultry seasoning, 2 pounds chicken tenders, Salt and freshly ground black pepper, 2 cups buttermilk, 2 cups all-purpose flour, 2 tablespoons poppy seeds, if desired, 1 quart safflower, canola, or sunflower oil for frying, 1 lemon',
      instructions: 'Combine the smoked paprika, granulated garlic, and onion, and poultry seasoning in a small bowl. Season the tenders with salt and pepper. Add half the spices to the buttermilk in a shallow dish. Combine the remaining spices with the flour and poppy seeds in a second dish. Heat the oil in a heavy pot over medium to medium-high heat, about 350 degrees F. Using tongs, dip chicken in the buttermilk, then the flour, and repeat. Add the breaded tenders to the hot oil; do not crowd the pan. Cook the fingers in batches to a deep golden color, about 8 minutes per batch. Drain on a wire rack over paper towels. Serve warm or at room temperature with wedges of lemon to squeeze on top.',
      picture_link: null,
      place_of_origin: 'United States',
      estimated_time: 20
    },
    {
      title: 'Chinese Chicken Salad',
      ingredients: '1/4 cup peanut oil, 2 tablespoons Oriental sesame oil, 1 small clove garlic, peeled and blanched, 1 tablespoon sugar, 3 tablespoons rice vinegar, 2 tablespoons soy sauce, 1/4 cup peanut butter, 2 tablespoons sesame paste, Salt and freshly ground black pepper, 1 teaspoon chili paste with soy bean, optional, 2 cups poached chicken breast, torn into bite-sized pieces, 2 cups cooked elbow macaroni, 1 package (10 ounces) frozen petite green peas, thawed, 2 scallions, green part only thinly sliced, Chopped cilantro, optional',
      instructions: 'In a food processor or blender, combine and puree the peanut and sesame oils, garlic, sugar, rice vinegar, soy sauce, peanut butter and sesame paste. Season to taste with salt and pepper. If you wish, stir in chili paste. Right before serving toss the chicken, macaroni, and peas with the sauce and garnish with scallions and cilantro.',
      picture_link: null,
      place_of_origin: 'China',
      estimated_time: 15
    },
    {
      title: 'Brioche Doughnut',
      ingredients: '1/3 cup milk, warm, 1 1/2 teaspoons fresh yeast, 5 eggs, 3 1/2 cups all-purpose flour, 1/3 cup sugar, 1 teaspoon salt, 6 ounces butter, softened, Vegetable oil, for frying, 4 egg whites, 1 teaspoon vanilla extract, 3 cups confectioners\' sugar, Assorted brightly colored food coloring',
      instructions: 'To make the brioche doughnuts: Put the warm milk in a mixing bowl. Sprinkle the yeast over the warm milk and allow it to dissolve. Whisk 1 egg and 1 cup of the flour into the yeast mixture. When the dough-sponge is smooth, sprinkle it with an additional cup of flour. Allow the dough-sponge to rise in a warm place until the top layer of flour cracks, about 30 minutes. Lightly beat the remaining eggs. Using a dough hook attachment, work the eggs into the dough. Add the sugar, salt, and remaining flour. Mix for 15-20 minutes. Add the butter and mix for another 10-15 minutes. Allow the dough to rise for 2 hours, then refrigerate overnight. Roll out the dough and cut into doughnuts. Fry in oil heated to 350°F until golden brown.',
      picture_link: null,
      place_of_origin: 'France',
      estimated_time: 120
    },
    {
      title: 'Fried Rice with Peas and Carrots',
      ingredients: '2 cups long-grain white rice, 4 cups cold water, 1 (1-inch) piece ginger, peeled and sliced in 1/2, 1 tablespoon kosher salt, 3 tablespoons sesame oil, 4 scallions, sliced thin, 1 (1-inch) piece ginger, peeled and finely chopped, 2 cloves garlic, chopped, 1/2 cup frozen peas, run under cool water for 2 minutes to thaw, 1 carrot, finely chopped, 2 large eggs, lightly beaten, 3 tablespoons low-sodium soy sauce, 1 tablespoon hoisin sauce, Kosher salt, Cilantro leaves, for garnish',
      instructions: 'In a pot with a tight fitting lid, add the rice and 4 cups cold water. Put in the ginger and salt. Bring to a boil, reduce to a simmer, cover, and cook for 15 to 20 minutes. Heat a wok over medium-high heat. Pour in the sesame oil, and stir-fry the scallions, ginger, and garlic for 1 minute. Stir in the peas and carrots and cook for about 2 minutes. Pour in the eggs and stir-fry until cooked, about 2-3 minutes. Remove the ginger from the rice, and add the rice to the wok. Add the soy and hoisin sauce. Stir together and garnish with cilantro.',
      picture_link: null,
      place_of_origin: 'China',
      estimated_time: 30
    },
    {
      title: 'Asian Noodles',
      ingredients: '1 lime, juiced, 1/4 cup seasoned rice vinegar, 1/4 cup chopped cilantro leaves, 1-inch piece ginger, minced, 1 clove garlic, minced, 1 tablespoon honey, 2 teaspoons sesame oil, 1 teaspoon red pepper flakes, 1 (14-ounce) bag Oriental-style rice vermicelli, 1 carrot, grated, 1 scallion, thinly sliced, 1/2 cucumber, peeled and grated, 3 tablespoons peanuts, 1 red beet, peeled and grated',
      instructions: 'Whisk lime juice, rice vinegar, cilantro, ginger, garlic, honey, sesame oil, and pepper flakes in a small bowl. Prepare rice noodles according to package directions. Drain and quick chill in a bowl of ice water. Toss noodles with carrot, scallion, cucumber, and peanuts. Pour dressing over top. Mix well and serve with a heap of grated beets.',
      picture_link: 'EOGDvMIclHy3unGv7/IhILdPyqMZ4xa',
      place_of_origin: 'Asia',
      estimated_time: 20
    },
    {
      title: 'Spicy Fried Chicken',
      ingredients: '4 legs and thighs, separated, 2 cups buttermilk, 1/2 cup chipotle in adobo sauce, chopped (or 1 whole can), Vegetable oil, for frying, 1 cup all-purpose flour, 1 cup cornmeal, 1 tablespoon salt, 1 teaspoon black pepper, 1 teaspoon paprika',
      instructions: 'Place chicken pieces with the buttermilk and chipotle in a large zip-top bag. Marinate in the refrigerator for up to 8 hours. Heat the oil to 325°F in a cast iron skillet. Mix the flour, cornmeal, salt, pepper, and paprika. Dredge the chicken in the flour mixture. Fry for about 10 minutes on each side, until golden brown. Ensure internal temperature reaches 165°F.',
      picture_link: 'zdT.IiHRNKZbc0NHkpO4/RxVN61clyS',
      place_of_origin: 'United States',
      estimated_time: 40
    },
    {
      title: 'Overnight Oatmeal',
      ingredients: '1 cup steel cut oats, 1 cup dried cranberries, 1 cup dried figs, 4 cups water, 1/2 cup half-and-half',
      instructions: 'In a slow cooker, combine all ingredients and set to low heat. Cover and let cook for 8 to 9 hours. Stir and serve in bowls.',
      picture_link: 'CDzMpVChhh7YGI3Ml4XlEn2cvtH3sKe',
      place_of_origin: 'United States',
      estimated_time: 480
    }
  ]);
}