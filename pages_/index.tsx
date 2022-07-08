import Layout from "../components/Layout";
import Button, { ButtonSize } from "../components/Button";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";

const IndexPage = () => {
    const { t } = useTranslation();

    return (
        <Layout childrenInScreenVH={ (
            <section className="mt-32 mb-[20vh] flex flex-col justify-end flex-grow-1 relative px-[5vw]">
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
            </section>
        ) }>
            <section className="mt-64 mb-64 md:mb-96 black px-[5vw] py-[3vw]">
                <div className="yt-video">
                    <iframe src="https://www.youtube.com/embed/5ugssHdCj3I"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </section>
            <section className="mt-64 mb-64 md:mb-96 px-[5vw]">
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
            <section className="mb-64 md:mb-96 px-[5vw]">
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-7xl">{ t`common:section-three.title` }</h1>
                <h2 className="font-medium text-xl md:text-3xl leading-snug md:leading-snug max-w-5xl">
                    <Trans
                        i18nKey="common:section-three.description"
                        components={[<span className="italic"/>, <span className="italic"/>]}
                    />
                </h2>
            </section>
            <section className="mb-64 md:mb-96 px-[5vw]">
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-7xl">{ t`common:section-four.title` }</h1>
                <h2 className="font-medium text-xl md:text-3xl leading-snug md:leading-snug max-w-5xl">
                    <Trans
                        i18nKey="common:section-four.description"
                        components={[<span className="italic"/>, <span className="italic"/>]}
                    />
                </h2>
            </section>
            <section className="mb-64 md:mb-96 px-[5vw]">
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-7xl">{ t`common:components.title` }</h1>

                <h2 className="font-medium text-xl md:text-5xl leading-snug md:leading-snug max-w-5xl">{ t`common:components.hotels.title` }</h2>
                <div className="mt-4">
                    <Trans
                        i18nKey="common:components.hotels.description"
                        components={[<a className="text-blue-namib" href="https://www.ietf.org/archive/id/draft-ietf-ace-oauth-authz-46.html"/>,
                            <a className="text-blue-namib" href="https://datatracker.ietf.org/doc/html/rfc9176"/>,
                            <a className="text-blue-namib" href="https://www.w3.org/WoT/"/>]}
                    />
                </div>
                <div className="mt-4">
                    <Trans
                        i18nKey="common:components.hotels.description2"
                        components={[<a className="text-blue-namib" href="https://datatracker.ietf.org/doc/html/rfc9140"/>,
                            <a className="text-blue-namib" href="https://www.ietf.org/id/draft-rieckers-emu-eap-ute-00.html"/>]}
                    />
                </div>
                <div className="grid grid-cols-3 grid-flow-row gap-4 mt-8">
                    <div className="bg-gray-100 p-8">
                        <h3 className="font-medium text-xl md:text-2xl">{ t`common:components.hotels.authorization.title` }</h3>

                        <p className="font-bold mt-4">dcaf-rs</p>
                        { t`common:components.hotels.authorization.dcaf-rs` }

                        <p className="font-bold mt-4">Canephora</p>
                        { t`common:components.hotels.authorization.canephora` }

                        <p className="font-bold mt-4">tinydtls-rs</p>
                        { t`common:components.hotels.authorization.tinydtls-rs` }

                        <p className="font-bold mt-4">libcoap-rs</p>
                        { t`common:components.hotels.authorization.libcoap-rs` }
                    </div>
                    <div className="bg-gray-100 p-8">
                        <h3 className="font-medium text-xl md:text-2xl">{ t`common:components.hotels.client.title` }</h3>
                        { t`common:components.hotels.client.description` }

                        <p className="font-bold mt-4">dart_dcaf</p>
                        { t`common:components.hotels.client.dart_dcaf` }

                        <p className="font-bold mt-4">dart_tinydtls</p>
                        { t`common:components.hotels.client.dart_tinydtls` }

                        <p className="font-bold mt-4">dart_wot</p>
                        { t`common:components.hotels.client.dart_wot` }
                    </div>
                </div>

                <h2 className="mt-16 font-medium text-xl md:text-5xl leading-snug md:leading-snug max-w-5xl">{ t`common:components.reverse.title` }</h2>
                <div className="mt-4">{ t`common:components.reverse.description` }</div>
                <div className="grid grid-cols-3 grid-flow-row gap-4 mt-8">
                    <div className="bg-gray-100 p-8">
                        <h3 className="font-medium text-xl md:text-2xl">{ t`common:components.reverse.mudsights.title` }</h3>
                        { t`common:components.reverse.mudsights.description` }

                        <p className="font-bold mt-4">Toolbox</p>
                        { t`common:components.reverse.mudsights.toolbox` }
                    </div>
                    <div className="bg-gray-100 p-8">
                        <h3 className="font-medium text-xl md:text-2xl">{ t`common:components.reverse.shai.title` }</h3>
                        { t`common:components.reverse.shai.description` }

                        <p className="font-bold mt-4">shai-netimg</p>
                        { t`common:components.reverse.shai.netimg` }
                    </div>
                </div>

                <h2 className="mt-16 font-medium text-xl md:text-5xl leading-snug md:leading-snug max-w-5xl">{ t`common:components.subnet.title` }</h2>
                <div className="mt-4">{ t`common:components.subnet.description` }</div>
                <div className="grid grid-cols-3 grid-flow-row gap-4 mt-8">
                    <div className="bg-gray-100 p-8">
                        <h3 className="font-medium text-xl md:text-2xl">{ t`common:components.subnet.controller.title` }</h3>

                        <ul className="list-disc ml-8 mt-4">
                            <li className="mb-2">{ t`common:components.subnet.controller.description` }</li>
                            <li>{ t`common:components.subnet.controller.description2` }</li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 p-8">
                        <h3 className="font-medium text-xl md:text-2xl">{ t`common:components.subnet.enforcer.title` }</h3>

                        <ul className="list-disc ml-8 mt-4">
                            <li className="mb-2">{ t`common:components.subnet.enforcer.description` }</li>
                            <li>{ t`common:components.subnet.enforcer.description2` }</li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 p-8">
                        <h3 className="font-medium text-xl md:text-2xl">{ t`common:components.subnet.muddles.title` }</h3>
                        { t`common:components.subnet.muddles.description` }
                    </div>
                </div>
            </section>
            <section className="mb-64 md:mb-96 px-[5vw]">
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-7xl">{ t`common:cta.title` }</h1>
                <a href="https://www.informatik.uni-bremen.de/projekttag/2021/" className="mr-6">
                    <Button size={ ButtonSize.XL }>{ t`common:cta.button-label.bachelor` }</Button>
                </a>
                <a href="https://www.informatik.uni-bremen.de/projekttag/2022_ma/">
                    <Button size={ ButtonSize.XL }>{ t`common:cta.button-label.master` }</Button>
                </a>
            </section>
        </Layout>
    );
};
//  mt-8 md:mt-16 lg:mt-32
export default IndexPage;
