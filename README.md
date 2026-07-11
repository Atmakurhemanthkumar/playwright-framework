# Playwright Automation Framework

Industry-standard test automation framework built with **Playwright** and **JavaScript**.

![Playwright Tests](https://github.com/Atmakurhemanthkumar/playwright-framework/actions/workflows/playwright.yml/badge.svg)

## 🛠️ Tech Stack

- **Playwright** — Test automation
- **JavaScript** — Programming language
- **Page Object Model (POM)** — Design pattern
- **Data Driven Testing** — JSON-based test data
- **Custom Fixtures** — Reusable setup
- **HTML Reports** — Visual test results
- **GitHub Actions** — CI/CD pipeline

## 📁 Project Structure

playwright-framework/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── tests/
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── DashboardPage.js
│   │   ├── RegistrationPage.js
│   │   └── ProductsPage.js
│   ├── data/
│   │   ├── users.json
│   │   └── products.json
│   ├── fixtures.js
│   ├── login-test.spec.js
│   ├── dashboard-test.spec.js
│   ├── registration-test.spec.js
│   ├── products-test.spec.js
│   ├── login-datadriven.spec.js
│   └── products-datadriven.spec.js
├── playwright.config.js
├── package.json
└── README.md

## 🚀 How to Run

# Install dependencies
npm install

# Run all tests
npx playwright test

# Run tests with browser visible
npx playwright test --headed

# Run specific test file
npx playwright test tests/login-test.spec.js

# Open HTML report
npx playwright show-report

## 📊 Test Coverage

| Feature | Tests |
|---------|-------|
| Login | Valid login, invalid login, empty fields, remember me, role selection |
| Dashboard | Welcome message, users table, row count, logout |
| Registration | New user registration |
| Products | Search, filter, sort, add to cart, price verification |

## 🔄 Data Driven Testing

Test data stored in `tests/data/` as JSON files:
- `users.json` — Login credentials with expected results
- `products.json` — Product names with expected prices

## 🧩 Page Object Model

Each page has its own class with locators and actions:

- `LoginPage.js` — Login form interactions
- `DashboardPage.js` — Dashboard verification
- `RegistrationPage.js` — User registration
- `ProductsPage.js` — Product search and cart

## 🤖 CI/CD

Tests run automatically on every push via **GitHub Actions**.

Workflow: `.github/workflows/playwright.yml`

- Triggers on push to `main` branch
- Runs on Ubuntu virtual machine
- Installs dependencies and Playwright browsers
- Executes all tests
- Uploads HTML report as artifact

## 📈 Reports

- **HTML Report** — Visual pass/fail with screenshots
- **Trace Viewer** — Step-by-step debugging
- **Video Recording** — Watch test execution

## 🌐 Cross-Browser Testing

Tests run on three browsers:
- Chromium (Chrome)
- Firefox
- WebKit (Safari)

## 👤 Author

Atmakur Hemanth Kumar

## 📝 License

This project is for learning and portfolio purposes.
