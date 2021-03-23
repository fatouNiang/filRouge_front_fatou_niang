export interface User {
  id: number;
  photo: Blob;
  username: string;
  password: string;
  firstName: string;
  LastName: string;
  email: string;
  profil: {libelle: string};
  token: string;
}
