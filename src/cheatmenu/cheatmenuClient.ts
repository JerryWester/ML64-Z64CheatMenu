import { ICore, IModLoaderAPI, IPlugin } from 'modloader64_api/IModLoaderAPI';
import { InjectCore } from 'modloader64_api/CoreInjection';
import { onViUpdate } from 'modloader64_api/PluginLifecycle';
import * as Z64API from 'Z64Lib/API/imports';
import { Z64_GAME } from 'Z64Lib/src/Common/types/GameAliases';
import { Z64LibSupportedGames } from 'Z64Lib/API/Utilities/Z64LibSupportedGames';
import * as OOT from './oot/cheatmenu';
import * as MM from './mm/cheatmenu';
import { EventHandler } from 'modloader64_api/EventHandler';
import { ModLoaderAPIInject } from "modloader64_api/ModLoaderAPIInjector";
import { onTick, Init } from 'modloader64_api/PluginLifecycle';
import {IZ64Main} from 'Z64Lib/API/Common/IZ64Main'

export class CheatmenuClient {

    @ModLoaderAPIInject()
    ModLoader!: IModLoaderAPI;
    @InjectCore()
    core!: IZ64Main;

    game!: number;

    @Init()
    init() {
        this.game = Z64_GAME;
        this.ModLoader.logger.info("CheatMenu: " + Z64LibSupportedGames[this.game] + " Loaded!");
    }
    @onTick()
    onTick() {
        switch (this.game) {
            case Z64LibSupportedGames.OCARINA_OF_TIME:
                OOT.onTick(this.ModLoader, this.core.OOT!);
                break;
            case Z64LibSupportedGames.MAJORAS_MASK:
                MM.onTick(this.ModLoader, this.core.MM!);
                break;
        }
    }

    @onViUpdate()
    onViUpdate() {

        switch (this.game) {
            case Z64LibSupportedGames.OCARINA_OF_TIME:
                OOT.onViUpdate(this.ModLoader, this.core.OOT!);
                break;
            case Z64LibSupportedGames.MAJORAS_MASK:
                MM.onViUpdate(this.ModLoader, this.core.MM!);
                break;
        }

    }

    @EventHandler(Z64API.Z64.Z64Events.ON_SCENE_CHANGE)
    onSceneChange() {
        if (this.game === Z64LibSupportedGames.OCARINA_OF_TIME) {
            OOT.entranceIndex[0] = (this.core.OOT!).save.entrance_index.toString(16);
        } else
            if (this.game === Z64LibSupportedGames.MAJORAS_MASK) {
                MM.grav.updateGrav = false;
            }
    }

    @EventHandler(Z64API.Z64.Z64Events.ON_AGE_CHANGE)
    onAgeChange() {
        if (this.game === Z64LibSupportedGames.MAJORAS_MASK) {
            MM.grav.updateGrav = false;
        }
    }

}
