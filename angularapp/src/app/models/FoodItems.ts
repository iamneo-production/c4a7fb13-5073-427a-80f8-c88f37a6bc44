export interface FoodItems {
  id: string,
  name: string,
  category: string,
  cost: number,
  image: ArrayBuffer | null | never[] | string,
}
