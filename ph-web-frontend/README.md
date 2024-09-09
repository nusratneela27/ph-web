### Live link

- [basil-recipe-platform](https://recipelearning.netlify.app/)

# Recipe Sharing System

This project is a Full-stack Recipe Sharing system built using ReactJS for the front-end, MongoDB and ExpressJS for the back-end, and Firebase for authentication. The system allows users to view, add, and purchase recipes, while incorporating a virtual currency system with coins.

## Features

### General

- **Public Recipe Viewing**: Users can see a list of recipes without logging in.
- **Google Authentication**: Users can register and log in using Google, receiving 50 coins upon registration.

### Recipe Details & Interaction

- **View Recipe Details**: Users can spend 10 coins to view recipe details.
- **Add Recipes**: Logged-in users can add new recipes and earn 1 coin for each view of their recipe.
- **Coin Purchase**: Users can buy 100, 500, or 1000 coins for $1, $5, and $10 respectively.

### User Interface

- **Navbar**: Displays site navigation and user-specific options based on login status.
- **Homepage**: Features a banner with call-to-action buttons, success stories, and developer info.
- **Footer**: Includes links to social profiles.

### Security

- **Protected Routes**: Only logged-in users can add recipes or view recipe details.

### Additional Functionalities

- **Searching by recipe title**: Allows users search recipes by their title.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>

   ```

2. run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.
