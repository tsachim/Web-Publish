let menu=[
     ["index.html", "דף הבית"]
    ,["animal_report.html","דו\"ח בעלי חיים"]
    ,["fish.html","דגים"]
    ,["amphibians.html","דו-חיים"]
    ,["reptiles.html","זוחלים"]
    ,["birds.html","עופות"]
    ,["mammals.html","יונקים"]
    ,["quiz.html","חידון"]
    ,["about.html","אודות"]
    ,["store.html","חנות"]
]

let activeMenuId=0;

function showHeader()
{
    window.document.write("<table class='menu-container-table'><tr><td><a href='../index.html?id=0'><img src='../pics/united-states.png' class='country-icon'></a><td>");
    window.document.write("<table class='main-menu-table' id='top-menu' dir='rtl'>"); // Added dir='rtl'
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
    window.document.write("<div class='overlay-return-top'><a href='#top-menu'> <img src='../pics/up-arrow.png' alt='חזור למעלה' title='חזור למעלה' width='30px'></a></div>"); // Alt and title translated
}

function showFooter()
{
    window.document.write("<p dir='rtl'>&copy; 2025 ממלכת החיות | <a href='about.html?id=8'>צחי מליק</a></p>") // Added dir='rtl' and translated text
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
                question: "איזו קבוצת בעלי חיים מאופיינת בנשימה דרך זימים, בעלת סנפירים, וחיים אך ורק במים?",
                options: ["דו-חיים", "דגים", "זוחלים", "יונקים"],
                correctAnswer: 1
            },
            {
                question: "בעלי חיים שבדרך כלל מתחילים את חייהם במים עם זימים ובהמשך מפתחים ריאות כדי לחיות ביבשה ידועים כ:",
                options: ["זוחלים", "עופות", "דו-חיים", "דגים"],
                correctAnswer: 2
            },
            {
                question: "איזו קבוצת בעלי חיים בעלת עור יבש וקשקשי ובדרך כלל מטילה ביצים בעלות קליפה דמוית עור ביבשה?",
                options: ["עופות", "יונקים", "דגים", "זוחלים"],
                correctAnswer: 3
            },
            {
                question: "נוצות, כנפיים והטלת ביצים בעלות קליפה קשה הם מאפיינים של איזו קבוצת בעלי חיים?",
                options: ["יונקים", "דו-חיים", "עופות", "זוחלים"],
                correctAnswer: 2
            },
            {
                question: "איזו מחלקת בעלי חיים ידועה בכך שיש לה פרווה או שיער, שהיא בעלת דם חם, ומזינה את צאצאיה בחלב?",
                options: ["דגים", "זוחלים", "דו-חיים", "יונקים"],
                correctAnswer: 3
            },
            {
                question: "כריש הוא דוגמה לחיה השייכת לאיזו מחלקה?",
                options: ["יונקים", "דגים", "זוחלים", "דו-חיים"],
                correctAnswer: 1
            },
            {
                question: "איזו מהחיות הבאות עוברת טרנספורמציה משמעותית (מטמורפוזה) משלב זחל לצורה בוגרת?",
                options: ["נחש", "עטלף", "סלמון", "צפרדע"],
                correctAnswer: 3
            },
            {
                question: "תנין מסווג תחת איזו קבוצת בעלי חיים?",
                options: ["דו-חיים", "יונקים", "זוחלים", "דגים"],
                correctAnswer: 2
            },
            {
                question: "איזו חיה למטה היא בדרך כלל בעלת דם חם ויכולה לעוף?",
                options: ["סלמנדרה", "לוויתן", "עיט", "לטאה"],
                correctAnswer: 2
            },
            {
                question: "מהו מאפיין ייחודי של יונקים שאינו משותף לקבוצות בעלי חיים אחרות המפורטות?",
                options: ["מטילים ביצים", "בעלי דם קר", "בעלי פרווה או שיער", "נושמים בזימים"],
                correctAnswer: 2
            }
        ];


        function showQuestions()
        {
            for (let q=0;q<questions.length;q++)
            {
             window.document.write("<table class='question-table' dir='rtl'>"); // Added dir='rtl'
             window.document.write("") // Fixed comment to show correct question number
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
    productName: "בובת ברווזון מתוקה",
    productDescription: "ברווזון קטיפה לבן ומקסים עם כנפיים ורודות רכות, מקור כתום ופפיון ורוד וחמוד.",
    price: 15.99 
  },
  {
    fileName: "prd-2.png",
    productName: "כובע קפיבארה רקום",
    productDescription: "כובע בייסבול צהוב-חרדל אופנתי עם רקמת קפיבארה עדינה בחזית.",
    price: 22.50 
  },
  {
    fileName: "prd-3.png",
    productName: "בובת פלמינגו מהודרת",
    productDescription: "פלמינגו קטיפה ורוד בוהק וחמוד עם רגליים ארוכות ומקור שחור-לבן ייחודי.",
    price: 18.00 
  },
  {
    fileName: "prd-4.png",
    productName: "בובת שחף צחקן",
    productDescription: "שחף קטיפה לבן חמוד ונעים למגע עם כנפיים אפורות, רגליים כתומות ומקור צהוב עם טקסטורה.",
    price: 12.75 
  },
  {
    fileName: "prd-5.png",
    productName: "בובת אקווה בלום לחיצה",
    productDescription: "צעצוע קטיפה מפוספס בטורקיז וצהוב עם פנים רקומות ידידותיות ופרט פרח קטן.",
    price: 10.99 
  },
  {
    fileName: "prd-6.png",
    productName: "בובת דוב פרוותי",
    productDescription: "דוב קוטב קטיפה לבן רך ונעים למגע עם אף ועיניים שחורים מתוקים, מושלם לחיבוק.",
    price: 20.00 
  },
  {
    fileName: "prd-7.png",
    productName: "בובת פיל ענק עדין",
    productDescription: "פיל קטיפה אפור חביב עם אוזניים גדולות ורכות והבעה ידידותית.",
    price: 25.00 
  },
  {
    fileName: "prd-8.png",
    productName: "בובת ג'רי הג'ירף",
    productDescription: "ג'ירף קטיפה מקסים מנוקד בחום ולבן עם צוואר ארוך ועיניים עדינות.",
    price: 19.50 
  },
  {
    fileName: "prd-9.png",
    productName: "בובת גורילה סקרנית",
    productDescription: "גורילה קטיפה שחורה וחמודה עם הדגשות אפורות רכות על פניה, ידיה ורגליה, ועיניים גדולות וסקרניות.",
    price: 21.00 
  },
  {
    fileName: "prd-10.png",
    productName: "בובת אריה שאוג ליאו",
    productDescription: "אריה קטיפה חום מלכותי עם רעמה פרוותית, אף ורוד ונוכחות מלכותית.",
    price: 24.00 
  },
  {
    fileName: "prd-11.png",
    productName: "בובת פינגווין פינגו",
    productDescription: "פינגווין קטיפה חמוד ונעים למגע באפור ולבן עם כפות רגליים שחורות ומקור שחור קטן.",
    price: 14.25 
  },
  {
    fileName: "prd-12.png",
    productName: "בובת קרנף רוקי",
    productDescription: "קרנף קטיפה אפור רך עם פנים ידידותיות, קרן קטנה וקצות אוזניים שחורים.",
    price: 23.75 
  },
  {
    fileName: "prd-13.png",
    productName: "חולצת טי עם דיוקן קפיבארה",
    productDescription: "חולצת טי בצבע חום בהיר עם גרפיקה גדולה וריאליסטית של קפיבארה יושבת בסביבה טבעית.",
    price: 28.99 
  },
  {
    fileName: "prd-14.png",
    productName: "חולצת טי עם פני קפיבארה",
    productDescription: "חולצת טי שחורה עם גרפיקה של פני קפיבארה והטקסט \"זו הפנים של הקפיבארה שלי\".",
    price: 26.50 
  }
];

let selectedItems=[];

function showProducts()
{
    const prodPerRow=2;
    let rowCount=0;
    window.document.write("<table class='products-table' dir='rtl'>");
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
            window.document.write("<p><img src='../pics/products/"+products[prod].fileName+"'></p>");
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
        item.src="../pics/products/"+products[prodId].fileName;
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
    tableStr+="<table  class='invoice-table' dir='rtl'>";
    tableStr+="<th id='invoice-details'>מוצר</th>";
    tableStr+="<th id='invoice-unitPrice'>מחיר יחידה</th>";
    tableStr+="<th id='invoice-quantity'>כמות</th>";
    tableStr+="<th id='invoice-Price'>מחיר</th>";
    tableStr+="<th id='invoice-remove'>הסר</th>";
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
    
    tableStr+="<tr class='invoice-tr-total'><td colspan='2'></td><td class='invoice-td-total-text'>סה\"כ</td ><td class='invoice-td-total-price'>"+totalPrice.toFixed(2)+"$</td><td></td></tr>";
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