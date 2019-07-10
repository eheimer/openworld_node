describe('RandomService', ()=>{

  describe('getRandomInRange', ()=>{
    it('given enough iterations, all options should be represented', async ()=>{
      var results = [false,false,false,false,false];
      for(var x = 1; x <= 1000; x++){
        var result = RandomService.getRandomInRange(1,5);
        assert(result >= 1 && result <= 5, 'result between 1 and 5 inclusively');
        results[result-1] = true;
      }
      assert(JSON.stringify(results) === JSON.stringify([true,true,true,true,true]), 'expected: true,true,true,true,true, got:' + results);
    });
    it('given two arguments, should return a number between two options', async ()=>{
      var err = undefined;
      for(var x = 1; x <= 100; x++){
        var result = RandomService.getRandomInRange(1,5);
        if(result <1 || result > 5) { err = { ex: '1-5', result: result }; break; }
      }
      assert(err === undefined, err===undefined?'':'expected: ' + err.ex + ', got: ' + err.result);
    });
    it('given a single argument, should parse as {min}-{max}', async ()=>{
      var err = undefined;
      for(var x = 1; x <= 100; x++){
        var result = RandomService.getRandomInRange('1-5');
        if(result <1 || result > 5) { err = { ex: '1-5', result: result }; break; }
      }
      assert(err === undefined, err===undefined?'':'expected: ' + err.ex + ', got: ' + err.result);
    });
    it('given an array as a single argument, should parse as min: arr[0], max: arr[1]', async ()=>{
      var err = undefined;
      for(var x = 1; x <= 100; x++){
        var result = RandomService.getRandomInRange([1,5]);
        if(result <1 || result > 5) { err = { ex: '1-5', result: result }; break; }
      }
      assert(err === undefined, err===undefined?'':'expected: ' + err.ex + ', got: ' + err.result);
    });
    it('given reversed arguments, should properly flip them', async ()=>{
      var err = undefined;
      for(var x = 1; x <= 100; x++){
        var result = RandomService.getRandomInRange(5,1);
        if(result <1 || result > 5) { err = { ex: '1-5', result: result }; break; }
      }
      assert(err === undefined, err===undefined?'':'expected: ' + err.ex + ', got: ' + err.result);
    });
  });

  describe('weightedRandom', ()=>{
    it('should return higher weighted option more frequently', async ()=>{
      var weights=[1,2]; // these weights mean it should return 0 one third of the time and 1 two thirds of the time
      var sum = 0;
      for(var y = 1; y <= 1000; y++){ //run the entire test 1000 times
        //run the weighted random 100 times.
        // sum should be around 66, but we will simply test that it is > 50 consistently
        for(var x = 1; x <= 100; x++){
          var result = RandomService.weightedRandom(weights);
          sum += result;
        }
      }
      assert(sum/1000 > 60 && sum/1000 < 70, 'Average should be around 66, but certainly between 60 and 70: ' + sum/1000);
    });
  });
});
