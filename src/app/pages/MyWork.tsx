import TimelineBlock from "./TimelineBlock"
import projects from "./projects"


const MyWork = () => {

    

  return (
    <div className='text-xl space-y-4'>
      <p><span className='text-green-500'>{">"}</span> <span className="text-cyan-500">cat</span> <strong>My_work.txt</strong></p>
      <p className='text-green-400'># My work</p>
      <p className="text-neutral-300">- This is what I've built so far, lightweight or heavyweight, each project marks a step in my coding career, and reveals the technologies I'm familiar with</p>
      <div>
        {
            projects.map((project,index)=> (
                <TimelineBlock key={index} {...project}/>
            ))
        }
      </div>
    </div>
  )
}

export default MyWork
