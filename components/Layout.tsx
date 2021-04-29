import Head from "next/head";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";
import { classes } from "../utils/misc";

interface ILayout {
    children: any,
    childrenInScreenVH?: any,
    title?: string
}

const Layout = ({ children, title, childrenInScreenVH }: ILayout) => {
    const { t, lang } = useTranslation();

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
                <div className={ childrenInScreenVH ? "mb-96 md:mb-0 md:h-screen flex flex-col justify-between" : "" }>
                    <nav className="py-12 flex flex-col md:flex-row justify-between items-center flex-shrink-0 flex-grow-0">
                        <Link href="/">
                            <a>
                                <img src="/namib-logo.svg" className="w-auto h-20 object-fit" alt="namib logo"/>
                            </a>
                        </Link>
                        <div className="text-2xl mt-8 md:mt-0 md:ml-6">
                            <Link href="/" lang={"en"} key={"en"}><span className={ classes("cursor-pointer hover:font-bold", lang === "en" && "font-bold") }>EN</span></Link>
                            <span className="mx-2">/</span>
                            <Link href="/" lang={"de"} key={"de"}><span className={ classes("cursor-pointer hover:font-bold", lang === "de" && "font-bold") }>DE</span></Link>
                            <span className="mx-2">/</span>
                            <Link href="/" lang={"ru"} key={"ru"}><span className={ classes("cursor-pointer hover:font-bold", lang === "ru" && "font-bold") }>RU</span></Link>
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
                        { t`common:projekttag.title` }
                    </a>
                    <Link href="/imprint">
                        <a className="text-white-soft border-b-4 border-transparent hover:border-white-soft transition duration-100">
                            { t`common:imprint.title` }
                        </a>
                    </Link>
                </div>
            </footer>
        </>
    )
}

export default Layout;
