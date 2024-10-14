# POMO50 - Pomodoro Timer Project

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Project Structure](#project-structure)
- [How to Use](#how-to-use)


## Introduction
POMO50 is a web-based Pomodoro timer application designed to help users manage their work or study time more effectively. This Pomodoro application helps users manage their work and break times effectively using the Pomodoro technique. The technique consists of 25-minute work sessions alternated with 5-minute short breaks, and a longer break. Users can customize their work and break times, track their work history, and view statistics in chart form.

## Features
- **Pomodoro Timer**: Time tracking based on the Pomodoro technique, allowing customization between Pomodoro mode, short break, and long break (default: 25 minutes work, 5 minutes break, 15 minutes long break).
- **Setting:** Allows users to adjust work and break intervals according to their preferences.
- **Progress Reports**: Displays a chart showing the total time (calculated in minutes) spent working in Pomodoro sessions.
- **User Account Management:** Login functionality enables users to save the time they’ve worked on a daily basis.
- **Notification sound**: Plays a sound when the work or break session ends.

## Technologies Used
This project was built using the following technologies:
- **Frontend**:
    - **HTML/CSS**: Building the user interface.
    - **JavaScript**: Handling client-side logic, including countdown timer functionality and interaction with the API.
- **Backend**:
    - **Python with Flask**: Creating an API to serve data and store and retrieve work time data.
- **Database**:
    - **SQLite**: Storing users' work time data.
- **Libraries**:
    - **Chart.js**: Displaying statistics of work time in chart form.
    - **Fetch API**: Sending and receiving data from the server.
- **IDE**:
    - **VS Code**.

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

3. Run the Flask application:

    ```bash
    flask run
    ```

4. Open the app in your browser at `http://127.0.0.1:5000/`.

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
```

## How to Use

