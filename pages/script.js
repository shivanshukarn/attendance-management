let tableData = document.getElementById('table-data')
let myurl = "http://localhost:3000/studentData.json"

fetch(myurl)
  .then((res) => res.json())
  .then((data) => {
    setData(data);
  });

function setData(studentData) {
  studentData.forEach((student) => {
    // console.log(student)
    tableData.innerHTML += `<tr>
<th scope="row">${student.roll}</th>
<td>${student.name}</td>
<td>
<form>
<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="${student.roll}a" autocomplete="off" value="absent" onchange="formVal(event)">
  <label class="btn btn-outline-danger" for="${student.roll}a">Absent</label>

  <input type="radio" class="btn-check" name="btnradio" id="${student.roll}l" autocomplete="off" value="leave" onchange="formVal(event)">
  <label class="btn btn-outline-warning" for="${student.roll}l">Leave</label>

  <input type="radio" class="btn-check" name="btnradio" id="${student.roll}p" autocomplete="off" value="present" onchange="formVal(event)">
  <label class="btn btn-outline-success" for="${student.roll}p">Present</label>
</div>
</form>
</td>
</tr>`
})
  console.log(studentData)
}

function formVal(e) {
  let kk = e.target.id;
  let aa = e.target.value
  kk = kk.slice(0,kk.length-1)

  console.log(kk, aa)

class Attended {
  constructor(name = "", classe="", roll="", phone="", status="") {
      this.name = name;
      this.classe = classe;
      this.roll = roll;
      this.phone = phone;
      this.status = status;
  }
  saveAsCSV() {
      const csv = `${this.name},${this.classe},${this.roll},${this.phone},${this.status}\n`;
      try {
          fs.appendFileSync("./attend.csv", csv);
      } catch (err) {
          console.error(err);
      }
  }
}
const startApp = () => {
  const contact1 = new Attended("name", "class", "roll", "phone", "status");
  contact1.saveAsCSV();
  const contact2 = new Attended("hvbuhfsdv", 5, kk, 1231231230, aa);
  contact2.saveAsCSV();
}
startApp()
}