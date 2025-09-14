import { juegosFriv } from "../data/frivs";

export const findFrivById = (id: number) => {
    return juegosFriv.find( (friv) => friv.id === id);
}
