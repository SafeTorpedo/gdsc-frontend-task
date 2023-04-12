# GDSC Frontend Task

This is a simple webapp which uses Last.fm API to get top artists, tracks of a specific country and also get the top tracks of a specific artist. It is fully responsive.

## Tech Stack

-   React
-   Tailwind CSS
-   Material UI
-   Last.fm API
-   Unsplashed API
-   Leaflet (for world map input)

## How to run

-   Clone the repo

```
git clone https://github.com/SafeTorpedo/gdsc-frontend-task.git
```

-   Change directory

```
cd gdsc-frontend-task
```

-   Install dependencies

```
npm install
```

-   Run the app

```
npm run dev
```

## Future Scope

-   Currently, the map is being built through leaflet and the data is being fetched from a JSON file locally. As the file size is quite large, it is not being deployed to vercel. However, the maps integration works seamlessly on local machine.

-   A more beautiful UI to be implemented. Currently, it is as simple as it can be.

## Try it out

https://songs-task.vercel.app/
