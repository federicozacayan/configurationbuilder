import TopBar from "./layout/topbar/TopBar"
import Router from "./pages/Router"

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <TopBar />
      </nav>
      <nav className="navbar navbar-dark">
        <Router />
      </nav>
    </>
  )
}

export default App
