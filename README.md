
# BOOKS 📖
📌Project Overview

This project is designed for library users. It allows them to get a brief idea about content of the books available in the library, including newly added ones, based on user reviews. Library users can share their own opinions to help others. This makes it easier for readers to choose books according to their preferences
[Demo Video about BOOKS ](https://www.linkedin.com/posts/sachintha-lakshan-ba293a2b4_java-springboot-mongodb-activity-7380340268908212224-iJpD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuZ6SoB32lU3lY-XxNsm0A_C-J3f7HjJLY)

 **🗸 User**
 - See Book reviews
 - Add Book reviews

 **🗸 Admin**
 - Handle User Reviews
 - Add books


## 🔧Tech Stack

- **Frontend :** React Vite , JavaScript
- **Styling :** Tailwind CSS , DaisyUI
- **Backend :** Java , SpringBoot , Apache Maven 
- **Database :** MongoDB Atlas
- **API Testing :** Postman


## Project Structure 
Frontend
```
.
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── ReviewsNotFound.jsx
│   │   └── images/
│   ├── pages/
│   │   ├── AdminAllReviews.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── Home.jsx
│   │   ├── InsertIdea.jsx
│   │   ├── Login.jsx
│   │   ├── Reviews.jsx
│   │   ├── SignUp.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore


```
backend
```
com.library.library
├── Controller
│   ├── BookController
│   ├── ReviewController
│   └── UserController
├── DTO
│   ├── BookDTO
│   ├── LoginRequest
│   ├── ReviewDTO
│   └── SignUpRequest
├── Model
│   ├── Book
│   ├── Review
│   └── User
├── Repo
│   ├── BookRepository
│   ├── ReviewRepository
│   └── UserRepository
├── Security
│   ├── MyUserDetailsService
│   └── SecurityConfig
├── Service
│   ├── BookService
│   ├── ReviewService
│   └── UserService
└── LibraryApplication
```


