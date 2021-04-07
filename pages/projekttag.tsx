import { useEffect } from "react";

const ProjekttagPage = () => {

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.location.replace("https://www.informatik.uni-bremen.de/projekttag/2021/");
        }
    }, [])

    return (
        <div className="p-4 text-3xl font-bold leading-snug">
            Redirecting...<br/>
            Click here if you have JavaScript disabled: <a className="text-blue-namib border-b-2 border-transparent hover:border-blue-namib" href="https://www.informatik.uni-bremen.de/projekttag/2021/">https://www.informatik.uni-bremen.de/projekttag/2021/</a>
        </div>
    );
};
export default ProjekttagPage;
