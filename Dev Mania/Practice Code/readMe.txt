1. back end:
	a. npm init -y
	b. npm install nodemon --save-dev
	c. go to package.json
		> update this part as below:
		> "scripts": {
    			"start": "nodemon"
  		   }
	d. create index.js file in the same folder where package.json resides
	e. in cmd prompt, run:
		> npm start
	f. npm install express
	   npm install body-parser
	   npm install cors
	   npm install knex
	   npm install bcrypt-nodejs
	   npm install pg --save
	g. Copy package.json, server.js, controllers from mentalhealthAPI to this new backend folder
		- update the last part of server.js as below:
			// process.env.PORT
			app.listen(3001, () => 
  			console.log('Example app listening on port 3001',)
  			)
	h. in cmd prompt, run:
		> npm start
	i. 

	z. now watch videos from folder 24, video no 08.

2. front end:
	a. create-react-app appname
	b. copy src folder from mentalhealth frontend folder to this fronend folder	
	c. npm install react-particles-js
	d. npm install @types/react
	e. npm run build
	f. npm start
	z. watch videos from folder 19 (zero to mastery).
	f. now watch videos from folder 24, video no 08 (zero to mastery)
