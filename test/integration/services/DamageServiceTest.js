describe('DamageService', ()=>{

  describe('getChaosDamageType', ()=>{
    it('should return a valid chaos damage type', async () => {
      var dmgTypes = await DamageType.find({ chaos: true });
      dmgTypes = _.map(dmgTypes,(n)=>{ return n.id; });
      var chaos = await DamageService.getChaosDamageType();
      assert(dmgTypes.includes(chaos), 'method did not return a valid damage type');
    });
  });
});
