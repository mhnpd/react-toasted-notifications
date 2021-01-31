1. @babel/core:
   - the core functionality of babel resides inside this module.
2. @babel/cli
   - tool to allow use babel from terminal.
   - --out-dir <location>
   - `./node_modules/.bin/babel src --out-dir lib`
3. @babel/preset-env
   - default babel preset.
   - it also take various configuration.

Rather then passing the options from cli, let's look into the
another way of passing options:

- `configuration files`

## How to configure babel using `babel.config.json`

- babel recommend using `babel.config.json`
- create a file called `babel.config.json` in the root of the project.
  ```json
    {
      "presets":[...],
      "plugins":[...]
    }
  ```
