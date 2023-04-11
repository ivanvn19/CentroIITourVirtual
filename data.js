var APP_DATA = {
  "scenes": [
    {
      "id": "0-frente",
      "name": "Frente",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.1255853701701284,
        "pitch": -0.1603402017100315,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.4060153786715617,
          "pitch": 0.008574077895417531,
          "rotation": 0,
          "target": "1-ingreso"
        },
        {
          "yaw": 2.914547064226613,
          "pitch": 0.07531859105128902,
          "rotation": 0,
          "target": "3-sala-centro-de-da-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1454028924162767,
          "pitch": -0.1257621485439202,
          "title": "Centro II. Hogar con Centro de día Juan López&nbsp;",
          "text": "Es un hogar de residencia y centro de día que está destinado a personas adultas con discapacidad intelectual.&nbsp; Diariamente se desarrollan talleres en los cuales los residentes pueden potenciar sus capacidades y desarrollar actividades tanto motrices como cognitivas. Los objetivos de los mismos están orientados a mejorar la calidad de vida, favoreciendo la autonomía&nbsp; y promoviendo los intereses en actividades deportivas, artísticas y recreativas.<div><br></div><div><p class=\"font_8\" style=\"background: transparent; border: 0px; outline: 0px; vertical-align: baseline; pointer-events: auto; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-size: 14px; line-height: 1.3em; color: rgb(var(--color_20));\"><span style=\"background: transparent; border: 0px; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline; font-family: lato-light, lato, sans-serif;\">Iberá 5042 C.A.B.A // TEL: 4542-0234 / 4546-0884 //</span></p><p class=\"font_8\" style=\"background: transparent; border: 0px; outline: 0px; vertical-align: baseline; pointer-events: auto; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-size: 14px; line-height: 1.3em; color: rgb(var(--color_20));\"><span style=\"background: transparent; border: 0px; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline; font-family: lato-light, lato, sans-serif;\"><span style=\"background: transparent; border: 0px; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;\"><span class=\"color_26\" style=\"background: transparent; border: 0px; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline; color: rgb(var(--color_26));\">Email:&nbsp;<a data-auto-recognition=\"true\" href=\"mailto:dinadiberasec@gmail.com\" style=\"background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; border: 0px; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline; color: inherit;\">dinadiberasec@gmail.com</a></span></span></span></p></div>"
        }
      ]
    },
    {
      "id": "1-ingreso",
      "name": "Ingreso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1494505709995888,
        "pitch": 0.11378509031544404,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -3.08806502778825,
          "pitch": 0.14937514504994098,
          "rotation": 0,
          "target": "0-frente"
        },
        {
          "yaw": 0.07412998523690106,
          "pitch": 0.06165628901390008,
          "rotation": 0,
          "target": "2-ingreso"
        },
        {
          "yaw": -2.311808219349441,
          "pitch": -0.007821048862185265,
          "rotation": 0,
          "target": "3-sala-centro-de-da-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ingreso",
      "name": "Ingreso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.233304216338027,
        "pitch": 0.07790847978611204,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.2502881842829723,
          "pitch": 0.07254214523206137,
          "rotation": 0,
          "target": "6-pasillo-central-i"
        },
        {
          "yaw": 2.891717064560533,
          "pitch": 0.29983878905875194,
          "rotation": 3.141592653589793,
          "target": "1-ingreso"
        },
        {
          "yaw": 2.537159042955204,
          "pitch": 0.11066991482716126,
          "rotation": 0,
          "target": "0-frente"
        },
        {
          "yaw": -1.036242450700577,
          "pitch": 0.11479286348468598,
          "rotation": 4.71238898038469,
          "target": "4-ingreso-enfermera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sala-centro-de-da-",
      "name": "Sala centro de día ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.532213528943757,
        "pitch": 0.04897270937662768,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.11876519407843844,
          "pitch": 0.04494367365939134,
          "rotation": 0,
          "target": "1-ingreso"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8660711407856834,
          "pitch": -0.20296436764037296,
          "title": "Mural Fluoresente&nbsp;",
          "text": "En el centro de día los concurrentes desarrollan diferentes actividades deportivas, musicales y artísticas; En este caso el mural fluorescente que viste las paredes de la sala.&nbsp;&nbsp;"
        }
      ]
    },
    {
      "id": "4-ingreso-enfermera",
      "name": "Ingreso enfermería",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.7493768615768683,
        "pitch": -0.20859367168539222,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.9839777274029657,
          "pitch": 0.04036013211190337,
          "rotation": 14.137166941154074,
          "target": "2-ingreso"
        },
        {
          "yaw": 2.4679641743734466,
          "pitch": -0.22208504494014036,
          "rotation": 0,
          "target": "5-enfermera-"
        },
        {
          "yaw": -2.738831889822537,
          "pitch": 0.1623035266794588,
          "rotation": 1.5707963267948966,
          "target": "3-sala-centro-de-da-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-enfermera-",
      "name": "Enfermería ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.0053428446489647285,
        "pitch": 0.18608585155878643,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.227516231228412,
          "pitch": -0.04737156803833287,
          "rotation": 0,
          "target": "4-ingreso-enfermera"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.30524188119828644,
          "pitch": -0.19972086248460563,
          "title": "Enfermeria&nbsp;",
          "text": "El centro II&nbsp; cuenta con una enferemria totalmente equipada, y personal capacitado las 24 horas"
        }
      ]
    },
    {
      "id": "6-pasillo-central-i",
      "name": "Pasillo central I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.8741728945280354,
        "pitch": 0.16593051387759594,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.31302453847734846,
          "pitch": 0.08438379578220889,
          "rotation": 0,
          "target": "2-ingreso"
        },
        {
          "yaw": -1.7058400640933513,
          "pitch": 0.1337392253978571,
          "rotation": 0,
          "target": "7-ascensor"
        },
        {
          "yaw": -0.5606911634780083,
          "pitch": 0.16478149735923253,
          "rotation": 0,
          "target": "8-jardn-de-invierno"
        },
        {
          "yaw": 2.4618491790281904,
          "pitch": 0.03174846369111961,
          "rotation": 0,
          "target": "9-sala-de-economa-domstica"
        },
        {
          "yaw": -2.808945470036681,
          "pitch": 0.13032262474587952,
          "rotation": 0,
          "target": "10-pasillo-central-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-ascensor",
      "name": "Ascensor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08878174420726737,
          "pitch": -0.33335463649468267,
          "rotation": 0,
          "target": "32-ingreso-a-salas-planta-alta"
        },
        {
          "yaw": -3.0621067200318066,
          "pitch": 0.3005108794948512,
          "rotation": 0,
          "target": "25-segundo-piso---pasillo-central"
        },
        {
          "yaw": 0.0788780169164518,
          "pitch": -0.11701627489858168,
          "rotation": 3.141592653589793,
          "target": "6-pasillo-central-i"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7797525608482161,
          "pitch": -0.20693705026694786,
          "title": "Ascensor&nbsp;",
          "text": "El centro II cuenta con un ascensor, además de las escaleras, para garantizar el acceso de nuestros residentes, a los distintos lugares del complejo."
        },
        {
          "yaw": -3.1066943792769095,
          "pitch": -0.09247797464140817,
          "title": "Segundo piso&nbsp;",
          "text": "Aquí se encuentran, divididos en sectores, los cuartos de los residentes y los baños equipados con duchas."
        }
      ]
    },
    {
      "id": "8-jardn-de-invierno",
      "name": "Jardín de invierno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1495879952147199,
        "pitch": -0.1256588383646875,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.5671206353885427,
          "pitch": -0.011887022039649864,
          "rotation": 0,
          "target": "6-pasillo-central-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sala-de-economa-domstica",
      "name": "Sala de economía doméstica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.3296596666192393,
        "pitch": 0.34679228064376844,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.457885316168074,
          "pitch": 0.09062294619892342,
          "rotation": 0,
          "target": "6-pasillo-central-i"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.23140663054135402,
          "pitch": 0.08746644934023529,
          "title": "Sala de economía doméstica&nbsp;",
          "text": "En esta sala los residentes elaboran diversas producciones que van desde panificados hasta velas."
        }
      ]
    },
    {
      "id": "10-pasillo-central-ii",
      "name": "Pasillo central II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.926556055723319,
        "pitch": 0.28788721061047795,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.12037896015268146,
          "pitch": 0.0917883210338637,
          "rotation": 0,
          "target": "6-pasillo-central-i"
        },
        {
          "yaw": 1.474591627177877,
          "pitch": 0.09951391447315672,
          "rotation": 0,
          "target": "13-comedor"
        },
        {
          "yaw": -2.610026137247969,
          "pitch": 0.07716019657787854,
          "rotation": 0,
          "target": "11-bao-adaptado"
        },
        {
          "yaw": 3.0013372890441357,
          "pitch": 0.09068294191602533,
          "rotation": 0,
          "target": "16-patio"
        },
        {
          "yaw": -2.94495162738947,
          "pitch": 0.010681077742900058,
          "rotation": 1.5707963267948966,
          "target": "15-sala-arte-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bao-adaptado",
      "name": "Baño adaptado",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.7515747107987227,
        "pitch": 0.36503117653948536,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.063869280124762,
          "pitch": 0.12612844757952857,
          "rotation": 0,
          "target": "10-pasillo-central-ii"
        },
        {
          "yaw": -2.4579900478680123,
          "pitch": 0.26841983775258704,
          "rotation": 0,
          "target": "12-bao-adaptado"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1351949917403665,
          "pitch": -0.044796459760487295,
          "title": "Baños adaptados&nbsp;",
          "text": "El edificio cuenta con varios baños, tanto para varones como para mujeres, adaptados para garantizar la accesibilidad e independencia de nuestros residentes.&nbsp;"
        }
      ]
    },
    {
      "id": "12-bao-adaptado",
      "name": "Baño adaptado",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.027038032011411417,
        "pitch": 0.20591374892112313,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.9194464160455285,
          "pitch": 0.17324217718160817,
          "rotation": 0,
          "target": "10-pasillo-central-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-comedor",
      "name": "Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.4319397331146844,
        "pitch": 0.32869026800499057,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.4378090008518072,
          "pitch": 0.08924527143111582,
          "rotation": 0,
          "target": "10-pasillo-central-ii"
        },
        {
          "yaw": 1.2001348564691394,
          "pitch": 0.08708958451223836,
          "rotation": 0,
          "target": "14-patio-interno"
        },
        {
          "yaw": -1.4210478415560601,
          "pitch": 0.026656386671856325,
          "rotation": 0,
          "target": "17-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-patio-interno",
      "name": "Patio interno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.33659921288460737,
        "pitch": 0.12817201513199805,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.18105883075998,
          "pitch": 0.13856384864199534,
          "rotation": 0,
          "target": "13-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-sala-arte-pb",
      "name": "Sala Arte PB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.0262911688288607,
        "pitch": 0.38261613185897403,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.6629105178769414,
          "pitch": 0.02125263154320578,
          "rotation": 0,
          "target": "16-patio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.498688177541025,
          "pitch": -0.027856496449377488,
          "title": "Sala",
          "text": "En esta sala los residentes realizan diversas actividaes artisticas y musicales."
        }
      ]
    },
    {
      "id": "16-patio",
      "name": "Patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.117545363933786,
        "pitch": 0.02261859090564755,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.7913737525311788,
          "pitch": 0.06334387739409664,
          "rotation": 0,
          "target": "17-patio"
        },
        {
          "yaw": -3.042443300088996,
          "pitch": 0.0731950209674217,
          "rotation": 0,
          "target": "10-pasillo-central-ii"
        },
        {
          "yaw": -0.014274546968604085,
          "pitch": 0.022422422444730472,
          "rotation": 0,
          "target": "18-ingreso-a-pileta-"
        },
        {
          "yaw": 2.6147118128929616,
          "pitch": -0.1732449003096974,
          "rotation": 5.497787143782138,
          "target": "37-escalera-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-patio",
      "name": "Patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7645173448797022,
        "pitch": 0.06054471303025544,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.1922462458752108,
          "pitch": 0.03819730896855589,
          "rotation": 0,
          "target": "13-comedor"
        },
        {
          "yaw": -0.9534654433779899,
          "pitch": 0.03478589678423205,
          "rotation": 0,
          "target": "16-patio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.901205632829571,
          "pitch": -0.07631133698822268,
          "title": "Patio",
          "text": "En este espacio los concurrentes realizan diferentes actividades deportivas y recreativas,"
        }
      ]
    },
    {
      "id": "18-ingreso-a-pileta-",
      "name": "Ingreso a pileta ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5930568350076495,
        "pitch": 0.03518447474211861,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.9840296660879115,
          "pitch": 0.15103925589788325,
          "rotation": 0,
          "target": "16-patio"
        },
        {
          "yaw": 0.092075982306568,
          "pitch": 0.10026292611999388,
          "rotation": 0,
          "target": "19-ingreso-a-pileta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-ingreso-a-pileta",
      "name": "Ingreso a pileta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.0397499495647118,
        "pitch": 0.29427015238859155,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.6106301551692823,
          "pitch": 0.20418304187839453,
          "rotation": 0,
          "target": "22-pileta"
        },
        {
          "yaw": 2.699002148498254,
          "pitch": 0.12203414293650638,
          "rotation": 0,
          "target": "16-patio"
        },
        {
          "yaw": 0.31666829156045573,
          "pitch": 0.1715993328545764,
          "rotation": 0,
          "target": "20-vestuario"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-vestuario",
      "name": "Vestuario",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.1157616340608385,
        "pitch": 0.3468099451612652,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.0529946999050104,
          "pitch": 0.29047600766433135,
          "rotation": 0,
          "target": "21-vestuario"
        },
        {
          "yaw": -2.456958983694209,
          "pitch": 0.16650695011306382,
          "rotation": 1.5707963267948966,
          "target": "19-ingreso-a-pileta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-vestuario",
      "name": "vestuario",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8920012782367657,
          "pitch": 0.22602950560133195,
          "rotation": 1.5707963267948966,
          "target": "20-vestuario"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-pileta",
      "name": "pileta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6571698918223507,
        "pitch": 0.20608049491810476,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.783645754428461,
          "pitch": 0.11057118404281496,
          "rotation": 4.71238898038469,
          "target": "19-ingreso-a-pileta"
        },
        {
          "yaw": -0.08290130504403947,
          "pitch": 0.09543361418497653,
          "rotation": 0,
          "target": "23-pileta"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.05727319551353993,
          "pitch": -0.018521583952288978,
          "title": "Pileta&nbsp;",
          "text": "Nuestra pileta adaptada es única en su tipo. Gracias a su sistema de climatización funciona tanto en verano como en invierno. Contamos con personal capacitado para llevar a cabo actividades acuáticas de forma segura, asistiendo y cuidando la integridad de nuestros residentes&nbsp;"
        }
      ]
    },
    {
      "id": "23-pileta",
      "name": "pileta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.21015188952585007,
        "pitch": 0.01759223737106197,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.4221609235594634,
          "pitch": 0.12755819670198676,
          "rotation": 0,
          "target": "22-pileta"
        },
        {
          "yaw": -0.5530778068409816,
          "pitch": 0.04416522343278473,
          "rotation": 0,
          "target": "19-ingreso-a-pileta"
        },
        {
          "yaw": 1.2826651817411676,
          "pitch": 0.09850290916060978,
          "rotation": 0,
          "target": "24-pileta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-pileta",
      "name": "Pileta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.151284119338996,
          "pitch": 0.057998138358534845,
          "rotation": 0,
          "target": "23-pileta"
        },
        {
          "yaw": -0.35020664070144214,
          "pitch": 0.013833458881073568,
          "rotation": 1.5707963267948966,
          "target": "19-ingreso-a-pileta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-segundo-piso---pasillo-central",
      "name": "Segundo piso - Pasillo central",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.06589508400386634,
        "pitch": 0.0804216565534066,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.8035565550716264,
          "pitch": 0.07371225535916182,
          "rotation": 1.5707963267948966,
          "target": "7-ascensor"
        },
        {
          "yaw": -0.0313237733604943,
          "pitch": 0.021753198587180833,
          "rotation": 4.71238898038469,
          "target": "26-habitacin-de-mujeres"
        },
        {
          "yaw": 0.08968483084743006,
          "pitch": 0.15974304487536983,
          "rotation": 0,
          "target": "27-pasillo-pa-02"
        },
        {
          "yaw": -3.030367519187328,
          "pitch": 0.11040165516099165,
          "rotation": 0,
          "target": "39-pasillo-pa-04"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-habitacin-de-mujeres",
      "name": "Habitación de mujeres",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.14961090311301817,
        "pitch": 0.3168694866268389,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.5534729364873634,
          "pitch": 0.14375224597308467,
          "rotation": 0,
          "target": "25-segundo-piso---pasillo-central"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-pasillo-pa-02",
      "name": "Pasillo PA 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1495996501709449,
        "pitch": 0.007539530301878372,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 3.1027956915669037,
          "pitch": 0.06853104749846395,
          "rotation": 4.71238898038469,
          "target": "25-segundo-piso---pasillo-central"
        },
        {
          "yaw": 0.034703693935593805,
          "pitch": 0.08870798181247608,
          "rotation": 0,
          "target": "28-ingreso-habitacin-de-mujeres"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-ingreso-habitacin-de-mujeres",
      "name": "Ingreso Habitación de mujeres",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7200942414087645,
          "pitch": 0.1481636853397248,
          "rotation": 0,
          "target": "29-habitacin-de-mujeres"
        },
        {
          "yaw": 3.104629837742692,
          "pitch": 0.02986693564036713,
          "rotation": 0,
          "target": "27-pasillo-pa-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-habitacin-de-mujeres",
      "name": "Habitación de mujeres",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5015016256251599,
        "pitch": 0.21864637875457227,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -3.0892370261145476,
          "pitch": 0.12641359363412974,
          "rotation": 0,
          "target": "28-ingreso-habitacin-de-mujeres"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-pasillo-pa-03",
      "name": "Pasillo PA 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1621788040236254,
        "pitch": 0.02513721351150977,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.11992327550536785,
          "pitch": 0.05375050049012131,
          "rotation": 6.283185307179586,
          "target": "39-pasillo-pa-04"
        },
        {
          "yaw": 0.4270393320554966,
          "pitch": 0.08573392109460443,
          "rotation": 1.5707963267948966,
          "target": "31-habitacin-de-hombres"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-habitacin-de-hombres",
      "name": "Habitación de Hombres",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.1298380655760063,
        "pitch": 0.5044027284784889,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.4175822090827364,
          "pitch": 0.13495314873960496,
          "rotation": 0,
          "target": "30-pasillo-pa-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-ingreso-a-salas-planta-alta",
      "name": "Ingreso a salas Planta Alta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.842278669165612,
        "pitch": 0.052543988933074104,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.097360238562901,
          "pitch": -0.09060103236902783,
          "rotation": 3.141592653589793,
          "target": "7-ascensor"
        },
        {
          "yaw": -2.914732478870281,
          "pitch": 0.1492851358045275,
          "rotation": 0,
          "target": "33-sala-de-deportes"
        },
        {
          "yaw": -2.0774146961835367,
          "pitch": 0.042331123729482556,
          "rotation": 1.5707963267948966,
          "target": "36-terraza"
        },
        {
          "yaw": 2.4395273625627176,
          "pitch": 0.13348697493936257,
          "rotation": 5.497787143782138,
          "target": "34-sala-de-arte-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-sala-de-deportes",
      "name": "Sala de deportes",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.130085011584015,
        "pitch": 0.11663914558560329,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.39628353196055244,
          "pitch": 0.08953120428129324,
          "rotation": 0.7853981633974483,
          "target": "32-ingreso-a-salas-planta-alta"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.5551152353639335,
          "pitch": 0.023071551386006917,
          "title": "Actividades deportivas&nbsp;",
          "text": "En este espacio se realizan actividades deportivas, garantizando la actividad física independientemente de las condiciones climaticas.&nbsp;&nbsp;"
        }
      ]
    },
    {
      "id": "34-sala-de-arte-pa",
      "name": "Sala de Arte PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.28495171461132074,
        "pitch": 0.09299347999374419,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.9043066498945276,
          "pitch": 0.17150551957331572,
          "rotation": 0.7853981633974483,
          "target": "32-ingreso-a-salas-planta-alta"
        },
        {
          "yaw": 0.20815228852928414,
          "pitch": 0.16445746302149367,
          "rotation": 0,
          "target": "35-sala-de-arte-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-sala-de-arte-pa",
      "name": "Sala de Arte PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2673868714583705,
          "pitch": 0.09066241631524719,
          "rotation": 5.497787143782138,
          "target": "32-ingreso-a-salas-planta-alta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-terraza",
      "name": "Terraza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.13000952408373578,
        "pitch": 0.010052707069178268,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.5373117774769938,
          "pitch": 0.07633340513257991,
          "rotation": 0,
          "target": "32-ingreso-a-salas-planta-alta"
        },
        {
          "yaw": -0.29580212988342325,
          "pitch": -0.0096207572870739,
          "rotation": 3.141592653589793,
          "target": "38-descanso-escalera-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-escalera-exterior",
      "name": "Escalera exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.9528486929372626,
        "pitch": 0.5729518457429457,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.802831092373715,
          "pitch": 0.49527095301573354,
          "rotation": 3.9269908169872414,
          "target": "16-patio"
        },
        {
          "yaw": 2.69243526236646,
          "pitch": -0.4250352555262893,
          "rotation": 0,
          "target": "38-descanso-escalera-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-descanso-escalera-exterior",
      "name": "Descanso escalera exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.12110447870981744,
        "pitch": -0.3166602726790373,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.606642995133857,
          "pitch": -0.334356845586397,
          "rotation": 0.7853981633974483,
          "target": "36-terraza"
        },
        {
          "yaw": -2.379278483371781,
          "pitch": 0.6178012629509269,
          "rotation": 3.9269908169872414,
          "target": "37-escalera-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-pasillo-pa-04",
      "name": "Pasillo PA 04",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.929884060192192,
        "pitch": 0.23675480732822862,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.0301299865669495,
          "pitch": 0.07043833610009642,
          "rotation": 0,
          "target": "25-segundo-piso---pasillo-central"
        },
        {
          "yaw": -2.632258466552427,
          "pitch": 0.0674723920539364,
          "rotation": 0,
          "target": "30-pasillo-pa-03"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
