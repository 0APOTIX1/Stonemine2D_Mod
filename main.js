document.getElementById("Start_Menu").innerHTML += "\n<text id='Start_Menu_Text3' class='Start_Menu_Text3 Start_Menu_Text' style='position: absolute; bottom: 80px; left: 0px; font-family: arial;'>Mod by APOTIX</text>";
if (!Main_Menu) {
  document.getElementById("Start_Menu_Text3").style.visibility = "hidden";
}
Player.Inventory.ABlock = 0;

function Mod_Block_Break(blocktype) {
  Canvas = document.getElementById("Canvas");
  if (Player.Inventory) {
    Player.Inventory[blocktype] = Player.Inventory[blocktype] + 1;
    let Should_Add = 1;
    let Should_Amount = 0;
    for (let i = 0; i < Player.Inventory.Hotbar_Items.length; i++) {
      if (Player.Inventory.Hotbar_Items[i] == blocktype) {
        Should_Add = 0;
        break;
      }
    }
    for (let i = 0; i < Player.Inventory.Hotbar_Items.length; i++) {
      if (Player.Inventory.Hotbar_ItemsAmount[i] >= 99 || Player.Inventory.Hotbar_Items[i] == blocktype) {
        Should_Amount += 1;
        break;
      }
    }
    if (Should_Amount >= 10) {
      Should_Add = 2;
    }
    if (Should_Add == 1) {
      for (let i = 0; i < Player.Inventory.Hotbar_Items.length; i++) {
        if (Player.Inventory.Hotbar_Items[i] == "") {
          Player.Inventory.Hotbar_Items[i] = blocktype;
          Player.Inventory.Hotbar_ItemsAmount[i] = 1;
          break;
        }
      }
    } else {
      for (let i = 0; i < Player.Inventory.Hotbar_Items.length; i++) {
        if (Player.Inventory.Hotbar_Items[i] == blocktype) {
          Player.Inventory.Hotbar_ItemsAmount[i] += 1;
          break;
        }
      }
    }
    document.dispatchEvent(Item_Picked_Up);
    return Player.Inventory[blocktype];
  } else {
    return "Error";
  }
}

function Hotbar_Load() {
  for (let i = 0; i < Player.Inventory.Hotbar_Items.length; i++) {
    let temp = "/images/" + Player.Inventory.Hotbar_Items[i] + ".jpg";
    if (Player.Inventory.Hotbar_Items[i] == "") {
      document.getElementById("Hotbar_Slot"+i).style.visibility = "hidden";
      document.getElementById("Hotbar_SlotText"+i).style.visibility = "hidden";
      //console.log("Hotbar_Slot"+i+" hidden" + ", source=" + temp);
    } else {
      if (Player.Inventory.Hotbar_Items[i] == "ABlock") {
        document.getElementById("Hotbar_Slot"+i).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqWBN13MbhJTPCSB_ZgrU6eQfynP4St2V8Q&usqp=CAU";
      } else {
        document.getElementById("Hotbar_Slot"+i).src = temp;
      }
      document.getElementById("Hotbar_Slot"+i).style.visibility = "visible";
      document.getElementById("Hotbar_SlotText"+i).style.visibility = "visible";
      document.getElementById("Hotbar_SlotText"+i).innerHTML = Player.Inventory.Hotbar_ItemsAmount[i];
      //console.log("Hotbar_Slot"+i+" visible" + ", source=" + temp);
    }
  }
}

let New_Block = "<img onclick=\"Mod_Block_Break('ABlock',this);\" id='blocks.Block3' width='50px' height='50px' data-blocktype='ABlock' data-break-strength='2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqWBN13MbhJTPCSB_ZgrU6eQfynP4St2V8Q&usqp=CAU' class='ns Block3'></img>"
document.getElementById("game.blocks").innerHTML += "\n" + New_Block;
