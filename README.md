# Reqres App ⚛️

This project is a **React-based application** that integrates with the **Reqres API** to perform basic user management functions. The application is divided into three levels of increasing complexity: **Authentication**, **User List**, and **User Management (Edit/Delete)**.

---

## 📖 Table of Contents
- [Features](#-features)
- [Technologies Used](#️-technologies-used)
- [Project Structure](#-project-structure)
- [Installation](#️-installation)
- [Running the Application](#️-running-the-application)
- [API Endpoints](#-api-endpoints)
- [Bonus Features](#-bonus-features)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

## ✨ Features

### Level 1: Authentication Screen
- A login screen where users can log in using their credentials.
- **Credentials**:
  - 📧 **Email**: `eve.holt@reqres.in`
  - 🔒 **Password**: `cityslicka`
- On successful login:
  - The token is stored in **local storage**.
  - The user is redirected to the **Users List page**.

---

### Level 2: List All Users
- Displays a **paginated list of users** fetched from the Reqres API.
- Each user card displays:
  - **First Name**
  - **Last Name**
  - **Avatar**
- Pagination is implemented to navigate through pages.

---

### Level 3: Edit, Delete, and Update Users
- **Edit**:
  - Opens a form pre-filled with the user's data.
  - Allows updating the user's **first name**, **last name**, and **email**.
- **Delete**:
  - Deletes the user from the list.
- Success and error messages are displayed for each operation.

---

## 🛠️ Technologies Used
- ⚛️ **Frontend Framework**: React
- 🌐 **HTTP Client**: Axios
- 🎨 **CSS Framework**: Tailwind CSS + Custom CSS
- 🛤️ **Routing**: React Router
- 🧠 **State Management**: React Hooks
- 🧪 **Testing**: React Testing Library

---

## 📂 Project Structure

```bash
reqres-app/
├── package.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── reportWebVitals.js
    ├── routes.js
    ├── setupTests.js
    ├── components/
    │   ├── Auth.js
    │   ├── EditUser.js
    │   ├── Pagination.js
    │   └── UserList.js
    ├── pages/
    │   ├── Login.js
    │   └── Users.js
    ├── services/
    │   └── api.js
    ├── styles/
    │   └── styles.css
    └── utils/
        └── PrivateRoute.js

```

## Installation

### 1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/reqres-app.git
   cd reqres-app
   ```

### 2. Install dependencies:
  ```bash
   npm install
   ```

## Running the Application

### 1. Start the development server:
 ```bash
   npm start
   ```

### 2. Open your browser and navigate to:
 ```bash
   http://localhost:3000
   ```


## API Endpoints

### 📋 Fetch Users
#### Endpoint: ```GET /api/users?page=1```

### ✏️ Update User
#### Endpoint: ```PUT /api/users/{id}```

#### Body:
```bash
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
```
### 🗑️ Delete User
#### Endpoint: ```DELETE /api/users/{id}```


## 🎁 Bonus Features
- 🔍 Client-side search and filtering on the Users List.
- 🌐 Hosted on a free server with a live demo link.

## Contributing
If you'd like to contribute, please fork the repository and submit a pull request. All contributions are welcome!


## Contact
For any queries, feel free to reach out:
- 📧 **Email:** ganeshkantle@gmail.com
- 🐙 **GitHub:** (https://github.com/ganeshkantle)
- 🧰 **My Bento:** (https://bento.me/kantle)
- 🌐 **My Portfolio:** (https://tinyurl.com/ganeshkantle)
