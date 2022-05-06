import Layout from "../components/Layout";
import Button, { ButtonSize } from "../components/Button";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const IndexPage = () => {
    const { t } = useTranslation();
    const [showVideo, setShowVideo] = useState(false);

    return (
        <Layout childrenInScreenVH={ (
            <section className="mt-32 mb-[20vh] flex flex-col justify-end flex-grow-1 relative">
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-7xl">Network Access Makes IoT Better</h1>
                <h2 className="font-medium text-xl md:text-3xl leading-snug md:leading-snug max-w-3xl">
                    <Trans
                        i18nKey="common:hero.title"
                        components={[<span className="italic"/>]}
                    />
                </h2>
                <h2 className="mt-4 font-medium text-xl md:text-2xl leading-snug md:leading-snug max-w-3xl italic">
                    { t`common:hero.subtitle` }
                </h2>
                <div className="mt-12 flex justify-center">
                    <FontAwesomeIcon onClick={ () => setShowVideo(true) } icon={faPlayCircle} size="5x" className="text-center text-blue-namib animate-zoompulse cursor-pointer lg:hidden" />
                </div>
                <FontAwesomeIcon onClick={ () => setShowVideo(true) } icon={faPlayCircle} size="5x" className="absolute bottom-0 right-0 mr-16 text-blue-namib animate-zoompulse cursor-pointer hidden lg:block xl:hidden" />
                <FontAwesomeIcon onClick={ () => setShowVideo(true) } icon={faPlayCircle} size="7x" className="absolute bottom-0 right-0 mr-32 text-blue-namib animate-zoompulse cursor-pointer hidden xl:block" />
            </section>
        ) }>
            { showVideo &&
                <div className="fixed inset-0 z-40 overflow-hidden bg-black-18 bg-opacity-50 flex justify-center items-center cursor-pointer p-4 md:p-8 lg:p-24 xl:p-32" onClick={ () => setShowVideo(false) }>
                    <video src="https://mirror.uni-bremen.live/projekttag-21/namib.mp4" controls className="z-50 shadow-2xl" preload="metadata"/>
                </div>
            }
            <section className="mt-64 mb-64 md:mb-96">
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-none">{ t`common:section-two.title` }</h1>
                <h2 className="font-medium text-xl md:text-3xl leading-snug md:leading-snug max-w-4xl">{ t`common:section-two.subtitle` }</h2>
                <ul className="ml-6 mt-6 space-y-4 list-disc list-outside font-medium text-xl md:text-2xl leading-snug md:leading-snug max-w-5xl">
                    <li>
                        <Trans
                            i18nKey="common:section-two.list.0"
                            components={[<span className="italic"/>]}
                        />
                    </li>
                    <li>{ t`common:section-two.list.1` }</li>
                    <li>
                        <Trans
                            i18nKey="common:section-two.list.2"
                            components={[<span className="italic"/>]}
                        />
                    </li>
                    <li>
                        <Trans
                            i18nKey="common:section-two.list.3"
                            components={[<span className="italic"/>]}
                        />
                    </li>
                </ul>
            </section>
            <section className="mb-64 md:mb-96">
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-7xl">{ t`common:section-three.title` }</h1>
                <h2 className="font-medium text-xl md:text-3xl leading-snug md:leading-snug max-w-5xl">
                    <Trans
                        i18nKey="common:section-three.description"
                        components={[<span className="italic"/>, <span className="italic"/>]}
                    />
                </h2>
            </section>
            <section className="mb-64 md:mb-96">
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-7xl">{ t`common:section-four.title` }</h1>
                <h2 className="font-medium text-xl md:text-3xl leading-snug md:leading-snug max-w-5xl">
                    <Trans
                        i18nKey="common:section-four.description"
                        components={[<span className="italic"/>, <span className="italic"/>]}
                    />
                </h2>
            </section>
            <section className="mb-64 md:mb-96">
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-7xl">{ t`common:cta.title` }</h1>
                <a href="https://www.informatik.uni-bremen.de/projekttag/2021/" className="mr-6">
                    <Button size={ ButtonSize.XL }>{ t`common:cta.button-label.bachelor` }</Button>
                </a>
                <a href="#">
                    <Button size={ ButtonSize.XL }>{ t`common:cta.button-label.master` }</Button>
                </a>
            </section>
        </Layout>
    );
};
//  mt-8 md:mt-16 lg:mt-32
export default IndexPage;
