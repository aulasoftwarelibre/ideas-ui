export interface NavBarLink {
  label: string;
  path: string;
}

export const mobileLinks: NavBarLink[] = [
  {
    label: "Inicio",
    path: "/",
  },
  {
    label: "Grupos",
    path: "/groups",
  },
  {
    label: "Añadir idea",
    path: "/ideas/new",
  },
  {
    label: "Ayuda",
    path: "/help",
  },
];

export const profileLinks: NavBarLink[] = [
  {
    label: "Editar perfil",
    path: "/user/profile",
  },
  {
    label: "Actividades",
    path: "/user/ideas",
  },
  {
    label: "Salir",
    path: "/api/auth/signout",
  },
];
