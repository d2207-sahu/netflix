# Netflix
![image](https://github.com/d2207-sahu/netflix/assets/55633712/c57c6a57-b1d9-4cb9-93a1-13f4f7a582d4)
* Netflix Frontend
[[https://netflix-divyanshu.vercel.app/browse](https://divyanshu-netflix.vercel.app/browse)]
* Netflix Backend
[https://netflix-divyanshu-server.vercel.app/api](https://netflix-divyanshu-server.vercel.app/api)

## Table of Content: 📑
- [About the Project](#about-the-project)
- [Features](#Features)
- [Technologies Used](#technologies-used)
- [Approach](#approach)
- [Credits](#credits)
- [License](#license)
- [Screenshots](#screenshots)

## About the Project: 📚
Give a brief description of the project. What was the reason or motivation behind the creation of the project?

## Features
1. User Authentication
2. Content Catalog
3. Search Functionality
4. Video Playback
5. Multiple Profiles
6. Recommendation System: Recommnedation from the searched and played movies
7. Watchlist
8. Responsive Design

## Technologies Used: ☕️ 🐍 ⚛️
List the tools and technologies used to build the project. 

1. This Single Page Application is built using **React JS** Library. 
2. For Styling I am using **Tailwind CSS and Styled Component(`styled-component`)**
3. The state managemment is handled using **Redux Library**.
4. Using ``react-router`` for Routing in the application.
5. **Firebase Auth** for Identity Access Management.  
6. Used **Firebase Firestore DB** for saving the user information.
7. Used **NextJS API and Node** for API Routes
8. Used **TMDB(Third Party API)**, for having the Movies and Videos data to make Netflix
9. Using **Youtube Video Player(Iframe)** to play videos in the Netflix Application.
10. Used `react-error-boundary` library for Error Handling using **Error Boundary**
10. Used **Vercel** to deploy the application and also **CI/CD Pipeline**.

### Technologies to be worked
1. Handle the asynchronous features using `@tanstack/react-query`(Asynchronous State management).
2. Offline View Handling
3. Handle the Route based modal and work on navigation fixes.

## Approach: 🚶
The design patterns implemented and code styles used.

### Dynamic Rendering (Data/Config Driven UI)

### Security
1. **Implementing API for securing Keys:** Handled the API Calling using the Next JS API as Backend, which lets us to hide the API Key from client side, not providing it to the client.
2. **Using ENV Variables:** Saving the crutial variables of the firebase configuration in the Environment Variables Passed from the Vercel.
3. **Implemented the CSP policy in the base HTML:** Other scripts and origins are blocked. Helping the CLient Side Scripting Error.
```
<meta http-equiv="Content-Security-Policy" content="
    default-src 'self';
    frame-src https://www.youtube.com/;
    img-src data: https: http:;
    script-src 'self' 'unsafe-inline' https://vercel.live/_next-live/feedback/feedback.js https://firebasestorage.googleapis.com https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline'; 
    connect-src 'self' https://netflix-divyanshu-server.vercel.app http://localhost:3000 https://firestore.googleapis.com/ https://identitytoolkit.googleapis.com https://corsproxy.org https://securetoken.googleapis.com;" />
```
4. **Implementing API to solve the CORS error:** Handled the API Calling using the Next JS API as Backend for handling the CORS.
5. **Implemented Firebase Auth:** Handle the authentication of the Firebase Auth SDK, to enable the authenticated user to use the netflix application.

### Performance
1. Optimised the application, by reducing the API calls by 300%. We handled TMDB API Requests from the Backend Side.
2. Implemented `lazy-loading` for images in the react applicaiton. 

### Error Handling
1. Using Error Boundary for handling the error in different components
2. Catching the Anonymous Page in the `react-router` with 404 page.

### Internationalization(i18) Feature
Application is working in two different language, using the transalation config.

## Credits: 📝
I built this project entirely by myself. I initially started working on it by taking the Namaste React course. Later, I added numerous features on my own to optimize the entire application for better performance and security.

## License: ©️
Add any license agreement information. Example (MIT, Apache).

## Screenshots: 📷
Screenshots of the Application

### Home Page

#### Desktop
![image](https://github.com/d2207-sahu/netflix/assets/55633712/c57c6a57-b1d9-4cb9-93a1-13f4f7a582d4)
#### Mobile
![image](https://github.com/d2207-sahu/netflix/assets/55633712/0f4202cc-0e74-4138-81e4-2905bdfdd123)

### MovieInfoModal Page

#### Desktop
![image](https://github.com/d2207-sahu/netflix/assets/55633712/76be2452-e790-4d52-a61b-fa0a5d2acc41)
#### Mobile
![image](https://github.com/d2207-sahu/netflix/assets/55633712/625577f2-8390-40bb-844d-95f75753654b)

### Search Page

#### Desktop 
![image](https://github.com/d2207-sahu/netflix/assets/55633712/bf6df060-1c11-438b-8876-e3fdca737712)
#### Mobile
![image](https://github.com/d2207-sahu/netflix/assets/55633712/24ff1f11-e825-42b9-af01-7741677a3ae6)
![image](https://github.com/d2207-sahu/netflix/assets/55633712/3956a72f-4601-4cc3-abe3-bd05eaeb2284)

### Footer Component

#### Desktop
![image](https://github.com/d2207-sahu/netflix/assets/55633712/fdfeed61-a758-4ab5-a780-e54901ac523e)
#### Mobile
![image](https://github.com/d2207-sahu/netflix/assets/55633712/49dc66d9-588c-4f4c-a289-1c6d6e251b70)

### MyNetflix Page (Mobile View Only)
![image](https://github.com/d2207-sahu/netflix/assets/55633712/38d789d5-eb6e-490a-942b-65fe42eba41e)

### Internationalization Feature
Availaibe in Hindi Language
![image](https://github.com/d2207-sahu/netflix/assets/55633712/3124c489-ec9a-46e7-82b9-79cd47f853b1)
![image](https://github.com/d2207-sahu/netflix/assets/55633712/c932ae1c-045e-49d0-ad5d-e63bfec7158c)

[def]: #screenshots
