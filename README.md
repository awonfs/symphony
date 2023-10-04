# Symphony: Harmonize Your Spotify Experience

## Overview

Symphony is a web application designed to enhance your Spotify experience by providing additional features and insights into your listening habits. Not only can you search for your favorite artists, albums, and songs, but you can also delve into a retrospective view of your musical journey over the past 4 weeks.

Key Features:

- **Search Functionality**: Explore the vast Spotify library, searching for artists, albums, and songs to discover new music or revisit old favorites.
- **Listening History**: View your most listened to songs over the past 4 weeks, providing a snapshot into your recent musical preferences.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Steps](#steps)
- [Usage](#usage)
- [Contribute](#contribute)
- [Credits](#credits)

## Installation

To get Symphony up and running on your local machine, follow these steps:

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed.
- A Spotify Developer account and a set of credentials (Client ID and Client Secret). Visit [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) to get these.

### Steps

1. **Clone the Repository:**
   ```shell
   git clone https://github.com/yourusername/symphony.git
   cd symphony
   ```
2. **Install Dependencies:**
   ```shell
   npm install
   ```
3. Setup Environment Variables:

   Create a .env.local file in the root directory.
   Add these values to your env file:

   ```shell
   CLIENT_ID="ADDVALUE"
   SPOTIFY_CLIENT_SECRET="ADDVALUE"
   NEXT_PUBLIC_REDIRECT_URI=http://localhost:3000/api/callback
   NEXT_PUBLIC_URI=http://localhost:3000
   ```

4. **Start the Server:**

```shell
npm run dev
```

Navigate to http://localhost:3000 in your browser.

##Usage

Login

Start by logging in with your Spotify account. You'll be redirected to the Spotify login page.

Explore

Search: Use the search bar to find artists, albums, or tracks. Click on the items in the search results to view more details.

Top tracks: Visit the "top" section to view a list of your most listened to songs over the past 4 weeks.

##Contribute

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/NewFeature)
3. Commit your Changes (git commit -m 'Add some NewFeature')
4. Push to the Branch (git push origin feature/NewFeature)
5. Open a Pull Request

## Credits

Developed by Eetu Rönkkö.

Special thanks to the Spotify API for enabling the functionality of this app.
