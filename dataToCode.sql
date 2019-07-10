select concat(
    'var ',
    replace(replace(replace(replace(replace(replace(name,' ',''),',',''),'.',''),'-',''),'(',''),')',''),
    ' = await Monster.create({ ',
    'name: \'', name, '\', ',
    'hoverStats: \'', replace(replace(hoverStats,'\n','\\n'),'\'','\\\''), '\', ',
    'karma: \'', karma, '\', ',
    'goldMin: \'', goldMin, '\', ',
    'goldMax: \'', goldMax, '\', ',
    'alignment: \'', alignment, '\', ',
    'hpMin: \'', hpMin, '\', ',
    'hpMax: \'', hpMax, '\', ',
    'bardMin: \'', bardMin, '\', ',
    'bardMax: \'', bardMax, '\', ',
    'taming: \'', taming, '\', ',
    'fireMin: \'', fireMin, '\', ',
    'fireMax: \'', fireMax, '\', ',
    'coldMin: \'', coldMin, '\', ',
    'coldMax: \'', coldMax, '\', ',
    'poisonMin: \'', poisonMin, '\', ',
    'poisonMax: \'', poisonMax, '\', ',
    'energyMin: \'', energyMin, '\', ',
    'energyMax: \'', energyMax, '\', ',
    'physicalMin: \'', physicalMin, '\', ',
    'physicalMax: \'', physicalMax, '\', ',
    'mageryMin: \'', mageryMin, '\', ',
    'mageryMax: \'', mageryMax, '\', ',
    'evalIntMin: \'', evalIntMin, '\', ',
    'evalIntMax: \'', evalIntMax, '\', ',
    'aggroPriority: \'', aggroPriority, '\', ',
    'tacticsMin: \'', tacticsMin, '\', ',
    'tacticsMax: \'', tacticsMax, '\', ',
    'resistSpellMin: \'', resistSpellMin, '\', ',
    'resistSpellMax: \'', resistSpellMax, '\', ',
    'anatomyMin: \'', anatomyMin, '\', ',
    'anatomyMax: \'', anatomyMax, '\', ',
    'strengthMin: \'', strengthMin, '\', ',
    'strengthMax: \'', strengthMax, '\', ',
    'dexterityMin: \'', dexterityMin, '\', ',
    'dexterityMax: \'', dexterityMax, '\', ',
    'intelligenceMin: \'', intelligenceMin, '\', ',
    'intelligenceMax: \'', intelligenceMax, '\', ',
    'baseDmgMin: \'', baseDmgMin, '\', ',
    'baseDmgMax: \'', baseDmgMax, '\', ',
    'damageType: \'', damageType, '\', ',
    'breathDmgType: \'', breathDmgType, '\', ',
    'preferredFood: \'', preferredFood, '\', ',
    'controlSlots: \'', controlSlots, '\', ',
    'specials: \'', replace(replace(specials,'\n','\\n'),'\'','\\\''), '\'',
    '}).fetch();') from monster

union
    
select concat(
    'var a',
    replace(replace(replace(name,' ',''),'+',''),'.',''),
    ' = await Action.create({ ',
    'name: \'', name, '\', ',
    'value: \'', value, '\', ',
    'description: \'', description, '\', ',
    'initiative: \'', initiative, '\'',
    '}).fetch();') from action

union

select 'await MonsterAction.createEach([' from dual

union
    
select concat(
    '  { value: ', value, ', ',
    'description: \'', description, '\', ',
    'weight: ', weight, ', ',
    'monster: ', (select replace(replace(replace(replace(replace(replace(m.name,' ',''),',',''),'.',''),'-',''),'(',''),')','') from monster m where m.id = ma.monster), '.id, ',
    'action: a', (select replace(replace(replace(a.name,' ',''),'+',''),'.','') from action a where a.id = ma.action), '.id},'
    ) from monsteraction ma

union

select ']);' from dual;
