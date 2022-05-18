// ==UserScript==
// @name         Redirect Common 404 Pages on Curseforge
// @namespace    http://github.com/NicholasDJM/RedirectCommon404PagesOnCurseForge
// @version      0.1
// @description  Some pages on CurseForge return a 404 page, when they should just return a list of mods.
// @author       Nicholas Miller
// @updateURL    https://raw.githubusercontent.com/NicholasDJM/RedirectCommon404PagesOnCurseForge/main/RedirectCommon404PagesOnCurseForge.user.js
// @downloadURL  https://raw.githubusercontent.com/NicholasDJM/RedirectCommon404PagesOnCurseForge/main/RedirectCommon404PagesOnCurseForge.user.js
// @run-at       document-start
// @match        https://www.curseforge.com/minecraft/mc-mods/
// @match        https://www.curseforge.com/minecraft/texture-packs/
// @match        https://www.curseforge.com/minecraft/worlds/
// @match        https://www.curseforge.com/minecraft/mc-addons/
// @match        https://www.curseforge.com/minecraft/customization/
// @match        https://www.curseforge.com/minecraft/bukkit-plugins/
// @match        https://www.curseforge.com/minecraft/modpacks/
// @icon         https://media.forgecdn.net/avatars/130/458/636460205549127215.png
// @grant        none
// ==/UserScript==
window.location.href = window.location.href.slice(0, window.location.href.length-1) // Remove the slash at the end of the string.
