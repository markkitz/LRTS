// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 6969;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });
// });
router.route('/course')
  .get(function(req, res) {
        const course = {
          courseCode: 'DRNE100',
          courseTitle: 'Drone Repair'
        };
       res.json(course);
    });


router.route('/coursePackYears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
//     .post(function(req, res) {
//
//         var bear = new Bear();      // create a new instance of the Bear model
//         bear.name = req.body.name;  // set the bears name (comes from the request)
//
//         // save the bear and check for errors
//         bear.save(function(err) {
//             if (err)
//                 res.send(err);
//
//             res.json({ message: 'Bear created!' });
//         });
//
//     })
    .get(function(req, res) {
        var termId =1;
        const years = {years : [
            {id:1, year:'2015-16', terms:[{id: termId++, term:'Summer', status:'notStarted'}, {id: termId++, term:'Fall', status:'inProgress'}, {id: termId++, term:'Winter', status:'notStarted'}, {id: termId++, term:'Spring', status:'notStarted'}]},
            {id:2, year:'2014-15', terms:[{id: termId++, term:'Summer', status:'approved'}, {id: termId++, term:'Fall', status:'approved'}, {id: termId++, term:'Winter', status:'approved'}, {id: termId++, term:'Spring', status:'approved'}]},
            {id:3, year:'2013-14', terms:[{id: termId++, term:'Summer', status:'approved'}, {id: termId++, term:'Fall', status:'approved'}, {id: termId++, term:'Winter', status:'approved'}, {id: termId++, term:'Spring', status:'approved'}]}
            ]};
       res.json(years);
    });

   router.route('/terms').get(function(req, res) {
       var termId = req.param('termId');
       var rtn = {
           courseInfo: {coursePackNumber: '1295', title:'Quantitative Analysis Theory', subtitle: 'CHEM1232'},
           printDetails: {field1:'field1_' + termId}
       }
       res.json(rtn);
    });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
