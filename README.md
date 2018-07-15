# Setting up the Database connection.

## Database connection is in database/models/index.js
This is set up to detect if "use_env_variable" is defined in the config.json for the current environment. If it is, it will try and read an environment variable. This environment variable (DB_CONNECTION_STRING) needs to be defined separately in localhost environment (pointing to the local database) and the deployed heroku environment (pointing to the provisioned database).

Define env variables on localhost in a .env file (gitignored). Then use the node module "dotenv" to import the variables.
Define env variables in Heroku via the app settings in the GUI.

It expects all the credentials in a single connection URL, like this example from docs (default MySql port is 3306):

```

const sequelize = new Sequelize('mysql://user:pass@example.com:9821/db_name', {
  //Define other options in here
})

```

## Seeders
Run seed files using the Sequelize CLI.
.sequelizerc file points the CLI to ./database/ for files + config, rather than looking in node_modules.  
You can run commands from the project root by prefacing the path to the node_modules package to commands, eg:

```
$ node_modules/.bin/sequelize db:seed --seed seed-file-name

```
