import About from "@pages/About"


const Container = () => {
  return (
    <div className="sm:flex-1 bg-black text-white sm:absolute p-4 sm:p-8 sm:right-0 sm:left-[50%] gap-4 *:h-screen">
        <div id="about">
          <About/>
        </div>
        <div id="work">My Work</div>
        <div id="contact">Contact Me</div>
    </div>
  )
}

export default Container
