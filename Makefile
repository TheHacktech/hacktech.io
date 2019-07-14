get-node:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
	source ~/.nvm/nvm.sh
	nvm install 10.16.0
	node -e "console.log('Running Node.js ' + process.version)"
	npm install -g bundle-js

