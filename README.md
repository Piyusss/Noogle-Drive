# ✍🏻Noogle Drive

**Noogle Drive** is a robust and user-friendly cloud storage solution designed to securely manage and share your files seamlessly. This project leverages modern web technologies to deliver a fast, intuitive, and feature-rich experience for users.

## 🚀 Features
- **File Upload and Download**: Upload files to the cloud and download them anytime, anywhere.
- **Secure Authentication**: OTP-based email authentication ensures only authorized access.
- **User-Friendly Interface**: Simple and responsive design for seamless navigation.
- **Cloud Storage**: Reliable storage powered by Appwrite backend.
- **Cross-Platform**: Accessible on all modern browsers and devices.

## 🛠️ Technologies Used

- **Frontend**: [Next.js] for a fast and scalable React-based user interface.
- **Backend**: [Appwrite] for authentication, database, and file storage.
- **Hosting**: [Vercel] for deploying the application.
- **CSS**: Tailwind CSS for responsive and modern styling.
- **Environment Management**: dotenv for handling environment variables.

## 🎯 How to Use

### Prerequisites

Ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- Appwrite instance (cloud or self-hosted)

### Clone the Repository

```bash
https://github.com/Piyusss/Noogle-Drive.git
```

### Setup Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=""
NEXT_PUBLIC_APPWRITE_PROJECT=""
NEXT_PUBLIC_APPWRITE_DATABASE=""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
NEXT_APPWRITE_KEY=""
```

### Install Dependencies

Install the required packages using npm or yarn:

```bash
$ npm install
```

or

```bash
$ yarn install
```

### Run the Application Locally

Start the development server:

```bash
$ npm run dev
```

or

```bash
$ yarn dev
```

Visit `http://localhost:3000` in your browser to explore the application.

### Deploy to Vercel

1. Push your project to GitHub.
2. Link the repository to your Vercel account.
3. Add environment variables in Vercel's project settings.
4. Deploy your application with a single click.

## 🌐 Live Demo

<p>Check out the live version of Noogle-Drive: <a href="https://noogle-drive.vercel.app/" target="_blank" rel="noopener noreferrer">Click here</a> </p>


## 📸 Screenshots

### Home Page
![Screenshot 2024-12-19 220113](https://github.com/user-attachments/assets/079db200-301d-4dff-b138-5aeb8541f5fd)

### Secure Login
![Screenshot 2024-12-19 220151](https://github.com/user-attachments/assets/8b741294-fa58-48c5-a24d-e069485854fc)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a Pull Request.

## 📬 Contact

For queries or feedback, feel free to reach out:

- **GitHub**: [@Piyusss](https://github.com/Piyusss)
- **Email**: [piyushraj.code@gmail.com](mailto:piyushraj.code@gmail.com)

---

Thank you for checking out Noogle Drive! ⭐ Don't forget to star the repository if you find it helpful!

