import { useState, useEffect } from "react";
import { Palette, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const ColorSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("default");

    useEffect(() => {
        if (theme === "gold-blue") {
            document.documentElement.classList.add("theme-gold-blue");
        } else {
            document.documentElement.classList.remove("theme-gold-blue");
        }
    }, [theme]);

    const toggleTheme = (newTheme: string) => {
        setTheme(newTheme);
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="bg-white border border-border/50 shadow-xl rounded-2xl p-4 mb-4 flex flex-col gap-3 min-w-[200px]"
                    >
                        <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-sm text-foreground">Farbvariante wählen</span>
                            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <button
                            onClick={() => toggleTheme("default")}
                            className={`flex items-center gap-3 p-2 rounded-lg transition-colors text-sm text-left ${theme === "default" ? "bg-primary/10 font-medium" : "hover:bg-muted"}`}
                        >
                            <div className="flex gap-1 h-5 w-5 rounded-full overflow-hidden border border-border">
                                <div className="w-1/2 h-full bg-[#f5f1e8]" />
                                <div className="w-1/2 h-full bg-[#366336]" />
                            </div>
                            Natur (Standard)
                        </button>

                        <button
                            onClick={() => toggleTheme("gold-blue")}
                            className={`flex items-center gap-3 p-2 rounded-lg transition-colors text-sm text-left ${theme === "gold-blue" ? "bg-primary/10 font-medium" : "hover:bg-muted"}`}
                        >
                            <div className="flex gap-1 h-5 w-5 rounded-full overflow-hidden border border-border">
                                <div className="w-1/2 h-full bg-[#0b354d]" />
                                <div className="w-1/2 h-full bg-[#d4af37]" />
                            </div>
                            Premium (Blau/Gold)
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="icon"
                variant="outline"
                className="h-12 w-12 rounded-full shadow-lg bg-white border-2 border-primary/20 hover:border-primary text-primary hover:text-primary transition-all duration-300"
            >
                <Palette className="h-5 w-5" />
            </Button>
        </div>
    );
};

export default ColorSwitcher;
