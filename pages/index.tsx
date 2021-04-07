import Layout from "../components/Layout";
import Button, { ButtonSize } from "../components/Button";

const IndexPage = () => {

    return (
        <Layout childrenInScreenVH={ (
            <section className="mt-32 lg:mt-0 lg:h-full flex flex-col justify-center">
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-7xl">Network Access Makes IoT Better</h1>
                <h2 className="font-medium text-xl md:text-3xl leading-snug md:leading-snug max-w-3xl">
                    Wir haben das Ziel, die Sicherheit und Interoperabilität von Geräten im <span className="italic">Internet of Things</span> (IoT) zu verbessern.
                </h2>
                <h2 className="mt-4 font-medium text-xl md:text-2xl leading-snug md:leading-snug max-w-3xl italic">
                    Ein Bachelor-Projekt an der Universität Bremen.
                </h2>
            </section>
        ) }>
            <section className="mt-16 mb-64 md:mb-96">
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-none">Software, welche IoT-Sicherheit zugänglicher macht</h1>
                <h2 className="font-medium text-xl md:text-3xl leading-snug md:leading-snug max-w-4xl">Hierfür haben wir uns insbesondere mit zwei Standards für die "Selbstbeschreibung" von IoT-Geräten beschäftigt.</h2>
                <ul className="ml-6 mt-6 space-y-4 list-disc list-outside font-medium text-xl md:text-2xl leading-snug md:leading-snug max-w-5xl">
                    <li>Über eine <span className="italic">Manufacturer Usage Description</span> (MUD) können Geräte angeben, welche Kommunikationsbefugnisse sie benötigen, was für die automatische Konfiguration von Firewalls und andere Sicherheitsmechanismen dienen kann.</li>
                    <li>Durch diese Maßnahmen kann unerwünschtes sowie schädliches Verhalten von IoT-Geräten unterbunden werden.</li>
                    <li>Für die Umsetzung von MUD haben wir passende Komponenten entwickelt, die einerseits die Konfiguration übernehmen, aber auch die manuelle Geräteverwaltung über ein Frontend erlauben.</li>
                    <li>Mittels unseres "Legacy-Services" können ältere Geräte ohne MUD-Unterstützung berücksichtigt werden.</li>
                </ul>
            </section>
            <section className="mb-64 md:mb-96">
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-7xl">Was ist mit der Interoperabilität?</h1>
                <h2 className="font-medium text-xl md:text-3xl leading-snug md:leading-snug max-w-5xl">
                    Für die Verbesserung der Interoperabilität haben wir uns vor allem mit den <span className="italic">Thing Descriptions</span> (TDs) des <span className="italic">Web of Things</span>-Standards auseinandergesetzt, die als standardisierte Schnittstellenbeschreibungen die Interaktion zwischen Geräten erleichtern und herstellerunabhängig gestalten sollen.
                </h2>
            </section>
            <section className="mb-64 md:mb-96">
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-7xl">Und was kann man damit machen?</h1>
                <h2 className="font-medium text-xl md:text-3xl leading-snug md:leading-snug max-w-5xl">
                    Beide Ansätze werden anhand eines Wetterstations-Demonstrators veranschaulicht, der automatisch passende Sensoren anhand ihrer <span>TD</span> findet und ausliest.
                    Durch passende MUDs werden den Geräten dabei nur die notwendigen Kommunikationsbefugnisse eingeräumt, die sich im Frontend visualisieren und ggf. anpassen lassen.
                </h2>
            </section>
            <section className="mb-64 md:mb-96">
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-7xl">Klingt Interessant?</h1>
                <a href="https://www.informatik.uni-bremen.de/projekttag/2021/">
                    <Button size={ ButtonSize.XL }>Zum digitalen Projekttag</Button>
                </a>
            </section>
        </Layout>
    );
};
//  mt-8 md:mt-16 lg:mt-32
export default IndexPage;
