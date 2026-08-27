"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import type { Map as LeafletMap } from "leaflet";

export default function MapComponent() {
  const [isMounted, setIsMounted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window === "undefined") return;
    
    setIsMounted(true);
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (mapRef.current) {
        import("leaflet").then((leafletModule) => {
          const L = leafletModule.default || leafletModule;
          // Fix Leaflet default icon
          if (typeof window !== "undefined") {
            delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
            L.Icon.Default.mergeOptions({
              iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
              iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
              shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
            });
          }

          // Initialize map only if container exists
          if (mapRef.current && !mapInstanceRef.current) {
            try {
              mapInstanceRef.current = L.map(mapRef.current, {
                center: [40.7286, 17.5772],
                zoom: 17,
                scrollWheelZoom: false,
              });

              L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
              }).addTo(mapInstanceRef.current);

              L.marker([40.7286, 17.5772])
                .addTo(mapInstanceRef.current)
                .bindPopup(`
                  <div style="text-align: center;">
                    <p style="font-weight: 600; color: #2A2829; margin-bottom: 4px;">Impresa Edile</p>
                    <p style="font-size: 14px; color: #666; margin: 2px 0;">Piazza della Libertà, 67</p>
                    <p style="font-size: 14px; color: #666; margin: 2px 0;">72017 Ostuni BR</p>
                  </div>
                `);

              setIsReady(true);
            } catch (error) {
              console.error("Error initializing map:", error);
            }
          }
        });
      }
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-secondary/20">
        <MapPin className="size-16 text-accent-red animate-pulse" />
      </div>
    );
  }

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full" 
      style={{ minHeight: "400px" }}
    >
      {!isReady && (
        <div className="w-full h-full flex items-center justify-center bg-secondary/20">
          <MapPin className="size-16 text-accent-red animate-pulse" />
        </div>
      )}
    </div>
  );
}