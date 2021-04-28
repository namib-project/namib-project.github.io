import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

const ProjekttagPage = () => {
    const { t, lang } = useTranslation("common") // default namespace (optional)

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.location.replace("https://www.informatik.uni-bremen.de/projekttag/2021/");
        }
    }, [])

    return (
        <div className="p-4 text-3xl font-bold leading-snug">
            { t`projekttag.redirecting` }<br/>
            { t`projekttag.no-js-click-here` }{" "}<a className="text-blue-namib border-b-2 border-transparent hover:border-blue-namib" href="https://www.informatik.uni-bremen.de/projekttag/2021/">https://www.informatik.uni-bremen.de/projekttag/2021/</a>
        </div>
    );
};
export default ProjekttagPage;
