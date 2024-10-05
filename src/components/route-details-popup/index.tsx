"use client";

import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";

interface RouteDetailsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RouteDetailsPopup({
  isOpen,
  onClose,
}: RouteDetailsPopupProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="w-screen h-screen md:w-[80vw] md:h-[80vh] md:max-w-[80vw] md:max-h-[80vh]">
        {/* Conteúdo do dialog aqui */}
        <h2 className="text-2xl font-bold">Título do Dialog</h2>
        <p>Conteúdo do dialog...</p>
        <Button onClick={onClose}>Fechar</Button>
      </DialogContent>
    </Dialog>
  );
}
