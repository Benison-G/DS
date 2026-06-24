for(i=0; i<3; i++) {
    for (j = 0; j <i; j++) {
        console.log(i +  " " + j);
    }
}

/**
 * Output
 * 1 0
 * 2 0
 * 2 1
 */

for(i=0; i<5; i++) {
    for (j = 0; j <= i; j++) {
        console.log(i +  " " + j);
    }
}

/**
 *  0 0
    1 0
    1 1
    2 0
    2 1
    2 2
    3 0
    3 1
    3 2
    3 3
    4 0
    4 1
    4 2
    4 3
    4 4
 * 
 */

for (i = 0; i < 3; i++) {
    for(j = i; j > 0; j--) {
        console.log(i + " " + j);
    }
}

    /**
     * Output
     * 
     *  1 1
        2 2
        2 1
     * 
     */


for (i = 5; i > 0; i--) {
    for (j = 0; j < i; j++) {
        console.log(i + " " + j);
    }
}

/**
 * Output
 * 
 * 
 *  5 1
    5 2
    5 3
    5 4
    4 0
    4 1
    4 2
    4 3
    3 0
    3 1
    3 2
    2 0
    2 1
    1 0
 * 
 */