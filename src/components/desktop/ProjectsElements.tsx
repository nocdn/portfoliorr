import Project from "./Project";

type Project = {
  title: string;
  mobileTitle?: string;
  description?: string;
  demoURL?: string;
  sourceURL?: string;
  chips?: string[];
  year: number;
};

export default function ProjectsElements() {
  const projects: Project[] = [
    {
      title: "Shifts",
      description: "Full stack rota and shift management system with auth",
      sourceURL: "https://github.com/nocdn/shiftsauth",
      chips: ["react", "supabase", "nextjs", "betterAuth"],
      year: 2025,
    },
    {
      title: "Vanish",
      description: "Temporary emails through Cloudflare, with frontend and API",
      sourceURL: "https://github.com/nocdn/vanish",
      chips: ["react", "flask"],
      year: 2025,
    },
    {
      title: "Books",
      mobileTitle: "Books (r)",
      description:
        "Recreation of (Basic) Bookmarks in Next.js with extra features",
      sourceURL: "https://github.com/nocdn/booksr",
      chips: ["react", "postgres", "nextjs"],
      year: 2025,
    },
    {
      title: "MCQs",
      description:
        "Interactive psychology practice questions built for my friends",
      demoURL: "https://mcqs.bartoszbak.org/",
      chips: ["react", "supabase", "lambda"],
      year: 2024,
    },
    {
      title: "Quiet Watch",
      description: "Intelligent ad segment remover powered by LLMs",
      sourceURL: "https://github.com/nocdn/ad-segment-trimmer",
      chips: ["python"],
      year: 2024,
    },
    {
      title: "Echoes",
      description: "Full stack, self-hostable video/audio transcription app",
      demoURL: "https://whisper.bartoszbak.org/",
      chips: ["python"],
      year: 2023,
    },
    {
      title: "Votes",
      description:
        "Voting platform for university society elections, in SvelteKit",
      sourceURL: "https://github.com/nocdn/votes",
      chips: ["sveltekit", "tailwindcss", "supabase"],
      year: 2025,
    },
  ];
  return projects.map((project, index) => <Project key={index} {...project} />);
}
