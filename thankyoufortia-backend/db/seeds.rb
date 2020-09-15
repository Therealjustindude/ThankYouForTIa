# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "Justin Davies", email: "justin@gmail.com", password:"1234")
User.create(name: "Cinthia Davies", email: "cinthia@gmail.com", password:"1234")


MenuItem.create(title: "Lomo Saltado", ingredients: "Thinly sliced beef steak, onions, tomatoes, french fries, soy sauce, rice, vinegar", item_type: "Dinner")
MenuItem.create(title: "Ceviche", ingredients: "Fish as food, Key lime, Lemon, Onion, Peppers, Coriander", item_type: "Dinner")
MenuItem.create(title: "Tallarines Verde", ingredients: "Thinly sliced beef, pasta in a green sauce", item_type: "Dinner")
MenuItem.create(title: "Picarones", ingredients: "Chancaca syrup, Squash, Sweet potatoes", item_type: "Dessert")
MenuItem.create(title: "Alfajores", ingredients: "Carmel sauce inbetween pastry cookies covered in powdered sugar", item_type: "Dessert")
MenuItem.create(title: "Inca Kola", ingredients: "CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP AND/OR SUCROSE, CITRIC ACID, SODIUM BENZOATE (TO PROTECT TASTE), CAFFEINE, ARTIFICIAL AND NATURAL FLAVORS, YELLOW #5.", item_type: "Drink")