# POMO50 - Pomodoro Timer Project

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Project Structure](#project-structure)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [Contact](#contact)

## Introduction
POMO50 is a web-based Pomodoro timer application designed to help users manage their work or study time more effectively. Users can log in, set Pomodoro timers, track their work hours, and save usage history.

## Features
- **User Account Management**: Register, log in, and log out features.
- **Pomodoro Timer**: Users can set countdown timers for work sessions and breaks.
- **Usage History Tracking**: The app stores users' work time by day, helping them track productivity.
- **Auto-Save Data**: Pomodoro sessions and history are saved in the database even after users log out.
- **Progress Reports**: Display the hours worked by each day when users log back in.

## Technologies Used
This project was built using the following technologies:
- **HTML/CSS/JavaScript**: Front-end development for a user-friendly interface.
- **Python & Flask**: Backend logic and web server development.
- **SQL**: Database management to store user information and Pomodoro history.
- **VS Code**: Main development environment.
- **Heroku**: (Optional) Deploy the application in a production environment.

## Installation and Setup

### Prerequisites
- Python 3.x
- SQLite or any other database management system
- Flask

### Setup Instructions

1. Clone the project from GitHub:

    ```bash
    git clone https://github.com/dat3021/POMO50-Project.git
    ```

2. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Initialize the database:

    ```bash
    python init_db.py
    ```

4. Run the Flask application:

    ```bash
    flask run
    ```

5. Open the app in your browser at `http://127.0.0.1:5000/`.

## Project Structure

```bash
POMO50-Project/
│
├── static/           # Folder containing static files (CSS, JavaScript, images)
├── templates/        # Folder containing HTML templates
├── app.py            # Main Flask application file
├── init_db.py        # Script to initialize the database
├── models.py         # Database model definitions
├── requirements.txt  # List of required packages
├── README.md         # Project documentation
└── .gitignore        # File to exclude unnecessary files from commits
