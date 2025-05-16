function generateTable() {
      const size = parseInt(document.getElementById("size").value);
      const container = document.getElementById("table-container");
      let tableHTML = "<table><tr><td></td>";

      for (let i = 1; i <= size; i++) {
        tableHTML += "<td class='cords'>"+i+"</td>";
      }
      tableHTML += "</tr>";

      for (let row = 1; row <= size; row++) {
        tableHTML += "<tr><td class='cords'>"+row+"</td>";
        for (let col = 1; col <= size; col++) {
          tableHTML += "<td>"+row * col+"</td>";
        }
        tableHTML += "</tr>";
      }

      tableHTML += "</table>";
      container.innerHTML = tableHTML;
    }

function generateTable1() {
      const size = parseInt(document.getElementById("size").value);
      const container = document.getElementById("table-container");
      let tableHTML = "<table><tr><td></td>";

      for (let i = 1; i <= size; i++) {
        tableHTML += "<td class='cords'>"+i+"</td>";
      }
      tableHTML += "</tr>";

      for (let row = 1; row <= size; row++) {
        tableHTML += "<tr><td class='cords'>"+row+"</td>";
        for (let col = 1; col <= size; col++) {
          tableHTML += "<td id='"+row+"_"+col+"' data-row='"+row+"' data-col='"+col
          +"' onmouseover='showCords(this)'  onmouseout='hideCords(this)' onclick='showPath(this)'>"
          +row * col+"</td>";
        }
        tableHTML += "</tr>";
      }

      tableHTML += "</table>";
      container.innerHTML = tableHTML;
    }

function showCords(element)
{
  const row=element.dataset.row;
  const col=element.dataset.col;
  const cell=document.getElementById(row+"_"+col);
  cell.classList.add("cellHoverColor");
  //console.log("col:",col," row:",row," cell=",cell);
}

function hideCords(element)
{
  const row=element.dataset.row;
  const col=element.dataset.col;
  const cell=document.getElementById(row+"_"+col);
  cell.classList.remove("cellHoverColor");
  //console.log("col:",col," row:",row," cell=",cell);
}

function showPath(element)
{
  let x,y;
  const size = parseInt(document.getElementById("size").value);
  for (y=1;y<=size;y++)
  {
    for (x=1;x<=size;x++)
    {
      document.getElementById(y+"_"+x).classList.remove("path");
    }
  }
  
  const row=element.dataset.row;
  const col=element.dataset.col;
  const cell=document.getElementById(row+"_"+col);
  for (y=row;y>=1;y--)
  {
    document.getElementById(y+"_"+col).classList.add("path");
  }

  for (x=col;x>=1;x--)
  {
    document.getElementById(row+"_"+x).classList.add("path");
  }
}