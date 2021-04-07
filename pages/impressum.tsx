import Layout from "../components/Layout";
import Button, { ButtonSize } from "../components/Button";
import { useEffect, useState } from "react";

const IndexPage = () => {

    const [mailLink, setMailLink] = useState<any>(<span className="italic text-red-400">enable JavaScript to view email address</span>);

    useEffect(() => {
        setMailLink(<a className="text-blue-namib" href="mailto:namib@informatik.uni-bremen.de">namib@informatik.uni-bremen.de</a>)
    }, []);

    return (
        <Layout childrenInScreenVH={ (
            <section>
                <h1 className="mb-8 md:mb-16 max-w-4xl xl:max-w-7xl">Impressum</h1>
                <p className="font-medium text-xl md:text-3xl leading-snug md:leading-snug mb-6">
                    Kontaktanfragen an { mailLink }
                </p>
                <p className="font-medium text-xl md:text-3xl leading-snug md:leading-snug">
                    Universität Bremen <br/>
                    Fachbereich 03 Informatik <br/>
                    AG Rechnernetze <br/>
                    Postfach 330 440 <br/>
                    28334 Bremen
                </p>
            </section>
        ) }>
        </Layout>
    );
};
//  mt-8 md:mt-16 lg:mt-32
export default IndexPage;
