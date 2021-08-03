import { IImGui, ComboFlags, number_ref } from "modloader64_api/Sylvain/ImGui";
import * as Z64API from 'Z64Lib/API/imports';

export function renderEquipmentMenu(core: Z64API.OoT.IOOTCore, ImGui: IImGui){
    if (ImGui.beginCombo("Sword", "", ComboFlags.NoPreview)) {
        if (ImGui.selectable("Kokiri Sword", core.save.swords.kokiriSword === Z64API.Z64.Sword.KOKIRI_OOT)) {
            core.save.swords.kokiriSword = Z64API.Z64.Sword.KOKIRI_OOT;
        }
        if (ImGui.selectable("Master Sword", core.save.swords.masterSword === Z64API.Z64.Sword.MASTER)) {
            core.save.swords.masterSword = Z64API.Z64.Sword.MASTER;
        }
        if (ImGui.selectable("Giant's Knife", core.save.swords.giantKnife === Z64API.Z64.Sword.GIANT_KNIFE)) {
            core.save.swords.giantKnife = Z64API.Z64.Sword.GIANT_KNIFE;
        }
        if (ImGui.selectable("Biggoron Sword", core.save.swords.biggoronSword === Z64API.Z64.Sword.BIGGORON)) {
            core.save.swords.biggoronSword = Z64API.Z64.Sword.BIGGORON;
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Shields", "", ComboFlags.NoPreview)) {
        if (ImGui.selectable("Deku Shield", core.save.shields.dekuShield === Z64API.Z64.Shield.DEKU)) {
            core.save.shields.dekuShield = Z64API.Z64.Shield.DEKU;
        }
        if (ImGui.selectable("Hylian Shield", core.save.shields.hylianShield === Z64API.Z64.Shield.HYLIAN)) {
            core.save.shields.hylianShield = Z64API.Z64.Shield.HYLIAN;
        }
        if (ImGui.selectable("Mirror Shield", core.save.shields.mirrorShield === Z64API.Z64.Shield.MIRROR_OOT)) {
            core.save.shields.mirrorShield = Z64API.Z64.Shield.MIRROR_OOT;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Tunics", "", ComboFlags.NoPreview)){
        if(ImGui.checkbox("Kokiri Tunic", [core.save.tunics.kokiriTunic])){
            core.save.tunics.kokiriTunic = !core.save.tunics.kokiriTunic;
        }
        if(ImGui.checkbox("Goron Tunic", [core.save.tunics.goronTunic])){
            core.save.tunics.goronTunic = !core.save.tunics.goronTunic;
        }
        if(ImGui.checkbox("Zora Tunic", [core.save.tunics.zoraTunic])){
            core.save.tunics.zoraTunic = !core.save.tunics.zoraTunic;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Boots", "", ComboFlags.NoPreview)){
        if(ImGui.checkbox("Kokiri Boots", [core.save.boots.kokiriBoots])){
            core.save.boots.kokiriBoots = !core.save.boots.kokiriBoots;
        }
        if(ImGui.checkbox("Iron Boots", [core.save.boots.ironBoots])){
            core.save.boots.ironBoots = !core.save.boots.ironBoots;
        }
        if(ImGui.checkbox("Hover Boots", [core.save.boots.hoverBoots])){
            core.save.boots.hoverBoots = !core.save.boots.hoverBoots;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Wallet", "", ComboFlags.NoPreview)){
        let wallet: number_ref = [core.save.inventory.wallet];
        if(ImGui.sliderInt("##wallet", wallet, 0, 3)){
            core.save.inventory.wallet = wallet[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Deku Sticks Capacity", "", ComboFlags.NoPreview)){
        let dekuSticksCapacity: number_ref = [core.save.inventory.dekuSticksCapacity];
        if(ImGui.sliderInt("##dekuSticksCapacity", dekuSticksCapacity, 0, 3)){
            core.save.inventory.dekuSticksCapacity = dekuSticksCapacity[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Deku Nuts Capacity", "", ComboFlags.NoPreview)){
        let dekuNutsCapacity: number_ref = [core.save.inventory.dekuNutsCapacity];
        if(ImGui.sliderInt("##dekuNutsCapacity", dekuNutsCapacity, 0, 3)){
            core.save.inventory.dekuNutsCapacity = dekuNutsCapacity[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bullet Bag", "", ComboFlags.NoPreview)){
        let bulletBag: number_ref = [core.save.inventory.bulletBag];
        if(ImGui.sliderInt("##bulletBag", bulletBag, 0, 3)){
            core.save.inventory.bulletBag = bulletBag[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bomb Bag", "", ComboFlags.NoPreview)){
        let bombBag: number_ref = [core.save.inventory.bombBag];
        if(ImGui.sliderInt("##bombBag", bombBag, 0, 3)){
            core.save.inventory.bombBag = bombBag[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Quiver", "", ComboFlags.NoPreview)){
        let quiver: number_ref = [core.save.inventory.quiver];
        if(ImGui.sliderInt("##quiver", quiver, 0, 3)){
            core.save.inventory.quiver = quiver[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Gauntlet", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("None", core.save.inventory.strength === Z64API.OoT.Strength.NONE)){
            core.save.inventory.strength = Z64API.OoT.Strength.NONE;
        }
        if(ImGui.selectable("Goron Bracelet", core.save.inventory.strength === Z64API.OoT.Strength.GORON_BRACELET)){
            core.save.inventory.strength = Z64API.OoT.Strength.GORON_BRACELET;
        }
        if(ImGui.selectable("Silver Gauntlets", core.save.inventory.strength === Z64API.OoT.Strength.SILVER_GAUNTLETS)){
            core.save.inventory.strength = Z64API.OoT.Strength.SILVER_GAUNTLETS;
        }
        if(ImGui.selectable("Golden Gauntlets", core.save.inventory.strength === Z64API.OoT.Strength.GOLDEN_GAUNTLETS)){
            core.save.inventory.strength = Z64API.OoT.Strength.GOLDEN_GAUNTLETS;
        }
        // if(ImGui.selectable("Black Gauntlets", core.save.inventory.strength === Strength.BLACK_GAUNTLETS)){
        //     core.save.inventory.strength = Strength.BLACK_GAUNTLETS;
        // }
        // if(ImGui.selectable("Green Gauntlets", core.save.inventory.strength === Strength.GREEN_GAUNTLETS)){
        //     core.save.inventory.strength = Strength.GREEN_GAUNTLETS;
        // }
        // if(ImGui.selectable("Blue Gauntlets", core.save.inventory.strength === Strength.BLUE_GAUNTLETS)){
        //     core.save.inventory.strength = Strength.BLUE_GAUNTLETS;
        // }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Scale", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("None", core.save.inventory.swimming === Z64API.OoT.ZoraScale.NONE)){
            core.save.inventory.swimming = Z64API.OoT.ZoraScale.NONE;
        }
        if(ImGui.selectable("Silver Scale", core.save.inventory.swimming === Z64API.OoT.ZoraScale.SILVER)){
            core.save.inventory.swimming = Z64API.OoT.ZoraScale.SILVER;
        }
        if(ImGui.selectable("Golden Scale", core.save.inventory.swimming === Z64API.OoT.ZoraScale.GOLDEN)){
            core.save.inventory.swimming = Z64API.OoT.ZoraScale.GOLDEN;
        }
        ImGui.endCombo();
    }
}