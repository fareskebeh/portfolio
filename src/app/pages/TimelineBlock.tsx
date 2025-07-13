import djangoIcon from "@icons/django.svg"
import jsIcon from "@icons/js.svg"
import tsIcon from "@icons/ts.svg"
import tailwindIcon from "@icons/tailwind.svg"
import supabaseIcon from "@icons/supabase.svg"
import reactIcon from "@icons/react.svg"
import pyIcon from "@icons/python.svg"

type Props = {
    name: string,
    description: string;
    technologies: string[],
    startDate: string,
    image: string,
    state: string,
    link: string
}

const TimelineBlock = (props: Props) => {
  return (
    <div>
      <p><span className='text-red-500'>=</span>-{props.startDate}</p>
      <div className='border-l border-white pl-4'>
        <div className='bg-neutral-900 rounded-xl my-2 space-y-4 p-4'>
            <img src="" alt="" />
            <p>Name: {props.name}</p>
            <p>Technologies: {
                props.technologies.map((tech,index)=> (
                    <span key={index}>{tech} </span>
                ))
                }</p>
            <p>{props.description}</p>
            <div className={` flex justify-between text-lg`}>
                <p className={`${props.state === "Stopped" ? "text-red-500" : props.state==="Completed" ? "text-green-500" : "text-amber-400"}`}>{props.state}</p>
                <a href={props.link}>View Repo</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TimelineBlock
