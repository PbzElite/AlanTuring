function decipher(){

  //creates the array of the individual letters of the main input 
  const cryptoinput = document.getElementById("maininput").value.split("");

  //create the array that will display the encoded version of the maininput
  const cryptooutput = [];

  //declare a variable that defines the length of the cryptoinput array
  let length = cryptoinput.length;
  console.log(length);

  //for loop going through every element inside of the cryptoinput array that contains the letters
  for(i = 0; i < length; i++){
    alphabet();
    //encode();
    let x = cryptooutput.join("");
    if(i === length - 1){
      document.getElementById("mainoutput").value = x;
    }
}

function alphabet(){

  //This goes through every letter in lowercase form
  if(cryptoinput[i] === 'b'){
  cryptooutput.push("a");
  console.log(cryptooutput[i]);
  }
    if(cryptoinput[i] === 'v'){
      cryptooutput.push("b");
      console.log(cryptooutput[i]);
    }
    if(cryptoinput[i] === 'g'){
      cryptooutput.push("c");
      console.log(cryptooutput[i]);
    }
    if(cryptoinput[i] === 'q'){
      cryptooutput.push("d");
      console.log(cryptooutput[i]);
    }
    if(cryptoinput[i] === 'k'){
      cryptooutput.push("e");
      console.log(cryptooutput[i]);
  }
    if(cryptoinput[i] === 'm'){
      cryptooutput.push("f");
      console.log(cryptooutput[i]);
    }
    if(cryptoinput[i] === 'n'){
      cryptooutput.push("g");
      console.log(cryptooutput[i]);
    }
    if(cryptoinput[i] === 'a'){
      cryptooutput.push("h");
      console.log(cryptooutput[i]);
    }
    if(cryptoinput[i] === 'd'){
      cryptooutput.push("i");
      console.log(cryptooutput[i]);
  }
    if(cryptoinput[i] === 'z'){
      cryptooutput.push("j");
      console.log(cryptooutput[i]);
    }
    if(cryptoinput[i] === 'c'){
      cryptooutput.push("k");
      console.log(cryptooutput[i]);
    }
    if(cryptoinput[i] === 'w'){
      cryptooutput.push("l");
      console.log(cryptooutput[i]);
    }
      if(cryptoinput[i] === 's'){
        cryptooutput.push("m");
        console.log(cryptooutput[i]);
  }
    if(cryptoinput[i] === 'e'){
      cryptooutput.push("n");
      console.log(cryptooutput[i]);
    }
    if(cryptoinput[i] === 'o'){
      cryptooutput.push("o");
      console.log(cryptooutput[i]);
    }
    if(cryptoinput[i] === 'y'){
      cryptooutput.push("p");
      console.log(cryptooutput[i]);
    }
    if(cryptoinput[i] === 'f'){
      cryptooutput.push("q");
      console.log(cryptooutput[i]);
    }
        if(cryptoinput[i] === 'j'){
      cryptooutput.push("r");
      console.log(cryptooutput[i]);
    }
        if(cryptoinput[i] === 'x'){
      cryptooutput.push("s");
      console.log(cryptooutput[i]);
    }
        if(cryptoinput[i] === 'h'){
      cryptooutput.push("t");
      console.log(cryptooutput[i]);
    }
        if(cryptoinput[i] === 't'){
      cryptooutput.push("u");
      console.log(cryptooutput[i]);
    }
        if(cryptoinput[i] === 'l'){
      cryptooutput.push("v");
      console.log(cryptooutput[i]);
    }
        if(cryptoinput[i] === 'p'){
      cryptooutput.push("w");
      console.log(cryptooutput[i]);
    }
        if(cryptoinput[i] === 'u'){
      cryptooutput.push("x");
      console.log(cryptooutput[i]);
    }
        if(cryptoinput[i] === 'i'){
      cryptooutput.push("y");
      console.log(cryptooutput[i]);
    }
        if(cryptoinput[i] === 'r'){
      cryptooutput.push("z");
      console.log(cryptooutput[i]);
    }

    //goes through all the letters in uppercase

    if(cryptoinput[i] === 'B'){
      cryptooutput.push("A");
      console.log(cryptooutput[i]);
      }
        if(cryptoinput[i] === 'V'){
          cryptooutput.push("B");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'G'){
          cryptooutput.push("C");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'Q'){
          cryptooutput.push("D");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'K'){
          cryptooutput.push("E");
          console.log(cryptooutput[i]);
      }
        if(cryptoinput[i] === 'M'){
          cryptooutput.push("F");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'N'){
          cryptooutput.push("G");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'A'){
          cryptooutput.push("H");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'D'){
          cryptooutput.push("I");
          console.log(cryptooutput[i]);
      }
        if(cryptoinput[i] === 'Z'){
          cryptooutput.push("J");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'C'){
          cryptooutput.push("K");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'W'){
          cryptooutput.push("L");
          console.log(cryptooutput[i]);
        }
          if(cryptoinput[i] === 'S'){
            cryptooutput.push("M");
            console.log(cryptooutput[i]);
      }
        if(cryptoinput[i] === 'E'){
          cryptooutput.push("N");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'O'){
          cryptooutput.push("O");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'Y'){
          cryptooutput.push("P");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'F'){
          cryptooutput.push("Q");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'J'){
          cryptooutput.push("R");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'X'){
          cryptooutput.push("S");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'H'){
          cryptooutput.push("T");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'T'){
          cryptooutput.push("U");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'L'){
          cryptooutput.push("V");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'P'){
          cryptooutput.push("W");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'U'){
          cryptooutput.push("X");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'I'){
          cryptooutput.push("Y");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'R'){
          cryptooutput.push("Z");
          console.log(cryptooutput[i]);
        }

        //brings over the special characters
          if(cryptoinput[i] === ' '){
            cryptooutput.push(" ");
    }
          if(cryptoinput[i] === '_'){
            cryptooutput.push("_");
          }
  }

  function encode(){

    //secret function I'm using to encode messages
    if(cryptoinput[i] === 'a'){
      cryptooutput.push("b");
      console.log(cryptooutput[i]);
      }
        if(cryptoinput[i] === 'b'){
          cryptooutput.push("v");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'c'){
          cryptooutput.push("g");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'd'){
          cryptooutput.push("q");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'e'){
          cryptooutput.push("k");
          console.log(cryptooutput[i]);
      }
        if(cryptoinput[i] === 'f'){
          cryptooutput.push("m");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'g'){
          cryptooutput.push("n");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'h'){
          cryptooutput.push("a");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'i'){
          cryptooutput.push("d");
          console.log(cryptooutput[i]);
      }
        if(cryptoinput[i] === 'j'){
          cryptooutput.push("z");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'k'){
          cryptooutput.push("c");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'l'){
          cryptooutput.push("w");
          console.log(cryptooutput[i]);
        }
          if(cryptoinput[i] === 'm'){
            cryptooutput.push("s");
            console.log(cryptooutput[i]);
      }
        if(cryptoinput[i] === 'n'){
          cryptooutput.push("e");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'o'){
          cryptooutput.push("o");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'p'){
          cryptooutput.push("y");
          console.log(cryptooutput[i]);
        }
        if(cryptoinput[i] === 'q'){
          cryptooutput.push("f");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'r'){
          cryptooutput.push("j");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 's'){
          cryptooutput.push("x");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 't'){
          cryptooutput.push("h");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'u'){
          cryptooutput.push("t");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'v'){
          cryptooutput.push("l");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'w'){
          cryptooutput.push("p");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'x'){
          cryptooutput.push("u");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'y'){
          cryptooutput.push("i");
          console.log(cryptooutput[i]);
        }
            if(cryptoinput[i] === 'z'){
          cryptooutput.push("r");
          console.log(cryptooutput[i]);
        }
        
        //This is useless but its nice to have
        if(cryptoinput[i] === 'A'){
          cryptooutput.push("B");
          console.log(cryptooutput[i]);
          }
            if(cryptoinput[i] === 'B'){
              cryptooutput.push("V");
              console.log(cryptooutput[i]);
            }
            if(cryptoinput[i] === 'C'){
              cryptooutput.push("G");
              console.log(cryptooutput[i]);
            }
            if(cryptoinput[i] === 'D'){
              cryptooutput.push("Q");
              console.log(cryptooutput[i]);
            }
            if(cryptoinput[i] === 'E'){
              cryptooutput.push("K");
              console.log(cryptooutput[i]);
          }
            if(cryptoinput[i] === 'F'){
              cryptooutput.push("M");
              console.log(cryptooutput[i]);
            }
            if(cryptoinput[i] === 'G'){
              cryptooutput.push("N");
              console.log(cryptooutput[i]);
            }
            if(cryptoinput[i] === 'H'){
              cryptooutput.push("A");
              console.log(cryptooutput[i]);
            }
            if(cryptoinput[i] === 'I'){
              cryptooutput.push("D");
              console.log(cryptooutput[i]);
          }
            if(cryptoinput[i] === 'J'){
              cryptooutput.push("Z");
              console.log(cryptooutput[i]);
            }
            if(cryptoinput[i] === 'K'){
              cryptooutput.push("C");
              console.log(cryptooutput[i]);
            }
            if(cryptoinput[i] === 'L'){
              cryptooutput.push("W");
              console.log(cryptooutput[i]);
            }
              if(cryptoinput[i] === 'M'){
                cryptooutput.push("S");
                console.log(cryptooutput[i]);
          }
            if(cryptoinput[i] === 'N'){
              cryptooutput.push("E");
              console.log(cryptooutput[i]);
            }
            if(cryptoinput[i] === 'O'){
              cryptooutput.push("O");
              console.log(cryptooutput[i]);
            }
            if(cryptoinput[i] === 'P'){
              cryptooutput.push("Y");
              console.log(cryptooutput[i]);
            }
            if(cryptoinput[i] === 'Q'){
              cryptooutput.push("F");
              console.log(cryptooutput[i]);
            }
                if(cryptoinput[i] === 'R'){
              cryptooutput.push("J");
              console.log(cryptooutput[i]);
            }
                if(cryptoinput[i] === 'S'){
              cryptooutput.push("X");
              console.log(cryptooutput[i]);
            }
                if(cryptoinput[i] === 'T'){
              cryptooutput.push("H");
              console.log(cryptooutput[i]);
            }
                if(cryptoinput[i] === 'U'){
              cryptooutput.push("T");
              console.log(cryptooutput[i]);
            }
                if(cryptoinput[i] === 'V'){
              cryptooutput.push("L");
              console.log(cryptooutput[i]);
            }
                if(cryptoinput[i] === 'W'){
              cryptooutput.push("P");
              console.log(cryptooutput[i]);
            }
                if(cryptoinput[i] === 'X'){
              cryptooutput.push("U");
              console.log(cryptooutput[i]);
            }
                if(cryptoinput[i] === 'Y'){
              cryptooutput.push("I");
              console.log(cryptooutput[i]);
            }
                if(cryptoinput[i] === 'Z'){
              cryptooutput.push("R");
              console.log(cryptooutput[i]);
            }


        //I forgot the space at first
        if(cryptoinput[i] === ' '){
          cryptooutput.push(" ");
  }
  }
}