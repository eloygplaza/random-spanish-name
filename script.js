// In Spain —as other parts of the worlds— everyone has his name divided in three parts: First name, Middle name and Last name.
// Soo here I'll make some random full Spanish names —male, female or as you want to say it—
// I'll create 3 separate arrays containing the most populars first names, middle names and last names from 2010 to 2019

let personFactory = function () {
    return {
        attributes: {
            names: ['MARTIN','DIEGO','MARIO','MANUEL','JAVIER','MATEO','MARCOS','LEO','SERGIO','IZAN','NICOLAS','CARLOS','ALEX','JORGE','IKER','MIGUEL','MARC','ANTONIO','IVAN',
            'GONZALO','ANGEL','JUAN','SAMUEL','RUBEN','HECTOR','JOSE','VICTOR','ERIC','ENZO','GABRIEL','ADAM','BRUNO','AITOR','MARCO','DARIO','RAUL','RODRIGO','AARON','GUILLERMO',
            'JESUS','OLIVER','FRANCISCO','SARA','CARLA','ALBA','VALERIA','CLAUDIA','NOA','CARMEN','EMMA','MARTA','IRENE','LAURA','ADRIANA','JULIA','ANA','ELENA','AITANA','ALEJANDRA',
            'VALENTINA','INES','AINHOA','LAIA','LOLA','ARIADNA','MARINA','CANDELA','JIMENA','NEREA','CARLOTA','ROCIO','VEGA','OLIVIA','ALMA','ANDREA','AINARA','LEIRE','ANGELA','VERA',
            'ALICIA','BLANCA','NORA','CLARA','CELIA','NATALIA','LARA'],
            firstName: ['GARCIA','RODRIGUEZ','GONZALEZ','FERNANDEZ','LOPEZ','MARTINEZ','SANCHEZ','PEREZ','GOMEZ','MARTIN','JIMENEZ','HERNANDEZ','RUIZ','DIAZ','MORENO','MUÑOZ','ALVAREZ',
            'ROMERO','GUTIERREZ','ALONSO','NAVARRO','TORRES','DOMINGUEZ','VAZQUEZ','RAMOS','RAMIREZ','GIL','SERRANO','MOLINA','BLANCO','MORALES','SUAREZ','ORTEGA','CASTRO','DELGADO','ORTIZ',
            'MARIN','RUBIO','NUÑEZ','SANZ','MEDINA','IGLESIAS','CASTILLO','CORTES','GARRIDO','SANTOS','GUERRERO','LOZANO','CANO','MENDEZ'],
            secondName: ['CRUZ','PRIETO','FLORES','HERRERA','PEÑA','LEON','MARQUEZ','GALLEGO','CABRERA','CALVO','VIDAL','CAMPOS','VEGA','REYES','FUENTES','CARRASCO','DIEZ',
            'CABALLERO','AGUILAR','NIETO','SANTANA','PASCUAL','HERRERO','MONTERO','GIMENEZ','HIDALGO','LORENZO','VARGAS','IBAÑEZ','SANTIAGO','DURAN','BENITEZ','FERRER','ARIAS',
            'MORA','CARMONA','VICENTE','CRESPO','SOTO','ROMAN','ROJAS','PASTOR','VELASCO','SAEZ','PARRA','MOYA','BRAVO','SOLER','GALLARDO','ESTEBAN']
        },
        randomName() {
            let rn = this.attributes.names[Math.floor(Math.random()*this.attributes.names.length)];
            let rf = this.attributes.firstName[Math.floor(Math.random()*this.attributes.firstName.length)];
            let rs = this.attributes.secondName[Math.floor(Math.random()*this.attributes.secondName.length)];

            finalName = rn.concat(' ',rf,' ',rs);
            
            return finalName;
        }
    };
};

// We show our random name
let randomPerson = personFactory();
console.log('Your Spanish name is: ' + randomPerson.randomName());