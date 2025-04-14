import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Pablo M.G. — Desarrollador Web",
  author: "Pablo M.G.",
  description:
    "Soy Pablo 🙋‍♂️, Programador y Desarrollador Web 🧑‍💻",
  lang: "es",
  siteLogo: "/pablo-small.jpg",
  navLinks: [
    { text: "Projectos", href: "#projects" },
    { text: "Sobre mi", href: "#about" },
  ],
  socialLinks: [
    // { text: "LinkedIn", href: "https://www.linkedin.com/in/pablomgdev/" },
    { text: "Github", href: "https://github.com/pablomg-dev" },
  ],
  socialImage: "/vistaprevia.png",
  canonicalURL: "https://pablomgdev.netlify.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Pablo M.G.",
    specialty: "Desarrollador Web",
    summary:
      "¡Bienvenido/a!, Soy Pablo 🙋‍♂️, Programador y Desarrollador Web 🧑‍💻",
    email: "pablomgonzalez.dev@gmail.com",
  },
  projects: [
    {
      name: "Soy Jessi Carmona",
      summary: "Sitio web para una terapeuta de artes sanadoras. El enfoque estuvo en crear una experiencia visual armoniosa que refleje su trabajo en meditación, yoga y desarrollo personal. La web comunica cercanía, claridad y bienestar, invitando a la exploración del autoconocimiento y la conexión con la comunidad.",
      link: "https://soyjessicarmona.com/",
      code: "https://github.com/pablomg-dev/jessiCarmona",
      image: "/soyjessi.png",
    },
    {
      name: "Cora Astrología Viva",
      summary: "Este sitio web está diseñado para reflejar la esencia y los servicios de una terapeuta holística, combinando un enfoque visual relajante con información clara y accesible.",
      link: "https://corastrologiaviva.netlify.app/",
      code: "https://github.com/pmg369/CoraAstrologiaViva",
      image: "/corastro.png",
    },
    {
      name: "Espacio Luminem",
      summary: "Sitio personal para terapeuta holístico. La página busca transmitir serenidad y confianza desde el primer momento, creando un espacio donde los visitantes se sientan en paz y acogidos.",
      link: "https://espacio-luminem.com/",
      code: "https://github.com/pmg369/espacio-luminem",
      image: "/esplum.png",
    },
    {
      name: "Plataforma Disco Music (en desarrollo)",
      summary: "Este proyecto está inspirado en mi banda favorita, Audioslave. Permite a los usuarios registrarse, editar álbumes y canciones, agregar nuevos elementos, y ofrece la opción de escuchar canciones en streaming o enlazarlas a videos de YouTube.",
      link: "https://audioslave-fanpage-p5.onrender.com/",
      code: "https://github.com/pmg369/plataforma-disco-music",
      image: "/platdismu.png",
    },
  ],
  about: {
    description: `
      Soy una persona dinámica y apasionada por el aprendizaje continuo, con experiencia en desarrollo web y un enfoque en obtener resultados efectivos. Busco siempre nuevas maneras de aportar valor en cada proyecto. Además tengo un profundo interés en el mundo de la Blockchain y Web3, también la astrología como un hobby, dos áreas que han enriquecido mi desarrollo profesional y me han permitido construir conexiones valiosas con personas de intereses afines.
    `,
    image: "/pablo-big.jpg",
  },
};

// #5755ff
