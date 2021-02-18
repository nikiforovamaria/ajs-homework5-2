import Character from './Character';

console.log('worked');

const bowman = new Character('Mike', 'Bowman', 100, 1, 25, 25);

console.log(bowman);

bowman.levelUp();
console.log(bowman.level);
bowman.damage(20);
console.log(bowman.health);
