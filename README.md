## Local installation & run (React + TypeScript + Vite)

### 1) Prerequisites

- **Node.js** (recommended: **v20 LTS** or **v18 LTS**)
- A package manager: **npm** (comes with Node), or **pnpm**, or **yarn**
- **Git**

Check versions:

```bash
node -v
npm -v
git --version
```

---

### 2) Clone the repo

```bash
git clone https://github.com/sizuadi/simple-tag-input.git
cd simple-tag-input
```

---

### 3) Install dependencies

Using **npm**:

```bash
npm install
```

(Alternative)

- pnpm:
  ```bash
  pnpm install
  ```
- yarn:
  ```bash
  yarn
  ```

---

### 4) Start the dev server

Using **npm**:

```bash
npm run dev
```

Vite will print a local URL (commonly `http://localhost:5173`). Open it in your browser.

---

### 5) Build and preview (optional)

Build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Common issues

### If you get “command not found: vite”

That usually means dependencies didn’t install correctly. Re-run:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### If Node is too old

Install Node 18+ (or 20) and retry.

---

If you paste your `package.json` (scripts section) or tell me your OS (Windows/macOS/Linux), I can tailor the exact commands and troubleshooting steps.
