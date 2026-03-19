import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 container py-32 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Impressum</h1>
                <div className="space-y-6 text-muted-foreground">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
                        <p>
                            Cuerpo & Alma<br />
                            Gewerbestrasse 4<br />
                            9524 Zuzwil<br />
                            Schweiz
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Kontakt</h2>
                        <p>
                            Telefon: 079 483 08 06<br />
                            E-Mail: kontakt@cuerpo-alma.ch
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Vertreten durch:</h2>
                        <p>Jose Barassa</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Impressum;
