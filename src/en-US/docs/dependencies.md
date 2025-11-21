---
prev:
  text: 'Standalone'
  link: '/docs/standalone'
next: 
  text: 'Registries'
  link: '/docs/registries'
---

# Dependencies

There are two types of dependencies:
1. **Addon dependencies** are Skript addons that are needed for a script to work. 
2. **Skript dependencies** are other scripts that are required for a script to function properly. 

You can find the dependencies of a script in its documentation page or in the script header of the script file itself.

A script header could look like this:

```skript
###
# 
# @name Test
# @version 0.0.1
# 
# @skriptDependency config 0.2.1
# @skriptDependency text 0.1.x
# @addonDependency skbee >=3.13.2
# 
###

command /test:
  trigger:
    ...
```

This example script requires the `config` and `text` scripts as Skript dependencies, and the `skbee` addon as an addon dependency.

The `config` script must be at least version `0.2.1`, the `text` script must be any version in the `0.1.x` range, and the `skbee` addon must be at least version `3.13.2`.

When installing or updating scripts using SkLibrary, you can choose to automatically install missing dependencies by enabling the `autoInstallDependencies` setting in the [configuration](/docs/configuration).
Alternatively, you can use the `/sklibrary installDependencies <module>|all` command to install missing dependencies for a specific script or for all installed scripts.