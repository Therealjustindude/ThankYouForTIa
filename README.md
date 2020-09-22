# Thank You For Tia
This is an app for an imaginary food truck I always wanted to start. You can see our menu and select items you want to purchase.

## The Details:

This app is built using a RoR backend and a Vanilla JS frontend. The Database used is PostgreSQL and in the seeds.rb file I created the menu items. 


### Backend: Rails 
This back end API is built with Rails. My front end sends fetch requests to the Rails API. The Rails API has three Models: 1)MenuItem 2)MenuSelection 3)Order. The relatioinships are, MenuItem has_many menu_selections, MenuSelection belongs_to order and menu_item, Order has_many menu_selections and has_many menu_items through menu_selections.

### Frontend: Vanilla JS
This front end is built with Vanilla JS. My front end makes fetch requests to my Rails API. For example, The Menu displayed on the DOM was fetched from my back end and turned into Javascript objects stored in a Javascript Menu class.

### Getting Started:

* Clone the repository

#### Set up the back end

* cd into the backend folder
```
cd thankyoufortia-backend 
```

* Bundle the gems 
```
bundle install
```
* create the db
```
rake db:create
```

* Run migrations to build tables
```
rake db:migrate
```

* Seed database 
```
rake db:seed
```

* Start up the Rails server
```
rails s
```

#### View the front end

* Open index.html in your browser