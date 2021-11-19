import { Pane, Card } from "evergreen-ui";


export default function MenuCard({
  college,
  menu
}) {
  /*let sampleMenu = [
    First Item = Header
    Second Iterm = Array of food items 
    ["Main Entree", ["Orange Beef with Broccoli"]],
    ["Vegan", ["Pan-Asian Orange Tofu"]],
    ["Soups", ["Cream of Mushroom Soup", "Minestrone Soup"]],
    ["Salad Bar", ["Fresh Fruit Salad"]]
  ]
*/
    return (  
        <Card 
        backgroundColor="white"
        padding="30px" marginLeft = "30px"
        width="300px"
      >
          <h1 className = "h1">{ college }</h1>
          {/* 
            TODO: convert this to a list of menu items where
            the first entry of the menu is in bold (is like a title)
            and the rest are not.

            Hint: use map, check index.tsx for more info on how map works.
            */}
          {
             menu.map
              (menuSection => <div>
               <b>{menuSection[0]}</b>
               {menuSection[1].map(item => <div>{item}</div>)}
               </div>
             )
              }
      
          
        </Card>
    )
}