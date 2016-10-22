function Global() { }

/*
	 HOST:
*/

// Local:
Global.host = 'http://localhost/Synyzapo/Synyzapo-MBMS/';

// Live
Global.host = 'http://mbms.synyzapo.com/';

/* */

/*
	Modules
*/
Global.Modules = {};

// Account
Global.Modules.Account = 'app/Modules/Account/';

// Note
Global.Modules.Note = 'app/Modules/Note/';

// Track
Global.Modules.Track = 'app/Modules/Track/';

// Message
Global.Modules.Message = 'app/Modules/Message/';

// Landing
Global.Modules.Landing = 'app/Modules/Landing/';

/* */

// URLs
Global.templatesURL = 'app/templates/';

// Page not found
Global.pageNotFound = '/accounts';

// BACKEND:
Global.backend = 'backend/';

/*
	REST URLs:
*/

// Account
Global.getAllAccounts = Global.host + Global.backend + 'organizations/';

// Note
Global.getAllNotes = Global.host + Global.backend + 'notes/';
Global.addNote = Global.host + Global.backend + 'notes/add/';

// Track
Global.getWebsiteTracks = Global.host + Global.backend + 'website_tracks/';
Global.getAppTracks = Global.host + Global.backend + 'app_tracks/';

// Message
Global.getAllMessages = Global.host + Global.backend + 'user_messages/';
Global.getMessage = Global.host + Global.backend + 'user_messages/view/';

/* */

// Properties
Global.basicListLimit = 11;

/*
	Account types
*/
Global.Account = {};

// Basic
Global.Account.Basic = {};
Global.Account.Basic.id = 1;

// Premium 1
Global.Account.Premium1 = {};
Global.Account.Premium1.id = 2;
