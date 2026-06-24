for (i = 0; i < 5; i++) {
    let row = "";
    for (j = 0; j < 5; j++) {
        row = row + " *"
    }

    console.log(row);
}

/**
 * O/P
 * 
    * * * * *
    * * * * *
    * * * * *
    * * * * *
    * * * * *
 * 
 */

for (let i = 0; i <= 5; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row = row + " *";
    }

    console.log(row);
}

/**
 * O/P
 * 
    * 
    * *
    * * *
    * * * *
    * * * * *
 * 
 */

for (let i = 0; i < 5; i++) {
    let row = "";
    for (j = 0; j < 5 - i; j++) {
        row = row + " " + (j + 1);
    }

    console.log(row);
}

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 5 - (i + 1); j++) {
        row = row + " "
    }
    for (k = 0; k < i; k++) {
        row = row + "*";
    }
    console.log(row);
}

/**
 * O/P
 * 
         *
        **
       ***
      ****
 */
for (let i = 0; i < 5; i++) {
    let row = "";
    let toggle = 1;
    for (j = 0; j <= i; j++) {
        row = row + toggle
        // After every iteration turn the toggle to opposite
        if (toggle) {
            toggle = 0
        } else {
            toggle = 1
        }
    }

    console.log(row);
}

/**
 * O/P
 * 
  1
  10
  101
  1010
  10101
 * 
 */


let toggle = 1
for (let i = 0; i < 5; i++) {
    let row = "";
    for (j = 0; j <= i; j++) {
        row = row + toggle
        // After every iteration turn the toggle to opposite
        if (toggle) {
            toggle = 0
        } else {
            toggle = 1
        }
    }

    console.log(row);
}

/**
 * O/P
 * 
 *     1
      01
     010
    1010
   10101
 * 
 */