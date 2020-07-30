## Running the App

- Navigate to the root of the directory and run `npm start` to run a development version of the app at `http://localhost:3000`.

## Implementation Notes

- I approximated the design as closely as I could. That said, attaining pixel perfection is made more difficult by only having a static image of the design. A Photoshop file or, even better, a Sketch or Figma file would allow for true pixel perfection.
- A caching system has been implemented using `localStorage`. This will make it so that, before making network requests for data, the app will first check `localStorage`. If there is cached data, no network request is made. If there's no cached data, a network request is made, and the results are then cached in `localStorage`
  - Right now, the logic that checks for cached data only verifies existence, not change. In practice, this shouldn't be an issue, as every time a new employee is added, we empty the cache to ensure the full list of new employees is retrieved. However, if, for some reason, the employee database is altered server side, these changes would not immediately propagate to the app.
  - This process could be made more performant in a couple ways. One way that comes to mind is altering `POST /employee/` such that it returns either the newly created employee, or the full, newly updated employee list. Of course, to ensure performance, it'd be ideal if there was also caching on the server, such that the server is not constantly refetching the entirety of the employee base
- Pagination has been implemented with client side logic. Were I to refactor this, I'd insist that pagination logic be added serverside. While client side pagination is possible, it is all around better for that to be handled on the server, and accessed through query parameters, e.g. `/employess?page={pageNum}&limit={limitAmount}`
  - Pagination would also likely make the above caching implementation less necessary, as we'd be able to query the server for smaller payloads, vs having to query for the _entirety_ of employees & customers.
