import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { indiaLocations } from "@/data/portfolioData";
import type { Location } from "@shared/schema";

interface MapPinProps {
  location: Location;
  onHover: (location: Location | null) => void;
  onClick: (location: Location) => void;
}

function MapPin({ location, onHover, onClick }: MapPinProps) {
  return (
    <motion.circle
      cx={location.coordinates.x}
      cy={location.coordinates.y}
      r="8"
      className={`map-pin fill-${location.color}-500 cursor-pointer`}
      whileHover={{ scale: 1.3, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={() => onHover(location)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(location)}
      data-testid={`map-pin-${location.id}`}
    />
  );
}

export function IndiaMap() {
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <div className="sticky top-24">
      <h3 className="text-2xl font-bold mb-6 text-center">
        <span className="floating-text">Places I've Explored in India</span>
      </h3>
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl overflow-hidden">
            <svg viewBox="0 0 400 500" className="w-full h-full">
              {/* India outline (simplified) */}
              <path
                d="M200 50 L250 80 L280 120 L290 160 L270 200 L290 240 L280 280 L260 320 L240 360 L200 400 L160 380 L140 340 L120 300 L110 260 L130 220 L120 180 L140 140 L170 100 L200 50 Z"
                fill="currentColor"
                className="text-muted opacity-50"
              />

              {/* Interactive pins */}
              {indiaLocations.map((location) => (
                <MapPin
                  key={location.id}
                  location={location}
                  onHover={setHoveredLocation}
                  onClick={setSelectedLocation}
                />
              ))}
            </svg>

            {/* Location info overlay */}
            <div className="absolute top-4 left-4 bg-background/90 rounded-lg p-3 backdrop-blur-sm">
              <h4 className="font-semibold text-sm">Recent Travels</h4>
              <p className="text-xs text-muted-foreground">
                {hoveredLocation ? hoveredLocation.name : "Click on pins to explore!"}
              </p>
            </div>

            {/* Hover tooltip */}
            {hoveredLocation && (
              <motion.div
                className="absolute bg-background/95 backdrop-blur-sm rounded-lg p-2 shadow-lg pointer-events-none"
                style={{
                  left: hoveredLocation.coordinates.x + 10,
                  top: hoveredLocation.coordinates.y - 40,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <p className="font-semibold text-sm">{hoveredLocation.name}</p>
                <p className="text-xs text-muted-foreground">{hoveredLocation.description}</p>
              </motion.div>
            )}
          </div>

          {/* Location legends */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {indiaLocations.map((location) => (
              <div 
                key={location.id} 
                className="flex items-center space-x-2 text-sm cursor-pointer hover:bg-muted/50 p-2 rounded"
                onClick={() => setSelectedLocation(location)}
                data-testid={`location-legend-${location.id}`}
              >
                <div className={`w-3 h-3 bg-${location.color}-500 rounded-full`} />
                <span>{location.name} - {location.description}</span>
              </div>
            ))}
          </div>

          {/* Selected location details */}
          {selectedLocation && (
            <motion.div
              className="mt-4 p-4 bg-primary/10 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              data-testid="selected-location-details"
            >
              <h4 className="font-bold text-lg text-primary">{selectedLocation.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{selectedLocation.description}</p>
              <Badge variant="secondary" className="mt-2">
                Recent Visit
              </Badge>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
