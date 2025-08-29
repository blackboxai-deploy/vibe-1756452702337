"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MapComponent from "./MapComponent";
import { TravelDestination } from "@/types/mappls";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: TravelDestination | null;
}

const MapModal = ({ isOpen, onClose, initialDestination }: MapModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0">
        <DialogHeader className="p-6 pb-2">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              {initialDestination ? `Explore ${initialDestination.name}` : 'Explore India'}
            </DialogTitle>
            <div className="flex items-center gap-2">
              {initialDestination && (
                <Badge variant="secondary">
                  ⭐ {initialDestination.rating}
                </Badge>
              )}
              <Button variant="outline" onClick={onClose}>
                Close Map
              </Button>
            </div>
          </div>
          {initialDestination && (
            <p className="text-muted-foreground mt-2">
              {initialDestination.description}
            </p>
          )}
        </DialogHeader>
        
        <div className="flex-1 p-6 pt-2">
          <div className="h-[calc(95vh-120px)] w-full">
            <MapComponent 
              initialDestination={initialDestination}
              height="100%"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapModal;