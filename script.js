
var CatList = {};

function AddCat() {
    var cNam = document.getElementById('cName').value;
    console.log(cNam);
    if (cNam in CatList == false){
        //Create Category Header
        var cat = document.createElement("option");
        cat.innerHTML = cNam;
        CatSelect.appendChild(cat);
        var cat2 = document.createElement("option");
        cat2.innerHTML = cNam;
        CatSelect2.appendChild(cat2);
        var Tab = document.createElement("table");
        Tab.id = cNam;
        var CatTr = document.createElement("tr");
        var CatHead = document.createElement("h1");
        CatHead.innerHTML = cNam;
        Tab.appendChild(CatTr);
        //Create Subcategory Table: 
        //Create HW Subcategory
        var HWtr = document.createElement("tr");
        var HWWtd = document.createElement("td");
        var HWN = document.createElement("td");
        HWtr.id = cNam + "_Homework";
        HWWtd.id = cNam + "_Homework_Wtd";
        HWN.id = cNam + "_Homework_N";
        HWN.innerHTML = "Homework";
        HWWtd.innerHTML = "Weight: 0";
        HWtr.appendChild(HWN);
        HWtr.appendChild(HWWtd);
        Tab.appendChild(HWtr);
        //Create Quizzes Subcategory
        var Qtr = document.createElement("tr");
        var QWtd = document.createElement("td");
        var QN = document.createElement("td");
        Qtr.id = cNam + "_Quizzes";
        QWtd.id = cNam + "_Quizzes_Wtd";
        QN.id = cNam + "_Quizzes_N";
        QN.innerHTML = "Quizzes";
        QWtd.innerHTML = "Weight: 0";
        Qtr.appendChild(QN);
        Qtr.appendChild(QWtd);
        Tab.appendChild(Qtr);
        //Create Test Subcategory
        var Ttr = document.createElement("tr");
        var TWtd = document.createElement("td");
        var TN = document.createElement("td");
        Ttr.id = cNam + "_Tests";
        TWtd.id = cNam + "_Tests_Wtd";
        TN.id = cNam + "_Tests_N";
        TN.innerHTML = "Tests";
        TWtd.innerHTML = "Weight: 0";
        Ttr.appendChild(TN);
        Ttr.appendChild(TWtd);
        Tab.appendChild(Ttr);
        //Create Midterm Subcategory
        var Mtr = document.createElement("tr");
        var MWtd = document.createElement("td");
        var MN = document.createElement("td");
        Mtr.id = cNam + "_Midterms";
        MWtd.id = cNam + "_Midterms_Wtd";
        MN.id = cNam + "_Midterms_N";
        MN.innerHTML = "Midterms";
        MWtd.innerHTML = "Weight: 0";
        Mtr.appendChild(MN);
        Mtr.appendChild(MWtd);
        Tab.appendChild(Mtr);
        //Create Finals Subcategory
        var Ftr = document.createElement("tr");
        var FWtd = document.createElement("td");
        var FN = document.createElement("td");
        Ftr.id = cNam + "_Finals";
        FWtd.id = cNam + "_Finals_Wtd";
        FN.id = cNam + "_Finals_N";Ftr.appendChild(FN);
        FN.innerHTML = "Finals";
        FWtd.innerHTML = "Weight: 0";
        Ftr.appendChild(FWtd);
        Tab.appendChild(Ftr);
        //Create Presentation Subcategory
        var Ptr = document.createElement("tr");
        var PWtd = document.createElement("td");
        var PN = document.createElement("td");
        Ptr.id = cNam + "_Presentations";
        PWtd.id = cNam + "_Presentations_Wtd";
        PN.id = cNam + "_Presentations_N";
        PN.innerHTML = "Presentations";
        PWtd.innerHTML = "Weight: 0";
        Ptr.appendChild(PN);
        Ptr.appendChild(PWtd);
        Tab.appendChild(Ptr);
        //Create Groupwork Subcategory
        var Gtr = document.createElement("tr");
        var GWtd = document.createElement("td");
        var GN = document.createElement("td");
        Gtr.id = cNam + "_Group Work";
        GWtd.id = cNam + "_Group Work_Wtd";
        GN.id = cNam + "_Group Work_N";
        GN.innerHTML = "Group Work";
        GWtd.innerHTML = "Weight: 0";
        Gtr.appendChild(GN);
        Gtr.appendChild(GWtd);
        Tab.appendChild(Gtr);
        //Create Essay Subcategory
        var Etr = document.createElement("tr");
        var EWtd = document.createElement("td");
        var EN = document.createElement("td");
        Etr.id = cNam + "_Essays";
        EWtd.id = cNam + "_Essays_Wtd";
        EN.id = cNam + "_Essays_N";
        EN.innerHTML = "Essays";
        EWtd.innerHTML = "Weight: 0";
        Etr.appendChild(EN);
        Etr.appendChild(EWtd);
        Tab.appendChild(Etr);
        //Add to webpage
        PattyHill.appendChild(CatHead);
        PattyHill.appendChild(Tab); 
    }
    //Add to list of categories
    makeDict(CatList, cNam);
    //Create lists of subcategory weights and values
    CatList[cNam]["Homework"] = [0, []];
    CatList[cNam]["Quizzes"] = [0, []];
    CatList[cNam]["Tests"] = [0, []];
    CatList[cNam]["Midterms"] = [0, []];
    CatList[cNam]["Finals"] = [0, []];
    CatList[cNam]["Presentations"] = [0, []];
    CatList[cNam]["Group Work"] = [0, []];
    CatList[cNam]["Essays"] = [0, []];


}

function makeDict(L, D){
    L[D] = {};
    console.log(L);
}

function AddSub() {
    var cSel = document.getElementById('CatSelect').value;
    var sName = document.getElementById('sName').value;
    var sWeight = document.getElementById('sWeight').value;
    console.log(sName);
    /*var sucat = document.createElement("option");
    sucat.innerHTML = sName;
    SubcatSelect.appendChild(sucat);*/
    //Add Weight to list of subcategories
    CatList[cSel][sName][0] = sWeight;
    console.log(CatList[cSel][sName]);
    console.log(CatList[cSel]);
    console.log(CatList);
    //Edit name and weight displayed in table
    var namS = document.getElementById(cSel+"_"+sName+"_N");
    console.log(cSel+"_"+sName+"_N");
    console.log(namS);
    console.log(CatList[cSel][sName]);
    var waitS = document.getElementById(cSel+"_"+sName+"_Wtd");
    namS.innerHTML = sName;
    waitS.innerHTML = "Weight: "+ sWeight;
}

function AddAssign() {
    var cSel2 = document.getElementById('CatSelect2').value;
    var sSel = document.getElementById('SubcatSelect').value;
    var aVal = document.getElementById('aVal').value;
    var anam = document.getElementById('aName').value;
    console.log(aVal);
    //Add assignment value to assignment list
    CatList[cSel2][sSel][1].push(aVal);
    console.log(CatList[cSel2][sSel]);
    console.log(CatList[cSel2][sSel][1]);
    //Add assignment to table
    var atr = document.createElement("tr");
    var atd = document.createElement("td");
    var aname = document.createElement("td");
    atd.innerHTML = aVal;
    aname.innerHTML = anam + ": ";
    atr.appendChild(aname);
    atr.appendChild(atd);
    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    
    var other = document.getElementById(cSel2 + "_" + sSel);
    insertAfter(atr, other);
}

function Addy(x,y){
    return x+y;
}

//Take average of assignments
function AverageAssignments(Catlist, Cat, Subcat){
    var div = CatList[Cat][Subcat][1].length;
    
    if (div != 0){
        var i;
        var num = 0;
        for (i = 0; i < div; i++){
            num = num + parseInt(Catlist[Cat][Subcat][1][i]);
            console.log("Num: " + num);
        }
        var avg = num/div;
        console.log("AssAvg: " + avg);
        return avg;
    }
    return 0;
}

//Take average of subcategories
function AverageSubcat(Catlist, Cat){
    console.log(Cat);
    var bigNum = 0;
    for (var key in Catlist[Cat]){
        //Gets average of all assignments in subcategory
        var num = AverageAssignments(Catlist, Cat, key);
        var num = num * ((Catlist[Cat][key][0])/100);
        console.log("SubNum: "+ num);
        bigNum = bigNum + num;
    }
    console.log("SubAvg: " + bigNum);
    return bigNum;
}

//Take average of categories
function AverageCat(Catlist){
    var bigNum = 0;
    var divvy = 0;
    for (var key in Catlist){
        //Gets average of subcategories in category
        var num = AverageSubcat(Catlist, key);
        bigNum = bigNum + num;
        divvy = divvy + 1;
    }
    bigNum = bigNum/divvy;
    console.log("CatAvg: " + bigNum);
    return bigNum;
}

//Called when calculate button is hit. 
function Subby(){
    var Average = AverageCat(CatList);
    var AvgDisplay = document.getElementById("Average");
    AvgDisplay.innerHTML = "Average: "+ Average;
    console.log(CatList);
}
