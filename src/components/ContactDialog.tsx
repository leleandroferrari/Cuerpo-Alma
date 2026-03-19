import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Phone, Mail } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-2xl">
            <Phone className="h-6 w-6 text-primary" />
            Kontaktieren Sie mich
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base pt-4">
            Kontaktieren Sie mich, um Ihren Termin zu vereinbaren oder Fragen zu stellen:
            <div className="flex flex-col gap-3 mt-4">
              <div className="p-4 bg-section-alt rounded-lg border border-border flex items-center justify-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a
                  href="tel:0794830806"
                  className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  079 483 08 06
                </a>
              </div>
              <div className="p-4 bg-section-alt rounded-lg border border-border flex items-center justify-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a
                  href="mailto:kontakt@cuerpo-alma.ch"
                  className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  kontakt@cuerpo-alma.ch
                </a>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="rounded-full">Schließen</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ContactDialog;
