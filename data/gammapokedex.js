exports.BattlePokedex = {
    weavolt: {
        num: 1100,
        name: "Weavolt",
        types: ["Electric"],
        baseStats: {
            hp: 50,
            atk: 70,
            def: 40,
            spa: 35,
            spd: 40,
            spe: 100
        },
        abilities: {
        "0":"Motor Drive","1":"Guts",
        H:"Unnerve"
    },
        heightm: 0.5,
        weightkg: 8.0,
        color: "Yellow",
        evos: ["Outloat"],
        eggGroups: ["Field"],
    },
    
        outloat: {
        num: 1101,
        name: "Outloat",
        types: ["Electric"],
        baseStats: {
            hp: 65,
            atk: 125,
            def: 55,
            spa: 45,
            spd: 95,
            spe: 130
        },
        abilities: {
        "0":"Motor Drive","1":"Guts",
        H:"Intimidate"
    },
        heightm: 1.8,
        weightkg: 31.5,
        color: "Yellow",
        prevo: ["Weavolt"],
        eggGroups: ["Field"],
    },
    
        crevish: {
        num: 1150,
        name: "Crevish",
        types: ["Water", "Grass"],
        baseStats: {
            hp: 80,
            atk: 20,
            def: 105,
            spa: 125,
            spd: 100,
            spe: 80
        },
        abilities: {
        "0":"Storm Drain","1":"Wonder Skin",
        H:"Protean"
    },
        heightm: 0.7,
        weightkg: 1.0,
        color: "Pink",
        eggGroups: ["Water 2", "Grass"],
    },
    
        vashalla: {
        num: 1199,
        name: "Vashalla",
        baseForme: "Manifest",
        types: ["Fairy", "Steel"],
        gender: "N",
        baseStats: {
            hp: 140,
            atk: 140,
            def: 140,
            spa: 20,
            spd: 140,
            spe: 20
        },
        abilities: {
            "0": "Unseen"
        },
        heightm: 1.7,
        weightkg: 150.5,
        color: "White",
        tags: ["Mythical"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Vashalla-True"],
        formeOrder: ["Vashalla", "Vashalla-True"],
    },
    vashallatrue: {
        num: 1199,
        name: "Vashalla-True",
        baseSpecies: "Vashalla",
        forme: "True",
        types: ["Fairy", "Flying"],
        gender: "N",
        baseStats: {
            hp: 140,
            atk: 20,
            def: 140,
            spa: 20,
            spd: 140,
            spe: 140
        },
        abilities: {
            "0": "Unseen"
        },
        heightm: 1.9,
        weightkg: 0.6,
        color: "White",
        tags: ["Mythical"],
        eggGroups: ["Undiscovered"],
        requiredAbility: "Unseen",
        battleOnly: "Vashalla",
    },
    
        malite: {
        num: 1200,
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
