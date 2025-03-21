export interface Food {
  id?: string; // Auto-generated by Firestore
  name: string;
  carbohydratesPerPortion: number; // Amount of carbs per portion (in grams)
  barcode?: string;
  calories?: number;
  fat?: number;
  protein?: number;
}
const foodList: {
  name: string;
  carbohydratesPerPortion: number;
  calories: number;
  protein: number;
  fat: number;
}[] = [
  {
    name: 'Manzana',
    carbohydratesPerPortion: 25,
    calories: 95,
    protein: 0.5,
    fat: 0.3,
  },
  {
    name: 'Plátano',
    carbohydratesPerPortion: 27,
    calories: 105,
    protein: 1.3,
    fat: 0.4,
  },
  {
    name: 'Arroz',
    carbohydratesPerPortion: 28,
    calories: 130,
    protein: 2.7,
    fat: 0.3,
  },
  {
    name: 'Pan Integral',
    carbohydratesPerPortion: 13,
    calories: 69,
    protein: 3.6,
    fat: 0.9,
  },
  {
    name: 'Pechuga de Pollo',
    carbohydratesPerPortion: 0,
    calories: 165,
    protein: 31,
    fat: 3.6,
  },
  {
    name: 'Salmón',
    carbohydratesPerPortion: 0,
    calories: 206,
    protein: 22,
    fat: 13,
  },
  {
    name: 'Papa',
    carbohydratesPerPortion: 37,
    calories: 161,
    protein: 4.3,
    fat: 0.2,
  },
  {
    name: 'Lentejas',
    carbohydratesPerPortion: 40,
    calories: 230,
    protein: 18,
    fat: 0.8,
  },
  {
    name: 'Leche Descremada',
    carbohydratesPerPortion: 12,
    calories: 83,
    protein: 8,
    fat: 0.2,
  },
  {
    name: 'Huevo',
    carbohydratesPerPortion: 1.1,
    calories: 68,
    protein: 5.5,
    fat: 4.8,
  },
  {
    name: 'Nueces',
    carbohydratesPerPortion: 4,
    calories: 185,
    protein: 4.3,
    fat: 18.5,
  },
  {
    name: 'Yogur Natural',
    carbohydratesPerPortion: 17,
    calories: 150,
    protein: 10,
    fat: 4,
  },
  {
    name: 'Zanahoria',
    carbohydratesPerPortion: 10,
    calories: 41,
    protein: 0.9,
    fat: 0.2,
  },
  {
    name: 'Tomate',
    carbohydratesPerPortion: 4,
    calories: 18,
    protein: 0.9,
    fat: 0.2,
  },
  {
    name: 'Brócoli',
    carbohydratesPerPortion: 7,
    calories: 55,
    protein: 3.7,
    fat: 0.6,
  },
  {
    name: 'Aguacate',
    carbohydratesPerPortion: 9,
    calories: 160,
    protein: 2,
    fat: 15,
  },
  {
    name: 'Queso Cheddar',
    carbohydratesPerPortion: 1,
    calories: 113,
    protein: 7,
    fat: 9.3,
  },
  {
    name: 'Aceitunas',
    carbohydratesPerPortion: 3,
    calories: 42,
    protein: 0.3,
    fat: 4.4,
  },
  {
    name: 'Chocolate Negro (85%)',
    carbohydratesPerPortion: 13,
    calories: 170,
    protein: 2,
    fat: 12,
  },
];

export default foodList;
