/**
 * Validate Credit card information
 */

var ejs = require('ejs');

exports.showForm = function(req, res) {
	ejs.renderFile('./views/creditcard.ejs', function(err, result) {
		if(!err) {
			res.end(result);
		} else{
			res.end('An error occurred');
			console.log(err);
		}
	});
};

exports.validateForm = function(req, res) {
	var creditCardNumber = req.param("creditCardNumber");
	var expirationDate = req.param("expirationDate");
	var cvvNumber = req.param("cvvNumber");
	var now = new Date();
	var enteredDate = new Date(expirationDate);
	var creditCardRegex = new RegExp("^[0-9]{16}$");
	var cvvRegex = new RegExp("^[0-9]{3}$");

	if((!cvvRegex.test(cvvNumber)) || (enteredDate < now) || (!creditCardRegex.test(creditCardNumber))) {
		ejs.renderFile('./views/displayerror.ejs',function(err, result) {
	        if (!err) {
	            res.end(result);
	        }
	        else {
	            res.end('An error occurred');
	            console.log(err);
	        }
	    });
	} else {
		ejs.renderFile('./views/displaysuccess.ejs',function(err, result) {
	        if (!err) {
	            res.end(result);
	        }
	        else {
	            res.end('An error occurred');
	            console.log(err);
	        }
	    });
	}
};