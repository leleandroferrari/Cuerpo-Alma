import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Phone } from "lucide-react";

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
            Kontaktieren Sie uns
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base pt-4">
            Rufen Sie uns an, um Ihren Termin zu vereinbaren oder Fragen zu stellen:
            <div className="mt-4 p-4 bg-section-alt rounded-lg border border-border">
              <a 
                href="tel:123-456-7890" 
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
              >
                123-456-7890
              </a>
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
