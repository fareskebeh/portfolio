import About from "@pages/About"
import MyWork from "@pages/MyWork"

const Container = () => {
  return (
    <div className="sm:flex-1 bg-black text-white sm:absolute p-4 sm:p-8 sm:right-0 sm:left-[50%] gap-4 *:h-screen">
        <div id="about">
          <About/>
        </div>
        <div id="work">
          <MyWork/>
        </div>
        <div id="contact"></div>
    </div>
  )
}

export default Container
