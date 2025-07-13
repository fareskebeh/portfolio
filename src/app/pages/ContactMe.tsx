import { HiPhone, HiMail } from "react-icons/hi";

const ContactMe = () => {
  return (
    <div className="text-xl flex flex-col gap-4">
      <p>
        <span className="text-green-500">{">"}</span>{" "}
        <span className="text-cyan-500">cat</span>{" "}
        <strong>Contact_me.txt</strong>
      </p>
      <p className="text-green-400">
        # Contact me
      </p>
      <p className="text-neutral-300">
        - Got a serious idea, a challenge, or just want to build something that matters? Reach out. 👇
      </p>
    
      <div className="space-y-4 my-8">
        <p className="flex items-center gap-4"><HiPhone size={30}/> +963 930 577 737</p>
        <p className="flex items-center gap-4"><HiMail  size={30}/> fares_kebbeh@outlook.com</p>
      </div>

      <p className="text-neutral-300">{"- I typically reply within an hour or two :)"}</p>
    </div>
  );
};

export default ContactMe;
