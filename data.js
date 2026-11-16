/* Besòs River Mouth – Interactive Species Map · data file
   Edit texts, names, groups and food-web links here, then reload the page.
   - species: one entry per species (images are found by id in illustrations/ and photos/)
   - species.relations: eats / eatenBy / shelter, shown as the text mind map and in the card
   - webs: one entry per indicator species (fields are arranged automatically; x/y unused)
   - group ids: mammal, reptile, amphibian, fish, insect, invertebrate, bird, plant  */
window.BESOS_DATA = {
 "groups": [
  {
   "id": "mammal",
   "label": "Mammals",
   "bg": "#132412",
   "fg": "#FFFFFF"
  },
  {
   "id": "reptile",
   "label": "Reptiles",
   "bg": "#324D00",
   "fg": "#FFFFFF"
  },
  {
   "id": "amphibian",
   "label": "Amphibians",
   "bg": "#4D7A2C",
   "fg": "#FFFFFF"
  },
  {
   "id": "fish",
   "label": "Fish",
   "bg": "#7EA35E",
   "fg": "#132412"
  },
  {
   "id": "insect",
   "label": "Insects",
   "bg": "#B6DA86",
   "fg": "#132412"
  },
  {
   "id": "invertebrate",
   "label": "Other invertebrates",
   "bg": "#DCEBC2",
   "fg": "#132412"
  },
  {
   "id": "bird",
   "label": "Birds",
   "bg": "#D6D6D1",
   "fg": "#132412"
  },
  {
   "id": "plant",
   "label": "Plants",
   "bg": "#FFFFFF",
   "fg": "#132412",
   "outline": "#324D00"
  }
 ],
 "species": {
  "erinaceus_europaeus": {
   "common": "European hedgehog",
   "catalan": "Eriçó fosc",
   "group": "mammal",
   "description": "Nocturnal insectivore that forages in hedges, scrub and gardens. At the Besòs it depends on dense shrub cover for its daytime nests and on green corridors to move between patches.",
   "scientific": "Erinaceus europaeus",
   "illustration": "illustrations/erinaceus_europaeus.png",
   "photo": "photos/erinaceus_europaeus.jpg",
   "photoCredit": {
    "author": "Alm (gl.wikipedia user)",
    "license": "CC BY-SA 3.0",
    "location": "Maceda Castle, Ourense, Galicia, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Orizo5.jpg"
   }
  },
  "epidalea_calamita": {
   "common": "Natterjack toad",
   "catalan": "Gripau corredor",
   "group": "amphibian",
   "description": "A small toad that runs rather than hops, with a yellow stripe along its back. It breeds in shallow, temporary pools that dry out in summer, so it needs open sandy ground and water without fish.",
   "scientific": "Epidalea calamita",
   "illustration": "illustrations/epidalea_calamita.png",
   "photo": "photos/epidalea_calamita.jpg",
   "photoCredit": {
    "author": "David Perez",
    "license": "CC BY 3.0",
    "location": "Badilla, Zamora, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Epidalea_calamita_01_by-dpc.jpg"
   }
  },
  "hirundo_rustica": {
   "common": "Barn swallow",
   "catalan": "Oreneta vulgar",
   "group": "bird",
   "description": "Aerial insectivore that hunts low over water and meadows and builds mud-cup nests inside buildings. It needs insect-rich wetlands nearby and open structures such as sheds or bridges to nest in.",
   "scientific": "Hirundo rustica",
   "illustration": "illustrations/hirundo_rustica.png",
   "photo": "photos/hirundo_rustica.jpg",
   "photoCredit": {
    "author": "euqirneto",
    "license": "CC BY 4.0",
    "location": "Castilla-La Mancha, Spain (GPS 39.140,-3.700)",
    "source": "https://commons.wikimedia.org/wiki/File:Hirundo_rustica_102056841.jpg"
   }
  },
  "podarcis_liolepis": {
   "common": "Catalan wall lizard",
   "catalan": "Sargantana de paret",
   "group": "reptile",
   "description": "Small, agile lizard of walls, rocks and dry-stone terraces in north-east Iberia and southern France. It basks in the sun and hunts insects and spiders among stones and low aromatic shrubs.",
   "scientific": "Podarcis liolepis",
   "illustration": "illustrations/podarcis_liolepis.png",
   "photo": "photos/podarcis_liolepis.jpg",
   "photoCredit": {
    "author": "Bernard DUPONT",
    "license": "CC BY-SA 2.0",
    "location": "Montels, Hérault, France",
    "source": "https://commons.wikimedia.org/wiki/File:Catalan_Wall_Lizards_(Podarcis_liolepis)_(40588664815).jpg"
   }
  },
  "pistacia_lentiscus": {
   "common": "Mastic",
   "catalan": "Llentiscle",
   "group": "plant",
   "description": "Evergreen Mediterranean shrub with leathery leaves and red berries that ripen black. Its dense, low growth gives hedgehogs and many invertebrates shelter.",
   "scientific": "Pistacia lentiscus",
   "illustration": "illustrations/pistacia_lentiscus.png",
   "photo": "photos/pistacia_lentiscus.jpg",
   "photoCredit": {
    "author": "H. Zell",
    "license": "CC BY-SA 3.0",
    "location": "Colònia de Sant Pere, Mallorca, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Pistacia_lentiscus_002.jpg"
   },
   "relations": {
    "eats": [],
    "eatenBy": [
     "Blackbirds and thrushes (berries)",
     "Sardinian warbler (berries)",
     "Gall aphids",
     "Rabbits and goats (leaves)"
    ],
    "shelter": [
     "Hedgehogs",
     "Nesting songbirds",
     "Snails and beetles"
    ]
   }
  },
  "rhamnus_alaternus": {
   "common": "Mediterranean buckthorn",
   "catalan": "Aladern",
   "group": "plant",
   "description": "Evergreen shrub of Mediterranean scrub with glossy leaves and small berries eaten by birds. It forms dense cover close to the ground.",
   "scientific": "Rhamnus alaternus",
   "illustration": "illustrations/rhamnus_alaternus.png",
   "photo": "photos/rhamnus_alaternus.jpg",
   "photoCredit": {
    "author": "Victor M. Vicente Selvas",
    "license": "Public domain",
    "location": "Castelltallat, Catalonia, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Aladern_florit_21-03-09.jpg"
   },
   "relations": {
    "eats": [],
    "eatenBy": [
     "Blackbirds and thrushes (berries)",
     "Warblers (berries)",
     "Cleopatra butterfly caterpillars"
    ],
    "shelter": [
     "Hedgehogs",
     "Nesting songbirds",
     "Insects and spiders"
    ]
   }
  },
  "rubus_ulmifolius": {
   "common": "Elmleaf blackberry",
   "catalan": "Esbarzer",
   "group": "plant",
   "description": "Thorny bramble that forms dense thickets along rivers and field edges. Its tangles are safe nesting cover and its blackberries feed many animals.",
   "scientific": "Rubus ulmifolius",
   "illustration": "illustrations/rubus_ulmifolius.png",
   "photo": "photos/rubus_ulmifolius.jpg",
   "photoCredit": {
    "author": "Isidre blanc",
    "license": "CC BY-SA 4.0",
    "location": "Torà, Segarra, Catalonia, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:RUBUS_ULMIFOLIUS_-_MORROCURT_-_MORROCURT_-_IB-086_(Esbarzer).JPG"
   },
   "relations": {
    "eats": [],
    "eatenBy": [
     "Blackbirds and warblers (fruit)",
     "Foxes (fruit)",
     "Bees and hoverflies (nectar)",
     "Rabbits (shoots)"
    ],
    "shelter": [
     "Hedgehogs",
     "Nesting songbirds",
     "Lizards and small mammals"
    ]
   }
  },
  "tamarix_gallica": {
   "common": "French tamarisk",
   "catalan": "Tamariu",
   "group": "plant",
   "description": "Salt-tolerant shrub or small tree of coasts and river mouths, with feathery foliage and pink flower spikes. It gives cover close to the shore.",
   "scientific": "Tamarix gallica",
   "illustration": "illustrations/tamarix_gallica.png",
   "photo": "photos/tamarix_gallica.jpg",
   "photoCredit": {
    "author": "Javier martinlo",
    "license": "CC BY-SA 4.0",
    "location": "Campo de Calatrava, Ciudad Real, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Tamarix_gallica_flores_ArgamasillaCalatrava.jpg"
   },
   "relations": {
    "eats": [],
    "eatenBy": [
     "Bees, wasps and hoverflies (nectar)",
     "Tamarisk weevils",
     "Aphids and scale insects"
    ],
    "shelter": [
     "Nesting warblers",
     "Insects and spiders",
     "Hedgehogs"
    ]
   }
  },
  "lumbricus_terrestris": {
   "common": "Common earthworm",
   "catalan": "Cuc de terra",
   "group": "invertebrate",
   "description": "Large earthworm that pulls leaves into deep burrows at night. A key food for hedgehogs and blackbirds, and an engineer of healthy soil.",
   "scientific": "Lumbricus terrestris",
   "illustration": "illustrations/lumbricus_terrestris.png",
   "photo": "photos/lumbricus_terrestris.jpg",
   "photoCredit": {
    "author": "Donald Hobern",
    "license": "CC BY 2.0",
    "location": "Søborg, Denmark",
    "source": "https://commons.wikimedia.org/wiki/File:Lumbricus_terrestris_(26559560801).jpg"
   },
   "relations": {
    "eats": [
     "Dead leaves",
     "Decaying plant matter",
     "Soil microorganisms"
    ],
    "eatenBy": [
     "European hedgehog",
     "Blackbirds and thrushes",
     "Red fox",
     "Shrews and moles",
     "Toads"
    ],
    "shelter": [
     "Deep vertical burrows in soil"
    ]
   }
  },
  "harpalus_rufipes": {
   "common": "Strawberry seed beetle",
   "catalan": "Caràbid",
   "group": "insect",
   "description": "Common ground beetle of fields and gardens, active at night. Shown here as a representative of the ground beetles (Carabidae) that hedgehogs eat.",
   "scientific": "Harpalus (Pseudoophonus) rufipes",
   "illustration": "illustrations/harpalus_rufipes.png",
   "photo": "photos/harpalus_rufipes.jpg",
   "photoCredit": {
    "author": "Francisco Welter-Schultes",
    "license": "CC0",
    "location": "Göttingen, Germany",
    "source": "https://commons.wikimedia.org/wiki/File:Pseudoophonus-rufipes-01-fws.jpg"
   },
   "relations": {
    "eats": [
     "Seeds of grasses and herbs",
     "Small insects and larvae",
     "Slug eggs"
    ],
    "eatenBy": [
     "European hedgehog",
     "Shrews",
     "Birds",
     "Toads and lizards"
    ],
    "shelter": [
     "Under stones and leaf litter",
     "Cracks in the soil"
    ]
   }
  },
  "oxythyrea_funesta": {
   "common": "White-spotted rose beetle",
   "catalan": "",
   "group": "insect",
   "description": "Black chafer with white spots, common on flowers in spring across the Mediterranean. Representative of the scarab beetles (Scarabaeidae).",
   "scientific": "Oxythyrea funesta",
   "illustration": "illustrations/oxythyrea_funesta.png",
   "photo": "photos/oxythyrea_funesta.jpg",
   "photoCredit": {
    "author": "Udo Schmidt",
    "license": "CC BY-SA 2.0",
    "location": "specimen photo, white background (origin not stated)",
    "source": "https://commons.wikimedia.org/wiki/File:Oxythyrea_funesta_(Poda,_1761)_(33445645182).png"
   },
   "relations": {
    "eats": [
     "Pollen and petals (adults)",
     "Decaying plant matter (larvae)"
    ],
    "eatenBy": [
     "European hedgehog",
     "Birds",
     "Lizards",
     "Spiders"
    ],
    "shelter": [
     "Flowers (adults)",
     "Soil and compost (larvae)"
    ]
   }
  },
  "deroceras_reticulatum": {
   "common": "Grey field slug",
   "catalan": "Llimac gris",
   "group": "invertebrate",
   "description": "One of the most common slugs of gardens and fields. Hedgehogs eat large numbers of slugs.",
   "scientific": "Deroceras reticulatum",
   "illustration": "illustrations/deroceras_reticulatum.png",
   "photo": "photos/deroceras_reticulatum.jpg",
   "photoCredit": {
    "author": "Luis Fernández García",
    "license": "CC BY-SA 4.0",
    "location": "Barrio del Pilar, Madrid, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Deroceras_reticulatum_20250108a.jpg"
   },
   "relations": {
    "eats": [
     "Seedlings and soft leaves",
     "Decaying plants",
     "Fungi"
    ],
    "eatenBy": [
     "European hedgehog",
     "Ground beetles",
     "Toads and frogs",
     "Blackbirds and thrushes",
     "Shrews"
    ],
    "shelter": [
     "Under stones and logs",
     "Damp leaf litter"
    ]
   }
  },
  "cornu_aspersum": {
   "common": "Garden snail",
   "catalan": "Cargol bover",
   "group": "invertebrate",
   "description": "Large snail of gardens, hedges and old walls, most active on mild, damp nights. An important food for hedgehogs.",
   "scientific": "Cornu aspersum",
   "illustration": "illustrations/cornu_aspersum.png",
   "photo": "photos/cornu_aspersum.jpg",
   "photoCredit": {
    "author": "Fernando Losada Rodríguez",
    "license": "CC BY-SA 4.0",
    "location": "Burela, Lugo, Galicia, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Cornu_aspersum.001_-_Burela.jpg"
   },
   "relations": {
    "eats": [
     "Leaves and seedlings",
     "Fallen fruit",
     "Decaying plants",
     "Lime from soil and walls"
    ],
    "eatenBy": [
     "European hedgehog",
     "Thrushes",
     "Rats",
     "Glow-worm larvae",
     "Ground beetles"
    ],
    "shelter": [
     "Walls and stones",
     "Dense vegetation"
    ]
   }
  },
  "theba_pisana": {
   "common": "White garden snail",
   "catalan": "Cargol mongeta",
   "group": "invertebrate",
   "description": "Pale, banded snail typical of coastal dunes and dry Mediterranean ground, often seen in clusters on plant stems in summer.",
   "scientific": "Theba pisana",
   "illustration": "illustrations/theba_pisana.png",
   "photo": "photos/theba_pisana.jpg",
   "photoCredit": {
    "author": "Christian Ferrer",
    "license": "CC BY-SA 4.0",
    "location": "Sète, Hérault, France",
    "source": "https://commons.wikimedia.org/wiki/File:Theba_pisana,_S%C3%A8te_02.jpg"
   },
   "relations": {
    "eats": [
     "Fresh and dry plants",
     "Dune vegetation"
    ],
    "eatenBy": [
     "European hedgehog",
     "Thrushes",
     "Rats",
     "Ground beetles"
    ],
    "shelter": [
     "Plant stems in summer",
     "Dunes and dry grassland"
    ]
   }
  },
  "forficula_auricularia": {
   "common": "European earwig",
   "catalan": "Tisoreta",
   "group": "insect",
   "description": "Nocturnal omnivore that hides in crevices during the day. A frequent prey of hedgehogs.",
   "scientific": "Forficula auricularia",
   "illustration": "illustrations/forficula_auricularia.png",
   "photo": "photos/forficula_auricularia.jpg",
   "photoCredit": {
    "author": "Luis Miguel Bugallo Sánchez",
    "license": "CC BY-SA 3.0",
    "location": "Bastavales, Brión, Galicia, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Forficula_Auricularia_en_Bastavales,_Galiza_090818_002.jpg"
   },
   "relations": {
    "eats": [
     "Aphids and small insects",
     "Plants and ripe fruit",
     "Algae and fungi"
    ],
    "eatenBy": [
     "European hedgehog",
     "Birds",
     "Toads",
     "Lizards",
     "Spiders"
    ],
    "shelter": [
     "Crevices and loose bark",
     "Hollow stems and flowers"
    ]
   }
  },
  "vulpes_vulpes": {
   "common": "Red fox",
   "catalan": "Guineu",
   "group": "mammal",
   "description": "Adaptable predator that also lives on the urban edge. It occasionally kills hedgehogs and competes with them for food.",
   "scientific": "Vulpes vulpes",
   "illustration": "illustrations/vulpes_vulpes.png",
   "photo": "photos/vulpes_vulpes.jpg",
   "photoCredit": {
    "author": "Alexis Lours",
    "license": "CC BY 4.0",
    "location": "Gennevilliers, France",
    "source": "https://commons.wikimedia.org/wiki/File:Red_Fox_drinking_from_a_lake_in_Gennevilliers,_France.jpg"
   },
   "relations": {
    "eats": [
     "Rabbits and rodents",
     "Birds and eggs",
     "Insects and earthworms",
     "Fruit and food waste",
     "Hedgehogs (occasionally)"
    ],
    "eatenBy": [
     "No regular predators here"
    ],
    "shelter": [
     "Dens in banks and dense scrub",
     "Old burrows"
    ]
   }
  },
  "turdus_merula": {
   "common": "Common blackbird",
   "catalan": "Merla",
   "group": "bird",
   "description": "Common bird of parks and gardens. It hunts earthworms and other soil animals, the same food the hedgehog relies on.",
   "scientific": "Turdus merula",
   "illustration": "illustrations/turdus_merula.png",
   "photo": "photos/turdus_merula.jpg",
   "photoCredit": {
    "author": "Juan Emilio",
    "license": "CC BY-SA 2.0",
    "location": "Gran Canaria, Canary Islands, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Turdus_merula_-Gran_Canaria,_Canary_Islands,_Spain-8_(2).jpg"
   },
   "relations": {
    "eats": [
     "Earthworms",
     "Insects and larvae",
     "Snails",
     "Berries and fruit"
    ],
    "eatenBy": [
     "Domestic cats",
     "Sparrowhawks",
     "Magpies (eggs and chicks)",
     "Rats (eggs and chicks)"
    ],
    "shelter": [
     "Nests in dense shrubs",
     "Park trees and hedges"
    ]
   }
  },
  "messor_barbarus": {
   "common": "Harvester ant",
   "catalan": "",
   "group": "insect",
   "description": "Ant that collects seeds and builds large nests in open, dry ground. Representative of the Messor ants that natterjack toads eat.",
   "scientific": "Messor barbarus",
   "illustration": "illustrations/messor_barbarus.png",
   "photo": "photos/messor_barbarus.jpg",
   "photoCredit": {
    "author": "Philmarin",
    "license": "CC BY-SA 3.0",
    "location": "Albatera, Alicante, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:M._barbarus_obrera-1.JPG"
   },
   "relations": {
    "eats": [
     "Seeds of grasses and herbs",
     "Dead insects"
    ],
    "eatenBy": [
     "Natterjack toad",
     "Lizards",
     "Larks and other birds",
     "Antlion larvae"
    ],
    "shelter": [
     "Underground nests in dry, open ground"
    ]
   }
  },
  "lasius_niger": {
   "common": "Black garden ant",
   "catalan": "",
   "group": "insect",
   "description": "Very common ant of open and urban ground. Representative of the Lasius ants eaten by toads.",
   "scientific": "Lasius niger",
   "illustration": "illustrations/lasius_niger.png",
   "photo": "photos/lasius_niger.jpg",
   "photoCredit": {
    "author": "Carlos Delgado",
    "license": "CC BY-SA 3.0",
    "location": "not stated",
    "source": "https://commons.wikimedia.org/wiki/File:Lasius_niger_y_Cinara_tujafilina_en_Thuja_orientalis.jpg"
   },
   "relations": {
    "eats": [
     "Honeydew from aphids",
     "Small insects",
     "Nectar and sweet food"
    ],
    "eatenBy": [
     "Natterjack toad",
     "Lizards",
     "Swifts (winged ants)",
     "Spiders"
    ],
    "shelter": [
     "Nests under stones and paving"
    ]
   }
  },
  "pimelia_bipunctata": {
   "common": "Darkling beetle",
   "catalan": "",
   "group": "insect",
   "description": "Flightless beetle of Mediterranean sandy coasts and dunes. Representative of the darkling beetles (Tenebrionidae).",
   "scientific": "Pimelia bipunctata",
   "illustration": "illustrations/pimelia_bipunctata.png",
   "photo": "photos/pimelia_bipunctata.jpg",
   "photoCredit": {
    "author": "Hans Hillewaert",
    "license": "CC BY-SA 3.0",
    "location": "Torregrande, Sardinia, Italy",
    "source": "https://commons.wikimedia.org/wiki/File:Pimelia_bipunctata.jpg"
   },
   "relations": {
    "eats": [
     "Plant debris",
     "Dead organic matter",
     "Seeds"
    ],
    "eatenBy": [
     "Natterjack toad",
     "Lizards",
     "Hedgehogs",
     "Gulls and shrikes"
    ],
    "shelter": [
     "Burrows in sand",
     "Under driftwood and debris"
    ]
   }
  },
  "anax_imperator": {
   "common": "Emperor dragonfly (nymph)",
   "catalan": "Libèl·lula emperador",
   "group": "insect",
   "description": "Large dragonfly. Its aquatic nymph is a fierce pond predator that catches tadpoles.",
   "scientific": "Anax imperator",
   "illustration": "illustrations/anax_imperator.png",
   "photo": "photos/anax_imperator.jpg",
   "photoCredit": {
    "author": "George Elbogen",
    "license": "CC BY 4.0",
    "location": "Morden, UK (via iNaturalist)",
    "source": "https://commons.wikimedia.org/wiki/File:Anax_imperator_nymph_-_George_Elbogen_-_Morden,_UK.jpeg"
   },
   "relations": {
    "eats": [
     "Tadpoles",
     "Small fish",
     "Aquatic insects"
    ],
    "eatenBy": [
     "Fish",
     "Herons and egrets",
     "Eurasian hobby (adults)"
    ],
    "shelter": [
     "Underwater plants in ponds"
    ]
   }
  },
  "dytiscus_marginalis": {
   "common": "Great diving beetle",
   "catalan": "Ditisc",
   "group": "insect",
   "description": "Both larvae and adults hunt underwater and catch tadpoles. Representative of the Dytiscus diving beetles.",
   "scientific": "Dytiscus marginalis",
   "illustration": "illustrations/dytiscus_marginalis.png",
   "photo": "photos/dytiscus_marginalis.jpg",
   "photoCredit": {
    "author": "Udo Schmidt",
    "license": "CC BY-SA 2.0",
    "location": "Selbitz, Bavaria, Germany (specimen, white background)",
    "source": "https://commons.wikimedia.org/wiki/File:Dytiscus_marginalis_Linn%C3%A9,_1758_male.jpg"
   },
   "relations": {
    "eats": [
     "Tadpoles",
     "Small fish",
     "Aquatic insects and snails"
    ],
    "eatenBy": [
     "Herons and egrets",
     "Fish (larvae)",
     "Viperine water snake"
    ],
    "shelter": [
     "Ponds with dense plants",
     "Damp soil (pupae)"
    ]
   }
  },
  "notonecta_maculata": {
   "common": "Backswimmer",
   "catalan": "Notonecta",
   "group": "insect",
   "description": "Predatory water bug that swims upside down and pierces its prey, including small tadpoles. Representative of the Notonecta backswimmers.",
   "scientific": "Notonecta maculata",
   "illustration": "illustrations/notonecta_maculata.png",
   "photo": "photos/notonecta_maculata.jpg",
   "photoCredit": {
    "author": "Didier Descouens",
    "license": "CC BY-SA 4.0",
    "location": "Muséum de Toulouse specimen, white background",
    "source": "https://commons.wikimedia.org/wiki/File:Notonecta_maculata_MHNT_dos.jpg"
   },
   "relations": {
    "eats": [
     "Tadpoles",
     "Insects fallen on the water",
     "Small aquatic animals"
    ],
    "eatenBy": [
     "Fish",
     "Herons and egrets",
     "Dragonfly nymphs"
    ],
    "shelter": [
     "Still water with plants"
    ]
   }
  },
  "gambusia_holbrooki": {
   "common": "Eastern mosquitofish",
   "catalan": "Gambúsia",
   "group": "fish",
   "description": "Invasive fish from North America. It eats amphibian eggs and tadpoles and is a major threat to toads breeding in permanent water.",
   "scientific": "Gambusia holbrooki",
   "illustration": "illustrations/gambusia_holbrooki.png",
   "photo": "photos/gambusia_holbrooki.jpg",
   "photoCredit": {
    "author": "Smithsonian Environmental Research Center",
    "license": "CC BY 2.0",
    "location": "Rhode River, Maryland, USA (native range)",
    "source": "https://commons.wikimedia.org/wiki/File:Gambusia_holbrooki_-_SERC.jpg"
   },
   "relations": {
    "eats": [
     "Mosquito larvae",
     "Zooplankton",
     "Amphibian eggs and tadpoles",
     "Fish fry"
    ],
    "eatenBy": [
     "Herons and egrets",
     "Kingfishers",
     "Viperine water snake",
     "Larger fish"
    ],
    "shelter": [
     "Shallow, warm water with plants"
    ]
   }
  },
  "trachemys_scripta": {
   "common": "Pond slider",
   "catalan": "Tortuga de Florida",
   "group": "reptile",
   "description": "Invasive turtle released from the pet trade. It eats tadpoles and competes with native pond life.",
   "scientific": "Trachemys scripta scripta",
   "illustration": "illustrations/trachemys_scripta.png",
   "photo": "photos/trachemys_scripta.jpg",
   "photoCredit": {
    "author": "B. Schoenmakers",
    "license": "CC BY 3.0",
    "location": "Río Guadaiza, Málaga, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Trachemys_scripta_scripta_(Emydidae)_(Yellow-bellied_Slider)_-_(adult),_R%C3%ADo_Guadaiza,_Spain.jpg"
   },
   "relations": {
    "eats": [
     "Tadpoles and small fish",
     "Aquatic invertebrates",
     "Water plants"
    ],
    "eatenBy": [
     "Herons (young turtles)",
     "Rats and foxes (eggs)",
     "Few predators as adults"
    ],
    "shelter": [
     "Ponds and slow rivers",
     "Basking logs and banks"
    ]
   }
  },
  "procambarus_clarkii": {
   "common": "Red swamp crayfish",
   "catalan": "Cranc vermell americà",
   "group": "invertebrate",
   "description": "Invasive crayfish from North America. It eats amphibian eggs and tadpoles and destroys aquatic vegetation.",
   "scientific": "Procambarus clarkii",
   "illustration": "illustrations/procambarus_clarkii.png",
   "photo": "photos/procambarus_clarkii.jpg",
   "photoCredit": {
    "author": "gailhampshire",
    "license": "CC BY 2.0",
    "location": "La Janda, Cádiz, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Procambarus_clarkii_(32260320374).jpg"
   },
   "relations": {
    "eats": [
     "Amphibian eggs and tadpoles",
     "Water plants",
     "Invertebrates",
     "Detritus"
    ],
    "eatenBy": [
     "Herons and egrets",
     "Yellow-legged gull",
     "Large fish (eels)",
     "Viperine water snake"
    ],
    "shelter": [
     "Burrows in river and pond banks"
    ]
   }
  },
  "cyprinus_carpio": {
   "common": "Common carp",
   "catalan": "Carpa",
   "group": "fish",
   "description": "Introduced fish that stirs up mud and uproots water plants. It degrades breeding sites and eats amphibian eggs.",
   "scientific": "Cyprinus carpio",
   "illustration": "illustrations/cyprinus_carpio.png",
   "photo": "photos/cyprinus_carpio.jpg",
   "photoCredit": {
    "author": "George Chernilevsky",
    "license": "CC BY-SA 3.0",
    "location": "not stated (white background)",
    "source": "https://commons.wikimedia.org/wiki/File:Cyprinus_carpio_2008_G1.jpg"
   },
   "relations": {
    "eats": [
     "Bottom invertebrates",
     "Water plants and seeds",
     "Amphibian eggs"
    ],
    "eatenBy": [
     "Cormorants and herons (young carp)",
     "Larger fish (fry)"
    ],
    "shelter": [
     "Slow, muddy rivers and lakes"
    ]
   }
  },
  "natrix_maura": {
   "common": "Viperine water snake",
   "catalan": "Serp d’aigua",
   "group": "reptile",
   "description": "Harmless snake of rivers and ponds. It feeds mainly on fish and amphibians, including toads and tadpoles.",
   "scientific": "Natrix maura",
   "illustration": "illustrations/natrix_maura.png",
   "photo": "photos/natrix_maura.jpg",
   "photoCredit": {
    "author": "Christian Ferrer",
    "license": "CC BY-SA 4.0",
    "location": "Olargues, Hérault, France",
    "source": "https://commons.wikimedia.org/wiki/File:Natrix_maura,_Olargues_03.jpg"
   },
   "relations": {
    "eats": [
     "Fish",
     "Toads, frogs and tadpoles",
     "Earthworms (young snakes)"
    ],
    "eatenBy": [
     "Herons and egrets",
     "Birds of prey",
     "Domestic cats"
    ],
    "shelter": [
     "River banks",
     "Stones and plants near water"
    ]
   }
  },
  "ardea_cinerea": {
   "common": "Grey heron",
   "catalan": "Bernat pescaire",
   "group": "bird",
   "description": "Large wading bird that hunts fish and amphibians in shallow water along the river.",
   "scientific": "Ardea cinerea",
   "illustration": "illustrations/ardea_cinerea.png",
   "photo": "photos/ardea_cinerea.jpg",
   "photoCredit": {
    "author": "Basile Morin",
    "license": "CC BY-SA 4.0",
    "location": "Busan, South Korea",
    "source": "https://commons.wikimedia.org/wiki/File:Grey_heron_eating_fish_near_a_pond_of_Busan_Citizens_Park_in_South_Korea.jpg"
   },
   "relations": {
    "eats": [
     "Fish",
     "Amphibians",
     "Crayfish",
     "Small mammals"
    ],
    "eatenBy": [
     "Few predators as adults",
     "Gulls and crows (eggs, chicks)"
    ],
    "shelter": [
     "Colonies in tall trees",
     "Reed beds"
    ]
   }
  },
  "egretta_garzetta": {
   "common": "Little egret",
   "catalan": "Martinet blanc",
   "group": "bird",
   "description": "White heron that hunts small fish, amphibians and invertebrates in shallow water.",
   "scientific": "Egretta garzetta",
   "illustration": "illustrations/egretta_garzetta.png",
   "photo": "photos/egretta_garzetta.jpg",
   "photoCredit": {
    "author": "El Golli Mohamed",
    "license": "CC BY-SA 4.0",
    "location": "Lake Tunis, Tunisia",
    "source": "https://commons.wikimedia.org/wiki/File:Aigrette_garzette_au_lac_sud_de_Tunis_(site_RAMSAR).jpg"
   },
   "relations": {
    "eats": [
     "Small fish",
     "Amphibians and tadpoles",
     "Crayfish and insects"
    ],
    "eatenBy": [
     "Gulls and crows (eggs, chicks)",
     "Birds of prey (rarely)"
    ],
    "shelter": [
     "Mixed heron colonies in trees"
    ]
   }
  },
  "bubulcus_ibis": {
   "common": "Western cattle egret",
   "catalan": "Esplugabous",
   "group": "bird",
   "description": "Small heron of fields and grassland that takes insects, amphibians and small vertebrates.",
   "scientific": "Bubulcus ibis",
   "illustration": "illustrations/bubulcus_ibis.png",
   "photo": "photos/bubulcus_ibis.jpg",
   "photoCredit": {
    "author": "El Golli Mohamed",
    "license": "CC BY-SA 4.0",
    "location": "Oued Medjerda, Tunisia",
    "source": "https://commons.wikimedia.org/wiki/File:H%C3%A9ron_garde_boeufs_%C3%A0_Oued_Mejerda.jpg"
   },
   "relations": {
    "eats": [
     "Grasshoppers and other insects",
     "Amphibians",
     "Small rodents and lizards"
    ],
    "eatenBy": [
     "Gulls and crows (eggs, chicks)",
     "Birds of prey"
    ],
    "shelter": [
     "Colonies in trees and reeds"
    ]
   }
  },
  "nycticorax_nycticorax": {
   "common": "Black-crowned night heron",
   "catalan": "Martinet de nit",
   "group": "bird",
   "description": "Heron that is active at dusk and at night, hunting fish and amphibians at the water’s edge.",
   "scientific": "Nycticorax nycticorax",
   "illustration": "illustrations/nycticorax_nycticorax.png",
   "photo": "photos/nycticorax_nycticorax.jpg",
   "photoCredit": {
    "author": "Paco Paños",
    "license": "CC BY-SA 4.0",
    "location": "Spain (per Commons categories)",
    "source": "https://commons.wikimedia.org/wiki/File:Martinete20100502.jpg"
   },
   "relations": {
    "eats": [
     "Fish",
     "Amphibians",
     "Crayfish",
     "Insects"
    ],
    "eatenBy": [
     "Gulls and crows (eggs)",
     "Birds of prey"
    ],
    "shelter": [
     "Dense riverside trees",
     "Reed beds"
    ]
   }
  },
  "pelophylax_perezi": {
   "common": "Perez’s frog",
   "catalan": "Granota verda",
   "group": "amphibian",
   "description": "The common green frog of Iberian ponds and rivers. It uses the same water and food as the natterjack toad and can also eat young toadlets.",
   "scientific": "Pelophylax perezi",
   "illustration": "illustrations/pelophylax_perezi.png",
   "photo": "photos/pelophylax_perezi.jpg",
   "photoCredit": {
    "author": "David Perez",
    "license": "CC BY 3.0",
    "location": "Burgos, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Pelophylax_perezi_by-dpc.jpg"
   },
   "relations": {
    "eats": [
     "Insects",
     "Spiders and worms",
     "Small frogs and tadpoles"
    ],
    "eatenBy": [
     "Herons and egrets",
     "Viperine water snake",
     "Fish and crayfish (tadpoles)",
     "Rats and cats"
    ],
    "shelter": [
     "Pond and river edges",
     "Water plants"
    ]
   }
  },
  "phragmites_australis": {
   "common": "Common reed",
   "catalan": "Canyís",
   "group": "plant",
   "description": "Tall grass that forms dense reed beds along the river. Reed beds produce many flying insects and are used by swallows as night roosts.",
   "scientific": "Phragmites australis",
   "illustration": "illustrations/phragmites_australis.png",
   "photo": "photos/phragmites_australis.jpg",
   "photoCredit": {
    "author": "Ryan Hodnett",
    "license": "CC BY-SA 4.0",
    "location": "s'Albufera, Mallorca, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:European_Stonechat_(Saxicola_rubicola)_on_Common_Reed_(Phragmites_australis)_-_Parc_Natural_de_s%27Albufera,_Spain_2022-04-18.jpg"
   },
   "relations": {
    "eats": [],
    "eatenBy": [
     "Reed aphids",
     "Wainscot moth caterpillars",
     "Coots and geese (shoots)"
    ],
    "shelter": [
     "Reed warblers",
     "Roosting swallows",
     "Midges and dragonflies",
     "Water birds"
    ]
   }
  },
  "typha_angustifolia": {
   "common": "Lesser bulrush",
   "catalan": "Balca",
   "group": "plant",
   "description": "Wetland plant with brown, cigar-shaped flower heads. Its stands host aquatic insect larvae that later fly as swallow food.",
   "scientific": "Typha angustifolia",
   "illustration": "illustrations/typha_angustifolia.png",
   "photo": "photos/typha_angustifolia.jpg",
   "photoCredit": {
    "author": "Diego Delso",
    "license": "CC BY-SA 3.0",
    "location": "Tallinn Botanic Garden, Estonia",
    "source": "https://commons.wikimedia.org/wiki/File:Totora_(Typha_angustifolia),_jard%C3%ADn_bot%C3%A1nico_de_Tallin,_Estonia,_2012-08-12,_DD_01.JPG"
   },
   "relations": {
    "eats": [],
    "eatenBy": [
     "Moth caterpillars",
     "Coots and ducks (shoots)",
     "Seed-eating insects"
    ],
    "shelter": [
     "Reed warblers",
     "Dragonfly and midge larvae",
     "Frogs"
    ]
   }
  },
  "populus_alba": {
   "common": "White poplar",
   "catalan": "Àlber",
   "group": "plant",
   "description": "Riverside tree with leaves that are silvery-white underneath. Riparian trees host insects and give shelter along the river corridor.",
   "scientific": "Populus alba",
   "illustration": "illustrations/populus_alba.png",
   "photo": "photos/populus_alba.jpg",
   "photoCredit": {
    "author": "Ismael Olea",
    "license": "CC BY 4.0",
    "location": "Parque del Andarax, Almería, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Populus_alba_20210529.jpg"
   },
   "relations": {
    "eats": [],
    "eatenBy": [
     "Poplar leaf beetles",
     "Caterpillars (e.g. poplar hawk-moth)",
     "Aphids"
    ],
    "shelter": [
     "Nesting birds",
     "Bats in hollows",
     "Insects and spiders"
    ]
   }
  },
  "salix_alba": {
   "common": "White willow",
   "catalan": "Salze blanc",
   "group": "plant",
   "description": "Riverside tree with narrow, silvery leaves. Willows support many insects that swallows catch in flight.",
   "scientific": "Salix alba",
   "illustration": "illustrations/salix_alba.png",
   "photo": "photos/salix_alba.jpg",
   "photoCredit": {
    "author": "Dmitry Makeev",
    "license": "CC BY-SA 4.0",
    "location": "Elektrostal, Russia (herbarium scan, white background)",
    "source": "https://commons.wikimedia.org/wiki/File:2020_year._Herbarium._Salix_alba._img-007.jpg"
   },
   "relations": {
    "eats": [],
    "eatenBy": [
     "Willow leaf beetles",
     "Caterpillars",
     "Aphids",
     "Bees (early pollen)"
    ],
    "shelter": [
     "Nesting birds",
     "Insects and spiders",
     "Fish among the roots"
    ]
   }
  },
  "chironomus_plumosus": {
   "common": "Non-biting midge",
   "catalan": "Quironòmid",
   "group": "insect",
   "description": "Its larvae live in the mud of still water and the adults emerge in swarms, a key food for swallows. Representative of the midges (Chironomidae).",
   "scientific": "Chironomus plumosus",
   "illustration": "illustrations/chironomus_plumosus.png",
   "photo": "photos/chironomus_plumosus.jpg",
   "photoCredit": {
    "author": "Didier Descouens",
    "license": "CC BY-SA 4.0",
    "location": "Muséum de Toulouse specimen",
    "source": "https://commons.wikimedia.org/wiki/File:Chironomus_plumosus_MHNT.jpg"
   },
   "relations": {
    "eats": [
     "Organic mud and algae (larvae)",
     "Adults hardly feed"
    ],
    "eatenBy": [
     "Barn swallow",
     "Swifts and martins",
     "Fish (larvae)",
     "Dragonfly nymphs",
     "Bats"
    ],
    "shelter": [
     "Tubes in mud (larvae)",
     "Plants near water (adults)"
    ]
   }
  },
  "culex_pipiens": {
   "common": "Common house mosquito",
   "catalan": "Mosquit comú",
   "group": "insect",
   "description": "Mosquito that breeds in standing water. Its adults are part of the swallow’s diet.",
   "scientific": "Culex pipiens",
   "illustration": "illustrations/culex_pipiens.png",
   "photo": "photos/culex_pipiens.jpg",
   "photoCredit": {
    "author": "Alvesgaspar",
    "license": "CC BY-SA 3.0",
    "location": "not stated (white background)",
    "source": "https://commons.wikimedia.org/wiki/File:Culex_pipiens_2007-1.jpg"
   },
   "relations": {
    "eats": [
     "Bird blood (females)",
     "Nectar",
     "Microorganisms (larvae)"
    ],
    "eatenBy": [
     "Barn swallow",
     "House martins",
     "Bats",
     "Mosquitofish (larvae)",
     "Dragonflies"
    ],
    "shelter": [
     "Still water (larvae)",
     "Buildings and cellars (adults)"
    ]
   }
  },
  "aedes_albopictus": {
   "common": "Asian tiger mosquito",
   "catalan": "Mosquit tigre",
   "group": "insect",
   "description": "Invasive, day-biting mosquito now common in Barcelona. It breeds in small containers of water.",
   "scientific": "Aedes albopictus",
   "illustration": "illustrations/aedes_albopictus.png",
   "photo": "photos/aedes_albopictus.jpg",
   "photoCredit": {
    "author": "James Gathany, CDC",
    "license": "Public domain",
    "location": "USA (CDC lab photo)",
    "source": "https://commons.wikimedia.org/wiki/File:CDC-Gathany-Aedes-albopictus-1.jpg"
   },
   "relations": {
    "eats": [
     "Mammal and human blood (females)",
     "Nectar",
     "Microorganisms (larvae)"
    ],
    "eatenBy": [
     "Barn swallow",
     "Swifts",
     "Bats",
     "Dragonflies",
     "Spiders"
    ],
    "shelter": [
     "Small water containers (larvae)",
     "Shady vegetation"
    ]
   }
  },
  "episyrphus_balteatus": {
   "common": "Marmalade hoverfly",
   "catalan": "Sírfid",
   "group": "insect",
   "description": "Common flower visitor whose larvae eat aphids. Representative of the hoverflies (Syrphidae).",
   "scientific": "Episyrphus balteatus",
   "illustration": "illustrations/episyrphus_balteatus.png",
   "photo": "photos/episyrphus_balteatus.jpg",
   "photoCredit": {
    "author": "André Karwath (Aka)",
    "license": "CC BY-SA 2.5",
    "location": "not stated (white background)",
    "source": "https://commons.wikimedia.org/wiki/File:Episyrphus_balteatus_male_-_flying_(aka).jpg"
   },
   "relations": {
    "eats": [
     "Aphids (larvae)",
     "Pollen and nectar (adults)"
    ],
    "eatenBy": [
     "Barn swallow",
     "Swifts",
     "Spiders",
     "Wasps"
    ],
    "shelter": [
     "Flowers and vegetation",
     "Leaf litter in winter"
    ]
   }
  },
  "falco_peregrinus": {
   "common": "Peregrine falcon",
   "catalan": "Falcó pelegrí",
   "group": "bird",
   "description": "The fastest bird of prey. It nests on tall buildings in Barcelona and catches birds in flight.",
   "scientific": "Falco peregrinus",
   "illustration": "illustrations/falco_peregrinus.png",
   "photo": "photos/falco_peregrinus.jpg",
   "photoCredit": {
    "author": "Carlos Delgado",
    "license": "CC BY-SA 4.0",
    "location": "Community of Madrid, Spain (captive bird)",
    "source": "https://commons.wikimedia.org/wiki/File:Falco_peregrinus_-_01.jpg"
   },
   "relations": {
    "eats": [
     "Pigeons and doves",
     "Gulls",
     "Starlings and swifts",
     "Swallows"
    ],
    "eatenBy": [
     "No regular predators"
    ],
    "shelter": [
     "Ledges on tall buildings",
     "Cliffs"
    ]
   }
  },
  "falco_subbuteo": {
   "common": "Eurasian hobby",
   "catalan": "Falcó mostatxut",
   "group": "bird",
   "description": "Small, agile falcon that catches swallows, martins and large insects in the air.",
   "scientific": "Falco subbuteo",
   "illustration": "illustrations/falco_subbuteo.png",
   "photo": "photos/falco_subbuteo.jpg",
   "photoCredit": {
    "author": "Lilly M",
    "license": "CC BY-SA 3.0",
    "location": "Kadzidłowo, Poland",
    "source": "https://commons.wikimedia.org/wiki/File:Falco_subbuteo_from_Kadzidlowo.jpg"
   },
   "relations": {
    "eats": [
     "Swallows and martins",
     "Swifts",
     "Dragonflies and large insects"
    ],
    "eatenBy": [
     "Few predators",
     "Crows (eggs)"
    ],
    "shelter": [
     "Old crow nests in tall trees"
    ]
   }
  },
  "pica_pica": {
   "common": "Eurasian magpie",
   "catalan": "Garsa",
   "group": "bird",
   "description": "Intelligent bird that raids nests for eggs and chicks.",
   "scientific": "Pica pica",
   "illustration": "illustrations/pica_pica.png",
   "photo": "photos/pica_pica.jpg",
   "photoCredit": {
    "author": "Diego Delso",
    "license": "CC BY-SA 4.0",
    "location": "Almuradiel, Ciudad Real, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Urraca_(Pica_pica),_Almuradiel,_Ciudad_Real,_Espa%C3%B1a,_2021-12-19,_DD_01.jpg"
   },
   "relations": {
    "eats": [
     "Eggs and nestlings",
     "Insects and worms",
     "Seeds and fruit",
     "Food waste"
    ],
    "eatenBy": [
     "Birds of prey",
     "Domestic cats (fledglings)"
    ],
    "shelter": [
     "Domed nests in trees"
    ]
   }
  },
  "rattus_rattus": {
   "common": "Black rat",
   "catalan": "Rata negra",
   "group": "mammal",
   "description": "Agile climber that can reach nests on walls and in buildings and eat eggs and chicks.",
   "scientific": "Rattus rattus",
   "illustration": "illustrations/rattus_rattus.png",
   "photo": "photos/rattus_rattus.jpg",
   "photoCredit": {
    "author": "Jakub Hałun",
    "license": "CC BY-SA 4.0",
    "location": "Karni Mata Temple, Deshnoke, India",
    "source": "https://commons.wikimedia.org/wiki/File:20191212_Szczury_w_%C5%9Awi%C4%85tyni_Karni_Maty_w_De%C5%9Bnok_1038_8111_DxO.jpg"
   },
   "relations": {
    "eats": [
     "Fruit and seeds",
     "Eggs and nestlings",
     "Insects",
     "Food waste"
    ],
    "eatenBy": [
     "Owls",
     "Domestic cats",
     "Red fox",
     "Snakes"
    ],
    "shelter": [
     "Roofs and trees",
     "Dense vegetation"
    ]
   }
  },
  "delichon_urbicum": {
   "common": "House martin",
   "catalan": "Oreneta cuablanca",
   "group": "bird",
   "description": "Nests in mud cups under eaves and hunts the same flying insects as the barn swallow.",
   "scientific": "Delichon urbicum",
   "illustration": "illustrations/delichon_urbicum.png",
   "photo": "photos/delichon_urbicum.jpg",
   "photoCredit": {
    "author": "Charles J. Sharp",
    "license": "CC BY-SA 4.0",
    "location": "Andalusia, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:House_martins_(Delichon_urbicum_meridionale)_at_nest.jpg"
   },
   "relations": {
    "eats": [
     "Flying insects (midges, aphids, flies)"
    ],
    "eatenBy": [
     "Eurasian hobby",
     "Peregrine falcon",
     "Magpies and rats (nests)"
    ],
    "shelter": [
     "Mud nests under eaves and bridges"
    ]
   }
  },
  "apus_apus": {
   "common": "Common swift",
   "catalan": "Falciot negre",
   "group": "bird",
   "description": "Spends almost its whole life in the air, feeding on flying insects.",
   "scientific": "Apus apus",
   "illustration": "illustrations/apus_apus.png",
   "photo": "photos/apus_apus.jpg",
   "photoCredit": {
    "author": "pau.artigas (cut-out version by a Commons user)",
    "license": "CC BY-SA 2.0",
    "location": "Barcelona, Spain (cut-out, placed on white)",
    "source": "https://commons.wikimedia.org/wiki/File:Apus_apus_flying_(transparent_background).png"
   },
   "relations": {
    "eats": [
     "Flying insects",
     "Airborne spiders"
    ],
    "eatenBy": [
     "Eurasian hobby",
     "Peregrine falcon"
    ],
    "shelter": [
     "Cavities in old buildings"
    ]
   }
  },
  "apus_pallidus": {
   "common": "Pallid swift",
   "catalan": "Falciot pàl·lid",
   "group": "bird",
   "description": "A slightly paler, browner swift that also nests in Barcelona and feeds on flying insects.",
   "scientific": "Apus pallidus",
   "illustration": "illustrations/apus_pallidus.png",
   "photo": "photos/apus_pallidus.jpg",
   "photoCredit": {
    "author": "Hobbyfotowiki",
    "license": "CC0",
    "location": "Sagres, Algarve, Portugal",
    "source": "https://commons.wikimedia.org/wiki/File:Pallid_swift_(in_flight).jpg"
   },
   "relations": {
    "eats": [
     "Flying insects"
    ],
    "eatenBy": [
     "Eurasian hobby",
     "Peregrine falcon"
    ],
    "shelter": [
     "Holes in buildings and cliffs"
    ]
   }
  },
  "passer_domesticus": {
   "common": "House sparrow",
   "catalan": "Pardal comú",
   "group": "bird",
   "description": "Common urban bird that often takes over swallow and martin nests.",
   "scientific": "Passer domesticus",
   "illustration": "illustrations/passer_domesticus.png",
   "photo": "photos/passer_domesticus.jpg",
   "photoCredit": {
    "author": "Ignacio García",
    "license": "CC BY-SA 2.0",
    "location": "Parc de la Ciutadella, Barcelona, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Passer_domesticus_-Ciutadella,_Barcelona,_Spain_-male.jpg"
   },
   "relations": {
    "eats": [
     "Seeds and grain",
     "Insects (for chicks)",
     "Food waste"
    ],
    "eatenBy": [
     "Domestic cats",
     "Sparrowhawks and kestrels",
     "Magpies (eggs)"
    ],
    "shelter": [
     "Holes in buildings",
     "Dense shrubs",
     "Swallow and martin nests"
    ]
   }
  },
  "rosmarinus_officinalis": {
   "common": "Rosemary",
   "catalan": "Romaní",
   "group": "plant",
   "description": "Aromatic Mediterranean shrub. Low aromatic scrub gives lizards shelter and hosts the insects they eat.",
   "scientific": "Rosmarinus officinalis",
   "illustration": "illustrations/rosmarinus_officinalis.png",
   "photo": "photos/rosmarinus_officinalis.jpg",
   "photoCredit": {
    "author": "iesmgb (Flickr)",
    "license": "CC BY-SA 2.0",
    "location": "not stated (white background)",
    "source": "https://commons.wikimedia.org/wiki/File:Rosmarinus_officinalis._Romeu.jpg"
   },
   "relations": {
    "eats": [],
    "eatenBy": [
     "Rosemary beetle",
     "Bees (nectar)"
    ],
    "shelter": [
     "Catalan wall lizard",
     "Insects and spiders",
     "Small birds"
    ]
   }
  },
  "thymus_vulgaris": {
   "common": "Common thyme",
   "catalan": "Farigola",
   "group": "plant",
   "description": "Small aromatic shrub of dry, stony ground that attracts many insects.",
   "scientific": "Thymus vulgaris",
   "illustration": "illustrations/thymus_vulgaris.png",
   "photo": "photos/thymus_vulgaris.jpg",
   "photoCredit": {
    "author": "Victor M. Vicente Selvas",
    "license": "Public domain",
    "location": "Catalonia, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Thymus_vulgaris_1_de_maig_de_2009.jpg"
   },
   "relations": {
    "eats": [],
    "eatenBy": [
     "Bees and butterflies (nectar)",
     "Leaf beetles and aphids",
     "Rabbits"
    ],
    "shelter": [
     "Catalan wall lizard",
     "Ground insects",
     "Spiders"
    ]
   }
  },
  "dittrichia_viscosa": {
   "common": "False yellowhead",
   "catalan": "Olivarda",
   "group": "plant",
   "description": "Sticky, yellow-flowered plant of disturbed ground and road edges. It flowers in autumn and hosts many insects.",
   "scientific": "Dittrichia viscosa",
   "illustration": "illustrations/dittrichia_viscosa.png",
   "photo": "photos/dittrichia_viscosa.jpg",
   "photoCredit": {
    "author": "Christian Ferrer",
    "license": "CC BY-SA 4.0",
    "location": "Murviel-lès-Béziers, Hérault, France",
    "source": "https://commons.wikimedia.org/wiki/File:Dittrichia_viscosa,_Murviel-l%C3%A8s-B%C3%A9ziers.jpg"
   },
   "relations": {
    "eats": [],
    "eatenBy": [
     "Bees, hoverflies and butterflies (nectar)",
     "Gall flies"
    ],
    "shelter": [
     "Insects and spiders",
     "Catalan wall lizard",
     "Small birds"
    ]
   }
  },
  "oedipoda_caerulescens": {
   "common": "Blue-winged grasshopper",
   "catalan": "Llagosta d’ales blaves",
   "group": "insect",
   "description": "Well camouflaged on bare ground until it flies and flashes its blue wings. Representative of the grasshoppers (Orthoptera).",
   "scientific": "Oedipoda caerulescens",
   "illustration": "illustrations/oedipoda_caerulescens.png",
   "photo": "photos/oedipoda_caerulescens.jpg",
   "photoCredit": {
    "author": "Hans Hillewaert",
    "license": "CC BY-SA 4.0",
    "location": "Alàs i Cerc, Catalonia, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Oedipoda_caerulescens_1.jpg"
   },
   "relations": {
    "eats": [
     "Grasses and low plants"
    ],
    "eatenBy": [
     "Catalan wall lizard",
     "Kestrels and shrikes",
     "Spiders",
     "Mantises"
    ],
    "shelter": [
     "Bare, stony ground"
    ]
   }
  },
  "argiope_bruennichi": {
   "common": "Wasp spider",
   "catalan": "Aranya vespa",
   "group": "invertebrate",
   "description": "Striped orb-web spider of grassy places. Representative of the spiders (Araneae).",
   "scientific": "Argiope bruennichi",
   "illustration": "illustrations/argiope_bruennichi.png",
   "photo": "photos/argiope_bruennichi.jpg",
   "photoCredit": {
    "author": "Rogergil",
    "license": "CC BY-SA 3.0",
    "location": "Montserrat, Catalonia, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Argiope_bruennichi_-_aranya_vespa.jpg"
   },
   "relations": {
    "eats": [
     "Grasshoppers",
     "Bees and wasps",
     "Flies"
    ],
    "eatenBy": [
     "Catalan wall lizard",
     "Birds",
     "Spider-hunting wasps"
    ],
    "shelter": [
     "Webs in tall grass and shrubs"
    ]
   }
  },
  "falco_tinnunculus": {
   "common": "Common kestrel",
   "catalan": "Xoriguer comú",
   "group": "bird",
   "description": "Small falcon that hovers over open ground hunting rodents, large insects and lizards.",
   "scientific": "Falco tinnunculus",
   "illustration": "illustrations/falco_tinnunculus.png",
   "photo": "photos/falco_tinnunculus.jpg",
   "photoCredit": {
    "author": "Frank Vassen",
    "license": "CC BY 2.0",
    "location": "El Rubicón, Lanzarote, Canary Islands, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Falco_tinnunculus_-El_Rubicon,_Lanzarote,_Canary_Islands,_Spain-8.jpg"
   },
   "relations": {
    "eats": [
     "Voles and mice",
     "Lizards",
     "Large insects",
     "Small birds"
    ],
    "eatenBy": [
     "Few predators",
     "Large birds of prey (rarely)"
    ],
    "shelter": [
     "Ledges on buildings",
     "Old nests in trees"
    ]
   }
  },
  "tarentola_mauritanica": {
   "common": "Moorish gecko",
   "catalan": "Dragó comú",
   "group": "reptile",
   "description": "Common on walls and buildings. It hunts insects at night and shares walls and food with the wall lizard.",
   "scientific": "Tarentola mauritanica",
   "illustration": "illustrations/tarentola_mauritanica.png",
   "photo": "photos/tarentola_mauritanica.jpg",
   "photoCredit": {
    "author": "Charles J. Sharp",
    "license": "CC BY-SA 4.0",
    "location": "El Rocío, Huelva, Spain",
    "source": "https://commons.wikimedia.org/wiki/File:Common_wall_gecko_(Tarentola_mauritanica)_Huelva.jpg"
   },
   "relations": {
    "eats": [
     "Moths and flies",
     "Spiders",
     "Beetles"
    ],
    "eatenBy": [
     "Domestic cats",
     "Rats",
     "Snakes",
     "Owls and kestrels"
    ],
    "shelter": [
     "Cracks in walls",
     "Under roof tiles and stones"
    ]
   }
  },
  "felis_catus": {
   "common": "Domestic cat",
   "catalan": "Gat domèstic",
   "group": "mammal",
   "description": "Free-roaming and feral cats are among the most important predators of small wildlife in towns, including hedgehogs, toads, lizards and birds.",
   "scientific": "Felis catus",
   "illustration": "illustrations/felis_catus.png",
   "photo": "photos/felis_catus.jpg",
   "photoCredit": {
    "author": "Von.grzanka",
    "license": "CC BY-SA 3.0",
    "location": "Poland",
    "source": "https://commons.wikimedia.org/wiki/File:Felis_catus-cat_on_snow.jpg"
   },
   "relations": {
    "eats": [
     "Rodents",
     "Small birds",
     "Lizards and geckos",
     "Toads",
     "Insects"
    ],
    "eatenBy": [
     "No regular predators",
     "Foxes (kittens, rarely)"
    ],
    "shelter": [
     "Gardens and buildings",
     "Scrub and empty plots"
    ]
   }
  },
  "larus_michahellis": {
   "common": "Yellow-legged gull",
   "catalan": "Gavià argentat",
   "group": "bird",
   "description": "Large, opportunistic gull, very common in Barcelona, that takes small animals, eggs and chicks.",
   "scientific": "Larus michahellis",
   "illustration": "illustrations/larus_michahellis.png",
   "photo": "photos/larus_michahellis.jpg",
   "photoCredit": {
    "author": "Alvesgaspar",
    "license": "CC BY-SA 4.0",
    "location": "Sines coast, Portugal",
    "source": "https://commons.wikimedia.org/wiki/File:Seagull_July_2008-6.jpg"
   },
   "relations": {
    "eats": [
     "Fish and food waste",
     "Small birds and chicks",
     "Rodents, lizards and toads",
     "Crabs"
    ],
    "eatenBy": [
     "Few predators",
     "Peregrine falcon (rarely)",
     "Rats (eggs)"
    ],
    "shelter": [
     "Nests on roofs and coastal cliffs"
    ]
   }
  },
  "rattus_norvegicus": {
   "common": "Brown rat",
   "catalan": "Rata comuna",
   "group": "mammal",
   "description": "Common along urban rivers and sewers. It eats eggs, young animals and invertebrates.",
   "scientific": "Rattus norvegicus",
   "illustration": "illustrations/rattus_norvegicus.png",
   "photo": "photos/rattus_norvegicus.jpg",
   "photoCredit": {
    "author": "AnemoneProjectors",
    "license": "CC BY-SA 2.0",
    "location": "Stevenage, England",
    "source": "https://commons.wikimedia.org/wiki/File:Rattus_norvegicus_-Fairlands_Valley_Park,_Stevenage,_England-8.jpg"
   },
   "relations": {
    "eats": [
     "Food waste",
     "Seeds and grain",
     "Invertebrates",
     "Eggs and young animals"
    ],
    "eatenBy": [
     "Domestic cats",
     "Red fox",
     "Owls",
     "Herons and gulls"
    ],
    "shelter": [
     "Burrows in river banks",
     "Sewers and buildings"
    ]
   }
  }
 },
 "webs": [
  {
   "id": "hedgehog",
   "indicator": "erinaceus_europaeus",
   "x": 0,
   "y": 0,
   "shelter": [
    {
     "id": "pistacia_lentiscus",
     "note": "shelter and fruit"
    },
    {
     "id": "rhamnus_alaternus",
     "note": "shelter and fruit"
    },
    {
     "id": "rubus_ulmifolius",
     "note": "nesting cover and fruit"
    },
    {
     "id": "tamarix_gallica",
     "note": "cover near the shore"
    }
   ],
   "prey": [
    {
     "id": "lumbricus_terrestris",
     "note": ""
    },
    {
     "id": "harpalus_rufipes",
     "note": ""
    },
    {
     "id": "oxythyrea_funesta",
     "note": ""
    },
    {
     "id": "deroceras_reticulatum",
     "note": ""
    },
    {
     "id": "cornu_aspersum",
     "note": ""
    },
    {
     "id": "theba_pisana",
     "note": ""
    },
    {
     "id": "forficula_auricularia",
     "note": ""
    }
   ],
   "predators": [
    {
     "id": "vulpes_vulpes",
     "note": "kills hedgehogs"
    },
    {
     "id": "felis_catus",
     "note": "kills young hedgehogs"
    }
   ],
   "competitors": [
    {
     "id": "turdus_merula",
     "note": "competes for earthworms"
    },
    {
     "id": "rattus_norvegicus",
     "note": "competes for food"
    }
   ]
  },
  {
   "id": "natterjack",
   "indicator": "epidalea_calamita",
   "x": 2450,
   "y": -150,
   "shelter": [],
   "prey": [
    {
     "id": "messor_barbarus",
     "note": ""
    },
    {
     "id": "lasius_niger",
     "note": ""
    },
    {
     "id": "pimelia_bipunctata",
     "note": ""
    }
   ],
   "predators": [
    {
     "id": "anax_imperator",
     "note": "eats tadpoles"
    },
    {
     "id": "dytiscus_marginalis",
     "note": "eats tadpoles"
    },
    {
     "id": "notonecta_maculata",
     "note": "eats tadpoles"
    },
    {
     "id": "gambusia_holbrooki",
     "note": "invasive · eats eggs and tadpoles"
    },
    {
     "id": "procambarus_clarkii",
     "note": "invasive · eats eggs and tadpoles"
    },
    {
     "id": "trachemys_scripta",
     "note": "invasive · eats tadpoles"
    },
    {
     "id": "cyprinus_carpio",
     "note": "introduced · eats eggs, degrades ponds"
    },
    {
     "id": "natrix_maura",
     "note": "eats toads and tadpoles"
    },
    {
     "id": "ardea_cinerea",
     "note": "eats toads"
    },
    {
     "id": "egretta_garzetta",
     "note": "eats toads and tadpoles"
    },
    {
     "id": "bubulcus_ibis",
     "note": "eats toads"
    },
    {
     "id": "nycticorax_nycticorax",
     "note": "eats toads"
    },
    {
     "id": "larus_michahellis",
     "note": "eats toads"
    },
    {
     "id": "felis_catus",
     "note": "kills toads"
    },
    {
     "id": "rattus_norvegicus",
     "note": "eats toadlets"
    }
   ],
   "competitors": [
    {
     "id": "pelophylax_perezi",
     "note": "same ponds and food"
    }
   ]
  },
  {
   "id": "swallow",
   "indicator": "hirundo_rustica",
   "x": 150,
   "y": 1850,
   "shelter": [
    {
     "id": "phragmites_australis",
     "note": "insect habitat and roost"
    },
    {
     "id": "typha_angustifolia",
     "note": "insect habitat"
    },
    {
     "id": "populus_alba",
     "note": "insect habitat"
    },
    {
     "id": "salix_alba",
     "note": "insect habitat"
    }
   ],
   "prey": [
    {
     "id": "chironomus_plumosus",
     "note": ""
    },
    {
     "id": "culex_pipiens",
     "note": ""
    },
    {
     "id": "aedes_albopictus",
     "note": ""
    },
    {
     "id": "episyrphus_balteatus",
     "note": ""
    }
   ],
   "predators": [
    {
     "id": "falco_peregrinus",
     "note": "catches adults in flight"
    },
    {
     "id": "falco_subbuteo",
     "note": "catches adults in flight"
    },
    {
     "id": "pica_pica",
     "note": "raids nests"
    },
    {
     "id": "rattus_rattus",
     "note": "raids nests"
    },
    {
     "id": "felis_catus",
     "note": "catches fledglings"
    }
   ],
   "competitors": [
    {
     "id": "delichon_urbicum",
     "note": "same insects"
    },
    {
     "id": "apus_apus",
     "note": "same insects"
    },
    {
     "id": "apus_pallidus",
     "note": "same insects"
    },
    {
     "id": "passer_domesticus",
     "note": "takes over nests"
    }
   ]
  },
  {
   "id": "lizard",
   "indicator": "podarcis_liolepis",
   "x": 2550,
   "y": 1750,
   "shelter": [
    {
     "id": "rosmarinus_officinalis",
     "note": "shelter and insects"
    },
    {
     "id": "thymus_vulgaris",
     "note": "shelter and insects"
    },
    {
     "id": "dittrichia_viscosa",
     "note": "shelter and insects"
    }
   ],
   "prey": [
    {
     "id": "oedipoda_caerulescens",
     "note": ""
    },
    {
     "id": "argiope_bruennichi",
     "note": ""
    }
   ],
   "predators": [
    {
     "id": "falco_tinnunculus",
     "note": "hunts lizards"
    },
    {
     "id": "felis_catus",
     "note": "kills lizards"
    },
    {
     "id": "larus_michahellis",
     "note": "takes lizards"
    }
   ],
   "competitors": [
    {
     "id": "tarentola_mauritanica",
     "note": "same walls and food"
    }
   ]
  }
 ]
};
