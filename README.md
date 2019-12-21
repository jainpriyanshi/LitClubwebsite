# Lit Club Website 
 ### A webApp built on MERN stck to help manage all work and contests of Literature Club 
  

  ## Deploy on local machine
* ### Install [Node.js](https://nodejs.org/en/download/current/)
> Deploying this app requires node package manager `npm`
* ### Set [MOngodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) Database
* ### Clone the repository
> Download this repository `or`
```
git clone https://github.com/jainpriyanshi/LitClubwebsite.git
cd LitClubwebsite
```
* ### Install dependencies for Backend
> Add email and password to mail.js in Backend
```
cd server && cd config 
touch mail.js
```
* ### Install dependencies for Backend
> Directory now is to be changed to `server`
```
cd server
npm install
```
* ### Run `development server`
```
npm start
```
> Its up and running on port 4000.

* ### Install dependencies for frontend
> Directory now is to be changed to `client`
```
cd client
npm install
```
* ### Run `development server`
```
npm start
```
> Its up and running on port 3000.

* ### Run `production build`
```
npm run build
