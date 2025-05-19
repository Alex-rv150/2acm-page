export interface EventData {
  id: string;
  name: string;
  desc: string;
  nameKey: string;
  descKey: string;
  date: string;
  location: string;
  isPast?: boolean;
}

export const events: EventData[] = [
  {
    id: "workshop",
    name: "Taller de Desarrollo Web",
    desc: "Aprende las últimas tecnologías web y mejora tus habilidades de desarrollo.",
    nameKey: "workshop_title",
    descKey: "workshop_desc",
    date: "Septiembre 20-22, 2023",
    location: "Bloque K, piso 6",
    isPast: true,
  },
  {
    id: "talk",
    name: "Charlas Técnicas",
    desc: "Sesiones informativas sobre las últimas tendencias en tecnología y desarrollo.",
    nameKey: "talk_title",
    descKey: "talk_desc",
    date: "Septiembre 20-22, 2023",
    location: "Auditorio",
    isPast: true,
  },
  {
    id: "marathon",
    name: "Maratón de Programación",
    desc: "Competencia de programación donde podrás demostrar tus habilidades y ganar premios.",
    nameKey: "marathon_title",
    descKey: "marathon_desc",
    date: "Octubre 15-17, 2023",
    location: "Bloque K, piso 6",
  },
  {
    id: "project",
    name: "Presentación de Proyectos",
    desc: "Muestra tus proyectos y recibe retroalimentación de expertos en el campo.",
    nameKey: "project_title",
    descKey: "project_desc",
    date: "Noviembre 5-7, 2023",
    location: "Bloque K, piso 6",
  }
]; 