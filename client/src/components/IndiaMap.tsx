import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { indiaLocations, additionalJourneyItems } from "@/data/portfolioData";
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
  const [showInteractiveMap, setShowInteractiveMap] = useState(true);

  const getTimelineColor = (index: number) => {
    const colors = ["primary", "secondary", "amber-500", "green-500"];
    return colors[index % colors.length];
  };

  return (
    <div className="space-y-8">
      <div className="sticky top-24">
        <h3 className="text-2xl font-bold mb-6 text-center">
          <span className="floating-text">Places I've Explored in India</span>
          <p className="text-sm text-muted-foreground mt-2">(last updated 2025)</p>
        </h3>
        <Card className="shadow-lg">
        <CardContent className="p-6">
          {!showInteractiveMap ? (
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 rounded-xl overflow-hidden border border-border">
              <svg viewBox="0 0 400 500" className="w-full h-full">
                {/* India outline (simplified) */}
                <defs>
                  <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M200 50 L250 80 L280 120 L290 160 L270 200 L290 240 L280 280 L260 320 L240 360 L200 400 L160 380 L140 340 L120 300 L110 260 L130 220 L120 180 L140 140 L170 100 L200 50 Z"
                  fill="url(#indiaGradient)"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  className="drop-shadow-sm"
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

              {/* Clean switch button */}
              <Button 
                onClick={() => setShowInteractiveMap(true)}
                variant="outline"
                className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
                data-testid="show-google-maps"
              >
                🗺️ Interactive Map
              </Button>
            </div>
          ) : (
            <div className="relative w-full h-96 rounded-xl overflow-hidden">
              {/* Google My Maps Embed */}
              <iframe 
                src="https://www.google.com/maps/d/u/0/embed?mid=1UOChCZSNs0oQfXhiSBE32Xd1wFGwjIg&ehbc=2E312F"
                width="100%" 
                height="100%"
                style={{border: 0, borderRadius: "12px", marginTop: "-60px", height: "calc(100% + 60px)"}}
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


        </CardContent>
      </Card>
    </div>

    {/* Additional Journey Items */}
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-primary">
        Other Journey Milestones
      </h3>
      <div className="space-y-4">
        {additionalJourneyItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h4 className={`text-xl font-bold text-${getTimelineColor(index)} mb-2`}>
                  {item.semester} {item.year}
                  {item.special && (
                    <span className="block text-lg font-medium text-muted-foreground">
                      ({item.special})
                    </span>
                  )}
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  {item.courses.map((course, courseIndex) => (
                    <motion.li
                      key={courseIndex}
                      className="flex items-start space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <i className={`${course.icon} mt-1 text-${getTimelineColor(index)}`} />
                      <span>
                        {course.code && <strong>{course.code}:</strong>} {course.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  );
}
