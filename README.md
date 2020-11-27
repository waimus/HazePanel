# Haze Panel

[![GPLv3 License](https://img.shields.io/github/license/waimus/HazePanel?label=License&logo=gnu)](https://www.gnu.org/licenses/gpl-3.0.en.html)
![Size](https://img.shields.io/github/repo-size/waimus/HazePanel?color=green&label=Repository%20Size&logo=github)

Custom Plasma Desktop panel contains several preconfigured plasmoids.</br>

I wanted to save my customized panel and to be able to add it to a desktop with one click. I made this from available built-in templates by Plasma desktop installation in `/usr/share/plasma/layout-templates/` folder.</br>

I simply call it "Haze" because of my desktop wallpaper colour I'm using at the moment of making this.

## Images
<img src="./img/1-empty.png" align="center"></br>
> No window on desktop.</br>

<img src="./img/2-floating.png" align="center"></br>
> Active floating window.</br>

<img src="./img/3-full.png" align="center"></br>
> Maximized window with global menu.</br>

<img src="./img/4-fullnomenu.png" align="center"></br>
> Maximized window with no global menu.</br>

## Requirements
This panel uses following external plasmoid widgets:

Plasmoid                                                        | Get from
----------------------------------------------------------------|------------
**Window Buttons Applet** (org.kde.windowbuttons)               | https://github.com/psifidotos/applet-window-buttons
**Application Title** (org.communia.apptitle)                   | https://store.kde.org/p/1199712/
**Better Inline Clock** (org.kde.plasma.betterinlineclock)      | https://store.kde.org/p/1245902/
**Panel Transparency Button** (org.kde.paneltransparencybutton) | https://store.kde.org/p/1338479/</br>

Please make sure they are installed before adding Haze Panel.

## Installation

![path](https://img.shields.io/badge/Installation%20path-~%2F.local%2Fshare%2Fplasma%2Flayout--templates%2F-blue)

Simply place the `org.kde.plasma.desktop.hazePanel` folder to `~/.local/share/plasma/layout-templates/`. Then you can add the panel from desktop. Create `layout-templates` directory if it doesn't exist.</br>
</br>
Feel free to customize the setting from what I've set. Like the calendar formatting I personally set to `dddd, d MMMM 202-` because it's been 2- years since the Black Mesa Incident :D
