import Layout from "../components/Layout";
import Button, { ButtonSize } from "../components/Button";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";

const IndexPage = () => {
    const { t } = useTranslation();

    return (
        <Layout childrenInScreenVH={ (
            <section className="mt-32 lg:mt-0 lg:h-full flex flex-col justify-center">
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
            <section className="mt-16 mb-64 md:mb-96">
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
                <a href="https://www.informatik.uni-bremen.de/projekttag/2021/">
                    <Button size={ ButtonSize.XL }>{ t`common:cta.button-label` }</Button>
                </a>
            </section>
        </Layout>
    );
};
//  mt-8 md:mt-16 lg:mt-32
export default IndexPage;
