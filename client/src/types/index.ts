export type ModuleLevel = "Iniciante" | "Intermediário" | "Intermediário avançado" | "Avançado";
export type ModuleColor = "saffron" | "moss" | "indigo" | "clay";
export type ModuleStatus = "Comece aqui" | "Próximo passo" | "Desbloqueia ao avançar" | "Concluído";

export interface LessonSection {
  title: string;
  body: string;
}

export interface Lesson {
  intro: string;
  sections: LessonSection[];
  practice: string;
}

export interface Module {
  number: string;
  level: ModuleLevel;
  title: string;
  description: string;
  duration: string;
  status: ModuleStatus;
  color: ModuleColor;
  lesson: Lesson;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ModuleSource {
  title: string;
  url: string;
  note?: string;
}

export interface Resource {
  type: "Leitura" | "Vídeo" | "Áudio" | "Referência";
  title: string;
  description: string;
  meta: string;
  category: "Leituras" | "Vídeos" | "Referências";
  link: string;
  icon: "BookOpen" | "CirclePlay" | "Library" | "ExternalLink";
}

export interface MeditationOption {
  id: string;
  title: string;
  duration: string;
  durationSeconds: number;
  description: string;
  script: string;
  audioUrl?: string;
}

export interface AmbientOption {
  id: string;
  title: string;
  icon: string;
}

export interface GlossaryTerm {
  term: string;
  pali?: string;
  definition: string;
  notMeaning: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  prompt: string;
  text: string;
  updatedAt: string;
}

export interface ChallengeDay {
  day: number;
  title: string;
  focus: string;
  practice: string;
  durationMin: number;
  moduleHint?: string;
}

export interface Challenge {
  id: string;
  title: string;
  days: number;
  description: string;
  sequence: ChallengeDay[];
}

export interface Tradition {
  id: string;
  name: string;
  region: string;
  emphasis: string[];
  texts: string;
  ideal: string;
  caution: string;
  color: ModuleColor;
}
