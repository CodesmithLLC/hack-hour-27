/******
A space probe has been temporarily knocked offline by a collision with a small asteroid. Upon coming back
online, the probe has not only moved to an unknown location, but its orientation has been altered.

The probe has the ability to observe the locations of stars in relation to itself. You have a catalog of stars
and their locations in relation to the earth. In order to help determine the orientation and location of the
probe, you must identify the stars that the probe has observed after coming back online.

Write a function 'starMatcher' that will be passed two arguments:

1) An array of the known catalog of stars. Each element in this array will be an object with a .name property
for the name of the star, and a .coords property, which is a three-element array of X, Y, and Z coordinates.

2) An array of the stars observed by the probe after coming back online. This array will take the same format
as the first array, but the names will be generic names such as 'Star1', 'Star2', etc.

Have your function return an object with the names of the known stars as keys and the names of observed stars
as values.

Example:

var catalog = [
  { Vega: [ 0.6423109603211583, 0.203715328373485, 0.7388752907202909 ] },
  { Virgo: [ 0.7275189330711311, 0.2749108543317812, 0.6286018009786585 ] },
  { Orion: [ 0.6679273451884815, 0.10972001690331297, 0.7360941376211358 ] },
  { Gemini: [ 0.020757579023139, 0.4236482927451189, 0.9055888951214254 ] },
  { Sirius: [ 0.9494538494183702, 0.06670014840323665, 0.30673845215040285 ] },
  { Urania: [ 0.1877152065411528, 0.4442142424628979, 0.8760346500146705 ] },
  { Zeke: [ 0.6806501203205427, 0.7007891302807193, 0.21356499850870678 ] }
];

var observations = [
  { Star1: [ 0.7597810892539221, -0.0752935577719106, 0.6458045962751986 ] },
  { Star2: [ 0.29342551440616566, 0.38653267964946075, 0.874353449732135 ] },
  { Star3: [ 0.852084649661814, 0.5226519302770312, 0.02804834377281004 ] },
  { Star4: [ 0.6124503176982832, 0.617304354301765, 0.4938015213740773 ] },
  { Star5: [ 0.533453666103194, 0.6695033728133594, 0.5169065872211323 ] },
  { Star6: [ 0.8369541313820854, 0.5285367363210877, -0.14197429458008354 ] },
  { Star7: [ 0.6214512444287408, 0.5031847305287902, 0.6005026875548838 ] }
];

console.log(starMatcher(catalog, observations);
*/
// -> [ { Star1: ""Zeke"" }, { Star2: ""Sirius"" }, { Star3: ""Urania"" }, { Star4: ""Vega"" },
//      { Star5: ""Orion"" }, { Star6: ""Gemini"" }, { Star7: ""Virgo"" } ]
