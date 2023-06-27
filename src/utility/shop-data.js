const SHOP_DATA = [
  {
    title: "cakes",
    picture: "velvetCake.jpg",
    items: [
      {
        id: 1,
        name: "Classic White Cake",
        imageUrl: "whiteCake.jpg",
        price: 25,
        description:
          "A timeless classic, our white cake is moist and fluffy, with a subtle sweetness that pairs perfectly with any frosting.",
      },
      {
        id: 2,
        name: "Strawberry Cake",
        imageUrl: "strawberryCake.jpg",
        price: 25,
        description:
          "A summery delight, our strawberry cake is made with fresh strawberries and a light, airy sponge cake.",
      },
      {
        id: 3,
        name: "Chocolate Cake",
        imageUrl: "chocolateCake.jpg",
        price: 25,
        description:
          "A rich and decadent treat, our chocolate cake is made with dark chocolate and topped with a creamy chocolate frosting",
      },
      {
        id: 4,
        name: "Vanilla Cake",
        imageUrl: "vanillaCake.jpg",
        price: 25,
        description:
          "A simple yet delicious cake, our vanilla cake is made with fresh vanilla beans and topped with a fluffy vanilla frosting.",
      },
      {
        id: 5,
        name: "Velvet Cake",
        imageUrl: "velvetCake.jpg",
        price: 30,
        description:
          "A decadent and moist cake, our velvet cake is made with buttermilk and cocoa powder, and topped with a cream cheese frosting.",
      },
      {
        id: 6,
        name: "German Chocolate Cake",
        imageUrl: "germanCake.jpg",
        price: 30,
        description:
          "A rich and flavorful cake, our German chocolate cake is made with pecans, coconut, and a rich chocolate frosting.",
      },
      {
        id: 7,
        name: "Pineapple Upside Down Cake",
        imageUrl: "pineappleCake.jpg",
        price: 25,
        description:
          "A sweet and tropical treat, our pineapple upside down cake is made with pineapple rings, brown sugar, and butter, and topped with a light and fluffy cake.",
      },
      {
        id: 8,
        name: "Bundt Cake",
        imageUrl: "bundt.jpg",
        price: 20,
        description:
          "A unique and delicious cake, our bundt cake is made with a variety of flavors, including chocolate, lemon, and carrot.",
      },
      {
        id: 9,
        name: "Cheesecake",
        imageUrl: "cheesecake.jpg",
        price: 30,
        description:
          "A creamy and decadent treat, our cheesecake is made with fresh cream cheese, eggs, and sugar, and topped with a variety of toppings, including fruit, chocolate, and nuts.",
      },
    ],
  },
  // {
  //   title: "custom-cakes",
  //   picture: "custom.jpg"
  //   items: [
  //     {
  //       id: 10,
  //       name: "Cake Amor Cake",
  //       imageUrl: "custom2.jpg",
  //       price: 40,
  //       description:
  //         "Choose one of our delicious cake flavors; vanilla, strawberry or chocolate, and allow us to create your vision!",
  //     },
  //     {
  //       id: 11,
  //       name: "Ice Cream Cake",
  //       imageUrl: "iceCreamCake.jpg",
  //       price: 50,
  //       description:
  //         "We can use a variety of ice cream flavors as well to add that extra 'wow'! ",
  //     },
  //     {
  //       id: 12,
  //       name: "Cheesecake",
  //       imageUrl: "cheesecake.jpg",
  //       price: 50,
  //       description:
  //         "Let us change it up for you. Blueberries instead of strawberry? Sure thing!",
  //     },
  //     {
  //       id: 13,
  //       name: "Cupcakes",
  //       imageUrl: "vanillaCupcake.jpg",
  //       price: 30,
  //       description: "Cupcakes taylored to your wishes!",
  //     },
  //     {
  //       id: 14,
  //       name: "Cookies",
  //       imageUrl: "chocolateChipCookies.jpg",
  //       price: 20,
  //       description: "Want a unique mix for your batch? Ask us!",
  //     },
  //   ],
  // },
  {
    title: "keto",
    picture: "cinnamon.jpg",
    items: [
      {
        id: 15,
        name: "Cinnamon Coffee Cake",
        imageUrl: "cinnamon.jpg",
        price: 5,
        description:
          "A warm and inviting treat, our cinnamon coffee cake is made with a moist and fluffy low-carb cake base, topped with a cinnamon streusel.",
      },
      {
        id: 16,
        name: "Norwegian Danish",
        imageUrl: "danish.jpg",
        price: 5,
        description:
          "A flaky and buttery pastry, our Norwegian Danish is is a low-carb surprise.",
      },
      {
        id: 17,
        name: "Lemon Chia Muffin",
        imageUrl: "muffin.jpg",
        price: 5,
        description:
          "A nutritious and delicious muffin, our health muffin is made with whole almond flour, chia, and lemon zest.",
      },
      {
        id: 18,
        name: "Cinnamon Roll",
        imageUrl: "roll.jpg",
        price: 5,
        description:
          "A soft and buttery roll, our butter roll is made with our special dough and topped with a generous amount of real butter.",
      },
    ],
  },
  {
    title: "cupcakes",
    picture: "strawberryCupcake.jpg",
    items: [
      {
        id: 19,
        name: "Vanilla",
        imageUrl: "vanillaCupcake.jpg",
        price: 25,
        description:
          "A classic cupcake, our vanilla cupcakes are made with a moist and fluffy cake base and topped with a vanilla frosting.",
      },
      {
        id: 20,
        name: "Strawberry",
        imageUrl: "strawberryCupcake.jpg",
        price: 20,
        description:
          "A summery delight, our strawberry cupcakes are made with fresh strawberries.",
      },
      {
        id: 21,
        name: "Velvet",
        imageUrl: "velvetCupcake.jpg",
        price: 80,
        description:
          "A decadent and moist cupcake, our velvet cupcakes are made with buttermilk and cocoa powder, and topped with a cream cheese frosting",
      },
      {
        id: 22,
        name: "Chocolate",
        imageUrl: "chocCupcake.jpg",
        price: 80,
        description:
          "A rich and decadent treat, our chocolate cupcakes are made with dark chocolate and topped with a creamy chocolate frosting.",
      },
    ],
  },
  {
    title: "cookies",
    picture: "chocolateChipCookies.jpg",
    items: [
      {
        id: 23,
        name: "Chocolate Chip",
        imageUrl: "chocolateChipCookies.jpg",
        price: 12,
        description:
          "A classic cookie, our chocolate chip cookies are made with a chewy dough and plenty of chocolate chips.",
      },
      {
        id: 24,
        name: "Peanut-Butter",
        imageUrl: "peanutCookies.jpg",
        price: 12,
        description:
          "A delicious and nutty cookie, our peanut butter cookies are made with creamy peanut butter and a touch of sugar.",
      },
      {
        id: 25,
        name: "Sugar",
        imageUrl: "sugarCookies.jpg",
        price: 10,
        description:
          "A simple and sweet cookie, our sugar cookies are made with a basic dough and decorated with icing or sprinkles.",
      },
      {
        id: 26,
        name: "Macadamia-Nut",
        imageUrl: "macadamiaCookies.jpg",
        price: 12,
        description:
          "A rich and decadent cookie, our macadamia-nut cookies are made with a buttery dough and topped with macadamia nuts.",
      },
      {
        id: 27,
        name: "Snicker-Doodle",
        imageUrl: "snickerCookies.jpg",
        price: 12,
        description:
          "A chewy and peanut butter cookie, our snicker-doodle cookies are made with a cinnamon sugar dough and topped with more cinnamon sugar.",
      },
      {
        id: 28,
        name: "Oatmeal",
        imageUrl: "oatmealCookies.jpg",
        price: 12,
        description:
          "A hearty and healthy cookie, our oatmeal cookies are made with oats, raisins, and nuts.",
      },
    ],
  },
  {
    title: "breads",
    picture: "sourdough.jpg",
    items: [
      {
        id: 29,
        name: "Sourdough Bread",
        imageUrl: "sourdough.jpg",
        price: 8,
        description:
          "A hearty and flavorful bread, our sourdough bread is made with a slow-fermented dough that gives it a unique sour flavor",
      },
      {
        id: 30,
        name: "North Indian Naan",
        imageUrl: "naan.jpg",
        price: 8,
        description:
          "A soft and fluffy flatbread, our naan is made with whole wheat flour and yogurt, and cooked in a tandoor oven.",
      },
      {
        id: 31,
        name: "Classic Doughnuts",
        imageUrl: "doughnuts.jpg",
        price: 10,
        description:
          "A sweet and doughy treat, our doughnuts are come in a variety of flavors, including glazed, frosted, and filled.",
      },
    ],
  },
];

export default SHOP_DATA;
