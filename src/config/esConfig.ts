import { ES_MOVES } from '../data/esMoves';

export const ES_CONFIG = {
    title: 'TWG - Tabla de Movimientos',
    moves: ES_MOVES,
    headers: {
        moveName: 'MOVIMIENTO',
        minDamage: 'DAÑO MÍNIMO',
        maxDamage: 'DAÑO MÁXIMO',
        attack: 'BONUS DE ATQUE',
        blood: 'BONUS DE SANGRADO',
        firstSkill: 'HABILIDAD #1',
        secondSkill: 'HABILIDAD #2',
        totalSkill: 'HABILIDAD TOTAL REQUERIDA',
        requiredPosition: 'POSICIÓN REQUERIDA',
        obtainedPosition: 'POSICIÓN OBTENIDA',
    },
    filterPlaceHolder: 'buscar...',
    positions: [
        'Todas las posiciones',
        'Movimiento de apertura',
        'Erguido',
        'Inclinado',
        'Mareado',
        'Tendido',
        'Estas corriendo',
        'Oponente corriendo',
        'Un luchador esta corriendo',
        'Ambos luchadores estan corriendo',
        'Fuera del Ring (Tendido)',
        'Fuera del Ring (Erguido)',
        'En las Cuerdas (Tendido)',
        'En las Cuerdas (Erguido)',
        'En el Esquinero (Tendido)',
        'En el Esquinero (Erguido)',
        'Aturdido',
    ],
    skills: [
        'VERSATILIDAD',
        'FURIA',
        'RAPIDEZ',
        'MAESTRÍA',
        'AGUANTE',
        'FUERZA',
        'RABIA',
        'GOLPE IMPARABLE',
        'GOLPE RÍGIDO',
        'BERSERKER',
        'REFLEJOS MEJORADOS',
        'VENTAJA',
        'LIGEREZA',
        'ELASTICIDAD',
        'IMPULSO FRENÉTICO',
        'BLOQUEO',
        'PODER DE AGARRE',
        'AGARRE IMPLACABLE',
        'ESCAPISTA',
        'FINTA',
        'INCANSABLE',
        'DUREZA',
        'PIEL GRUESA',
        'FUERZA DE VOLUNTAD',
        'PACIFICACIÓN'
    ]
};