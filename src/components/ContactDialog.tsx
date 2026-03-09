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
            Contact Us
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base pt-4">
            Give us a call to schedule your appointment or ask any questions:
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
          <AlertDialogAction className="rounded-full">Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ContactDialog;
