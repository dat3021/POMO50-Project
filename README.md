# POMO50 - Pomodoro Timer Project
#### Video Demo:  https://youtu.be/YoodFLGPNlk
#### Description: see the [Introduction](#introduction)
#### URL: https://dat3021.pythonanywhere.com/

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [How to Use](#how-to-use)
- [Detailed Description of Files](#detailed-description-of-files)
- [Project Folder Structure](#project-folder-structure)


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


## How to Use
- **Start a Pomodoro Session**: Press the "Start" button to begin the countdown for the work time (default is 25 minutes).
- **Rest After Completing a Work Session**: Once the work time is over, a sound will signal the end, and the rest period will begin.
- **Switch to Short or Long Break**: Press the "Rest" button to switch to a short break (default is 5 minutes) or "Long Rest" to switch to a long break (default is 15 minutes).
- **Customize Time**: Press the "Settings" button to open the time settings panel. Here, users can customize the work and rest durations. Click "Save" to save the settings.
- **Log In and View Statistics Chart**: Log in (or register) so the system can save the counted Pomodoro time. Then click the "Summarize" button to open a statistics chart showing the user's work time for each day.

## Detailed Description of Files

### 1. **app.py**

- Handles the backend of the application using Flask.
- Main routes:
    - `/`: Displays the main Pomodoro page.
    - `/save_settings`: Saves the user's Pomodoro time settings.
    - `/get_settings`: Retrieves the Pomodoro time settings when the user logs back in.
    - `/logtime`: Stores the completion time of each Pomodoro session.
    - `/get_data`: Fetches data to display the working time statistics chart.

### 2. **layout.html**

- The main interface of the application.
- Contains UI components such as the countdown timer, start/stop/settings buttons, and the chart display area.

### 3. **style.css and style2.css**

- Defines the presentation and formatting for the user interface.
- Key components:
    - Formatting for the countdown timer and time settings panel.
    - Styles for functional buttons and the time settings dialog, as well as the statistics chart.

### 4. **JavaScript file**

- Contains functions that handle frontend logic:
    - **Countdown function**: Counts down the working and resting time, displaying the results on the timer.
    - **Data submission**: Uses Fetch API to send the user's completion time to the server for storage.
    - **Customize time**: Receives data from the user, sends it to the server, and displays the new settings.
    - **Display chart**: Retrieves data from the server and visualizes it as a chart using Chart.js.

### 5. **/static/sound/**:

- Contains sound files that notify users when the working and resting times are over.

### 6. **/static/icon/**:

- Contains images used on the website.

### 7. **/templates/**:

- Contains HTML files used by Flask to render the user interface.

## Project Folder Structure

- `/static/`: Contains static files such as CSS, JavaScript, images, and sound.
    - `/static/css/style.css`: Contains CSS rules for styling the application's interface.
    - `/static/css/style2.css`: Contains additional CSS rules for styling the login application's interface.
    - `/static/(js-file):` Handles the main logic of the Pomodoro application (countdown, API interaction, chart display).
    - `/static/sound/`: Directory containing notification sound files.
    - `/static/icon/`: Directory containing image files.
- `/templates/`: Contains HTML files used by Flask to render the interface.
- `app.py`: The main file of the Flask application, managing routes and handling server-side logic.
- `data.db`: SQLite file containing information about users' working hours.
