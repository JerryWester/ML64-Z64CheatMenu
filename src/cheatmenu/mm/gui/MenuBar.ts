import { IImGui } from 'modloader64_api/Sylvain/ImGui';
import * as Z64API from 'Z64Lib/API/imports';
import { renderLinkMenu } from './LinkMenu';
import { renderMiscMenu } from './MiscMenu';
import { renderConsumablesMenu } from './ConsumablesMenu';
import * as renderQuestItems from './Items/QuestItemsMenu';
import * as renderDungeonItems from './Items/DungeonItems';
import { renderCButtonItemMenu } from './Items/CButtonItemsMenu';
import { renderMasksMenu } from './Items/MaskMenu';
import IMemory from 'modloader64_api/IMemory';

export function renderMenuBar(core: Z64API.MM.IMMCore, emulator: IMemory, ImGui: IImGui) {

    if (ImGui.beginMainMenuBar()) {
        if (ImGui.beginMenu("Mods")) {
            if (ImGui.beginMenu("CheatMenu")) {
                if (ImGui.beginMenu("Link")) {
                    renderLinkMenu(core, ImGui);
                    ImGui.endMenu();
                }
                if (ImGui.beginMenu("Items")) {
                    if (ImGui.beginMenu("Equipment")) {
                        renderQuestItems.equipmentMenu(core, ImGui);
                        ImGui.endMenu();
                    }
                    if (ImGui.beginMenu("C-Button Items")) {
                        renderCButtonItemMenu(core, ImGui);
                        ImGui.endMenu();
                    }
                    if (ImGui.beginMenu("Masks")) {
                        renderMasksMenu(core, ImGui);
                        ImGui.endMenu();
                    }
                    if (ImGui.beginMenu("Quest Items")) {
                        if (ImGui.beginMenu("Dungeon Items")) {
                            if (ImGui.beginMenu("Woodfall")) {
                                renderDungeonItems.woodfall(core, ImGui);
                                ImGui.endMenu();
                            }
                            if (ImGui.beginMenu("Snowhead")) {
                                renderDungeonItems.snowhead(core, ImGui);
                                ImGui.endMenu();
                            }
                            if (ImGui.beginMenu("Great Bay")) {
                                renderDungeonItems.greatBay(core, ImGui);
                                ImGui.endMenu();
                            }
                            if (ImGui.beginMenu("Stone Tower")) {
                                renderDungeonItems.stoneTower(core, ImGui);
                                ImGui.endMenu();
                            }
                            ImGui.endMenu();
                        }
                        if (ImGui.beginMenu("Songs")) {
                            renderQuestItems.songsMenu(core, ImGui);
                            ImGui.endMenu();
                        }
                        if (ImGui.beginMenu("Boss Masks")) {
                            renderQuestItems.bossMasksMenu(core, ImGui);
                            ImGui.endMenu();
                        }
                        ImGui.endMenu();
                    }
                    ImGui.endMenu();
                }
                if (ImGui.beginMenu("Consumables")) {
                    renderConsumablesMenu(core, ImGui);
                    ImGui.endMenu();
                }
                if (ImGui.beginMenu("Misc")) {
                    renderMiscMenu(core, emulator, ImGui)
                    ImGui.endMenu();
                }
                ImGui.endMenu();
            }
            ImGui.endMenu();
        }
        ImGui.endMainMenuBar();
    }

}