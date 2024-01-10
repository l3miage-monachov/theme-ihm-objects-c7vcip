/*
 * Définir une interface Vecteur2D
 * qui contient 2 attributs x et y de type readonly number
 * et qui contient une méthode méthode ajouter
 *   cette méthode prend en paramètre un Vecteur2D
 *   et renvoie un Vecteur2D
 *
 * Précédez votre déclaration de l'interface Vecteur2D par l'instruction export, de sorte à rendre visible l'interface aux autres fichiers :
 * export interface Vecteur2D {... à compléter...}
 */

export interface Vecteur2D {
  readonly x: number;
  readonly y: number;
  ajouter(v: Vecteur2D): Vecteur2D;
}

/*
 * Définir une classe Vecteur2D_C qui implémente Vecteur2D
 * Son constructeur prend en paramètre x et y.
 * Précédez votre déclaration de la classe Vecteur2D_C par l'instruction export, de sorte à rendre visible l'interface aux autres fichiers :
 * export class Vecteur2D_C ...à compléter ...
 */
export class Vecteur2D_C implements Vecteur2D {
  constructor(readonly x: number, readonly y: number) {}
  ajouter(v: Vecteur2D): Vecteur2D {
    return new Vecteur2D_C(this.x + v.x, this.y + v.y);
  }
}
