// Layout from left to rigth: kickoff, window control, app title, global menu, (spacer), calendar, (spacer), desktop, system tray

// Requires:
// * Window Buttons Applet (org.kde.windowbuttons): https://github.com/psifidotos/applet-window-buttons
// * Application Title (org.communia.apptitle): https://store.kde.org/p/1199712/
// * Better Inline Clock (org.kde.plasma.betterinlineclock): https://store.kde.org/p/1245902/
// * Panel Transparency Button (org.kde.paneltransparencybutton): https://store.kde.org/p/1338479/

// Panel instantiation & setup
var panel = new Panel();
panel.location = "top";
panel.height = Math.round(gridUnit * 1.5);

////////////////////////////////////////////////////////
// kicker cascading Menu
////////////////////////////////////////////////////////
var kicker = panel.addWidget("org.kde.plasma.kicker");
kicker.currentConfigGroup = ["Shortcuts"];
kicker.writeConfig("global", "Alt+F1");

////////////////////////////////////////////////////////
// Left group
////////////////////////////////////////////////////////

// * Window control button
var windowbuttons = panel.addWidget("org.kde.windowbuttons");
windowbuttons.currentConfigGroup = ["General"];
windowbuttons.writeConfig("buttonSizePercentage", 60);
windowbuttons.writeConfig("spacing", 5);
windowbuttons.writeConfig("visibility", "ActiveMaximizedWindow");

// * Window title
var apptitle = panel.addWidget("org.communia.apptitle");
apptitle.currentConfigGroup = ["General"];
apptitle.writeConfig("noWindowType", "text");
apptitle.writeConfig("noWindowText", "Plasma Desktop");
apptitle.writeConfig("textType", 1);

// * Application global menu
var appmenu = panel.addWidget("org.kde.plasma.appmenu");

////////////////////////////////////////////////////////
// Calendar & time widget aligned to center
////////////////////////////////////////////////////////

// * Left Spacer
panel.addWidget("org.kde.plasma.panelspacer");

// * Calendar & Time widget
var datewidget = panel.addWidget("org.kde.plasma.betterinlineclock");
datewidget.currentConfigGroup = ["Appearance"];
datewidget.writeConfig("showSeparator", "false");
datewidget.writeConfig("fixedFont", "true");
datewidget.writeConfig("fontSize", 12);
datewidget.writeConfig("dateFormat", "customDate");
datewidget.writeConfig("customDateFormat", "dddd, d MMMM 202-  "); // Feel free to modify this format
datewidget.writeConfig("showWeekNumbers", "true");
// Enable calendar plugins: holiday and astronomical events.
datewidget.writeConfig("enabledCalendarPlugins", "/usr/lib/qt/plugins/plasmacalendarplugins/holidaysevents.so,/usr/lib/qt/plugins/plasmacalendarplugins/astronomicalevents.so");

// * Right Spacer
panel.addWidget("org.kde.plasma.panelspacer");

////////////////////////////////////////////////////////
// Right group
////////////////////////////////////////////////////////

// * Show Desktop widget
var desktopwidget = panel.addWidget("org.kde.plasma.minimizeall");
desktopwidget.currentConfigGroup = ["Shortcuts"];
desktopwidget.writeConfig("global", "Meta+M");  // Shortcut to toggle minimize all windows

// * System tray
var tray = panel.addWidget("org.kde.plasma.private.systemtray");
tray.currentConfigGroup ["General"];
tray.writeConfig("scaleIconsToFit", "true");

// * Misc: transparency toggle (hidden)
var transparencytoggle = panel.addWidget("org.kde.paneltransparencybutton");
transparencytoggle.currentConfigGroup = ["Shortcuts"];
transparencytoggle.writeConfig("global", "Alt+Shift+T");  // use this key to toggle panel transparency