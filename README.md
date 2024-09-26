# Node.js Fastify & PostgreSQL Starter

This project provides a foundational structure for building a Node.js application with [Fastify](https://www.fastify.io/) and PostgreSQL. It allows for the option to run the database either through PostgreSQL or an in-memory database for easier development and testing.

## Features

- Node.js server with Fastify framework.
- PostgreSQL integration.
- Simple table creation script used .

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version >= 18)
- [PostgreSQL](https://www.postgresql.org/) (if using a PostgreSQL instance)

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/gsaleal/node-init.git
    cd node-init
    ```

2. Create a `.env` file in the root of your project and add the following environment variables:

    ```plaintext
    PGHOST=''
    PGDATABASE=''
    PGUSER=''
    PGPASSWORD=''
    ENDPOINT_ID=''
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Database Setup

To create the necessary database tables, run the following command:

```bash
node create-table.js
```


### Running the Application

You have two options for running the server:

1. Using PostgreSQL (default)
Ensure your .env is properly configured with PostgreSQL credentials and run:

```bash
npm run dev
```

2. Using In-Memory Database (for development)
If you prefer not to use PostgreSQL, you can switch to an in-memory database by modifying the server.js file:

Comment out the following line:

```javascript
import { DatabasePostgres } from './database-postgres';
```

Uncomment the in-memory database line:

```javascript
import { DatabaseMemory } from './database-memory';
```

Now, run the application:

```bash
npm run dev
```
### Contributing
Feel free to submit issues and pull requests if you find any bugs or want to contribute improvements.
