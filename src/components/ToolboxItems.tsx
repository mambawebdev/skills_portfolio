import { TechIcon } from "@/components/TechIcon";
import JavaScriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import GitIcon from '@/assets/icons/github.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import { twMerge } from "tailwind-merge";


const toolBoxItems = [
    {
      title: "JavaScript",
      iconType: JavaScriptIcon,
    },
    {
      title: "HTML5",
      iconType: HTMLIcon,
    },
    {
      title: "CSS3",
      iconType: CssIcon,
    },
    {
      title: "React",
      iconType: ReactIcon,
    },
    {
      title: "Chrome",
      iconType: GitIcon,
    },
    {
      title: "Github",
      iconType: ChromeIcon,
    },
  ]

export const ToolboxItems = ({
    toolItems,
    className,
    itemsWrapperClassName
}: {
    toolItems: {
        title: string;
        iconType: React.ElementType;
    }[];
    className?: string;
    itemsWrapperClassName?: string;
}) => {
    return (
        <div className={twMerge("flex[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
                {
                toolItems.map((item) => (
                    <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                    <TechIcon component={item.iconType} />
                    <span className="font-semibold">{item.title}</span>
                    </div>
                ))
                }
            </div>
          </div>
    )
}