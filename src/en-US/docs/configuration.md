---
prev:
  text: 'Commands'
  link: '/docs/commands'
next: 
  text: 'Standalone'
  link: '/docs/standalone'
---

# Configuration

The configuration can be modified by editing the config file located at `plugins/SkLibrary/config.yml`.<br>
Or you can use [commands](/docs/commands#sklibrary-config-setting-value) to modify settings in-game.

## Settings

| Setting                   | Type    | Default                          | Description                                                                                                                                                      |
|---------------------------|---------|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `autoInstallDependencies` | Boolean | `true`                           | If enabled, missing [dependencies](/docs/dependencies) will be installed automatically when installing or updating modules.                                      |
| `checkForUpdates`         | Boolean | `true`                           | If enabled, SkLibrary will check for updates for itself and installed modules on server startup.                                                                 |
| `updateNotifications`     | Boolean | `true`                           | If enabled, players with the `sklibrary.notify` permission will receive a notification in-game when an update for SkLibrary or an installed module is available. |
| `registries`              | Array   | `github:skriptlibrary/sklibrary` | A list of [registries](/docs/registries) where SkLibrary will look for modules and dependencies.                                                                 |