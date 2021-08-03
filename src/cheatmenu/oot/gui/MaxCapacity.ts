import * as Z64API from 'Z64Lib/API/imports';

export function wallet(size: Z64API.Z64.Wallet): number {
    switch (size) {
        case Z64API.Z64.Wallet.CHILD:
            return 99;
        case Z64API.Z64.Wallet.ADULT:
            return 200;
        case Z64API.Z64.Wallet.GIANT:
            return 500;
        case Z64API.Z64.Wallet.TYCOON:
        default:
            return 999;
    }
}

export function quiver(size: Z64API.Z64.AmmoUpgrade): number {
    switch (size) {
        case Z64API.Z64.AmmoUpgrade.NONE:
            return 0;
        case Z64API.Z64.AmmoUpgrade.BASE:
            return 30;
        case Z64API.Z64.AmmoUpgrade.UPGRADED:
            return 40;
        case Z64API.Z64.AmmoUpgrade.MAX:
        default:
            return 50;
    }
}

export function dekuSticks(size: Z64API.Z64.AmmoUpgrade): number {
    switch (size) {
        case Z64API.Z64.AmmoUpgrade.NONE:
            return 0;
        case Z64API.Z64.AmmoUpgrade.BASE:
            return 10;
        case Z64API.Z64.AmmoUpgrade.UPGRADED:
            return 20;
        case Z64API.Z64.AmmoUpgrade.MAX:
        default:
            return 30;
    }
}

export function bombBag(size: Z64API.Z64.AmmoUpgrade): number {
    switch (size) {
        case Z64API.Z64.AmmoUpgrade.NONE:
            return 0;
        case Z64API.Z64.AmmoUpgrade.BASE:
            return 20;
        case Z64API.Z64.AmmoUpgrade.UPGRADED:
            return 30;
        case Z64API.Z64.AmmoUpgrade.MAX:
        default:
            return 40;
    }
}

export function magic(size: Z64API.Z64.Magic): Z64API.Z64.MagicQuantities {
    switch (size) {
        case Z64API.Z64.Magic.NONE:
            return Z64API.Z64.MagicQuantities.NONE;
        case Z64API.Z64.Magic.NORMAL:
            return Z64API.Z64.MagicQuantities.NORMAL;
        default:
        case Z64API.Z64.Magic.EXTENDED:
            return Z64API.Z64.MagicQuantities.EXTENDED;
    }
}