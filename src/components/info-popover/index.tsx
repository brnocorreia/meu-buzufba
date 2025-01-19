import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Info } from "lucide-react";

interface InfoPopoverProps {
  side?: "left" | "right" | "top" | "bottom";
}

export function InfoPopover({ side = "right" }: InfoPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="iconSmall">
          <Info size={12} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-2 w-50" side={side}>
        <div className="grid gap-3">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Status das saídas do Buzufba
            </p>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs">Próximos horários</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <span className="text-xs">Saída próxima ({"<"} 20 minutos)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-xs">Horários anteriores</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
