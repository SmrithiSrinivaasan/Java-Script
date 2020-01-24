/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// Write your if/else code here
if ((17<shirtWidth && shirtWidth<20) && (27<shirtLength && shirtLength<29) && (8.12<shirtSleeve && shirtSleeve<8.38))
{
    console.log("S");
}
else if ((19<shirtWidth && shirtWidth<22) && (28<shirtLength && shirtLength<30) && (8.37<shirtSleeve && shirtSleeve<8.63))
{
    console.log("M");
}
else if ((21<shirtWidth && shirtWidth<24) && (29<shirtLength && shirtLength<31) && (8.62<shirtSleeve && shirtSleeve<8.88))
{
    console.log("L");
}
else if ((23<shirtWidth && shirtWidth<26) && (30<shirtLength && shirtLength<33) && (8.87<shirtSleeve && shirtSleeve<9.63))
{
    console.log("XL");
}
else if ((25<shirtWidth && shirtWidth<28) && (32<shirtLength && shirtLength<34) && (8.62<shirtSleeve && shirtSleeve<10.13))
{
    console.log("2XL");
}
else if ((27<shirtWidth) && (33<shirtLength) && (10.12<shirtSleeve))
{
    console.log("3XL");
}
else
{
    console.log("N/A");
}

