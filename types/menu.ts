export type Menu = {
  id: number;
  title: string;
  to?: string;
  newTab: boolean;
  submenu?: Menu[];
};
