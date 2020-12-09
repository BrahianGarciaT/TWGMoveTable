import { EN_MOVES } from '../data/enMoves';

export const EN_CONFIG = {
    title: 'TWG - Moves Table',
    moves: EN_MOVES,
    headers: {
        moveName: 'MOVE NAME',
        minDamage: 'MINIMUM DAMAGE',
        maxDamage: 'MAXIMUM DAMAGE',
        attack: 'ATTACK BONUS',
        blood: 'BLEEDING BONUS',
        firstSkill: 'SKILL #1',
        secondSkill: 'SKILL #2',
        totalSkill: 'TOTAL SKILL REQUIRED',
        requiredPosition: 'REQUIRED POSITION',
        obtainedPosition: 'OBTAINED POSITION',
    },
    filterPlaceHolder: 'search...',
    positions: [
        'All positions',
        'Opening move',
        'Standing',
        'Bent down',
        'Groggy',
        'Grounded',
        'You are running',
        'Running Opponent',
        'One wrestler is running',
        'Both wrestlers are running',
        'Out of the ring (Grounded)',
        'Out of the ring (Standing)',
        'To The Ropes (Grounded)',
        'To The Ropes (Standing)',
        'To The Turnbuckle (Grounded)',
        'To The Turnbuckle (Standing)',
        'Stunned',
    ],
    skills: [
        'VERSATILITY',
        'FURY',
        'QUICKNESS',
        'MASTERY',
        'ENDURANCE',
        'MIGHT',
        'RAGE',
        'UNSTOPPABLE BLOW',
        'STIFF BLOW',
        'BERSERKER',
        'IMPROVED REFLEXES',
        'HEAD START',
        'LIGHTNESS',
        'ELASTICITY',
        'FRENZIED URGE',
        'BLOCK',
        'POWER GRAPPLING',
        'RUTHLESS GRASP',
        'ESCAPE ARTIST',
        'FEINT',
        'TIRELESS',
        'TOUGHNESS',
        'THICK SKIN',
        'WILLPOWER',
        'PACIFICATION',
    ]
};