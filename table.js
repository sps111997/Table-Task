let myTable = document.querySelector("#table");

let data = [
  {
    id: "1",
    firstname: "Ankit",
    lastname: "Mittal",
    email: "sometest@gmail.com",
    phone: "8876543210",
    Image: "https://picsum.photos/260/250",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 10000,
      },
      {
        id: "3",
        title: "def",
        amount: 20000,
      },
      {
        id: "3",
        title: "def",
        amount: 500,
      },
    ],
  },
  {
    id: "2",
    firstname: "Sarthak",
    lastname: "Sethia",
    email: "test@gmail.com",
    phone: "9876543210",
    Image: "https://picsum.photos/260/200",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 45000,
      },
      {
        id: "3",
        title: "def",
        amount: 15000,
      },
      {
        id: "3",
        title: "def",
        amount: 20000,
      },
    ],
  },
  {
    id: "3",
    firstname: "Shin",
    lastname: "Chan",
    email: "japantest@gmail.com",
    phone: "8976543201",
    Image: "https://picsum.photos/200/210",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 1090,
      },
      {
        id: "3",
        title: "def",
        amount: 200000,
      },
      {
        id: "3",
        title: "def",
        amount: 500,
      },
    ],
  },
  {
    id: "4",
    firstname: "Siddhart",
    lastname: "Dhayal",
    email: "jattest@gmail.com",
    phone: "9006543210",
    Image: "https://picsum.photos/230/230",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 10,
      },
      {
        id: "3",
        title: "def",
        amount: 20000,
      },
      {
        id: "3",
        title: "def",
        amount: 50000,
      },
    ],
  },
  {
    id: "5",
    firstname: "Akshay",
    lastname: "Parbhu",
    email: "haretest@gmail.com",
    phone: "8000543210",
    Image: "https://picsum.photos/220/220",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 1000,
      },
      {
        id: "3",
        title: "def",
        amount: 20000,
      },
      {
        id: "3",
        title: "def",
        amount: 50000,
      },
    ],
  },
  {
    id: "6",
    firstname: "Birjapal",
    lastname: "saini",
    email: "malitest@gmail.com",
    phone: "9876511110",
    Image: "https://picsum.photos/240/210",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 10.2,
      },
      {
        id: "3",
        title: "def",
        amount: 200.0,
      },
      {
        id: "3",
        title: "def",
        amount: 500,
      },
    ],
  },
  {
    id: "7",
    firstname: "Shyam",
    lastname: "Sharma",
    email: "test@gmail.com",
    phone: "9876543210",
    Image: "https://picsum.photos/300/350",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 10.999,
      },
      {
        id: "3",
        title: "def",
        amount: 2000,
      },
      {
        id: "3",
        title: "def",
        amount: 500.569,
      },
    ],
  },
  {
    id: "8",
    firstname: "Ganpat",
    lastname: "Rao",
    email: "test@gmail.com",
    phone: "9876543210",
    Image: "https://picsum.photos/360/350",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 9000,
      },
      {
        id: "3",
        title: "def",
        amount: 29900,
      },
      {
        id: "3",
        title: "def",
        amount: 999500,
      },
    ],
  },
  {
    id: "9",
    firstname: "Ghanshyam",
    lastname: "agrawal",
    email: "test@gmail.com",
    phone: "9876543210",
    Image: "https://picsum.photos/390/340",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 150,
      },
      {
        id: "3",
        title: "def",
        amount: 25000,
      },
      {
        id: "3",
        title: "def",
        amount: 1500,
      },
    ],
  },
  {
    id: "10",
    firstname: "Virendra",
    lastname: "Agarawal",
    email: "test@gmail.com",
    phone: "9876543210",
    Image: "https://picsum.photos/460/400",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 10,
      },
      {
        id: "3",
        title: "def",
        amount: 2000000,
      },
      {
        id: "3",
        title: "def",
        amount: 500,
      },
    ],
  },
  {
    id: "11",
    firstname: "Vikash",
    lastname: "Mittal",
    email: "sometest@gmail.com",
    phone: "8876543210",
    Image: "https://picsum.photos/260/250",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 1009,
      },
      {
        id: "3",
        title: "def",
        amount: 200,
      },
      {
        id: "3",
        title: "def",
        amount: 5090,
      },
    ],
  },
  {
    id: "12",
    firstname: "Priya",
    lastname: "Sethia",
    email: "test@gmail.com",
    phone: "9876543210",
    Image: "https://picsum.photos/260/200",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 4599,
      },
      {
        id: "3",
        title: "def",
        amount: 15090,
      },
      {
        id: "3",
        title: "def",
        amount: 40000,
      },
    ],
  },
  {
    id: "13",
    firstname: "Nobita",
    lastname: "Chan",
    email: "japantest@gmail.com",
    phone: "8976543201",
    Image: "https://picsum.photos/200/210",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 1090,
      },
      {
        id: "3",
        title: "def",
        amount: 20900,
      },
      {
        id: "3",
        title: "def",
        amount: 5009,
      },
    ],
  },
  {
    id: "14",
    firstname: "Peter",
    lastname: "Parakar",
    email: "jattest@gmail.com",
    phone: "9006543210",
    Image: "https://picsum.photos/230/230",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 1011,
      },
      {
        id: "3",
        title: "def",
        amount: 200010,
      },
      {
        id: "3",
        title: "def",
        amount: 5000,
      },
    ],
  },
  {
    id: "15",
    firstname: "Dev",
    lastname: "Parbhu",
    email: "haretest@gmail.com",
    phone: "8000543210",
    Image: "https://picsum.photos/220/220",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 100,
      },
      {
        id: "3",
        title: "def",
        amount: 2000,
      },
      {
        id: "3",
        title: "def",
        amount: 50990,
      },
    ],
  },
  {
    id: "16",
    firstname: "Tony",
    lastname: "stark",
    email: "malitest@gmail.com",
    phone: "9876511110",
    Image: "https://picsum.photos/240/210",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 10.2,
      },
      {
        id: "3",
        title: "def",
        amount: 200.9,
      },
      {
        id: "3",
        title: "def",
        amount: 500.46,
      },
    ],
  },
  {
    id: "17",
    firstname: "RamRatan",
    lastname: "Sharma",
    email: "test@gmail.com",
    phone: "9876543210",
    Image: "https://picsum.photos/300/350",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 10.899,
      },
      {
        id: "3",
        title: "def",
        amount: 2000.678,
      },
      {
        id: "3",
        title: "def",
        amount: 500.569,
      },
    ],
  },
  {
    id: "18",
    firstname: "Babu",
    lastname: "Rao",
    email: "test@gmail.com",
    phone: "9876543210",
    Image: "https://picsum.photos/360/350",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 9990,
      },
      {
        id: "3",
        title: "def",
        amount: 29900,
      },
      {
        id: "3",
        title: "def",
        amount: 999500,
      },
    ],
  },
  {
    id: "19",
    firstname: "Ganesh",
    lastname: "agrawal",
    email: "test@gmail.com",
    phone: "9876543210",
    Image: "https://picsum.photos/390/340",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 15098,
      },
      {
        id: "3",
        title: "def",
        amount: 25070,
      },
      {
        id: "3",
        title: "def",
        amount: 1500,
      },
    ],
  },
  {
    id: "20",
    firstname: "Surya",
    lastname: "Singham",
    email: "test@gmail.com",
    phone: "9876543210",
    Image: "https://picsum.photos/460/400",
    offerPrice: [
      {
        id: "2",
        title: "abc",
        amount: 10,
      },
      {
        id: "3",
        title: "def",
        amount: 2000000,
      },
      {
        id: "3",
        title: "def",
        amount: 500,
      },
    ],
  },
];
let filterData = data.map((item) => {
  let temp = {};
  temp.id = item.id;
  temp.Image = item.Image;
  temp.name = item.firstname + " " + item.lastname;
  temp.phone = item.phone;
  temp.email = item.email;
  temp.max = Math.max(
    item.offerPrice[0].amount,
    item.offerPrice[1].amount,
    item.offerPrice[2].amount
  );
  temp.min = Math.min(
    item.offerPrice[0].amount,
    item.offerPrice[1].amount,
    item.offerPrice[2].amount
  );
  return temp;
});
let j = 0;
let k = 0;
const headers = ["ID", "Image", "Name", "Mobile", "Email", "Offer Price"];
let headerRow = document.createElement("div");
headerRow.setAttribute("class", "flex1");
headers.forEach((headerText) => {
  let header = document.createElement("span");

  let textNode = document.createTextNode(headerText);
  header.appendChild(textNode);
  headerRow.appendChild(header);
});
let cell = document.createElement("button");
cell.setAttribute("class", "btn1");
cell.setAttribute("onclick", "sortTable()");

let img = document.createElement("img");
img.setAttribute("class", "img1");
img.src = "https://img.icons8gmail.com/material-rounded/24/000000/sort.png";
let textNode = document.createTextNode(img);
img.appendChild(textNode);
cell.appendChild(img);
headerRow.appendChild(cell);

myTable.appendChild(headerRow);

filterData.forEach((emp) => {
  let row = document.createElement("div");
  if (j % 2 === 0) {
    j++;
    row.setAttribute("class", "flex2");
  } else {
    j++;
    row.setAttribute("class", "flex3");
  }
  for (let keys in emp) {
    if (keys === "min") {
      continue;
    }
    let text = emp[keys];
    if (keys === "Image") {
      let cell = document.createElement("span");
      let img = document.createElement("img");
      img.src = emp[keys];
      let textNode = document.createTextNode(img);

      img.appendChild(textNode);
      cell.appendChild(img);
      row.appendChild(cell);
    } else {
      let cell = document.createElement("span");

      let textNode = document.createTextNode(text);

      cell.appendChild(textNode);
      row.appendChild(cell);
    }
  }
  let cell = document.createElement("button");
  cell.setAttribute("class", "btn1");
  cell.setAttribute("onclick", "deleteRow(this)");

  let img = document.createElement("img");
  img.setAttribute("class", "img1");
  img.src = "https://img.icons8gmail.com/ios-glyphs/100/000000/trash--v1.png";
  let textNode = document.createTextNode(img);
  img.appendChild(textNode);
  cell.appendChild(img);
  row.appendChild(cell);

  myTable.appendChild(row);
});
/*
let messageNoData = document.createElement("div");
messageNoData.setAttribute("id","message");
let messageText = document.createTextNode("No Data Found ");
messageNoData.appendChild(messageText);
myTable.appendChild(messageNoData);
*/
function sortPrice() {
  let input = document.getElementById("myInput");
  let table = document.getElementById("table");
  let tr = Array.from(table.children);
  tr.forEach((element, index) => {
    let td = element.getElementsByTagName("span")[5];
    if (td && index) {
      let txtValue = td.textContent || td.innerText;
      if (document.getElementById("switch").checked) {
        td.textContent = filterData[index - 1]["min"];
        td.innerText = filterData[index - 1]["min"];
      } else {
        td.textContent = filterData[index - 1]["max"];
        td.innerText = filterData[index - 1]["max"];
      }
    }
  });
}

function search() {
  let v = document.getElementById("message");
  v.style.display = "none";
  let count = 0;
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("table");
  let tr = Array.from(table.children);
  tr.forEach((element, index) => {
    let td = element.getElementsByTagName("span")[2];
    if (td && index) {
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        element.style.display = "";
      } else {
        count++;

        element.style.display = "none";
      }
    }
  });
  if (count + 1 === tr.length) {
    let v = document.getElementById("message");
    v.style.display = "flex";
  }
}
function searchClear() {
  let input = document.getElementById("myInput");
  input.value = "";
  let v = document.getElementById("message");
  v.style.display = "flex";
  search();
}
function deleteRow(obj) {
  obj.parentNode.remove();
}

function sortTable() {
  let table = document.getElementById("table");
  let tr = Array.from(table.children);
  k = !k;
  //console.log(tr);
  tr.sort((a, b) => {
    let value1 = a.getElementsByTagName("span")[5].innerText;
    let value2 = b.getElementsByTagName("span")[5].innerText;
    if (value1 === "Offer Price" || value2 === "Offer Price") {
      return 0;
    } else {
      if (Number(value2) > Number(value1)) {
        return k ? 1 : -1;
      } else if (Number(value2) < Number(value1)) {
        return k ? -1 : 1;
      } else {
        return 0;
      }
    }
  });
  tr.forEach((val)=> {
    table.appendChild(val);
  });
}
