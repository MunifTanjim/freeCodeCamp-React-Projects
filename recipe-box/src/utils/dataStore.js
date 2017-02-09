const dataStore = !localStorage['_mt_recipebox'] ?
  [
    {
      title: "Pumpkin Pie",
      ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]
    }, {
      title: "Spaghetti",
      ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]
    }, {
      title: "Onion Pie",
      ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]
    }
  ] : JSON.parse(localStorage['_mt_recipebox'])

export default dataStore
