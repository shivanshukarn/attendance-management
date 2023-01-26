const tableData = document.getElementById('table-data')

let url = "http://localhost:2211/studentData.json"

fetch(url)
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
  localStorage.setItem("stuentsNo", studentData.length);
}

function formVal(e) {
  let kk = e.target.id;
  let aa = e.target.value
  kk = kk.slice(0,kk.length-1)

  console.log(kk, aa)
  sessionStorage.setItem(kk, aa);
}
let stuentsNo = localStorage.getItem('stuentsNo');
for (let i = 0; i < stuentsNo; i++) {
  rrr = sessionStorage.key(i)
  console.log(rrr, sessionStorage.getItem(rrr))
}