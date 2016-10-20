Jon's Boiler Plate
------

##Goal
Get a project up and running quickly with this simple boilerplate.
Uses webpack with postinstall hooks to deploy with Heroku immediately.

##Setup

###Local Development
_After forking/cloning:_

1. `npm install`
2. `npm run dev`
3. Navigate to [http://localhost:8080/dist/](http://localhost:8080/dist/)

###Deployment
1. [Set up Heroku for your command line](https://devcenter.heroku.com/articles/heroku-command-line)
2. `heroku create`
3. `git push heroku master`
4. `heroku apps:rename YOUR_APP_NAME_HERE`
5. `heroku config:set NODE_ENV=production`
6. Navigate to YOUR_APP_NAME_HERE.herokuapp.com
7. Optional: set up Automatic Deploys by connecting your GitHub account's deploy/master branch to your Heroku app via your [Heroku Dashboard](https://dashboard.heroku.com)

[Heroku reference](https://devcenter.heroku.com/articles/git)

##Includes

- React/Redux
- Mocha/Chai/Enzyme Test Suite

##Notes
Configuration of webpack will also minify code and switch React into production mode when deployed to Heroku

If you would like to round out the quality of this boiler plate, please do!

Using eslint preset to guide styling.

TODO:
----
Flesh out Redux structure
Flesh out routing
Add baseline tests
