# Understanding webpack

- [Understanding webpack](#understanding-webpack)
  - [Setting up this repo](#setting-up-this-repo)
    - [Cloning the repo](#cloning-the-repo)
    - [Linking the webpack submodule](#linking-the-webpack-submodule)
  - [Creating a new example](#creating-a-new-example)
  - [Debugging an example](#debugging-an-example)
  - [Debugging webpack's tests](#debugging-webpacks-tests)

## Setting up this repo

### Cloning the repo

```bash
git clone --recurse-submodules --remote-submodules git@github.com:Andrei0872/understanding-webpack.git
```

### Linking the webpack submodule

First, we're going to install the dependencies that webpack require.

```bash
cd webpack
yarn
```

Then, we're going to link webpack so that we can use it later:

```bash
yarn link
```

```bash
cd ..
yarn link webpack
```

Now, a *node_modules* has been generated, which means `webpack` is now accessible from *package.json*'s scripts.

## Creating a new example

If you want to debug a specific example, you can start off from the *examples/archetype* folder.

```
cp -r examples/archetype examples/your-interesting-example
```

Then, all you have to do is to adjust the *webpack.config.js* file accordingly.

## Debugging an example

In the *package.json* file from the root directory, modify the `explore` script so that its config path argument is the one of the targeted example:

```json
"scripts": {
  "explore": "webpack --config ./examples/$your-interesting-example/webpack.config.js"
},
```

Then, before starting the debugger, make sure to select the *Debugging webpack* configuration.

## Debugging webpack's tests

All that is to be done is to select the *Debugging webpack's tests* debug configuration file.