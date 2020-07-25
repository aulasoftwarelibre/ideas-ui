export interface NavBarLink {
  label: string;
  path: string;
}

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
