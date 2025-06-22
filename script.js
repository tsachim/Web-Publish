let menu=[
     ["index.html", "Home"]
    ,["animal_report.html","Animal Report"]
    ,["fish.html","Fish"]
    ,["amphibians.html","Amphibians"]
    ,["reptiles.html","Reptiles"]
    ,["birds.html","Birds"]
    ,["mammals.html","Mammals"]
    ,["quiz.html","Quiz"]
    ,["about.html","About Me"]
    ,["store.html","Store"]
]





let activeMenuId=0;

function showHeader()
{
    window.document.write("<table class='menu-container-table'><tr><td><a href='heb/index.html?id=0'><img src='pics/israel.png' class='country-icon'></a><td>");
    window.document.write("<table class='main-menu-table' id='top-menu'>");
    window.document.write("<tr>");
    for (let menuItem=0;menuItem<menu.length;menuItem++)
    {
        let sep="";
        if (menuItem<menu.length-1) sep="&nbsp;|&nbsp;";
        window.document.write("<td class='menu-td' id='menu-td-"+menuItem+"' name='menu-td-"+menuItem+"' >");
            window.document.write("<a href='"+menu[menuItem][0]+"?id="+menuItem+"' id='menu-"+menuItem+"' name='menu-"+menuItem+"' onmouseover='menuHover(this)' onmouseout='menuOut(this)'>"+menu[menuItem][1]+"</a>"+sep);    
        window.document.write("</td>");
    }
     window.document.write("</tr>");
    window.document.write("</table>");
     window.document.write("</td></tr></table>");
    window.document.write("<div class='overlay-return-top'><a href='#top-menu'> <img src='pics/up-arrow.png' alt='go up' title='go up' width='30px'></a></div>");
}

function showFooter()
{
    window.document.write("<p>&copy; 2025 The Animal Kingdom | <a href='about.html?id=8'>Tsachi Malik</a></p>")
    activePage();
}

function menuHover(item)
{
    if (item.id!=activeMenuId)
    {
        let id= window.document.getElementById(item.id);
        id.className="menu-hover";
    }
}

function menuOut(item)
{
    if (item.id!=activeMenuId)
    {
        let id= window.document.getElementById(item.id);
        id.className="";    
    }
}

function activePage()
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    activeMenuId = "menu-"+urlParams.get("id");
    let id= window.document.getElementById(activeMenuId);
    id.className="selected-menu";
}


// Quiz

const questions = [
        {
            question: "Which animal group is characterized by breathing through gills, having fins, and living exclusively in water?",
            options: ["Amphibians", "Fish", "Reptiles", "Mammals"],
            correctAnswer: 1
        },
        {
            question: "Animals that typically begin their lives in water with gills and later develop lungs to live on land are known as:",
            options: ["Reptiles", "Birds", "Amphibians", "Fish"],
            correctAnswer: 2
        },
        {
            question: "Which group of animals has dry, scaly skin and usually lays leathery-shelled eggs on land?",
            options: ["Birds", "Mammals", "Fish", "Reptiles"],
            correctAnswer: 3
        },
        {
            question: "Feathers, wings, and laying hard-shelled eggs are characteristic features of which animal group?",
            options: ["Mammals", "Amphibians", "Birds", "Reptiles"],
            correctAnswer: 2
        },
        {
            question: "Which animal class is known for having fur or hair, being warm-blooded, and nourishing their young with milk?",
            options: ["Fish", "Reptiles", "Amphibians", "Mammals"],
            correctAnswer: 3
        },
        {
            question: "A shark is an example of an animal belonging to which class?",
            options: ["Mammals", "Fish", "Reptiles", "Amphibians"],
            correctAnswer: 1
        },
        {
            question: "Which of the following animals undergoes a significant transformation (metamorphosis) from a larval stage to an adult form?",
            options: ["Snake", "Bat", "Salmon", "Frog"],
            correctAnswer: 3
        },
        {
            question: "A crocodile is classified under which animal group?",
            options: ["Amphibians", "Mammals", "Reptiles", "Fish"],
            correctAnswer: 2
        },
        {
            question: "Which animal below is typically warm-blooded and can be found flying?",
            options: ["Salamander", "Whale", "Eagle", "Lizard"],
            correctAnswer: 2
        },
        {
            question: "What is a unique characteristic of mammals that is not shared by other animal groups listed?",
            options: ["Lay eggs", "Cold-blooded", "Possess fur or hair", "Breathe with gills"],
            correctAnswer: 2
        }
    ];


    function showQuestions()
    {
        for (let q=0;q<questions.length;q++)
        {
            window.document.write("<table class='question-table'>");
            window.document.write("<!-- Question "+q+1+" -->")
            window.document.write("<tr><td colspan='2'>"+questions[q].question+"</td></tr>");
            for (let ans=0;ans<questions[q].options.length;ans++)
            {
            window.document.write("<tr id='tr"+q.toString()+"_"+ans.toString()+"'><td><input type='radio' id='q"+q.toString()+"_"+ans.toString()+"' name='q"+q.toString()+"' value='"+questions[q].options[ans]+"'></td> <td><label for='q"+q.toString()+"_"+ans.toString()+"'>"+questions[q].options[ans]+"</label></td></tr>")
            }
            window.document.write("</table>");
        }
    }

    function checkAnswers()
    {
        let numberOfCrrectAnswers=0;
        for (let q=0;q<questions.length;q++)
        {
            let questionRadioButton=window.document.getElementsByName("q"+q);
            for (let ans=0;ans<questions[q].options.length;ans++)
            {
                let answerTr=window.document.getElementById("tr"+q.toString()+"_"+ans.toString());
                if (questionRadioButton[ans].checked &&  ans==questions[q].correctAnswer)
                {
                    numberOfCrrectAnswers++;
                }
                if (questionRadioButton[ans].checked &&  ans!=questions[q].correctAnswer)
                {
                    answerTr.style.backgroundColor="#f38484";
                }
                if (ans==questions[q].correctAnswer)
                {
                    answerTr.style.backgroundColor="#068b39";
                }
            }
        }
        let percentage = (numberOfCrrectAnswers / questions.length) * 100;
        let scoreMessage=window.document.getElementById("scoreMessage");
        let score=window.document.getElementById("score");
        score.innerText=percentage.toString();
        scoreMessage.style.visibility='visible';
        return;
    }

    function closeQuizMessage()
    {
        let scoreMessage=window.document.getElementById("scoreMessage");
        scoreMessage.style.visibility='hidden';
        location.reload();
    }



    // store

let products = [
  {
    fileName: "prd-1.png",
    productName: "Ducky Wucky Plush",
    productDescription: "A charming white plush duck with soft pink wings, an orange beak, and a cute pink bow.",
    price: 15.99 
  },
  {
    fileName: "prd-2.png",
    productName: "Capybara Embroidered Cap",
    productDescription: "A stylish mustard yellow baseball cap featuring a finely embroidered capybara design on the front.",
    price: 22.50 
  },
  {
    fileName: "prd-3.png",
    productName: "Fancy Flamingo Plush",
    productDescription: "An adorable bright pink plush flamingo with long legs and a distinctive black and white beak.",
    price: 18.00 
  },
  {
    fileName: "prd-4.png",
    productName: "Giggles the Seagull Plush",
    productDescription: "A cute and cuddly white plush seagull with gray wings, orange feet, and a yellow, textured beak.",
    price: 12.75 
  },
  {
    fileName: "prd-5.png",
    productName: "Aqua Bloom Squishy Plush",
    productDescription: "A vibrant teal and yellow striped plush toy with a friendly embroidered face and a small flower detail.",
    price: 10.99 
  },
  {
    fileName: "prd-6.png",
    productName: "Frosty Bear Plush",
    productDescription: "A soft and cuddly white polar bear plush with a sweet black nose and eyes, perfect for snuggling.",
    price: 20.00 
  },
  {
    fileName: "prd-7.png",
    productName: "Gentle Giant Elephant Plush",
    productDescription: "A lovable grey elephant plush with large, soft ears and a friendly expression.",
    price: 25.00 
  },
  {
    fileName: "prd-8.png",
    productName: "Gerry the Giraffe Plush",
    productDescription: "A charming brown and white spotted giraffe plush with a long neck and gentle eyes.",
    price: 19.50 
  },
  {
    fileName: "prd-9.png",
    productName: "Curious Gorilla Plush",
    productDescription: "A cute black gorilla plush with soft grey accents on its face, hands, and feet, and big, curious eyes.",
    price: 21.00 
  },
  {
    fileName: "prd-10.png",
    productName: "Roaring Leo Lion Plush",
    productDescription: "A majestic brown lion plush with a fluffy mane, a pink nose, and a kingly presence.",
    price: 24.00 
  },
  {
    fileName: "prd-11.png",
    productName: "Pingu the Penguin Plush",
    productDescription: "A cute and cuddly grey and white penguin plush with black feet and a small black beak.",
    price: 14.25 
  },
  {
    fileName: "prd-12.png",
    productName: "Rocky Rhino Plush",
    productDescription: "A soft grey rhino plush with a friendly face, small horn, and black ear tips.",
    price: 23.75 
  },
  {
    fileName: "prd-13.png",
    productName: "Capybara Portrait Tee",
    productDescription: "A light brown t-shirt featuring a large, realistic graphic of a capybara sitting in a natural setting.",
    price: 28.99 
  },
  {
    fileName: "prd-14.png",
    productName: "Capy Face Graphic Tee",
    productDescription: "A black t-shirt with a graphic of a capybara's face and the text \"THIS IS MY CAPY FACE\".",
    price: 26.50 
  }
];

let selectedItems=[];

function showProducts()
{
    const prodPerRow=2;
    let rowCount=0;
    window.document.write("<table class='products-table'>");
    for (let prod=0;prod<products.length;prod++)
    {
        let prodId=prod+1;
        if (rowCount==0)
        {
            window.document.write("<tr>");
        }
        rowCount++;
        window.document.write("<td class='product-box' id='prod-"+prodId+"' name='prod-"+prodId+"'>");
            window.document.write("<div class='add-button' onClick='addProduct("+prod+")'>&#x2B;</div>");
            window.document.write("<p>"+products[prod].productName+"</p>");
            window.document.write("<p><img src='pics/products/"+products[prod].fileName+"'></p>");
            window.document.write("<p>"+products[prod].productDescription+"</p>");
            window.document.write("<p>"+products[prod].price.toString()+"$</p>");
        window.document.write("</td>");

        if (rowCount==2)
        {
            rowCount=0;
            window.document.write("</tr>");
        }
    }
    window.document.write("</table>");
}

function addProduct(prodId)
{
    let prodectExists=selectedItems.find(p=>p.prodId==prodId);
    if (selectedItems.length==0 || prodectExists==undefined)
    {
        let item=new Image();
        item.src="pics/products/"+products[prodId].fileName;
        item.title=products[prodId].productName;
        item.quantity=1;
        item.price=products[prodId].price;
        item.prodId=prodId;
        selectedItems.push(item);
    }

    if (prodectExists!=undefined)
    {
        prodectExists.quantity++;
    }
    showSelectedItems();
}

function showSelectedItems()
{
    let tableStr="";
    let totalPrice=0;
    tableStr+="<table  class='invoice-table'>";
    tableStr+="<th id='invoice-details'>Product</th>";
    tableStr+="<th id='invoice-unitPrice'>Unit Price</th>";
    tableStr+="<th id='invoice-quantity'>Quantity</th>";
    tableStr+="<th id='invoice-Price'>Price</th>";
    tableStr+="<th id='invoice-remove'>Remove</th>";
    for (let item=0;item<selectedItems.length;item++)
    {
        tableStr+="<tr>";
        tableStr+="<td class='invoice-td-product'> <img src='"+selectedItems[item].src+"'></td>";
        tableStr+="<td class='invoice-td-unit-price'>"+selectedItems[item].price+"$</td>";
        tableStr+="<td class='invoice-td-quantity'>"+selectedItems[item].quantity+"</td>";
        tableStr+="<td class='invoice-td-price'>"+parseFloat(selectedItems[item].quantity*selectedItems[item].price).toFixed(2)+"$</td>";
        tableStr+="<td><div class='remove-button' onClick='removeProduct("+selectedItems[item].prodId+")'>-</div></td>";
        tableStr+="</tr>";
        totalPrice+=selectedItems[item].quantity*selectedItems[item].price;
    }
    
    tableStr+="<tr class='invoice-tr-total'><td colspan='2'></td><td class='invoice-td-total-text'>Total</td ><td class='invoice-td-total-price'>"+totalPrice.toFixed(2)+"$</td><td></td></tr>";
    tableStr+="</table>";
    let selectedProducts =window.document.getElementById("selected-products");
    selectedProducts.innerHTML=tableStr;
    
}


function removeProduct(prodId)
{
    let itemIndex=selectedItems.findIndex(p=>p.prodId==prodId);

    if (itemIndex!=undefined)
    {
        selectedItems[itemIndex].quantity--;
        if (selectedItems[itemIndex].quantity<=0)
        {
            selectedItems.splice(itemIndex,1);
        }
    }
    showSelectedItems();
}

