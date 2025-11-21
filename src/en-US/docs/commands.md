---
prev:
  text: 'Installation'
  link: '/docs/installation'
next: 
  text: 'Configuration'
  link: '/docs/configuration'
---

# Commands

The root command of SkLibrary is `/sklibrary`. `/skl` can be used as a shortcut.

## /sklibrary install \<module\> [\<version\>] [standalone]

Installs the specified module by its ID. (The module ID can be found at the top of each module's documentation page.)
If no version is specified, the latest version will be installed. 
If `standalone` is specified, the module will be installed as a [standalone](/docs/get-started/standalone) module.

## /sklibrary update (\<module\>|all) [\<version\>]

Updates the specified module by its ID. If `all` is specified, all installed modules will be updated.
If no version is specified, the latest version will be installed. (When updating all modules, each module will be updated to its latest version automatically.)

## /sklibrary installDependencies (\<module\>|all)

Installs all missing [dependencies](/docs/get-started/dependencies) for the specified module by its ID. 
If `all` is specified, all installed modules will be checked for missing dependencies.

## /sklibrary list

Lists all installed modules with their current version and dependencies.

## /sklibrary config \<setting\> [\<value\>]

Lets you view or modify the plugins [settings](/docs/configuration).
If no value is specified, the current value of the setting will be displayed.
If a value is specified, the setting will be modified to the new value.

## /sklibrary registries add (github) \<owner\> \<repository\>

> [!NOTE]
> For now only GitHub repositories are supported.

Adds a new [registry](/docs/get-started/registries) to SkLibrary.

## /sklibrary registries remove \<registry\>

Removes a specified [registry](/docs/get-started/registries) from SkLibrary.

## /sklibrary registries list

Lists all added [registries](/docs/get-started/registries) in SkLibrary.