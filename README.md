# Authentication & Protected Posts

A full-stack authentication practice project built with **Next.js and React**, integrated with a Laravel backend API. The project focuses on user authentication, protected routes, cookie-based token storage, API integration, and reusable error handling.

## ✨ Features

### 🏠 Home & Navigation
- Simple Home page with a navigation header.
- Navigation between Home and Posts.
- Login and Register buttons for unauthenticated users.
- User information and a Logout button displayed after login.

### 🔐 Authentication
- User registration with name, email, password, and password confirmation.
- Login using email and password.
- Form validation and backend error handling.
- Validation feedback for invalid email addresses, mismatched passwords, and other request errors.
- Authentication token stored in an `HttpOnly` cookie.
- Authentication state persists across page refreshes.
- Logout functionality that clears the authentication cookie and redirects to the Home page.

### 🛡️ Protected Routes
- Posts page accessible only to authenticated users.
- Route protection implemented using Next.js `proxy.js`.
- Authentication checks to control access to protected content.

### 📝 Posts
- Fetches and displays posts from the Laravel backend API.
- Dedicated loading UI using `loading.js`.
- Dedicated error UI using `error.js`.

### ⚠️ Error Handling & Notifications
- Reusable API response utilities in `lib/apiResponse.js`.
- `readApiResponse()` for processing API responses.
- `getApiErrorMessage()` for extracting meaningful error messages from backend responses.
- `getRequestErrorMessage()` for handling request-related errors.
- React Toastify notifications for displaying feedback and errors.
- Next.js `useActionState` for managing form submission states and validation feedback.

### 🧩 State Management & Code Organization
- React Context API using `createContext` to share authentication-related state.
- Separate action files for registration, login, logout, and retrieving the current user.
- Reusable components for the header, form submission buttons, Bootstrap setup, and toast notifications.
- Organized API actions and utility functions for maintainable code.

## 🛠️ Tech Stack

- **Next.js** — Application framework, routing, and loading/error UI.
- **React** — Component-based UI and state management.
- **JavaScript**
- **Bootstrap** — UI styling and layout.
- **React Toastify** — Toast notifications.
- **React Context API** — Shared authentication state.
- **Next.js `useActionState`** — Form submission state management.
- **Next.js `proxy.js`** — Route access checks.
- **Cookies** — Authentication token storage.
- **Laravel** — Backend API.
- **MySQL** — Database.

## 🔄 Authentication Flow

1. Users visit the Home page.
2. New users register with their name, email, password, and password confirmation.
3. Form validation and backend errors are displayed through form feedback and toast notifications.
4. User information is stored in the database through the backend, and the authentication token is stored in an `HttpOnly` cookie.
5. Users log in using their registered email and password.
6. After login, the header displays the user's information and a Logout button.
7. Authenticated users can access the Posts page and retrieve posts from the backend API.
8. Authentication persists across page refreshes through the cookie.
9. Logging out clears the authentication cookie and returns the user to the Home page.

## 📁 Project Structure

```text
authentication-next/
├── public/
├── src/
│   ├── actions/
│   │   ├── LoginAction.js
│   │   ├── LogoutAction.js
│   │   ├── MeAction.js
│   │   └── RegisterAction.js
│   ├── app/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── page.jsx
│   │   │   └── register/
│   │   │       └── page.jsx
│   │   ├── posts/
│   │   │   ├── error.jsx
│   │   │   ├── loading.jsx
│   │   │   └── page.jsx
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── components/
│   │   ├── Bootstrap.jsx
│   │   ├── Header.jsx
│   │   ├── Submit.jsx
│   │   └── Toastify.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── lib/
│   │   └── apiResponse.js
│   └── proxy.js
```

## 📸 Screenshots

<img width="947" height="413" alt="home" src="https://github.com/user-attachments/assets/cb23f294-2448-45eb-8885-ada20e5d5d42" />

<img width="945" height="412" alt="register" src="https://github.com/user-attachments/assets/53d701dc-71b8-493f-b7ab-5531c03124e9" />

<img width="946" height="413" alt="pass-err-1" src="https://github.com/user-attachments/assets/5ca78c95-d5d5-4894-a169-41532d42a1d0" />

<img width="946" height="413" alt="pass-err-2" src="https://github.com/user-attachments/assets/7a56d0db-3c0c-4723-a984-a5f5aa5f98b0" />

<img width="947" height="411" alt="registered" src="https://github.com/user-attachments/assets/b40717b5-9fc0-4dc1-8e52-5ceb3d2e868e" />

<img width="948" height="413" alt="login2" src="https://github.com/user-attachments/assets/1e7c9b2e-8a25-405a-8916-d6d1bbe74a6c" />

<img width="947" height="410" alt="logged" src="https://github.com/user-attachments/assets/8064f625-4552-4729-a523-9e00b3540320" />

<img width="959" height="417" alt="logout1" src="https://github.com/user-attachments/assets/fad8298f-c5df-42b8-a3a6-d51e239dfefd" />

<img width="959" height="412" alt="logout2" src="https://github.com/user-attachments/assets/a0c8a176-7669-4b07-8196-ba6e047d3552" />

## 🔗 Backend Integration

The frontend communicates with a Laravel backend API for authentication and retrieving posts.

The integration includes:
- User registration and login.
- Retrieving the authenticated user's information.
- Logging out and clearing authentication state.
- Fetching protected posts.
- Processing API responses and displaying meaningful error messages.

The Laravel backend is based on existing code and is used to practice frontend-to-backend integration.

## 🎯 What I Practiced

- Integrating a Next.js frontend with a Laravel backend API.
- Implementing authentication flows.
- Managing shared authentication state with React Context.
- Using `useActionState` for form submissions.
- Protecting routes with Next.js `proxy.js`.
- Working with `HttpOnly` cookies.
- Handling API responses and errors with reusable utility functions.
- Implementing loading and error UI states.
- Organizing API actions, components, and shared logic.

## 📌 Project Status

This is a practice project developed to strengthen my skills in frontend development, authentication workflows, API integration, and error handling.

## 👩‍💻 Author

Developed with ❤️ by <ins>Paniz Asghari</ins>

Frontend Developer | React.js
