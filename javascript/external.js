
var webmaps =
[
    ["MassMapper",
    "https://maps.massgis.digital.mass.gov/MassMapper/MassMapper.html",
    "The primary purpose of MassMapper is to provide an online, interactive map of Massachusetts with several reference layers provided. These layers can be used for a variety of purposes and allow for anyone to make their own map. The user can choose from hundreds of layers from within the MassGIS database and add them to the map."
    ],

    ["PolicyMap",
    "https://www.policymap.com/newmaps#/",
    "The primary purpose of PolicyMap is to bridge the gap between data and action. The application allows the user to choose from several different categories such as demographics, education, housing, quality of life, health, and more. It allows for people to make detailed maps with no training or GIS experience."
    ]
];


function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

  // A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);

  message = "<h1>Hello, welcome to my site, " + user_name + "!<h1>";

  return message;
}

function webmap_table(){
  document.write("<table width=100%>")
  for(var row = 0; row <  webmaps.length; row++){
    document.write("<tr>");
      for(var column = 0; column < webmaps[0].length; column++){
        document.write("<td>"+webmaps[row][column]+"</td>");
    }
    document.write("</tr>")
  }
  document.write("</table>")
}
