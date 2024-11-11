# Farm Produce Inventory System

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)


## Overview
The Farm Produce Inventory System is a comprehensive application designed to manage and track farm produce inventory.

## Features

- **Inventory Management**: Track and manage farm produce inventory.
- **Expenses Tracking**: Record and summarize farm expenses.
- **Sales Tracking**: Record and summarize sales data.
- **State Persistence**: Persist state to ensure data is not lost on page reloads.
- **Responsive Design**: User-friendly interface that works on both desktop and mobile devices.

## Technologies Used

- **Frontend**: React, Next.js, Tailwind CSS
- **State Management**: Redux, Redux Toolkit, Redux Persist
- **Backend**: Prisma, PostgreSQL 
- **Icons**: Lucide React

## Getting Started 

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- SQLite (or any other supported database)

### Installation

1. **Clone the repo**:
```sh 
git clone
cd farm-produce-inventory
```

2. **Install Dependencies**:
```sh
npm install
# or 
yarn install
```

3. **Set up the database**:
- Update the environment variable accordingly

4. **Run database migration**:
```sh
npx prisma migrate dev --name init
```

5. **Start the development server**:
```sh
npm run dev
# or 
yarn dev
```