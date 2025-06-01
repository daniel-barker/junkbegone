"use client";

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoItem {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: PhotoItem[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const closeGallery = useCallback(() => setSelectedIndex(null), []);

  const navigate = useCallback((newDirection: number) => {
    if (selectedIndex === null) return;

    const newIndex = selectedIndex + newDirection;
    if (newIndex >= 0 && newIndex < photos.length) {
      setDirection(newDirection);
      setSelectedIndex(newIndex);
    }
  }, [selectedIndex, photos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case 'ArrowLeft':
          navigate(-1);
          break;
        case 'ArrowRight':
          navigate(1);
          break;
        case 'Escape':
          closeGallery();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, navigate, closeGallery]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="relative aspect-square bg-[#333] rounded-lg overflow-hidden border-2 border-[#e94e3f] shadow-inner transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#e94e3f] focus:ring-offset-2 focus:ring-offset-[#181818]"
            aria-label={`View ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              style={{
                objectFit: "cover",
                filter: "grayscale(0.2) contrast(1.1)",
              }}
              className="opacity-90"
              sizes="(max-width: 768px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="/photos/placeholder.jpg"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeGallery}
          >
            <div
              className="relative w-full max-w-5xl max-h-[90vh] aspect-[4/3]"
              onClick={e => e.stopPropagation()}
            >
              <motion.div
                key={selectedIndex}
                initial={{ x: direction * 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -direction * 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                <Image
                  src={photos[selectedIndex].src}
                  alt={photos[selectedIndex].alt}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
                {photos[selectedIndex].caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/75 text-white p-4 text-center">
                    {photos[selectedIndex].caption}
                  </div>
                )}
              </motion.div>

              {/* Navigation buttons */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={() => navigate(-1)}
                  disabled={selectedIndex === 0}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#e94e3f]"
                  aria-label="Previous photo"
                >
                  ←
                </button>
                <button
                  onClick={() => navigate(1)}
                  disabled={selectedIndex === photos.length - 1}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#e94e3f]"
                  aria-label="Next photo"
                >
                  →
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-[#e94e3f]"
                aria-label="Close gallery"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
