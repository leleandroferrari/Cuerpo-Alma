import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 container py-32 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                        Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für uns. Eine Nutzung der Internetseiten ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich.
                    </p>
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Verantwortlicher</h2>
                        <p>
                            Verantwortlicher im Sinne der Datenschutzgesetze ist:<br /><br />
                            Cuerpo & Alma<br />
                            Gewerbestrasse 4<br />
                            9524 Zuzwil<br />
                            Schweiz<br />
                            E-Mail: kontakt@cuerpo-alma.ch
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Erfassung von allgemeinen Daten und Informationen</h2>
                        <p>
                            Die Internetseite erfasst mit jedem Aufruf durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers temporär gespeichert.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. Kontaktmöglichkeit</h2>
                        <p>
                            Sofern Sie per E-Mail oder über unsere bereitgestellten Kontaktmöglichkeiten den Kontakt mit uns aufnehmen, werden die von Ihnen übermittelten personenbezogenen Daten automatisch und ausschließlich zur Bearbeitung Ihres Anliegens gespeichert.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Datenschutz;
