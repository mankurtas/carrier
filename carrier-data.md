### 1. Basic Service

Build a basic service that responds to a POST request to an endpoint called `/carier`, with the following request structure:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT"
}
```

And responds with the distance in km:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT",
  "distance_km":             316
}
```

### 2. Calculate price

Build a basic service that responds to a POST request to an endpoint called `/carier`, with the following request structure:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT"
}
```

And responds with the following price, 0,2 eur/km:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT",
  "distance_km":             316,
  "price":                  63.2
}
```

The price we charge depends on the distance between the two postcodes. 

### 3. Simple variable prices by vehicle

Our price changes based on the vehicle. Implement a "vehicle" attribute on the request, that takes one of the following values, applying the appropriate markup:

- bicycle: +10%
- motorbike: +15%
- parcel_car: +20%
- small_van: +30%
- large_van: +40%

For example, if the price was 100, the `small_van` price with markup will be 130.
The vehicle should also be returned in the response, and the price should be rounded to the nearest integer.

Request:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT",
  "vehicle":           "bicycle"
}
```

Response:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT"
  "vehicle":           "bicycle"
  "price":             348
}
```

### 4. Price by carrier

Use the JSON file `carier-data.json` folder to fetch the carrier data and get the base price.

Request:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT",
  "carrier_name":      "RoyalPackages"
}
```

Response:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT",
  "carrier_name":      "RoyalPackages"
  "price":              30
}
```

### 4. Variable prices by vehicle

Now we need the list of prices per carrier for the given `pickup_postcode`, `delivery_postcode` and `vehicle`.

Use the JSON file `carier-data.json` folder to fetch the carrier data and calculate the price.
Bear in mind the carrier service should support the vehicle type. When calculating the price, add the service markup as well as the vehicle markup you have implemented in the earlier exercise to the carrier base price.

The `price_list` array needs to contain JSON objects sorted by `price`. And be stored in a database of your choosing (Postgres, MySQL, redis, SQLite, etc).

Example request:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT",
  "vehicle":           "small_van"
}
```

Example response:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT"
  "vehicle":           "small_van"
  "price_list": [
    {"service": "RoyalPackages", "price": 300, "delivery_time": 5}
    {"service": "Hercules",      "price": 500, "delivery_time": 2},
  ]
}
```
