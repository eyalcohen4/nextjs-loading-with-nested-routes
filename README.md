### Nested Route Loading Bug

#### Bug Overview

This repo demonstrates an issue in a Next.js app where the root route's loading component is shown instead of the dynamic route's when navigating to `/subroute/[dynamic]`.

#### Setup

1. Clone the repo.
2. Run `npm install` to install dependencies.
3. Start the app with `npm run dev`.

#### Reproducing the Issue

- Navigate to the homepage.
- Click on the link for the dynamic subroute. It uses `Math.random()` for dynamic values.
- Notice the root route's loading screen appears, not the dynamic route's.

#### Structure

- `/`: Root route with its own loading component.
- `/subroute`: Static route with its own loading component.
- `/subroute/[dynamic]`: Dynamic route with a unique loading component.

#### Goal

We expect each route to display its respective loading component. The bug shows the root's loading instead of the dynamic route's.

#### Additional Info

- The issue is also shown in an attached video.
- Check the repository for detailed code structure and loading component implementations.
