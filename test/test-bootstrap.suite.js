describe('bootstrap', ()=>{

  it('should have left the database with the expected number of hard-coded users, including Eric', async ()=>{
    var users = await User.find();
    assert(users.length > 0, `users.length > 0`);
    assert(users.length === 3, `users.length === 3`);// FUTURE: if other hard-coded users are added, update this.
    assert(_.find(users, { fullName: 'Eric' }), `_.find(users, { fullName: 'Eric' })`);
  });

});
