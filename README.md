# TDD

TP final - par Felipe Alarcon et Julien Anquetil 

## Next JS App

### Start

```bash
cd /app
pnpm install # ou yarn ou npm
pnpm dev
```

## Cypress

### Start

```bash
cd /app

pnpm cypress open
# ou
npx cypress open
# ou
yarn cypress open
```

### Implémentation des tests selon les gherkins

- `register.cy.js` : Permet de tester le fait de se créer un compte sur l'application (création de compte > affichage des utilisateurs)
- `login.cy.js` : Permet de tester le fait de se connecter sur l'application (connexion > affichage des utilisateurs)
- `logout.cy.js` : Permet de tester le fait de se déconnecter de l'application (affichage des utilisateurs > boutton deconnection > plus d'accès a la page utilisateur)
- `detail.cy.js` : Permet de tester le fait de voir les détails d'un utilisateur (affichage des utilisateurs > click sur un utilisateur > affichage détail)
- `api/users.cy.js` : Permet de tester l'api pour récupérer tous les utilisateurs ainsi que les détails d'un utilisateur unique (par id)

## Locust

Nous utilisons locust car c'est un outil super performant, il est également facile à utiliser et facile à installer à l'aide de docker.
Nous maitrisons aussi Python, c'est donc un avantage suplémentaire quant à l'utilisation de Locust

### Test

- Host : https://reqres.in/api
- Number of users: 20 (Utilisateurs que on attends se connect a simutanement a l'api)
- Spawn rate : 100
- Api route: /users

Run docker container in the locust folder

```bash
docker run -p 8089:8089 -v $PWD:/mnt/locust locustio/locust -f /mnt/locust/locustfile.py
```

### Results

![alt text]('./../assets/loc1.png)
![alt text]('./../assets/loc2.png)
