// №1
function stars1(){
    for (let i = 0; i < 7; i++){
        switch(i){
            case 0: console.log('* * * * * * *');break;
            case 1: console.log('* * * * * * *');break;
            case 2: console.log('* * * * * * *');break;
            case 3: console.log('* * * * * * *');break;
            case 4: console.log('* * * * * * *');break;
            case 5: console.log('* * * * * * *');break;
            case 6: console.log('* * * * * * *');break;
            
        }
    }
}
//stars1()

function solidSquare1() {
    for (let i = 1; i <= 7; i++) {
      let str = '';
  
      for (let j = 1; j <= 7; j++) {
        str = str + '*  ';
      }
  
      console.log(str);
    }
  }

//solidSquare1();

//   .............................................................................

function stars2(){
    for (let i = 0; i < 7; i++){
        switch(i){
            case 0: console.log('* * * * * * *');break;
            case 1: console.log('*           *');break;
            case 2: console.log('*           *');break;
            case 3: console.log('*           *');break;
            case 4: console.log('*           *');break;
            case 5: console.log('*           *');break;
            case 6: console.log('* * * * * * *');break; 
        }
    }
}
//stars2()

function borderSquare2() {
    for (let y = 1; y <= 7; y++) {
        let str = '';
    
        for (let x = 1; x <= 7; x++) {
        if (y === 1 || y === 7 || x === 1 || x === 7) {
            str = str + '*';
        } else {
            str = str + ' ';
        }
    
        str = str + '  ';
        }
    
        console.log(str);
    }
    }
    // borderSquare2();


// ....................................................................................

// №3
function stars3(){
    for (let i = 0; i < 7; i++){
        switch(i){
            case 0: console.log('* * * * * * *');break;
            case 1: console.log('* * * * * *');break;
            case 2: console.log('* * * * *');break;
            case 3: console.log('* * * *');break;
            case 4: console.log('* * *');break;
            case 5: console.log('* *');break;
            case 6: console.log('*');break;
            
            
        }
    }
}
//stars3()


function borderTriangle1() {
    for (let y = 1; y <= 7; y++) {
        let str = '';
    
        for (let x = 1; x <= 7; x++) {
        if (
            x === 1     || // 1 Столбец x = 1 && y = 1-7
            x === 8 - y || // Косая x идет на уменьшение, на каждой итерации x < x + 1 && x > x - 1
            y === 1        // 1 Строка
            ) {
            str = str + '*';
        } else {
            str = str + ' ';
        }
    
        str = str + '  ';
        }
    
        console.log(str);
    }
    }
    
    // borderTriangle1();



// ......................................................................................

// №4
function stars4(){
    for (let i = 0; i < 7; i++){
        switch(i){
            case 0: console.log('*');break;
            case 1: console.log('* *');break;
            case 2: console.log('* * *');break;
            case 3: console.log('* * * *');break;
            case 4: console.log('* * * * *');break;
            case 5: console.log('* * * * * *');break;
            case 6: console.log('* * * * * * *');break;
            
            
        }
    }
}
//stars4()

function borderTriangle2() {
    for (let y = 1; y <= 7; y++) {
        let str = '';

        for (let x = 1; x <= 7; x++) {
        if (
            x === 1 || // Получается первый столбец
            x === y || // Каждая координата x равна координате y
            y === 7    // Получается последняя строка
            ) {
            str = str + '*';
        } else {
            str = str + ' ';
        }

        str = str + '  ';
        }

        console.log(str);
    }
}

// borderTriangle2();



// .........................................................................................

// №5
function stars5(){
    for (let i = 0; i < 7; i++){
        switch(i){
            case 0: console.log('            *');break;
            case 1: console.log('          * *');break;
            case 2: console.log('        * * *');break;
            case 3: console.log('      * * * *');break;
            case 4: console.log('    * * * * *');break;
            case 5: console.log('  * * * * * *');break;
            case 6: console.log('* * * * * * *');break;
            
        }
    }
}
//stars5()

function borderTriangle3() {
    for (let y = 1; y <= 7; y++) {
        let str = '';
    
        for (let x = 1; x <= 7; x++) {
        if (
            x === 7     || 
            x === 8 - y || 
            y === 7        
            ) {
            str = str + '*';
        } else {
            str = str + ' ';
        }
    
        str = str + '  ';
        }
    
        console.log(str);
    }
}
    
    // borderTriangle3();



// ......................................................................................
// №6
function stars6(){
    for (let i = 0; i < 7; i++){
        switch(i){
            case 0: console.log('* * * * * * *');break;
            case 1: console.log('  * * * * * *');break;
            case 2: console.log('    * * * * *');break;
            case 3: console.log('      * * * *');break;
            case 4: console.log('        * * *');break;
            case 5: console.log('          * *');break;
            case 6: console.log('            *');break;
            
        }
    }
}
//stars6()


function borderTriangle4() {
    for (let y = 1; y <= 7; y++) {
        let str = '';
    
        for (let x = 1; x <= 7; x++) {
        if (
            x === 7 || 
            x === y || 
            y === 1       
            ) {
            str = str + '*';
        } else {
            str = str + ' ';
        }
    
        str = str + '  ';
        }
    
        console.log(str);
    }
}
    
    // borderTriangle4();



// ...................................................................................................

// №7
function stars7(){
    for (let i = 0; i < 7; i++){
        switch(i){
            case 0: console.log('*           *');break;
            case 1: console.log('  *       *  ');break;
            case 2: console.log('    *   *    ');break;
            case 3: console.log('      *      ');break;
            case 4: console.log('    *   *    ');break;
            case 5: console.log('  *       *  ');break;
            case 6: console.log('*           *');break;
        }
    }
}
//stars7()


function cross() {
    for (let y = 1; y <= 7; y++) {
        let str = '';
    
        for (let x = 1; x <= 7; x++) {
        if (
            x === y    || 
            x === 8 -y       
            ) {
            str = str + '*';
        } else {
            str = str + ' ';
        }
    
        str = str + '  ';
        }
    
        console.log(str);
    }
}
    
    // cross();



// ..................................................................................................

// №8
function stars8(){
    for (let i = 0; i < 4; i++){
        switch(i){
            case 0: console.log('* * * * * * *');break;
            case 1: console.log('  *       *  ');break;
            case 2: console.log('    *   *    ');break;
            case 3: console.log('      *      ');break;
            
        }
    }
}
//stars8

function triangleLittle1() {
    for (let y = 1; y <= 7; y++) {
        let str = '';
    
        for (let x = 1; x <= 7; x++) {
        if (
            x === y && y < 5 || 
            x === 8 - y && y < 5 || 
            y === 1       
            ) {
            str = str + '*';
        } else {
            str = str + ' ';
        }
    
        str = str + '  ';
        }
    
        console.log(str);
    }
}
    
    // triangleLittle1();



// .......................................................................................................
// №9
function stars9(){
    for (let i = 0; i < 4; i++){
        switch(i){
            case 0: console.log('      *      ');break;
            case 1: console.log('    *   *    ');break;
            case 2: console.log('  *       *  ');break;
            case 3: console.log('* * * * * * *');break;
            
        }
    }
}
//stars9


function triangleLittle2() {
    for (let y = 1; y <= 7; y++) {
        let str = '';
    
        for (let x = 1; x <= 7; x++) {
        if (
            x === y && y > 3 || 
            x === 8 - y && y > 3 || 
            y === 7       
            ) {
            str = str + '*';
        } else {
            str = str + ' ';
        }
    
        str = str + '  ';
        }
    
        console.log(str);
    }
}
    
// triangleLittle2();