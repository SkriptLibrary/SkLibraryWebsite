---
prev:
  text: 'Dependencies'
  link: '/docs/dependencies'
next: 
  text: 'Modules'
  link: '/docs/modules'
---

# Registries

Registries are a way to upload and share your own Skripts and download them with the SkLibrary plugin.


## Adding a Registry

To add a registry you can either use the [`/sklibrary registries add`](/docs/commands#sklibrary-registries-add-github-owner-repository) command or
add it manually to the configuration file located at `plugins/SkLibrary/config.yml`.

```yaml
registries:
  - github:skriptlibrary/sklibrary
  - github:owner/repository
```

## Creating a Registry

Creating a registry is pretty simple. 

> [!NOTE]
> For now only GitHub repositories are supported.

1. Create a new GitHub repository.
2. Create a file called `index` in the root of your repository.
3. Create a folder called modules in the root of your repository.


## Create a Module

1. In the `modules` folder, create a new folder with the module ID as its name.
   (The module ID should be unique and can only contain lowercase letters, numbers, hyphens and underscores.)
2. In the module folder, create a new file called `<module id>.sk`.
3. Add the module header to the top of the file. The module header should look like this:

   ```skript
   ###
   #
   # @name Module Name
   # @version 0.0.1
   #
   ###
   ```
   
4. Add your Skript code below the module header.
5. Add the module's id to the `index` file. Each module id should be on a new line. For example:

   ```
   test-module
   another-module
   ```
6. Commit and push your changes to GitHub.
7. Your module is now ready to be installed using SkLibrary!