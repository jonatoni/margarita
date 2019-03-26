---
title: What is Tequila API?
sidebar_label: What is Tequila API?
---

With the [Tequila](https://tequila.kiwi.com) platform, you can build your o travel business application for free, with the [kiwi.com](https://www.kiwi.com)'s content, technology, and services.

All you need to start working with the **Tequila** API is you need to be registered and have your API key.
Check the Guide: [Get your Tequila API key](guide-tequila-api-key.md) for information on how to grab your API Key.

To implement the basic search, you need the `/locations` and `/search` API calls.

- **Locations API**: search for the cities, airports, stops, and other locations.([docs](https://tequila.kiwi.com/portal/resources/locations_api))

- **Search API**: this API allows you search for one-way or return type of itineraries.([docs](https://tequila.kiwi.com/portal/resources/search_api))

- **Mutlicity API**: this API provides the multicity search. The multicity trip is a journey when the passenger travels from one city to another, stays there for a couple of days and then continues the journey to another city. ([docs](https://tequila.kiwi.com/portal/resources/multicity_api))

- **NOMAD API**: this is search API is for those travelers, who would like to visit n-number of cities in any order. ([docs](https://tequila.kiwi.com/portal/resources/nomad_api))

For finish to booking itinerary, you will need to call the `/booking` API.

- **Booking API**: methods that allow a user to book the desired itinerary. With this API you will check if the price of is still valid and if the itinerary is still available for the booking. Save the booking which initiates the booking on our backend and confirms that the user payment was successfully. ([docs](https://tequila.kiwi.com/portal/resources/booking_api))

- **Webhooks API**: is a way of how we provide other applications with real-time information. ([docs](https://tequila.kiwi.com/portal/resources/webhooks))

- **VISA API**: with this API you can check if a passenger will need a VISA for a specific country.

More information and documentation about **Tequila API** you can find on the Tequila [resources](https://tequila.kiwi.com/portal/resources) page.
