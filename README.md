# Express.js Application with GitHub Actions CI/CD

This repository contains a simple Express.js application with GitHub Actions configured for Continuous Integration (CI) and a placeholder for Continuous Deployment (CD).

## Application Overview

The application is a basic "Hello World!" server built with Express.js.
- It listens on port 3000.
- The main application file is `app.js`.
- It has one route: `GET /` which returns "Hello World!".

## Getting Started

### Prerequisites

- Node.js (LTS version recommended, e.g., 18.x or 20.x)
- npm (comes with Node.js)

### Installation and Running Locally

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the application:**
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:3000`.

### Available Scripts

-   `npm start`: Starts the Express.js application.
-   `npm run lint`: Lints the codebase using ESLint.
-   `npm test`: Runs the unit tests using Jest.

## CI/CD Workflows

GitHub Actions are used to automate linting, testing, and deployment.

### 1. Continuous Integration (`.github/workflows/ci.yml`)

-   **Trigger:** Runs on every `push` to the `main` branch and on `pull_request` events targeting the `main` branch.
-   **Jobs:**
    -   `build`:
        -   Checks out the code.
        -   Sets up Node.js (testing on versions 18.x and 20.x).
        -   Installs dependencies using `npm ci`.
        -   Runs ESLint (`npm run lint`).
        -   Runs Jest tests (`npm run test`).

### 2. Continuous Deployment (`.github/workflows/deploy.yml`)

-   **Trigger:** Runs on every `push` to the `main` branch.
    *(Note: For a production setup, this is often configured to run only after the CI workflow succeeds, e.g., using `workflow_run` or by having dependent jobs in a single workflow.)*
-   **Jobs:**
    -   `deploy`:
        -   Checks out the code.
        -   Sets up Node.js.
        -   Installs dependencies.
        -   Includes placeholder steps for building and deploying the application. These would need to be configured for your specific deployment target (e.g., Docker, AWS, Google Cloud, Heroku, etc.).

## Original README Content
(The original README only contained: "# github-action-demo
learning github actions")
