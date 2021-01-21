import React, { useState, useEffect } from "react"
import data from "./data"
import Article from "./Article"

function App() {
  const [theme, setTheme] = useState("dark-theme")

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme")
    } else {
      setTheme("light-theme")
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  return (
    <main>
      <nav>
        <div>
          <h1>overreacted</h1>
          <button onClick={toggleTheme}>toggle</button>
        </div>
      </nav>
      <section>
        {data.map((item) => {
          return <Article key={item.id} {...item}></Article>
        })}
      </section>
    </main>
  )
}

export default App
