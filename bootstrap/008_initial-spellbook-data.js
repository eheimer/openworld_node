module.exports = async function () {

  await SpellbookAttribute.createEach([
    { name: 'Normal' },
    { name: 'Cursed' },
    { name: 'Skill' },
    { name: 'Intelligence', value: 1 },
    { name: 'Spell Damage Increase', value: '1-25' },
    { name: 'Lower Mana Cost', value: '1-8' },
    { name: 'Lower Reagent Cost', value: 1 },
    { name: 'Mana Increase', value: '1-8' },
    { name: 'Slayer', value: '1-20' },
  ]);

};
