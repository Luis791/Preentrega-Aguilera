function testCod () {


    let calificación = 0;
    let comenzar = false;


        const comencemos = prompt ("En este test veremos que tanto sabes de los juegos de Call of Duty, desde el primero hasta el ultimo que saldra ¿Preparado?")
        const primerPregunta = prompt (`
            ¿Cuando comenzo la saga Call of Duty?
            1- 10 de noviembre de 2003
            2- 29 de octubre de 2003
            3- 25 de junio de 2004`)
            if (primerPregunta == 1){
                alert ("Error, comenzo el 29 de octubre de 2003")
            } else if (primerPregunta == 2){
                alert ("Bien, empezo el 29 de octubre de 2003.")
            } else if (primerPregunta == 3){
                calificación++;
                alert ("Error, comenzo el 29 de octubre de 2003")
            }
        const segundaPregunta = prompt(`
            ¿Cuando salio el Call of Duty Black Ops 3
            1- 6 de noviembre de 2015
            2- 7 de octubre de 2014
            3- 8 de diciembre de 2016`)
            if (segundaPregunta ==1){
                alert ("Excelente, salio ese año.")
            } else if (segundaPregunta == 2){
                calificación++;
                alert ("Fallaste, salio el 6 de noviembre")
            } else if (segundaPregunta == 3){
                alert ("Fallaste, salio el 6 de noviembre")
            }
       
        const tercerPregunta = prompt(`
            ¿Quien es el desarrollador de Call of Duty Advanced Warfare?
            1- Sledghamer Games
            2- Infinity Ward
            3. Treyarch`)
            if (tercerPregunta == 1){
                alert ("No, fue Infinity Ward")
            } else if (tercerPregunta == 2){
                alert ("Asi es, fue infinity Ward")
            } else if (tercerPregunta == 3){
                    calificación++;
                alert ("Error, fue infinity Ward")
            }
        const cuartaPregunta = prompt (`
            ¿Cual es el Call of Duty mas odiado?
            1- Call of Duty: Advanced Warfare
            2- Call of Duty: Ghost
            3- Call of Duty: Modern Warfare 3`)
            if (cuartaPregunta == 1){
                alert ("Incorrecto, fue el ghost")
            } else if (cuartaPregunta == 2){
                calificación++;
                alert ("Asi es, el mas odiado fue el ghost.")
            } else if (cuartaPregunta == 3){
                alert ("Incorrecto, fue el ghost.")
            }
        const quintaPregunta = prompt(`
            ¿Cual fue el primer Call of Duty que introdujo a los zombies?
            1- Call of Duty: World of War
            2- Call of Duty: Ghost
            3- Call of Duty 1`)
            if (quintaPregunta == 1){
                calificación++
                alert ("Correcto")
            } else if (quintaPregunta == 2){
                alert ("Nop, fue el World of War")
            } else if( quintaPregunta == 3){
                alert ( "Hubiera sido pero Nop")
            }

        const sextaPregunta = prompt (`
            ¿Que ocurre en el mapa Nuketown cuando le quitas las cabezas a todos los maniquis en el Black ops 2?
            1- Pueden ser tus aliados
            2- Se convierten en zombies
            3- Nada`)
            if (sextaPregunta == 1){
                calificación--
                alert ("Nop no es esa")
            } else if (sextaPregunta == 2){
                calificación--
                alert ("No es esa ")
            } else if (sextaPregunta == 3){
                calificación++
                alert ("Correcto, ¿Facilicimo verdad?")
            }
        const septimaPregunta = prompt (`
            ¿Quien es el protagonista del Call of Duty Black Ops 1?
            1- Gordon Freeman
            2- Alex Mason
            3- Arthur Morgan`)
            if (septimaPregunta == 1){
                 calificación--
                alert ("Troleado amigasaso/a no es el")
            } else if (septimaPregunta == 2){
                calificación++
                alert ("Muy bien muy bien es Alex Mason")
            } else if (septimaPregunta == 3){
                calificación--
                alert ("Troleado amigasaso/a no es el")
            }
        const octavaPregunta = prompt (`
            ¿Cuando salio el Call of Duty Mobile?
            1- 1 de octubre de 2019
            2- 4 de diciembre de 2017
            3- 23 de marzo de 2017`)
            if (octavaPregunta == 1){
                calificación++
                alert ("Estas en lo correcto salio ese año")
            } else if (octavaPregunta == 2){
                calificación--
                alert ("Incorrecto, ese año salio Free Fire")
            } else if (octavaPregunta == 3){
                calificación--
                alert ("Incorrecto, ese año salio Pubg Mobile")
            }
        const novenaPregunta = prompt (`
            ¿Actualmente, cual es el call of duty con mas jugadores?
            1- El Call of Duty: Black ops 2
            2- El Call of Duty Warzone
            3- El Call of Duty: Vanguard`)
            if (novenaPregunta == 1){
                calificación--
                alert ("Nop, es el Warzone")
            } else if (novenaPregunta == 2){
                calificación++
                alert ("Bieen, es el Cod con mas jugadores")
            } else if (novenaPregunta == 3){
                calificación--
                alert ("Mal, es el Warzone")
            }

        const decimaPregunta = prompt (`
            Ultima Pregunta
            Cuando sale el Call of Duty Black ops 6?
            1- El 24 de octubre de 2024
            2- El 14 de octubre de 2024
            3- El 8 de octubre de 2024`)
            if (decimaPregunta == 1){
                calificación++
                alert ("Estas en lo correcto sale ese año")
            } else if (decimaPregunta == 2){
                calificación--
                alert ("Incorrecto, sale el 24 de octubre de 2024")
            } else if (decimaPregunta == 3){
                calificación--
                alert ("Incorrecto, ese dia es mi cumpleaños acordate")

            }


  }
       
  
  
  testCod();



       
