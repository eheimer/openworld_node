describe('CreatureService', ()=>{

  describe('generateCreature', ()=>{
    it('should generate a CreatureInstance', async() => {
      var monsters = await Monster.find();
      assert(monsters.length > 0, 'Error: no results returned for monsters');
      var monster = monsters[0];
      var creature = await CreatureService.generateCreature(monster.id);
      var instance = await CreatureInstance.findOne({ id: creature.id });
      assert( ModelService.modelEquals(creature,instance), 'creature and instance are not the same: ', creature.name + instance.name);
    });
  });

  describe('getProxy', ()=>{
    //TODO: implement test
  });

  describe('prepForDelivery', ()=>{
    //TODO: implement test
  });

  describe('setNextAction', ()=>{
    //TODO: implement test
  });

  describe('getCreatureWithNextAction', ()=>{
    //TODO: implement test
  });

  describe('populateAll', ()=>{
    //TODO: implement test
  });

  describe('populateMonster', ()=>{
    //TODO: implement test
  });

  describe('populateNextAction', ()=>{
    //TODO: implement test
  });

  describe('populateConditions', ()=>{
    //TODO: implement test
  });

  describe('processMonster', ()=>{
    //TODO: implement test
  });

  describe('processAction', ()=>{
    //TODO: implement test
  });

  describe('nextActionForEach', ()=>{
    //TODO: implement test
  });

  describe('nextRoundForEach', ()=>{
    //TODO: implement test
  });

  describe('takeDamage', ()=>{
    //TODO: implement test
  });

  describe('heal', ()=>{
    //TODO: implement test
  });
});
