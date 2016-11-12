let express = require('express');

let router = express.Router();

//
//	Data
//
let obj = {
	text: [
		"I started my career in IT as a SysAdmin. Learned how to code in PHP out of boredom, and made some simple internal tools to help me out while managing the company network.",
		"Then I became a Blogger, and wrote about mobile technologies when the iPhone didn’t yet exist, and PDAs didn’t have cellular modems. I also wrote the CMS for the site itself, when WordPress was barely starting. Then I went working as a web developer for a company that did simple Facebook games.",
		"After that, I ported a Windows Mobile app to Android 2.3. Then I became a Brand Manager for a mobile game company, Marketing Director for another one, and at that same company - I transitioned to Developer Relations Manager, and worked for two companies with this title. A job that I fell in love with."
	]
};

router.get('/', function(req, res, next) {

	res.json(obj);

});

module.exports = router;
