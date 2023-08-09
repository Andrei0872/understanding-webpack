# Understanding webpack

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