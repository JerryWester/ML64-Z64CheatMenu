import * as Z64API from 'Z64Lib/API/imports';
import { IImGui, ComboFlags } from "modloader64_api/Sylvain/ImGui";

export function renderCButtonItemMenu(core: Z64API.OoT.IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Deku Stick", [core.save.inventory.dekuSticks])){
        core.save.inventory.dekuSticks = !core.save.inventory.dekuSticks;
        if(core.save.inventory.dekuSticksCapacity === Z64API.Z64.AmmoUpgrade.NONE){
            core.save.inventory.dekuSticksCapacity = Z64API.Z64.AmmoUpgrade.BASE;
        }
    }
    if(ImGui.checkbox("Deku Nuts", [core.save.inventory.dekuNuts])){
        core.save.inventory.dekuNuts = !core.save.inventory.dekuNuts;
        if(core.save.inventory.dekuNutsCapacity === Z64API.Z64.AmmoUpgrade.NONE){
            core.save.inventory.dekuNutsCapacity = Z64API.Z64.AmmoUpgrade.BASE;
        }
    }
    if(ImGui.checkbox("Fairy Slingshot", [core.save.inventory.fairySlingshot])){
        core.save.inventory.fairySlingshot = !core.save.inventory.fairySlingshot;
        if(core.save.inventory.bulletBag === Z64API.Z64.AmmoUpgrade.NONE){
            core.save.inventory.bulletBag = Z64API.Z64.AmmoUpgrade.BASE;
        }
    }
    if(ImGui.beginCombo("Ocarina", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("No Ocarina", core.save.inventory.ocarina === Z64API.Z64.Ocarina.NONE)){
            core.save.inventory.ocarina = Z64API.Z64.Ocarina.NONE;
        }
        if(ImGui.selectable("Fairy Ocarina", core.save.inventory.ocarina === Z64API.Z64.Ocarina.FAIRY_OCARINA)){
            core.save.inventory.ocarina = Z64API.Z64.Ocarina.FAIRY_OCARINA;
        }
        if(ImGui.selectable("Ocarina of Time", core.save.inventory.ocarina === Z64API.Z64.Ocarina.OCARINA_OF_TIME)){
            core.save.inventory.ocarina = Z64API.Z64.Ocarina.OCARINA_OF_TIME;
        }
        ImGui.endCombo();
    }
    if(ImGui.checkbox("Bombs", [core.save.inventory.bombs])){
        core.save.inventory.bombs = !core.save.inventory.bombs;
        if(core.save.inventory.bombBag === Z64API.Z64.AmmoUpgrade.NONE){
            core.save.inventory.bombBag = Z64API.Z64.AmmoUpgrade.BASE;
        }
    }
    if(ImGui.checkbox("Bombchus", [core.save.inventory.bombchus])){
        core.save.inventory.bombchus = !core.save.inventory.bombchus;
    }
    if(ImGui.checkbox("Boomerang", [core.save.inventory.boomerang])){
        core.save.inventory.boomerang = !core.save.inventory.boomerang;
    }
    if(ImGui.checkbox("Lens of Truth", [core.save.inventory.lensOfTruth])){
        core.save.inventory.lensOfTruth = !core.save.inventory.lensOfTruth;
    }
    if(ImGui.checkbox("Magic Beans", [core.save.inventory.magicBeans])){
        core.save.inventory.magicBeans = !core.save.inventory.magicBeans;
    }
    if(ImGui.beginCombo("Hookshot", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("No Hookshot", core.save.inventory.hookshot === Z64API.OoT.Hookshot.NONE)){
            core.save.inventory.hookshot = Z64API.OoT.Hookshot.NONE;
        }
        if(ImGui.selectable("Hookshot", core.save.inventory.hookshot === Z64API.OoT.Hookshot.HOOKSHOT)){
            core.save.inventory.hookshot = Z64API.OoT.Hookshot.HOOKSHOT;
        }
        if(ImGui.selectable("Longshot", core.save.inventory.hookshot === Z64API.OoT.Hookshot.LONGSHOT)){
            core.save.inventory.hookshot = Z64API.OoT.Hookshot.LONGSHOT;
        }
        ImGui.endCombo();
    }
    if(ImGui.checkbox("Fairy Bow", [core.save.inventory.fairyBow])){
        core.save.inventory.fairyBow = !core.save.inventory.fairyBow;
        if(core.save.inventory.quiver === Z64API.Z64.AmmoUpgrade.NONE){
            core.save.inventory.quiver = Z64API.Z64.AmmoUpgrade.BASE;
        }
    }
    if(ImGui.beginCombo("Arrows", "", ComboFlags.NoPreview)){
        if(ImGui.checkbox("Fire", [core.save.inventory.fireArrows])){
            core.save.inventory.fireArrows = !core.save.inventory.fireArrows;
        }
        if(ImGui.checkbox("Ice", [core.save.inventory.iceArrows])){
            core.save.inventory.iceArrows = !core.save.inventory.iceArrows;
        }
        if(ImGui.checkbox("Light", [core.save.inventory.lightArrows])){
            core.save.inventory.lightArrows = !core.save.inventory.lightArrows;
        }
        ImGui.endCombo();
    }
    if(ImGui.checkbox("Megaton Hammer", [core.save.inventory.megatonHammer])){
        core.save.inventory.megatonHammer = !core.save.inventory.megatonHammer;
    }
    if(ImGui.beginCombo("Fairy Blessings", "", ComboFlags.NoPreview)){
        if(ImGui.checkbox("Din's Fire", [core.save.inventory.dinsFire])){
            core.save.inventory.dinsFire = !core.save.inventory.dinsFire;
        }
        if(ImGui.checkbox("Farore's Wind", [core.save.inventory.faroresWind])){
            core.save.inventory.faroresWind = !core.save.inventory.faroresWind;
        }
        if(ImGui.checkbox("Nayru's Love", [core.save.inventory.nayrusLove])){
            core.save.inventory.nayrusLove = !core.save.inventory.nayrusLove;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bottles", "", ComboFlags.NoPreview)){
        if(ImGui.beginCombo("Bottle 1", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.bottle_1 === Z64API.OoT.InventoryItem.NONE)){
                core.save.inventory.bottle_1 = Z64API.OoT.InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.bottle_1 === Z64API.OoT.InventoryItem.EMPTY_BOTTLE)){
                core.save.inventory.bottle_1 = Z64API.OoT.InventoryItem.EMPTY_BOTTLE;
            }
            if(ImGui.selectable("Green Potion", core.save.inventory.bottle_1 === Z64API.OoT.InventoryItem.GREEN_POTION)){
                core.save.inventory.bottle_1 = Z64API.OoT.InventoryItem.GREEN_POTION;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.bottle_1 === Z64API.OoT.InventoryItem.RED_POTION)){
                core.save.inventory.bottle_1 = Z64API.OoT.InventoryItem.RED_POTION;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.bottle_1 === Z64API.OoT.InventoryItem.BLUE_POTION)){
                core.save.inventory.bottle_1 = Z64API.OoT.InventoryItem.BLUE_POTION;
            }
            if(ImGui.selectable("Lon Lon Milk", core.save.inventory.bottle_1 === Z64API.OoT.InventoryItem.LON_LON_MILK)){
                core.save.inventory.bottle_1 = Z64API.OoT.InventoryItem.LON_LON_MILK;
            }
            if(ImGui.selectable("Lon Lon Milk (Half)", core.save.inventory.bottle_1 === Z64API.OoT.InventoryItem.LON_LON_MILK_HALF)){
                core.save.inventory.bottle_1 = Z64API.OoT.InventoryItem.LON_LON_MILK_HALF;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.bottle_1 === Z64API.OoT.InventoryItem.BOTTLED_FAIRY)){
                core.save.inventory.bottle_1 = Z64API.OoT.InventoryItem.BOTTLED_FAIRY;
            }
            if(ImGui.selectable("Bugs", core.save.inventory.bottle_1 === Z64API.OoT.InventoryItem.BOTTLED_BUGS)){
                core.save.inventory.bottle_1 = Z64API.OoT.InventoryItem.BOTTLED_BUGS;
            }
            if(ImGui.selectable("Fish", core.save.inventory.bottle_1 === Z64API.OoT.InventoryItem.BOTTLED_FISH)){
                core.save.inventory.bottle_1 = Z64API.OoT.InventoryItem.BOTTLED_FISH;
            }
            if(ImGui.selectable("Poe Spirit", core.save.inventory.bottle_1 === Z64API.OoT.InventoryItem.BOTTLED_POE)){
                core.save.inventory.bottle_1 = Z64API.OoT.InventoryItem.BOTTLED_POE;
            }
            if(ImGui.selectable("Big Poe Spirit", core.save.inventory.bottle_1 === Z64API.OoT.InventoryItem.BOTTLED_BIG_POE)){
                core.save.inventory.bottle_1 = Z64API.OoT.InventoryItem.BOTTLED_BIG_POE;
            }
            if(ImGui.selectable("Blue Fire", core.save.inventory.bottle_1 === Z64API.OoT.InventoryItem.BLUE_FIRE)){
                core.save.inventory.bottle_1 = Z64API.OoT.InventoryItem.BLUE_FIRE;
            }
            if(ImGui.selectable("Ruto's Letter", core.save.inventory.bottle_1 === Z64API.OoT.InventoryItem.RUTOS_LETTER)){
                core.save.inventory.bottle_1 = Z64API.OoT.InventoryItem.RUTOS_LETTER;
            }
            ImGui.endCombo();
        }
        if(ImGui.beginCombo("Bottle 2", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.bottle_2 === Z64API.OoT.InventoryItem.NONE)){
                core.save.inventory.bottle_2 = Z64API.OoT.InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.bottle_2 === Z64API.OoT.InventoryItem.EMPTY_BOTTLE)){
                core.save.inventory.bottle_2 = Z64API.OoT.InventoryItem.EMPTY_BOTTLE;
            }
            if(ImGui.selectable("Green Potion", core.save.inventory.bottle_2 === Z64API.OoT.InventoryItem.GREEN_POTION)){
                core.save.inventory.bottle_2 = Z64API.OoT.InventoryItem.GREEN_POTION;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.bottle_2 === Z64API.OoT.InventoryItem.RED_POTION)){
                core.save.inventory.bottle_2 = Z64API.OoT.InventoryItem.RED_POTION;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.bottle_2 === Z64API.OoT.InventoryItem.BLUE_POTION)){
                core.save.inventory.bottle_2 = Z64API.OoT.InventoryItem.BLUE_POTION;
            }
            if(ImGui.selectable("Lon Lon Milk", core.save.inventory.bottle_2 === Z64API.OoT.InventoryItem.LON_LON_MILK)){
                core.save.inventory.bottle_2 = Z64API.OoT.InventoryItem.LON_LON_MILK;
            }
            if(ImGui.selectable("Lon Lon Milk (Half)", core.save.inventory.bottle_2 === Z64API.OoT.InventoryItem.LON_LON_MILK_HALF)){
                core.save.inventory.bottle_2 = Z64API.OoT.InventoryItem.LON_LON_MILK_HALF;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.bottle_2 === Z64API.OoT.InventoryItem.BOTTLED_FAIRY)){
                core.save.inventory.bottle_2 = Z64API.OoT.InventoryItem.BOTTLED_FAIRY;
            }
            if(ImGui.selectable("Bugs", core.save.inventory.bottle_2 === Z64API.OoT.InventoryItem.BOTTLED_BUGS)){
                core.save.inventory.bottle_2 = Z64API.OoT.InventoryItem.BOTTLED_BUGS;
            }
            if(ImGui.selectable("Fish", core.save.inventory.bottle_2 === Z64API.OoT.InventoryItem.BOTTLED_FISH)){
                core.save.inventory.bottle_2 = Z64API.OoT.InventoryItem.BOTTLED_FISH;
            }
            if(ImGui.selectable("Poe Spirit", core.save.inventory.bottle_2 === Z64API.OoT.InventoryItem.BOTTLED_POE)){
                core.save.inventory.bottle_2 = Z64API.OoT.InventoryItem.BOTTLED_POE;
            }
            if(ImGui.selectable("Big Poe Spirit", core.save.inventory.bottle_2 === Z64API.OoT.InventoryItem.BOTTLED_BIG_POE)){
                core.save.inventory.bottle_2 = Z64API.OoT.InventoryItem.BOTTLED_BIG_POE;
            }
            if(ImGui.selectable("Blue Fire", core.save.inventory.bottle_2 === Z64API.OoT.InventoryItem.BLUE_FIRE)){
                core.save.inventory.bottle_2 = Z64API.OoT.InventoryItem.BLUE_FIRE;
            }
            if(ImGui.selectable("Ruto's Letter", core.save.inventory.bottle_2 === Z64API.OoT.InventoryItem.RUTOS_LETTER)){
                core.save.inventory.bottle_2 = Z64API.OoT.InventoryItem.RUTOS_LETTER;
            }
            ImGui.endCombo();
        }
        if(ImGui.beginCombo("Bottle 3", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.bottle_3 === Z64API.OoT.InventoryItem.NONE)){
                core.save.inventory.bottle_3 = Z64API.OoT.InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.bottle_3 === Z64API.OoT.InventoryItem.EMPTY_BOTTLE)){
                core.save.inventory.bottle_3 = Z64API.OoT.InventoryItem.EMPTY_BOTTLE;
            }
            if(ImGui.selectable("Green Potion", core.save.inventory.bottle_3 === Z64API.OoT.InventoryItem.GREEN_POTION)){
                core.save.inventory.bottle_3 = Z64API.OoT.InventoryItem.GREEN_POTION;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.bottle_3 === Z64API.OoT.InventoryItem.RED_POTION)){
                core.save.inventory.bottle_3 = Z64API.OoT.InventoryItem.RED_POTION;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.bottle_3 === Z64API.OoT.InventoryItem.BLUE_POTION)){
                core.save.inventory.bottle_3 = Z64API.OoT.InventoryItem.BLUE_POTION;
            }
            if(ImGui.selectable("Lon Lon Milk", core.save.inventory.bottle_3 === Z64API.OoT.InventoryItem.LON_LON_MILK)){
                core.save.inventory.bottle_3 = Z64API.OoT.InventoryItem.LON_LON_MILK;
            }
            if(ImGui.selectable("Lon Lon Milk (Half)", core.save.inventory.bottle_3 === Z64API.OoT.InventoryItem.LON_LON_MILK_HALF)){
                core.save.inventory.bottle_3 = Z64API.OoT.InventoryItem.LON_LON_MILK_HALF;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.bottle_3 === Z64API.OoT.InventoryItem.BOTTLED_FAIRY)){
                core.save.inventory.bottle_3 = Z64API.OoT.InventoryItem.BOTTLED_FAIRY;
            }
            if(ImGui.selectable("Bugs", core.save.inventory.bottle_3 === Z64API.OoT.InventoryItem.BOTTLED_BUGS)){
                core.save.inventory.bottle_3 = Z64API.OoT.InventoryItem.BOTTLED_BUGS;
            }
            if(ImGui.selectable("Fish", core.save.inventory.bottle_3 === Z64API.OoT.InventoryItem.BOTTLED_FISH)){
                core.save.inventory.bottle_3 = Z64API.OoT.InventoryItem.BOTTLED_FISH;
            }
            if(ImGui.selectable("Poe Spirit", core.save.inventory.bottle_3 === Z64API.OoT.InventoryItem.BOTTLED_POE)){
                core.save.inventory.bottle_3 = Z64API.OoT.InventoryItem.BOTTLED_POE;
            }
            if(ImGui.selectable("Big Poe Spirit", core.save.inventory.bottle_3 === Z64API.OoT.InventoryItem.BOTTLED_BIG_POE)){
                core.save.inventory.bottle_3 = Z64API.OoT.InventoryItem.BOTTLED_BIG_POE;
            }
            if(ImGui.selectable("Blue Fire", core.save.inventory.bottle_3 === Z64API.OoT.InventoryItem.BLUE_FIRE)){
                core.save.inventory.bottle_3 = Z64API.OoT.InventoryItem.BLUE_FIRE;
            }
            if(ImGui.selectable("Ruto's Letter", core.save.inventory.bottle_3 === Z64API.OoT.InventoryItem.RUTOS_LETTER)){
                core.save.inventory.bottle_3 = Z64API.OoT.InventoryItem.RUTOS_LETTER;
            }
            ImGui.endCombo();
        }
        if(ImGui.beginCombo("Bottle 4", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.bottle_4 === Z64API.OoT.InventoryItem.NONE)){
                core.save.inventory.bottle_4 = Z64API.OoT.InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.bottle_4 === Z64API.OoT.InventoryItem.EMPTY_BOTTLE)){
                core.save.inventory.bottle_4 = Z64API.OoT.InventoryItem.EMPTY_BOTTLE;
            }
            if(ImGui.selectable("Green Potion", core.save.inventory.bottle_4 === Z64API.OoT.InventoryItem.GREEN_POTION)){
                core.save.inventory.bottle_4 = Z64API.OoT.InventoryItem.GREEN_POTION;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.bottle_4 === Z64API.OoT.InventoryItem.RED_POTION)){
                core.save.inventory.bottle_4 = Z64API.OoT.InventoryItem.RED_POTION;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.bottle_4 === Z64API.OoT.InventoryItem.BLUE_POTION)){
                core.save.inventory.bottle_4 = Z64API.OoT.InventoryItem.BLUE_POTION;
            }
            if(ImGui.selectable("Lon Lon Milk", core.save.inventory.bottle_4 === Z64API.OoT.InventoryItem.LON_LON_MILK)){
                core.save.inventory.bottle_4 = Z64API.OoT.InventoryItem.LON_LON_MILK;
            }
            if(ImGui.selectable("Lon Lon Milk (Half)", core.save.inventory.bottle_4 === Z64API.OoT.InventoryItem.LON_LON_MILK_HALF)){
                core.save.inventory.bottle_4 = Z64API.OoT.InventoryItem.LON_LON_MILK_HALF;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.bottle_4 === Z64API.OoT.InventoryItem.BOTTLED_FAIRY)){
                core.save.inventory.bottle_4 = Z64API.OoT.InventoryItem.BOTTLED_FAIRY;
            }
            if(ImGui.selectable("Bugs", core.save.inventory.bottle_4 === Z64API.OoT.InventoryItem.BOTTLED_BUGS)){
                core.save.inventory.bottle_4 = Z64API.OoT.InventoryItem.BOTTLED_BUGS;
            }
            if(ImGui.selectable("Fish", core.save.inventory.bottle_4 === Z64API.OoT.InventoryItem.BOTTLED_FISH)){
                core.save.inventory.bottle_4 = Z64API.OoT.InventoryItem.BOTTLED_FISH;
            }
            if(ImGui.selectable("Poe Spirit", core.save.inventory.bottle_4 === Z64API.OoT.InventoryItem.BOTTLED_POE)){
                core.save.inventory.bottle_4 = Z64API.OoT.InventoryItem.BOTTLED_POE;
            }
            if(ImGui.selectable("Big Poe Spirit", core.save.inventory.bottle_4 === Z64API.OoT.InventoryItem.BOTTLED_BIG_POE)){
                core.save.inventory.bottle_4 = Z64API.OoT.InventoryItem.BOTTLED_BIG_POE;
            }
            if(ImGui.selectable("Blue Fire", core.save.inventory.bottle_4 === Z64API.OoT.InventoryItem.BLUE_FIRE)){
                core.save.inventory.bottle_4 = Z64API.OoT.InventoryItem.BLUE_FIRE;
            }
            if(ImGui.selectable("Ruto's Letter", core.save.inventory.bottle_4 === Z64API.OoT.InventoryItem.RUTOS_LETTER)){
                core.save.inventory.bottle_4 = Z64API.OoT.InventoryItem.RUTOS_LETTER;
            }
            ImGui.endCombo();
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Child Trading Item", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("None", core.save.inventory.childTradeItem === Z64API.OoT.InventoryItem.NONE)){
            core.save.inventory.childTradeItem = Z64API.OoT.InventoryItem.NONE;
        }
        if(ImGui.selectable("Weird Egg", core.save.inventory.childTradeItem === Z64API.OoT.InventoryItem.POCKET_EGG)){
            core.save.inventory.childTradeItem = Z64API.OoT.InventoryItem.WEIRD_EGG;
        }
        if(ImGui.selectable("Chicken", core.save.inventory.childTradeItem === Z64API.OoT.InventoryItem.CHILD_CUCCO)){
            core.save.inventory.childTradeItem = Z64API.OoT.InventoryItem.CHILD_CUCCO;
        }
        if(ImGui.selectable("Zelda's Letter", core.save.inventory.childTradeItem === Z64API.OoT.InventoryItem.ZELDAS_LETTER)){
            core.save.inventory.childTradeItem = Z64API.OoT.InventoryItem.ZELDAS_LETTER;
        }
        if(ImGui.selectable("\"SOLD OUT\"", core.save.inventory.childTradeItem === Z64API.OoT.InventoryItem.SOLD_OUT)){
            core.save.inventory.childTradeItem = Z64API.OoT.InventoryItem.SOLD_OUT;
        }
        if(ImGui.selectable("Keaton Mask", core.save.inventory.childTradeItem === Z64API.OoT.InventoryItem.KEATON_MASK)){
            core.save.inventory.childTradeItem = Z64API.OoT.InventoryItem.KEATON_MASK;
        }
        if(ImGui.selectable("Skull Mask", core.save.inventory.childTradeItem === Z64API.OoT.InventoryItem.SKULL_MASK)){
            core.save.inventory.childTradeItem = Z64API.OoT.InventoryItem.SKULL_MASK;
        }
        if(ImGui.selectable("Spooky Mask", core.save.inventory.childTradeItem === Z64API.OoT.InventoryItem.SPOOKY_MASK)){
            core.save.inventory.childTradeItem = Z64API.OoT.InventoryItem.SPOOKY_MASK;
        }
        if(ImGui.selectable("Bunny Hood", core.save.inventory.childTradeItem === Z64API.OoT.InventoryItem.BUNNY_HOOD)){
            core.save.inventory.childTradeItem = Z64API.OoT.InventoryItem.BUNNY_HOOD;
        }
        if(ImGui.selectable("Mask of Truth", (core.save.inventory.childTradeItem === Z64API.OoT.InventoryItem.MASK_OF_TRUTH))){
            core.save.inventory.childTradeItem = Z64API.OoT.InventoryItem.MASK_OF_TRUTH;
        }
        if(ImGui.selectable("Gerudo Mask", core.save.inventory.childTradeItem === Z64API.OoT.InventoryItem.GERUDO_MASK)){
            core.save.inventory.childTradeItem = Z64API.OoT.InventoryItem.GERUDO_MASK;
        }
        if(ImGui.selectable("Goron Mask", core.save.inventory.childTradeItem === Z64API.OoT.InventoryItem.GORON_MASK)){
            core.save.inventory.childTradeItem = Z64API.OoT.InventoryItem.GORON_MASK;
        }
        if(ImGui.selectable("Zora Mask", core.save.inventory.childTradeItem === Z64API.OoT.InventoryItem.ZORA_MASK)){
            core.save.inventory.childTradeItem = Z64API.OoT.InventoryItem.ZORA_MASK;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Adult Trade Item", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("None", core.save.inventory.adultTradeItem === Z64API.OoT.InventoryItem.NONE)){
            core.save.inventory.adultTradeItem = Z64API.OoT.InventoryItem.NONE;
        }
        if(ImGui.selectable("Pocket Egg", core.save.inventory.adultTradeItem === Z64API.OoT.InventoryItem.POCKET_EGG)){
            core.save.inventory.adultTradeItem = Z64API.OoT.InventoryItem.POCKET_EGG;
        }
        if(ImGui.selectable("Pocket Cucco", core.save.inventory.adultTradeItem === Z64API.OoT.InventoryItem.POCKET_CUCCO)){
            core.save.inventory.adultTradeItem = Z64API.OoT.InventoryItem.POCKET_CUCCO;
        }
        if(ImGui.selectable("Cojiro", core.save.inventory.adultTradeItem === Z64API.OoT.InventoryItem.COJIRO)){
            core.save.inventory.adultTradeItem = Z64API.OoT.InventoryItem.COJIRO;
        }
        if(ImGui.selectable("Odd Mushroom", core.save.inventory.adultTradeItem === Z64API.OoT.InventoryItem.ODD_MUSHROOM)){
            core.save.inventory.adultTradeItem = Z64API.OoT.InventoryItem.ODD_MUSHROOM;
        }
        if(ImGui.selectable("Odd Potion", core.save.inventory.adultTradeItem === Z64API.OoT.InventoryItem.ODD_POTION)){
            core.save.inventory.adultTradeItem = Z64API.OoT.InventoryItem.ODD_POTION;
        }
        if(ImGui.selectable("Poacher's Saw", core.save.inventory.adultTradeItem === Z64API.OoT.InventoryItem.POACHERS_SAW)){
            core.save.inventory.adultTradeItem = Z64API.OoT.InventoryItem.POACHERS_SAW;
        }
        if(ImGui.selectable("Broken Goron's Sword", core.save.inventory.adultTradeItem === Z64API.OoT.InventoryItem.BROKEN_GORON_SWORD)){
            core.save.inventory.adultTradeItem = Z64API.OoT.InventoryItem.BROKEN_GORON_SWORD;
        }
        if(ImGui.selectable("Prescription", core.save.inventory.adultTradeItem === Z64API.OoT.InventoryItem.PRESCRIPTION)){
            core.save.inventory.adultTradeItem = Z64API.OoT.InventoryItem.PRESCRIPTION;
        }
        if(ImGui.selectable("Eyeball Frog", core.save.inventory.adultTradeItem === Z64API.OoT.InventoryItem.EYEBALL_FROG)){
            core.save.inventory.adultTradeItem = Z64API.OoT.InventoryItem.EYEBALL_FROG;
        }
        if(ImGui.selectable("World's Finest Eyedrops", core.save.inventory.adultTradeItem === Z64API.OoT.InventoryItem.EYE_DROPS)){
            core.save.inventory.adultTradeItem = Z64API.OoT.InventoryItem.EYE_DROPS;
        }
        if(ImGui.selectable("Claim Check", core.save.inventory.adultTradeItem === Z64API.OoT.InventoryItem.CLAIM_CHECK)){
            core.save.inventory.adultTradeItem = Z64API.OoT.InventoryItem.CLAIM_CHECK;
        }
        ImGui.endCombo();
    }
}