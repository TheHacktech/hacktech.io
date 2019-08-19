# hacktech.io
Made with the MEAN stack (mongodb, Expressjs, AngularJS, and Nodejs)

# Set up:
Gain SSH access to the server:

AWS Domain:

1. https://help.github.com/articles/generating-an-ssh-key/

2. Email the public key to the owner.

3. Ask for the Domain. . The .ssh config file lets you configure a ssh connection so you don't have to Example ~/.ssh/config on your personal machine:
  ```
  Host hacktech-zmo
    HostName ec2-1-1-1-1.us-west-2.compute.amazonaws.com
    User zmo
    IdentityFile ~/.ssh/id_rsa
    LocalForward 3000 127.0.0.1:3000
   ```
Now to SSH into the server, we can type from terminal ssh hacktech-zmo

4. Clone the repository:

`git clone https://github.com/TheHacktech/hacktech.io.git `

5. To get npm

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`
To Activate
`. ~/.nvm/nvm.sh`

`nvm install 10.16.0`

Test that it works

`node -e "console.log('Running Node.js ' + process.version)"`

6. To run the app,

```
npm install 
npm run build
browserify client/app.js > client/bundle.js
npm start
```

go to `localhost:3000` to see.
