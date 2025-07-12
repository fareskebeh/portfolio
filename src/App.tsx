import Card from "@components/Card"
import Container from "@components/Container"
import Nav from "@components/Nav"

const App = () => {
  return (
    <div className="font-jetbrains **:selection:bg-white **:selection:text-black flex flex-col sm:flex-row h-screen">
      <Nav/>
      <div className="pt-12">
        <Card/>
        <Container/>
      </div>
    </div>
  )
}

export default App
