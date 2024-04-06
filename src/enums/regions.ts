export enum Regions {
    EU_WEST = 'EUW1',
    EU_EAST = 'EUN1',
    NORTH_AMERICA = 'NA1',
    TURKEY = 'TR1',
}

export enum RegionGroups {
    AMERICAS = 'AMERICAS',
    ASIA = 'ASIA',
    EUROPE = 'EUROPE',
}

export function regionCheck(region: string): RegionGroups {
    switch (region) {
        case Regions.EU_WEST:
        case Regions.EU_EAST:
        case Regions.TURKEY:
            return RegionGroups.EUROPE;

        case Regions.NORTH_AMERICA:
            return RegionGroups.AMERICAS;

        default:
            throw new Error(`Invalid region: ${region}`);
    }
}