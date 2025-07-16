
# AI-MockMate
A full-stack AI-powered mock interview platform where users start interviews based on selected roles. It captures responses via webcam and mic, stores them in a database, and uses Gemini API to evaluate answers. Provides instant feedback, ratings, and tailored suggestions to improve interview performance.


 
Project Overview: AI MockMate
AI MockMate is a complete AI-powered mock interview preparation platform. It helps users simulate real interview experiences by allowing them to choose a job role, description, experience level, and tech stack. Based on this, the app generates relevant interview questions and lets users record their responses via text, voice, or video.

Once an answer is recorded, the app uses Google Gemini AI to evaluate your response, give you a score, show the expected answer, and provide personalized feedback and recommendations. This makes it an excellent tool to practice, improve, and track your interview performance over time.

✨ Key Features
User Authentication: Secure login system using Clerk

Custom Interview Setup: Choose job role, experience level, description, and tech stack (e.g., React, Node, etc.)

Answer Recording: Supports both voice and video recording

Speech to Text: Converts your voice responses into text automatically

AI Feedback: Gemini API evaluates your answers and gives:

Score out of 10, Your actual answer vs expected answer,Suggestions to improve

Interview Dashboard: View, manage, and track all your past interviews

Data Storage: All data is stored in Firebase (Firestore + Media)

Routing & Error Handling: Complete navigation flow with fallback handling

Multiple Sessions: Practice for different roles and tech stacks easily

🛠 Tech Stack
Frontend: Built with React, TypeScript, Tailwind CSS, and ShadCN UI for a clean and responsive user interface.

Backend & Database: Uses Firebase Firestore to store data in real time, and Firebase Auth for secure user authentication.

AI Integration: Powered by Gemini API, which generates interview questions, gives feedback on your answers, and suggests improvements.

Recording Features: Supports both video (react-webcam) and voice recording (speech-to-text) so you can simulate real interview scenarios.

Routing & Forms: Smooth navigation with React Router, and easy-to-use forms with react-hook-form and validation using Zod.

🎯 Use Case
This application is ideal for:

Students preparing for campus placements

Professionals switching careers or roles

Anyone wanting to practice mock interviews with real-time feedback

You can choose any tech stack (like React, Node, etc.), record your answers in video/audio, and see feedback instantly. Every session is saved, so you can revisit your answers anytime and improve continuously. It’s your personal AI interview coach — helping you get better, one interview at a time!
