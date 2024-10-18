# theOdinProject-Template
this repo is a template of a working html css js project with a server 

list of command used : 

npm init -y
npm install webpack webpack-cli --save-dev
peut etre pas  npm install --save lodash 
npm install --save-dev style-loader css-loader
npm install --save-dev webpack-dev-server
npm install --save-dev express webpack-dev-middleware
npm install --save-dev webpack-merge

npm install --save-dev webpack-merge

begin with  :

npm run build 
npm run start 

the page shold appear with "Helo World" in the console 
and "Hello World" in red on the blue background on the page


at the end of the project, to put the project on liveView github 
Step 1
Remove the dist directory from the project’s .gitignore file (already done).

Step 2
Make sure git knows about your subtree (the subfolder with your site).

git add dist && git commit -m "Initial dist subtree commit"
Step 3
Use subtree push to send it to the gh-pages branch on GitHub.

git subtree push --prefix dist origin gh-pages
Boom. If your folder isn’t called dist, then you’ll need to change that in each of the commands above.

