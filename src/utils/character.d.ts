export interface Character {
    name: string
    resistances: Resitances
    aptitudes: Aptitudes
    power?: Power[]
}

interface Resitances {
    compsure: numbers,
    fortitude: numbers,
    reaction: numbers,
    will: numbers
}

interface Aptitudes {}

interface Power {}