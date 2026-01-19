# lab2-excercise



name: Standard CI

# Triggers
on: push

jobs:
  lint:
    name: Lint
    runs-on: ubuntu-latest
    steps:
      - name: checkout latest code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run lint
        run: npm run lint

  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: checkout latest code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run build
        run: npm run build

  test:
    name: Test
    runs-on: ubuntu-latest
    steps:
      - name: checkout latest code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm run test

  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    needs: [lint, build, test]
    steps:
      - name: checkout latest code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run deploy
        run: npm run deploy
            
                