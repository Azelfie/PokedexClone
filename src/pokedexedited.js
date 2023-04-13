exports.BattlePokedex = {
    bulbasaur: {
        num: 1,
        name: "Bulbasaur",
        types: ["Grass", "Poison"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 45,
            atk: 49,
            def: 49,
            spa: 65,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Overgrow",
            H: "Chlorophyll"
        },
        heightm: 0.7,
        weightkg: 6.9,
        color: "Green",
        evos: ["Ivysaur"],
        eggGroups: ["Monster", "Grass"],
    },
        malite: {
        num: 2000,
        name: "Malite",
        types: ["Dark", "Steel"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 140,
            def: 198,
            spa: 22,
            spd: 178,
            spe: 22
        },
        abilities: {
            "0": "Belligerence"
        },
        heightm: 2.2,
        weightkg: 250,
        color: "Gray",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "OU"
    },
};
