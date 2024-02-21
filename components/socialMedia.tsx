import { socialMedias} from "@/data";
import MotionTransition from "./transition-component";
import Link from "next/link";

const SocialMedia = () => {
    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-4">
            <nav className="flex">
                <div className="flex items-center justify-center gap-2 xl:px-4 xl:py-1 rounded-full background-blur-sm mt-6">
                    {socialMedias.map((item) => (
                        <div key={item.id} className={`px-4 py-3 transition duration-150 rounded-full cursor-pointer hover:bg-secondary bg-opacity-[0.8]`}>
                            <Link target="_blank" className="flex gap-x-2 items-center" href={item.src}>{item.icons}</Link>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default SocialMedia;