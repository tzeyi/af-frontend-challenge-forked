# Frontend Challenge: Cat Picture App

## Introduction

Welcome to the Artisanal Futures Frontend Challenge! This challenge is designed to assess your frontend development skills for potential student opportunities in our lab. We believe in learning by doing, and this hands-on task will give us a good understanding of your abilities in building a simple, yet functional web application.

This challenge focuses on creating a single-page application that fetches and displays cat pictures from an API when a button is clicked. **We expect this task to take approximately one hour to complete.**  We are being mindful of your time and want to assure you that **we are not looking for pixel-perfect perfection**.  Our primary goal is to see that you can complete the essential requirements and demonstrate your core frontend development abilities within a reasonable timeframe.

## Challenge Description

Your task is to build a single-page application that allows a user to view a new cat picture every time they click a button.  The application should fulfill the following requirements:

1.  **"Serve a Cat Picture" Button:**  The application must feature a clearly labeled button (e.g., "Serve a Cat Picture!", "Show me a Cat!", etc.).
2.  **Cat Picture Display:** Upon clicking the button, the application should fetch a cat picture from an API and display it on the page. The picture should update each time the button is clicked.
3.  **API Integration:** You must integrate with an API to fetch cat pictures. You have two options:
    *   **Option 1: Use the cataas.com API (Recommended):**  Utilize the free and simple [cataas.com API](https://cataas.com/).  A good starting endpoint is `https://cataas.com/cat?json=true` which returns a JSON response containing an image URL. Explore the [cataas.com documentation](https://cataas.com/api/) for more options if you wish.
    *   **Option 2: Create a Simple Custom API (Optional):**  If you prefer, you can create a very basic API yourself to serve cat pictures. This could be implemented using a lightweight framework like Python's Flask or Node.js's Express, serving static cat image files from your project or even just redirecting to external image URLs.
4.  **Dockerization:** The application must be containerized using Docker. You need to provide a `Dockerfile` that builds and runs your application.

## Tech Stack

You are free to choose from the following languages and technologies for this challenge:

*   **JavaScript/TypeScript:**
    *   Frontend Frameworks/Libraries: React, Next.js, Vanilla JavaScript, or any other JavaScript/TypeScript based frontend framework or library.
*   **Python:**
    *   Frontend: You can use a simple HTML, CSS, and JavaScript setup, or leverage a minimal Python framework like Flask to serve static files and potentially handle a custom API if you choose to create one.
    *   Backend (for custom API - optional): Flask, FastAPI (if you choose to build a custom API).

**Choose the stack you are most comfortable with and that allows you to complete the challenge effectively within the time limit.**  We want to see your frontend skills primarily, so choose the tools that enable you to demonstrate those skills best.

## Time Limit

This challenge has a **strict 24-hour time limit**. The timer starts from the moment you fork this repository. Please ensure you have a dedicated 24-hour period to work on this challenge before you begin. **However, please note that the *expected* time to complete the core functionality is closer to one hour. The 24-hour window is provided for flexibility and to accommodate different schedules, not as an indication of the expected workload.**

## Submission Instructions

1.  **Fork this repository** to your own GitHub account.
2.  **Develop your solution** within your forked repository using **JavaScript, TypeScript, or Python**.
3.  **Ensure your application is Dockerized** and includes a `Dockerfile` at the root of your repository.
4.  **Write clear instructions** in the `README.md` of your forked repository on how to:
    *   Build the Docker image.
    *   Run the Docker container. **Specifically, your instructions should clearly state the port (8080) your application runs on within the Docker container.**
5.  Once you are finished (and within the 24-hour time limit), please notify us of your submission at csdtdevelopers@umich.edu. In your notification, **include the link to your forked repository.**
6.  After evaluating your submission we will decided whether to invite you to a brief interview. The interview will largely be non-technical but you may be asked to describe your prior experiences.

## Evaluation Criteria

Your submission will be evaluated based on the following criteria:

*   **Functionality (Essential):** Does the application correctly fetch and display cat pictures from an API when the button is clicked? Does it work as expected?  **We are primarily looking for functional completion of these core requirements, not necessarily perfect styling or advanced features.**
*   **Code Quality:** Is your code clean, well-organized, and reasonably easy to understand? Is it reasonably commented?
*   **Dockerization (Essential):** Is the application properly containerized using Docker? Is the `Dockerfile` correctly configured and located at the root of your repository? Can the application be built and run using Docker **following standard Docker commands**?
*   **Adherence to Instructions:** Did you follow all the instructions and requirements outlined in this `README.md`?
*   **Completeness:** Is the submission complete and ready to run? Is the `README.md` in your forked repository informative and helpful, **especially regarding Docker build and run instructions**?

**How we will test your Dockerized application:**

We will test your submission using the following standard Docker commands after reading your README.md. Please ensure your `Dockerfile` and application are set up to work with these commands from the root of your repository:

```bash
docker build -t cat-app .  # Build the Docker image (we will assume the Dockerfile is in the root)
docker run -p 8080:8080 cat-app # Run the Docker container, mapping host port 8080 to your application's port
```

## Bonus Points (Optional)
While not mandatory, you can earn bonus points for implementing any of the following enhancements:

History: Include a next and back arrows that allow the user to cycle through already loaded images.

Styling: Make the application visually appealing with CSS. Basic styling is sufficient.

Loading State: Implement a loading indicator (e.g., a spinner or text) to show while the cat picture is being fetched from the API.

Saving: Allow the user to save their favorite cat pictures and load them from storage on refresh.

Error Handling: Implement basic error handling to gracefully manage potential issues such as API request failures or network errors. Display user-friendly messages in case of errors.

Responsiveness: Make the application layout reasonably responsive to different screen sizes.

Unit Tests (If applicable for your chosen stack): While not expected for this simple challenge, demonstrating testing knowledge is a plus if it fits naturally within your chosen stack and time.
