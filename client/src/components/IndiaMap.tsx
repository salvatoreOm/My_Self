import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  const [showInteractiveMap, setShowInteractiveMap] = useState(false);

  return (
    <div className="sticky top-24">
      <h3 className="text-2xl font-bold mb-6 text-center">
        <span className="floating-text">Places I've Explored in India</span>
        <p className="text-sm text-muted-foreground mt-2">(last updated jan 2023)</p>
      </h3>
      <Card className="shadow-lg">
        <CardContent className="p-6">
          {!showInteractiveMap ? (
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
                    onHover={() => {}}
                    onClick={() => {}}
                  />
                ))}
              </svg>

              {/* Overlay to show Google Maps */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
                <Button 
                  onClick={() => setShowInteractiveMap(true)}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold"
                  data-testid="show-google-maps"
                >
                  View Interactive Google Map
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-96 rounded-xl overflow-hidden">
              {/* Google My Maps Embed - Replace YOUR_MAP_ID with actual Google My Maps ID */}
              <iframe 
                src="https://www.google.com/maps/d/embed?mid=1mZ4rK5rK5rK5rK5rK5rK5rK5rK5rK&ehbc=2E312F"
                width="100%" 
                height="100%"
                style={{border: 0, borderRadius: "12px"}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Places I've been in India"
                data-testid="google-maps-iframe"
              />
              <Button 
                onClick={() => setShowInteractiveMap(false)}
                variant="outline"
                className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm"
                data-testid="hide-google-maps"
              >
                Show Simplified View
              </Button>
            </div>
          )}

          {/* Location legends */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {indiaLocations.map((location) => (
              <div 
                key={location.id} 
                className="flex items-center space-x-2 text-sm p-2 rounded bg-muted/30"
                data-testid={`location-legend-${location.id}`}
              >
                <div className={`w-3 h-3 bg-${location.color}-500 rounded-full`} />
                <span>{location.name} - {location.description}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-muted/50 rounded-lg text-sm text-muted-foreground">
            <p className="font-medium mb-1">🗺️ Interactive Map Features:</p>
            <p>• Click "View Interactive Google Map" to see real locations</p>
            <p>• Zoom and explore detailed street views</p>
            <p>• Markers show exact places I've visited</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
