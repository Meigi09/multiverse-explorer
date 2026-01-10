This is the perfect next step. Since you are tired of manually passing props, you are ready to let **APIs** and **State** handle the data for you.

This project is designed specifically to force you to use `useState`, `useEffect`, `fetch`, and `useRef` in a realistic scenario.

---

# 🧪 Project: The "Rick & Morty Multiverse Explorer"

**Theme:**
You are building a classified database for the "Citadel of Ricks." Your app allows users to browse characters from the multiverse, filter them by status (Alive/Dead), and track specific characters.

**Why this API?**
We will use the **Rick and Morty API**. It is free, requires no API key, and offers perfect data for practicing React hooks (pagination, filters, and images).

---

## 1️⃣ The Data Source (Your "Mock" Data)

Instead of a local file, you will `fetch` data from these real endpoints.

* **Base URL:** `https://rickandmortyapi.com/api`
* **Get All Characters:** `https://rickandmortyapi.com/api/character`
* **Filter by Name:** `https://rickandmortyapi.com/api/character/?name=rick`
* **Filter by Page:** `https://rickandmortyapi.com/api/character/?page=2`

**Typical Data Structure (What you receive):**

```json
{
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character/?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://..."
      }
    }
    // ... 19 more characters
  ]
}

```

---

## 2️⃣ Architecture Guidelines

Organize your app this way. No more complex prop drilling—state lives where it is needed.

```text
<App />
 ├── <Header />
 ├── <SearchControls />  <-- (Manages Search Input & Focus)
 ├── <FilterBar />       <-- (Manages Status: Alive/Dead/Unknown)
 ├── <CharacterGrid />   <-- (Receives Data, Renders Cards)
 │    ├── <LoadingSpinner />
 │    └── <CharacterCard />
 └── <Pagination />      <-- (Manages Page State: Next/Prev)

```

---

## 3️⃣ The Hook Challenges (Guidelines)

You must implement the following features using **specific hooks**.

### 🎣 Challenge A: The Fetch Cycle (`useEffect` + `fetch`)

**Goal:** Load data automatically when the app starts.

1. Create a function `fetchCharacters` that calls the API.
2. Use `useEffect` to call this function **once** when the component mounts.
3. **Strict Rule:** You must use a `try/catch` block. If the API fails (e.g., you search for "GlipGlop" and it doesn't exist), the API will return a 404. You must catch this error and update your state to show "No Results Found."

### 💾 Challenge B: Dynamic State (`useState`)

**Goal:** The UI must react to user actions.
You need separate state variables for:

1. `characters`: An array to store the `results` from the API.
2. `loading`: A boolean (`true` before fetch, `false` after). Use this to show a "Loading..." text or spinner.
3. `page`: A number (starts at 1).
4. `searchTerm`: A string for what the user is typing.

### 🔦 Challenge C: The Search & Focus (`useRef`)

**Goal:** Direct DOM manipulation without causing re-renders.

1. **Auto-Focus:** When the app loads, the cursor should strictly be inside the Search Input automatically. Use `useRef` to target the input element and `.focus()` it inside a `useEffect`.
2. **The "Previous Search" Tracker:** Display a line of text saying: *"You previously searched for: X"*.
* *Constraint:* Updating this text should **not** trigger a re-render of the main component. Use `useRef` to store the previous value and update it only when a new search is submitted.



### 🔄 Challenge D: The Pagination Dependency (`useEffect`)

**Goal:** Refetch data when specific state changes.

1. Add `Next` and `Prev` buttons.
2. When the user clicks `Next`, update the `page` state (e.g., `setPage(page + 1)`).
3. **The Trick:** Modify your `useEffect` dependency array `[]`. It should now listen to `[page]`. This means whenever `page` changes, the `fetch` function runs again automatically with the new page number.

---

## 4️⃣ Component Logic Breakdown

### `<SearchControls />`

* **Input:** Controlled input (tied to `searchTerm` state).
* **Ref:** Attached to the input for the auto-focus feature.

### `<CharacterGrid />`

* **Logic:**
* If `loading` is true → Render `<Spinner />`.
* If `error` is true → Render "No aliens found 👽".
* Otherwise → Map through `characters` and render `<CharacterCard />`.



### `<CharacterCard />`

* **Props:** Only needs `name`, `image`, `status`, `species`.
* **Styling Logic:** If `status === "Dead"`, make the card background light red. If "Alive", make it light green.

---

## 5️⃣ Recommended Steps to Build

1. **Skeleton:** Build the static UI (Header, empty Grid, Buttons) first.
2. **Wiring:** Create your `useState` variables in `App.jsx`.
3. **Fetch 1.0:** Write the `useEffect` to fetch the default page 1 data and `console.log` it.
4. **Render:** Map the data to your Grid.
5. **Search:** Connect the search bar state and modify the fetch URL to include `?name=${searchTerm}`.
6. **Refine:** Add the `useRef` focus logic and the loading states.

**One final question for you to answer while building:**
*When you type in the search bar, does the component re-render on *every keystroke*? If so, how might that affect your API usage? (Hint: You don't need to fix it yet, just observe it).*