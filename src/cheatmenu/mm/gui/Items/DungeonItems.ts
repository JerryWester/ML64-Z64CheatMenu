import * as Z64API from 'Z64Lib/API/imports';
import { Z64_SAVE } from 'Z64Lib/src/Common/types/GameAliases'
import IMemory from "modloader64_api/IMemory";
import { bool_ref, ComboFlags, IImGui, number_ref } from "modloader64_api/Sylvain/ImGui";

export function woodfall(core: Z64API.MM.IMMCore, ImGui: IImGui) {
    if (ImGui.checkbox("Map", [core.save.dungeonItemManager.WOODFALL_TEMPLE.map])) {
        core.save.dungeonItemManager.WOODFALL_TEMPLE.map = !core.save.dungeonItemManager.WOODFALL_TEMPLE.map;
    }
    if (ImGui.checkbox("Compass", [core.save.dungeonItemManager.WOODFALL_TEMPLE.compass])) {
        core.save.dungeonItemManager.WOODFALL_TEMPLE.compass = !core.save.dungeonItemManager.WOODFALL_TEMPLE.compass;
    }
    if (ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.WOODFALL_TEMPLE.bossKey])) {
        core.save.dungeonItemManager.WOODFALL_TEMPLE.bossKey = !core.save.dungeonItemManager.WOODFALL_TEMPLE.bossKey;
    }
    if (ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)) {
        let woodfallTempleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(Z64API.MM.VANILLA_KEY_INDEXES.WOODFALL_TEMPLE)];
        if (ImGui.sliderInt("##woodfallTempleKeys", woodfallTempleKeys, 0, 9)) {
            core.save.keyManager.setKeyCountByIndex(Z64API.MM.VANILLA_KEY_INDEXES.WOODFALL_TEMPLE, woodfallTempleKeys[0]);
        }
        ImGui.endCombo();
    }
}

export function snowhead(core: Z64API.MM.IMMCore, ImGui: IImGui) {
    if (ImGui.checkbox("Map", [core.save.dungeonItemManager.SNOWHEAD_TEMPLE.map])) {
        core.save.dungeonItemManager.SNOWHEAD_TEMPLE.map = !core.save.dungeonItemManager.SNOWHEAD_TEMPLE.map;
    }
    if (ImGui.checkbox("Compass", [core.save.dungeonItemManager.SNOWHEAD_TEMPLE.compass])) {
        core.save.dungeonItemManager.SNOWHEAD_TEMPLE.compass = !core.save.dungeonItemManager.SNOWHEAD_TEMPLE.compass;
    }
    if (ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.SNOWHEAD_TEMPLE.bossKey])) {
        core.save.dungeonItemManager.SNOWHEAD_TEMPLE.bossKey = !core.save.dungeonItemManager.SNOWHEAD_TEMPLE.bossKey;
    }
    if (ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)) {
        let snowheadTempleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(Z64API.MM.VANILLA_KEY_INDEXES.SNOWHEAD_TEMPLE)];
        if (ImGui.sliderInt("##snowheadTempleKeys", snowheadTempleKeys, 0, 9)) {
            core.save.keyManager.setKeyCountByIndex(Z64API.MM.VANILLA_KEY_INDEXES.SNOWHEAD_TEMPLE, snowheadTempleKeys[0]);
        }
        ImGui.endCombo();
    }
}

export function greatBay(core: Z64API.MM.IMMCore, ImGui: IImGui) {
    if (ImGui.checkbox("Map", [core.save.dungeonItemManager.GREAT_BAY_TEMPLE.map])) {
        core.save.dungeonItemManager.GREAT_BAY_TEMPLE.map = !core.save.dungeonItemManager.GREAT_BAY_TEMPLE.map;
    }
    if (ImGui.checkbox("Compass", [core.save.dungeonItemManager.GREAT_BAY_TEMPLE.compass])) {
        core.save.dungeonItemManager.GREAT_BAY_TEMPLE.compass = !core.save.dungeonItemManager.GREAT_BAY_TEMPLE.compass;
    }
    if (ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.GREAT_BAY_TEMPLE.bossKey])) {
        core.save.dungeonItemManager.GREAT_BAY_TEMPLE.bossKey = !core.save.dungeonItemManager.GREAT_BAY_TEMPLE.bossKey;
    }
    if (ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)) {
        let greatbayTempleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(Z64API.MM.VANILLA_KEY_INDEXES.GREAT_BAY_TEMPLE)];
        if (ImGui.sliderInt("##greatbayTempleKeys", greatbayTempleKeys, 0, 9)) {
            core.save.keyManager.setKeyCountByIndex(Z64API.MM.VANILLA_KEY_INDEXES.GREAT_BAY_TEMPLE, greatbayTempleKeys[0]);
        }
        ImGui.endCombo();
    }
}

export function stoneTower(core: Z64API.MM.IMMCore, ImGui: IImGui) {
    if (ImGui.checkbox("Map", [core.save.dungeonItemManager.STONE_TOWER_TEMPLE.map])) {
        core.save.dungeonItemManager.STONE_TOWER_TEMPLE.map = !core.save.dungeonItemManager.STONE_TOWER_TEMPLE.map;
    }
    if (ImGui.checkbox("Compass", [core.save.dungeonItemManager.STONE_TOWER_TEMPLE.compass])) {
        core.save.dungeonItemManager.STONE_TOWER_TEMPLE.compass = !core.save.dungeonItemManager.STONE_TOWER_TEMPLE.compass;
    }
    if (ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.STONE_TOWER_TEMPLE.bossKey])) {
        core.save.dungeonItemManager.STONE_TOWER_TEMPLE.bossKey = !core.save.dungeonItemManager.STONE_TOWER_TEMPLE.bossKey;
    }
    if (ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)) {
        let stonetowerTempleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(Z64API.MM.VANILLA_KEY_INDEXES.STONE_TOWER_TEMPLE)];
        if (ImGui.sliderInt("##stonetowerTempleKeys", stonetowerTempleKeys, 0, 9)) {
            core.save.keyManager.setKeyCountByIndex(Z64API.MM.VANILLA_KEY_INDEXES.STONE_TOWER_TEMPLE, stonetowerTempleKeys[0]);
        }
        ImGui.endCombo();
    }
}
