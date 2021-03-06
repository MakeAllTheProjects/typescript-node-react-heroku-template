# TYPESCRIPT NODE REACT HEROKU TEMPLATE

A skeleton template for setting up a full stack React and Node project with Express and Typescript.

*The following instructions assume you have created the Heroku project this will deploy on.*

---

## SET UP

1) `yarn install`

1) `cd server/src/config/client`

1) `yarn install`

1) create a `.env` file

1) in the `.env` file add `PORT=5000`

1) in your Heroku project add the following config vars:

    | KEY | VALUE |
    | --- | --- |
    | `NODE_ENV` | `production` |
    | `REACT_APP_HEROKU_URL`  | *your Heroku app's url* |
    |

7) `cd ../../../..`

1) `yarn start`

1) `yarn start:client`

If you have set up successfully you should see a blue banner with the text "Hello World" if you go to `http://localhost:3000`.

Deploy to Heroku and verify live project matches the one on localhost.
