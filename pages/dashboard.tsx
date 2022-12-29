import Head from 'next/head';
function Dashboard() {
    return (
        <div>
            <Head>
                <title>gta home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="description" content="its my mobit clone" />
                <link rel="icon" href="/gta-home-logo.jpg" />
            </Head>
            <div style={{ minHeight: "100vh", fontSize: "4rem", textAlign: "center", margin: "7rem auto" }}>
                Dashboard
            </div>
        </div>
    )
}

export default Dashboard;