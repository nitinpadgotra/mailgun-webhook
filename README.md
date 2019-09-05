# mailgun-webhook
It is mailgun webhook sample for handling the mailgun events sent to webhook via HTTP POST and store them to mongodb.

# Steps to run project
1. Clone the repo
2. Do npm install
3. Add your database details to /config/app.json
4. Make sure your mongodb is running
5. Add your mail gun api key to config variable
6. npm run local
7. Application will by default run on localhost:3000
8. https://localhost:3000/api/v1/webhook (POST) for adding records to database will be used as webhook to mailgun
9. https://localhost:3000/api/v1/webhook (GET) for fetching records from database
