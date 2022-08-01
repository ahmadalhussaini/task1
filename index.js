fetch(
  'http://filltext.com/?rows=10&pretty=true&id={index}&fname={firstName}&lname={lastName}&category=["category1","category2","category3"]'
)
  .then((requst) => {
    console.log(requst);
    let mydata = requst.json();
    console.log(mydata);
    return mydata;
  })
  .then((fulldata) => {
    let array_category = [];
    let countener = document.createElement("div");
    countener.setAttribute("class", "countener");
    for (let i = 0; i < fulldata.length; i++) {
      array_category.push(fulldata[i].category);
    }
    let setcategory = new Set(array_category);
    let convetarray = [...setcategory];
    for (let j = 0; j < convetarray.length; j++) {
      let buttoncategory = document.createElement("button");
      buttoncategory.setAttribute("class", "category");
      let textname1 = document.createTextNode(convetarray[j]);
      buttoncategory.appendChild(textname1);
      countener.appendChild(buttoncategory);
      document.body.appendChild(countener);
    }

    for (let i = 0; i < fulldata.length; i++) {
      console.log(fulldata[i]);
      let div = document.createElement("div");
      let button = document.createElement("button");
      let img = document.createElement("img");
      let p = document.createElement("p");
      img.setAttribute("src", "./download.png");
      div.setAttribute("class", "item");
      button.setAttribute("class", "button-in-side");
      let textname = document.createTextNode(
        fulldata[i].fname + " " + fulldata[i].lname
      );
      let textcategory = document.createTextNode(fulldata[i].category);
      p.appendChild(textname);
      div.appendChild(img);
      div.appendChild(p);
      button.appendChild(textcategory);
      div.appendChild(button);
      document.body.appendChild(div);
    }
  });
