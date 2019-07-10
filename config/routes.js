/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  //'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /':                     { action: 'account/view-player-home' },
  'GET /owgame/create':        { action: 'game/view-create-game' },
  'GET /owgame/:gameId':       { action: 'game/view-game-home' },
  'GET /owgame':               { action: 'game/view-game-home' },
  'GET /owgame/:gameId/character/create': { action: 'game/view-create-character' },
  'GET /owgame/players':       { action: 'game/view-game-players'},
  'GET /welcome':              { action: 'dashboard/view-welcome' },

  'GET /faq':                { view:   'pages/faq' },
  'GET /legal/terms':        { view:   'pages/legal/terms' },
  'GET /legal/privacy':      { view:   'pages/legal/privacy' },
  'GET /contact':            { view:   'pages/contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { view:   'pages/entrance/confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },

  'GET /owbattle':             { action: 'battle/new-battle' },
  'GET /owbattle/:battleId':   { action: 'battle/view-battle'},
  'GET /monster/list':         { action: 'monster/list-all'},
  'GET /damage-types':         { action: 'damage-types'},
  'GET /condition/list':       { action: 'condition-list'},


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the CloudSDK library.
  'GET   /api/v1/account/logout':                        { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':               { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':                { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':           { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },
  'POST  /api/v1/game/character/create':                 { action: 'game/create-character' },

  'POST  /api/v1/character/update':         { action: 'character/update-value',    isSocket: true },
  'GET   /api/v1/character/getDetails':     { action: 'character/get-details',     isSocket: true },
  'POST  /api/v1/item/takeItem':            { action: 'item/take-item',            isSocket: true },
  'POST  /api/v1/item/equipItem':           { action: 'item/equip-item',           isSocket: true },
  'POST  /api/v1/item/damageItem':          { action: 'item/damage-item',          isSocket: true },
  'POST  /api/v1/item/repairItem':          { action: 'item/repair-item',          isSocket: true },

  'POST  /api/v1/game/create':              { action: 'game/create-game',          isSocket: true },
  'GET   /api/v1/game/joinGame':            { action: 'game/join-game',            isSocket: true },
  'POST  /api/v1/game/updateGameName':      { action: 'game/update-game-name',     isSocket: true },
  'POST  /api/v1/game/deleteGame':          { action: 'game/delete-game',          isSocket: true },
  'POST  /api/v1/game/addPlayer':           { action: 'game/add-player',           isSocket: true },
  'POST  /api/v1/game/removePlayer':        { action: 'game/remove-player',        isSocket: true },

  'POST  /api/v1/battle/generateEnemy':     { action: 'battle/generate-enemy',     isSocket: true },
  'POST  /api/v1/battle/generateFriendly':  { action: 'battle/generate-friendly',  isSocket: true },
  'POST  /api/v1/battle/addFriendly':       { action: 'battle/add-friendly',       isSocket: true },
  'POST  /api/v1/battle/nextRound':         { action: 'battle/next-round',         isSocket: true },
  'POST  /api/v1/battle/dealDamage':        { action: 'battle/deal-damage',        isSocket: true },
  'GET   /api/v1/battle/joinBattle':        { action: 'battle/join-battle',        isSocket: true },
  'POST  /api/v1/battle/delete':            { action: 'battle/delete-battle',      isSocket: true },

  'POST  /api/v1/creature/updateCondition': { action: 'creature/update-condition', isSocket: true },
  'POST  /api/v1/creature/tame':            { action: 'creature/tame-creature',    isSocket: true },
  'POST  /api/v1/creature/release':         { action: 'creature/release-creature', isSocket: true },

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',

};
