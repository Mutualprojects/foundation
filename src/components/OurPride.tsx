"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ourPrideData, EventData } from "@/data/data";
import { Calendar, MapPin, Users, Building, X, ChevronRight } from "lucide-react";

export function OurPride() {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  // Prevent background scrolling when off-canvas is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedEvent]);

  return (
    <>
      <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">Our Pride</span>
            <h2 className="text-4xl font-black sm:text-5xl lg:text-6xl text-zinc-900 leading-tight mt-4">
              Moments of <span className="text-emerald-600">Impact</span>
            </h2>
            <p className="text-lg text-zinc-600 mt-6 font-medium">
              Take a look at some of our most memorable events, campaigns, and the incredible people who stood by our cause to make a difference.
            </p>
          </div>

          {/* Grid of Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {ourPrideData.map((event, index) => (
              <motion.div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group flex flex-col bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-100 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                {/* Image Gallery Showcase */}
                <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-zinc-200">
                  {event.images.length > 0 && (
                    <Image
                      src={event.images[0]}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  {/* Overlay gradient for text readability if we put text on it */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* View Gallery Badge overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="bg-white text-zinc-900 font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                       View Gallery <ChevronRight className="w-5 h-5" />
                     </span>
                  </div>
                  
                  {/* Date & Location Badges */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-bold text-zinc-800">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-bold text-zinc-800">{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex flex-col flex-1 p-6 sm:p-8">
                  {/* Event Name */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
                      {event.event}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-zinc-900 leading-snug line-clamp-3">
                      {event.title}
                    </h3>
                  </div>

                  <div className="mt-auto space-y-4 pt-4 border-t border-zinc-200/60">
                    {/* Celebrities Involved */}
                    {event.celebrities_involved && event.celebrities_involved.length > 0 && (
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-zinc-500 uppercase">Supported By</span>
                          <p className="text-sm font-semibold text-zinc-800 mt-0.5">
                            {event.celebrities_involved.join(", ")}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Associated Organizations */}
                    {event.associated_organizations && event.associated_organizations.length > 0 && (
                      <div className="flex items-start gap-3">
                        <Building className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-zinc-500 uppercase">In Association With</span>
                          <p className="text-sm font-semibold text-zinc-800 mt-0.5">
                            {event.associated_organizations.join(", ")}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Off-Canvas Overlay / Modal Drawer */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-50"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-2xl bg-white shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-zinc-100">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                    {selectedEvent.event}
                  </span>
                  <h2 className="text-2xl font-black text-zinc-900 leading-tight">
                    Event Gallery
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
                >
                  <X className="w-6 h-6 text-zinc-500" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
                {/* Event Details */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">{selectedEvent.title}</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-semibold text-zinc-700">{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-semibold text-zinc-700">{selectedEvent.location}</span>
                    </div>
                  </div>
                </div>

                {/* Images Gallery */}
                <div className="space-y-6">
                  {selectedEvent.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative w-full overflow-hidden rounded-2xl shadow-sm border border-zinc-100"
                    >
                      <Image
                        src={img}
                        alt={`Event Image ${idx + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
