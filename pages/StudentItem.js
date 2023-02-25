import React, { useState } from 'react'

export default function StudentItem({ allDatas }) {
    const [Datas, setDatas] = useState(allDatas)
    console.log(allDatas)
    return (
        <>
    {Datas&&Datas.map(studentitem => {
        { console.log(studentitem) }
        return <tr key={studentitem.roll}>
          <th scope="row">{studentitem.roll}</th>
          <td>{studentitem.name}</td>
          <td>
            <form>
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id={studentitem.roll +"a"} autoComplete="off" value="absent" onClick={formVal()} />
                <label className="btn btn-outline-danger"  >Absent</label>

                <input type="radio" className="btn-check" name="btnradio" id={studentitem.roll +"l"} autoComplete="off" value="leave" onClick={formVal()} />
                <label className="btn btn-outline-warning" >Leave</label>

                <input type="radio" className="btn-check" name="btnradio" id={studentitem.roll +"p"} autoComplete="off" value="present" onClick={formVal()} />
                <label className="btn btn-outline-success"  >Present</label>
              </div>
            </form>
          </td>
        </tr>
      })}
      </>
      )
    //   function formVal(e) {
    //     let kk = e.target.id;
    //     let aa = e.target.value
    //     kk = kk.slice(0,kk.length-1)
      
    //     console.log(kk, aa)
      
    //   class Attended {
    //     constructor(name = "", classe="", roll="", phone="", status="") {
    //         this.name = name;
    //         this.classe = classe;
    //         this.roll = roll;
    //         this.phone = phone;
    //         this.status = status;
    //     }
    //     saveAsCSV() {
    //         const csv = `${this.name},${this.classe},${this.roll},${this.phone},${this.status}\n`;
    //         try {
    //             fs.appendFileSync("./attend.csv", csv);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     }
    //   }
    //   const startApp = () => {
    //     const contact1 = new Attended("name", "class", "roll", "phone", "status");
    //     contact1.saveAsCSV();
    //     const contact2 = new Attended("hvbuhfsdv", 5, kk, 1231231230, aa);
    //     contact2.saveAsCSV();
    //   }
    //   startApp()
    //   }
    function formVal(){
        console.log("formVal")
    }
}