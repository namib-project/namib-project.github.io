import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { classes } from "../utils/misc";
import setLanguage from "next-translate/setLanguage"

interface ILayout {
    children: any,
    childrenInScreenVH?: any,
    title?: string
}

const Layout = ({ children, title, childrenInScreenVH }: ILayout) => {
    const { t, lang } = useTranslation("common") // default namespace (optional)

    return (
        <>
            <Head>
                <title>{ title ? `${ title } | NAMIB Project` : "NAMIB Project" }</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
            </Head>
            <div className="w-full px-[5vw]">
                <div className={ childrenInScreenVH ? "mb-96 md:mb-0 md:h-screen" : "" }>
                    <nav className="py-12 flex justify-between items-center">
                        <Link href="/">
                            <a>
                                <img src="/namib-logo.svg" className="w-auto h-20 object-fit" alt="namib logo"/>
                            </a>
                        </Link>
                        <div className="text-2xl ml-6">
                            <span onClick={async () => await setLanguage("en")} className={ classes("cursor-pointer hover:font-bold", lang === "en" && "font-bold") }>EN</span>
                            <span className="mx-2">/</span>
                            <span onClick={async () => await setLanguage("de")} className={ classes("cursor-pointer hover:font-bold", lang === "de" && "font-bold") }>DE</span>
                        </div>
                    </nav>
                    { childrenInScreenVH }
                </div>
                {   children &&
                    <div className="py-6">
                        { children }
                    </div>
                }
            </div>
            <footer className="w-full px-[5vw] py-8 bg-black-18 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex justify-center md:justify-start">
                    <Link href="/">
                        <a>
                            <img src="/namib-icon.svg" className="w-auto h-20 object-fit" alt="namib logo"/>
                        </a>
                    </Link>
                </div>
                <div className="flex items-center space-x-16 text-white-soft text-3xl font-medium">
                    <a className="text-white-soft border-b-4 border-transparent hover:border-white-soft transition duration-100" href="https://www.informatik.uni-bremen.de/projekttag/2021/">
                        { t`projekttag.title` }
                    </a>
                    <Link href="/imprint">
                        <a className="text-white-soft border-b-4 border-transparent hover:border-white-soft transition duration-100">
                            { t`imprint.title` }
                        </a>
                    </Link>
                </div>
            </footer>
        </>
    )
}

export default Layout;
