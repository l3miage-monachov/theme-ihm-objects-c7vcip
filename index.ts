// IMPORTEZ Vecteur2D et Vecteur2D_C
import { Vecteur2D_C, Vecteur2D } from './src/Vecteur2D';


/*
 * Testez la création de V1 (coordonnée <3, 2>)
 * Testez la création de V2 (coordonnée <9, 8>)
 * Vérifiez que V1.ajouter(V2) 
 *    renvoie bien un Vecteur2D de coordonnée <12, 10>
 */
const V1 : Vecteur2D_C = new Vecteur2D_C(3,2);
const V2 : Vecteur2D_C = new Vecteur2D_C(9,8);
V1.ajouter(V2);