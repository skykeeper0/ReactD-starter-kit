# basic Web app start kit

This is a self-build starter that can work with both webpack and express - nodemon for hot reloadiing. There is no dev server on this webpack.

To run this, do:
npm install

afther that we need to run webpack --watch on one terminal and running nodemon on another terminal. Both are written inside the script so they can run from npm. Now you can see new page by reloading it after changing the code.

This is only a temporary solution. My goal is a hot reload combination of webpack and express.

P1: working on online mongodata base
    Create an online mongoose database //
    Create an login page // index.html
    Set up file system:
        client
            public  //bundle.js + index.html - the one that get display
            src  //index.js  Main js that bind React component
               components // react components app.js...
        server
            controller // controllers, middleware for the server
            models // database models
            dbConnection // where you set the dbConnection
            server.js  // server file
    
    Create a server at port 3000 with listen //
    Set up an server that accept post request and response json data //
    Run the server to test //
    Send post request with login and password, the server response json data //

    Write test for it ? //

P2: Initial setup    
    Create controller for the user 
    Create add user to data base in the controller
    Create look up user at database in the controller
    Test 2 above function with login page
    Test 2 above function with ajax request
    Rework

    Set up test
    Rework

    
p2: Add cookie and authentication
    



