s:
	git status

add:
	git add components/ makefile pages/ postcss.config.js styles/ tailwind.config.js

com:
	git commit -m "fix: main #time 5m #comment initial push"

push:
	git status
	git push origin main

bdev:
	git checkout main

dev:
	git pull origin main

mdev:
	git merge main

tes:
	npm run test

tes2:
	npm run test $(env)

del:
	git rm src/pages/v2/form-management/create/index.js