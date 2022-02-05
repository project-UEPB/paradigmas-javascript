/* eslint linebreak-style: ["error", "windows"] */
export const PORTA_AVIOES = { kind: 'PORTA_AVIOES', size: 5 };
export const CONTRATORPEDEIROS = { kind: 'CONTRATORPEDEIROS', size: 3 };
export const NAVIO_TANQUE = { kind: 'NAVIO_TANQUE', size: 4 };
export const SUBMARINO = { kind: 'SUBMARINO', size: 2 };

export const ships = [
  {
    kind: 'SUBMARINO', size: 2, hasShip: true, imagePath: 'submarino',
  },
  {
    kind: 'SUBMARINO', size: 2, hasShip: true, imagePath: 'submarino',
  },
  {
    kind: 'SUBMARINO', size: 2, hasShip: true, imagePath: 'submarino',
  },
  {
    kind: 'SUBMARINO', size: 2, hasShip: true, imagePath: 'submarino',
  },
  {
    kind: 'NAVIO_TANQUE', size: 4, hasShip: true, imagePath: 'navio-tanque',
  },
  {
    kind: 'NAVIO_TANQUE', size: 4, hasShip: true, imagePath: 'navio-tanque',
  },
  {
    kind: 'CONTRATORPEDEIROS', size: 3, hasShip: true, imagePath: 'contratopedeiros',
  },
  {
    kind: 'CONTRATORPEDEIROS', size: 3, hasShip: true, imagePath: 'contratopedeiros',
  },
  {
    kind: 'CONTRATORPEDEIROS', size: 3, hasShip: true, imagePath: 'contratopedeiros',
  },
  {
    kind: 'PORTA_AVIOES', size: 5, hasShip: true, imagePath: 'porta-avioes',
  },
];
