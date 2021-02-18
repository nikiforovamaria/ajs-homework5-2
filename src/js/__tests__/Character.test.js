import Character from '../Character';

test('should create bowman character', () => {
  const bowman = new Character('Mike', 'Bowman');
  const result = 'Mike';
  expect(bowman.name).toBe(result);
});

test('should give an error about name length', () => {
  const bowman = new Character('M', 'Bowman');
  const result = 'Длина имени должна быть минимум 2 символа и максимум 10 символов';
  expect(bowman).toThrow(result);
});

test('should give an error about type', () => {
  const bowman = new Character('Mike', 'Bowmann');
  const result = 'Тип должен быть один из перечисленных вариантов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie';
  expect(bowman).toThrow(result);
});

test('should increase level', () => {
  const bowman = new Character('Mike', 'Bowman', 100, 1, 25, 25);
  bowman.levelUp();
  const result = 2;
  expect(bowman.level).toBe(result);
});

test('should take damage', () => {
  const bowman = new Character('Mike', 'Bowman', 100, 1, 25, 25);
  bowman.damage(20);
  const result = 85;
  expect(bowman.health).toBe(result);
});

test('should give an error from levelUp', () => {
  const bowman = new Character('Mike', 'Bowman', 0, 1, 25, 25);
  const result = 'Нельзя повысить левел умершего';
  expect(bowman.levelUp()).toThrow(result);
});

test('should not take damage', () => {
  const bowman = new Character('Mike', 'Bowman', -1, 1, 25, 25);
  bowman.damage(1);
  const result = -1;
  expect(bowman.health).toBe(result);
});
