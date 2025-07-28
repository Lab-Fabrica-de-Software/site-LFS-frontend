import { twMerge } from "tailwind-merge";

interface TagProps{
    text:string;
    className?: string,
}

export default function Tag({text,className}:TagProps){
const style = twMerge("text-black/70 text-xl font-bold",className )

return(
    <div className="bg-primary px-12 py-2 rounded-md">
       <span className={style}>{text}</span> 
    </div>
);
}
