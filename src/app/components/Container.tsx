import About from "@pages/About"
import MyWork from "@pages/MyWork"
import ContactMe from "@pages/ContactMe"

const Container = () => {
  return (
    <div className="sm:flex-1 bg-black text-white sm:absolute p-4 flex flex-col gap-20 sm:p-8 sm:right-0 sm:left-[50%]">
        <div id="about">
          <About/>
        </div>
        <div id="work">
          <MyWork/>
        </div>
        <div id="contact">
          <ContactMe/>
        </div>
    </div>
  )
}

export default Container
