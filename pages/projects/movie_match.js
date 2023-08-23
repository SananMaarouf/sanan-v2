import Layout from "../../components/layout";

import Head from "next/head";

import Container from "../../components/container";

// this is the page for the movie match project
export default function MovieMatch({ preview }) {
    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{`Movie Match`}</title>
                </Head>
                <Container>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-4xl font-bold text-white text-center">Movie Match</h1>
                            <p className="text-2xl font-bold text-white text-center">A movie recommendation app</p>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    )
}
