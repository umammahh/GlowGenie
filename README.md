# Glow Genie

**Glow Genie** is an AI-powered skincare assistant built with **Django** (backend) and **React** (frontend). This app helps users get personalized skincare recommendations based on their skin concerns and reminds them to follow their skincare routines for optimal results.

## Features

- **Personalized Skincare Recommendations**: Users input their skin concerns, and the app suggests relevant skincare products.
- **Skincare Routine Reminders**: Users can set daily/weekly reminders to stay on top of their skincare routines.
- **User-friendly Interface**: A sleek, modern interface built with React and styled using Tailwind CSS.

## Tech Stack

- **Backend**: Django, Django REST Framework
- **Frontend**: React, Tailwind CSS
- **Database**: SQLite (can be easily switched to PostgreSQL in production)
- **API Communication**: Axios for API requests from frontend to backend
- **Authentication**: None (for now) - can be added in future for personalized user profiles
- **Deployment**: Can be deployed to Heroku, AWS, or any cloud platform

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:

- Python 3.x
- Node.js
- npm (Node Package Manager)

### Installation

#### 1. Clone the Repository

git clone https://github.com/YOUR-USERNAME/glow-genie.git
cd glow-genie 2. Setup the Backend (Django)
Create a virtual environment:

python -m venv venv
Activate the virtual environment:

On Windows:

venv\Scripts\activate
On macOS/Linux:

source venv/bin/activate
Install required dependencies:

pip install -r backend/requirements.txt
Run migrations:

cd backend
python manage.py migrate
Run the Django development server:

python manage.py runserver

3. Setup the Frontend (React)
   Navigate to the frontend directory:

cd ../frontend
Install npm dependencies:

npm install
Start the React development server:

npm start
This will start the app on http://localhost:3000/ and should be able to communicate with the Django backend running on http://localhost:8000/.

Directory Structure
glow-genie/
├── backend/ # Django backend
│ ├── core/ # Main app for handling logic
│ ├── manage.py # Django management script
│ └── requirements.txt# Backend dependencies
├── frontend/ # React frontend
│ ├── public/ # Public assets (HTML, images, etc.)
│ ├── src/ # React components and hooks
│ └── package.json # Frontend dependencies
├── .gitignore # Git ignore file
├── README.md # Project documentation
└── requirements.txt # Combined dependencies for backend/frontend
Future Improvements
User Authentication: Allow users to create accounts and save their skin preferences.

Skin Analysis: Add a feature to analyze users' skin using image recognition or AI.

Notifications: Integrate push notifications for daily reminders.

Product Database: Expand the database of skincare products with more detailed information.

Contributing

Fork this repository.

Create a new branch (git checkout -b feature-name).

Make your changes and commit them (git commit -am 'Add feature').

Push to the branch (git push origin feature-name).

Open a Pull Request.
