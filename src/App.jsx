import { Header } from "./components"
import { Outlet } from "react-router-dom"


function App() {
  

  return (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-blue-950">
        <div className="w-full block">
          <Header/>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default App
