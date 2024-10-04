# hashimotoryoh.github.io

## How to setup

```shell
# Install Homebrew
# See https://brew.sh/
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
$ export PATH="$PATH:/opt/homebrew/bin"
# Move to repo
$ cd /path/to/repo_hashimotoryoh.github.io
# Install nodenv
$ brew install nodenv
$ nodenv install 18.8.0
$ nodenv rehash
# Install npm packages
$ nodenv exec npm i
```

Create local env file.

```env:.env.local
VITE_APP_VERSION=0.0.0(local)
VITE_BASE_URL=http://localhost:5173/
```

## How to run on local

```shell
$ nodenv exec npm run dev
# Open localhost
```
