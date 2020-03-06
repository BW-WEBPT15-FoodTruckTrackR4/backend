# Backend Documentation
### Feburary 25, 2020

Questions about Documentation or need help? Let Mary know ASAP.

Deployed with Heroku on:
 https://foodtrucktrackr4.herokuapp.com/

Example
```
http://foodtrucktrackr4.herokuapp.com/api/truck

```
# Register as Diner
* `HTTP method:` ***`POST`***
* `URL: `***`api/diner/register`***

| Name           | Type   | Required | Unique | Description           |
| :------------- | :----- | :------: | :----: | :-------------------- |
| username       | String |   YES    |  YES   |                       |
| password       | String |   YES    |   NO   |                       |
| currentLocation           | String |   YES    |   NO   |                       |
| favoriteTrucks          | text ARRAY |   NO   |  NO   |                       |

example
```
{
	"username": "foodiefan1",
	"password": "tacos",
	"currentLocation": "Phoenix, AZ",
    favoriteTrucks: ["Joe's Tacos", "The Gorilla Cheese Truck", "Chicago Lunchbox"]
	
}
```
NOTE: Register returns their token, their user info, and their hashed password

# Register as Operator

* `HTTP method: `***`POST`***
* `URL: `***`api/operator/register`***

| Name           | Type   | Required | Unique | Description           |
| :------------- | :----- | :------: | :----: | :-------------------- |
| username       | String |   YES    |  YES   |                       |
| password       | String |   YES    |   NO   |                       |
| trucksOwned           | integer |   YES    |   NO   

example
```
{
	"username": "operator12",
	"password": "foodtrucks",
	"trucksOwned": "3",
	
}
```

NOTE: Register returns their token, their user info, and their hashed password

# Login As Operator
*`HTTP method: `***`POST`**

*`URL:`***`/api/operator/login`**

| Name           | Type   | Required | Unique | Description           |
| :------------- | :----- | :------: | :----: | :-------------------- |
| username       | String |   YES    |  YES   |                       |
| password       | String |   YES    |   NO   |                       |

example
```
{
	"username": "foodiefan1",
	"password": "tacos"
}
```

NOTE: Login returns a JWT token when logging in with their username and password

# Login as Diner
*`HTTP method: `***`POST`**

*`URL:`***`/api/diner/login`**

| Name           | Type   | Required | Unique | Description           |
| :------------- | :----- | :------: | :----: | :-------------------- |
| username       | String |   YES    |  YES   |                       |
| password       | String |   YES    |   NO   |                       |

example
```
{
	"username": "Operator12",
	"password": "foodtrucks"
}
```

NOTE: Login returns a cookie with login timeout when logging in with their username and password


# Get list of all Operators
*`HTTP method: `***`GET`**

*`URL:`***`/api/operator`**

* requires valid token passed in through Authorization header

* shows all user info except for passwords (passwords are also hashed)

# Get list of all Diners
*`HTTP method: `***`GET`**

*`URL:`***`/api/diner`**

* requires valid token passed in through Authorization header

* shows all user info except for passwords (passwords are also hashed)


# Get Diner by ID
*`HTTP method: `***`GET`**

*`URL:`***`/api/operator/:id`**

* pass in the user id through url

# Get Operator by ID
*`HTTP method: `***`GET`**

*`URL:`***`/api/operator/:id`**

* pass in the user id through url


# Get list of all trucks
*`HTTP method:`***`GET`**

*`URL:`***`/api/trucks`**

* Returns all trucks' information

# Get Truck by ID
*`HTTP method: `***`GET`**

*`URL:`***`/api/truck/:id`**

* Returns truck's information by ID

| Name           | Type   | Required | Unique | Description           |
| :------------- | :----- | :------: | :----: | :-------------------- |
| imageOfTruck      | String |   YES    |  NO   |                       |
| cuisineType       | String |   YES    |   NO   |                       |
| rating         | INT ARRAY |   NO    |   NO   |                       |
| customerRatingAvg          | Integer|   NO   |  NO   |  
| menu_id         | Integer|   NO  |  NO   |                      |
| location_id         | Integer|   NO   |  NO   |                      |

example
```
{
	"imageOfTruck": "https://rh-vendoradmin.s3.amazonaws.com/trucks/original/22326/5bfc55cc-fad4-4ab2-b0a1-692346204482.jpg",
    cuisineType: "Mexican",
    "rating": [4, 5, 5]
    "customerRatingAvg: 4.7,
	"menu_id": 1,
	"location_id: 1
}
```
# Create a Truck
*`HTTP method: `***`POST`**

*`URL:`***`/api/truck`**

* Creates truck with the following information: imageOfTruck, cuisineType, customerRatings, customerRatingAvg


# Update Truck by ID
*`HTTP method: `***`PUT`**

*`URL:`***`/api/truck/:id`**

* Updates truck's Information by ID


# Delete Truck by ID
*`HTTP method: `***`DELETE`**

*`URL:`***`/api/truck/:id`**

* Deletes truck's Information by ID

# Get list of all Menus
*`HTTP method: `***`GET`**

*`URL:`***`/api/trucks/menus`**

* Returns all trucks' menus

# Get list of all Favorite Food Trucks
*`HTTP method: `***`GET`**

*`URL:`***`/api/trucks/favtrucks`**

* Returns all favorite food trucks

# Get Favorite Food Truck by ID
*`HTTP method: `***`GET`**

*`URL:`***`/api/truck/:id/favtruck`**

* Returns a favorite food truck by specific ID

# Get list of all Food Ratings
*`HTTP method: `***`GET`**

*`URL:`***`/api/trucks/foodratings`**

* Returns all menus' food ratings

# Get Food Rating by ID
*`HTTP method: `***`GET`**

*`URL:`***`/api/truck/:id/foodrating`**

* Returns a menu's food rating by specific ID

# Get list of all Ratings
*`HTTP method: `***`GET`**

*`URL:`***`/api/trucks/ratings`**

* Returns all trucks' ratings

# Get rating by ID
*`HTTP method: `***`GET`**

*`URL:`***`/api/truck/:id/rating`**

* Returns a truck's rating by specific ID

# Add a favorite Food Truck
*`HTTP method: `***`POST`**

*`URL:`***`/api/truck/favtruck`**

* Creates a favorite food truck with the following information: truckName


# Add a Rating 
*`HTTP method: `***`POST`**

*`URL:`***`/api/truck/rating`**

* Creates truck with the following information: rating

# Add a food rating
*`HTTP method: `***`POST`**

*`URL:`***`/api/truck/foodrating`**

* Creates truck with the following information: foodrating


# Get Menu for Specific Truck
*`HTTP method: `***`GET`**

*`URL:`***`/api/truck/:id/menu`**

* Returns truck's menu information by ID

| Name           | Type   | Required | Unique | Description           |
| :------------- | :----- | :------: | :----: | :-------------------- |
| itemName      | String |   YES   |  YES   |                       |
| itemDescription       | String |   YES    |   NO   |                       |
| itemPhotos          | String |   YES    |   NO   |                       |
| foodRating        | INT ARRAY |   NO   |  NO   |                       |
| customerRatingAvg     | Integer  | NO     |  NO |

example
```
{
	"itemName": "Tacos"
    "itemDescription": "Classic tacos with cheese, sour cream, salsa and lots of beef"
    "itemPhotos": "https://www.thespruceeats.com/thmb/uqB61QlpzfPZAtMJ-4qDvdTtlVo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Softbeeftacos-GettyImages-614313140-593df4533df78c537b375d6d.jpg",
    "foodRating": [5, 5, 5],
    "customerRatingAvg": 4.6	
}
```

# Get list of Trucks By Query Search
*`HTTP method: `***`GET`**

*`URL:`***`/api/trucks/search`**

| Name           | Type   | Required | Unique | Description           |
| :------------- | :----- | :------: | :----: | :-------------------- |
| cuisineType       | String |   YES    |  NO   |                       |
| customerRatingAvg       | Integer |   YES    |   NO   |                       |
| radSize           | String |   YES    |   NO   


example
```
{
	"cuisineType": "Mexican",
	"customerRatingAvg": "5",
	"radSize": "15 miles"	
}
```


# Get Location for Specific Truck

* `HTTP method:` ***`GET`***
* `URL: `***`api/truck/:id/location`***

| Name           | Type   | Required | Unique | Description           |
| :------------- | :----- | :------: | :----: | :-------------------- |
| location       | String |   YES    |  NO   |                       |
| departureTime       | Datetime |   NO    |   NO   |                       |
| nextLocation | String |   NO   | NO |
|next_id | integer | NO | NO|

# Get Next Location for Specific Truck (optional)

* `HTTP method:` ***`GET`***
* `URL: `***`api/truck/:id/location/next`***

| Name           | Type   | Required | Unique | Description           |
| :------------- | :----- | :------: | :----: | :-------------------- |
| location      | String |   YES    |  NO   |                       |
| arrivalTime      | Datetime |   NO    |   NO   |                       |
| departureTime          | Datetime |   NO    |   NO                         |

example
```
{
	"location": "Los Angeles, CA",
	"arrivalTime": "20:00",
	"departureTime": "08:00"
    
}
```


