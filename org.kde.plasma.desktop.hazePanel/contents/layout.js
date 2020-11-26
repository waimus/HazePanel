// Layout from left to rigth: kickoff, window control, app title, global menu, (spacer), calendar, (spacer), desktop, system tray

// Requires:
// * Window Buttons Applet (org.kde.windowbuttons): https://github.com/psifidotos/applet-window-buttons
// * Application Title (org.communia.apptitle): https://store.kde.org/p/1199712/
// * Better Inline Clock (org.kde.plasma.betterinlineclock): https://store.kde.org/p/1245902/
// * Panel Transparency Button (org.kde.paneltransparencybutton): https://store.kde.org/p/1338479/

var panel = new Panel
panel.location = "top";
panel.height = Math.round(gridUnit * 1.5);

////////////////////////////////////////////////////////
// Kickoff Menu
////////////////////////////////////////////////////////
var kickoff = panel.addWidget("org.kde.plasma.kickoff")
kickoff.currentConfigGroup = ["Shortcuts"]
kickoff.writeConfig("global", "Alt+F1")

////////////////////////////////////////////////////////
// Group 1
////////////////////////////////////////////////////////

// Window control button
var windowbuttons = panel.addWidget("org.kde.windowbuttons")
windowbuttons.currentConfigGroup = ["General"]
windowbuttons.writeConfig("buttonSizePercentage", 60)
windowbuttons.writeConfig("spacing", 5)
windowbuttons.writeConfig("visibility", "ActiveMaximizedWindow")

// Window title
var apptitle = panel.addWidget("org.communia.apptitle")
apptitle.currentConfigGroup = ["General"]
apptitle.writeConfig("noWindowType", "text")
apptitle.writeConfig("noWindowText", "Plasma Desktop")
apptitle.writeConfig("textType", 1)

// Application global menu
var appmenu = panel.addWidget("org.kde.plasma.appmenu")

// if uses "org.kde.windowappmenu", uncomment these lines for customized configuration
// but may not work properly since we'll add a spacer next to this widget. 
// get "org.kde.windowappmenu" from https://github.com/psifidotos/applet-window-appmenu 
//appmenu.currentConfigGroup = ["General"]
//appmenu.writeConfig("fillWidth", "true")
//appmenu.writeConfig("toggleMaximizedOnDoubleClick", "true");


////////////////////////////////////////////////////////
// Calendar & time widget aligned to center
////////////////////////////////////////////////////////

// Left Spacer
panel.addWidget("org.kde.plasma.panelspacer")

// Calendar & Time widget
var datewidget = panel.addWidget("org.kde.plasma.betterinlineclock")
datewidget.currentConfigGroup = ["Appearance"]
datewidget.writeConfig("showSeparator", "false")
datewidget.writeConfig("fixedFont", "true")
datewidget.writeConfig("fontSize", 12)
datewidget.writeConfig("dateFormat", "customDate")
datewidget.writeConfig("customDateFormat", "dddd, d MMMM 202-  ") // Feel free to modify this format

// Right Spacer
panel.addWidget("org.kde.plasma.panelspacer")

////////////////////////////////////////////////////////
// Group 2
////////////////////////////////////////////////////////

// Show Desktop widget
var desktopwidget = panel.addWidget("org.kde.plasma.minimizeall")
desktopwidget.currentConfigGroup = ["Shortcuts"]
desktopwidget.writeConfig("global", "Metal+M")

// System tray
var tray = panel.addWidget("org.kde.plasma.private.systemtray")
tray.currentConfigGroup ["General"]
tray.writeConfig("scaleIconsToFit", "true")

// Misc: transparency toggle (hidden)
var transparencytoggle = panel.addWidget("org.kde.paneltransparencybutton")
transparencytoggle.currentConfigGroup = ["Shortcuts"]
transparencytoggle.writeConfig("global", "Alt+Shift+T")