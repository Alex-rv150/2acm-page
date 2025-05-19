"use client";

import { useTranslation } from "react-i18next";
import { Calendar, Locate, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { events } from "@/data/events";

interface EventProps {
  name: string;
  desc: string;
  date: string;
  location: string;
  isPast?: boolean;
}

function EventItem({ name, desc, date, location, isPast = false }: EventProps) {
  return (
    <Link 
      href={`/events/${name.toLowerCase().replace(/\s+/g, '-')}`}
      className="block p-6 bg-white dark:bg-[#0A1128] rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-800"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-[#121D39] dark:text-white">{name}</h3>
            {isPast && (
              <span className="bg-[#057dcd] text-white px-3 py-1 rounded-full text-sm">
                Past Event
              </span>
            )}
          </div>
          <p className="text-gray-500 dark:text-gray-400">{name}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Locate className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
        <ArrowRight className="h-6 w-6 text-[#057dcd] flex-shrink-0" />
      </div>
    </Link>
  );
}

export default function EventsPage() {
  // const { t } = useTranslation("events");

  const pastEvents = events.filter(e => e.isPast);
  const upcomingEvents = events.filter(e => !e.isPast);

  return (
    <main className="min-h-screen bg-[#FBFCFF] dark:bg-[#020817]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#121D39] dark:text-white">
            Eventos
          </h1>
          <Button 
            className="bg-[#057dcd] hover:bg-[#a5e2ff] text-white font-semibold rounded-[8px] px-9 py-2 transition"
            asChild
          >
            <Link href="/">
              Volver al inicio
            </Link>
          </Button>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#121D39] dark:text-white mb-6">
            Próximos Eventos
          </h2>
          <div className="space-y-4">
            {upcomingEvents.map((event: any) => (
              <EventItem
                key={event.id}
                name={event.name}
                desc={event.desc}
                date={event.date}
                location={event.location}
                isPast={event.isPast}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#121D39] dark:text-white mb-6">
            Eventos Pasados
          </h2>
          <div className="space-y-4">
            {pastEvents.map((event: any) => (
              <EventItem
                key={event.id}
                name={event.name}
                desc={event.desc}
                date={event.date}
                location={event.location}
                isPast={event.isPast}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 