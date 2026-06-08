import { useState, useEffect } from "react";

export default function CalendarTracker() {

  const [date, setDate] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [records, setRecords] =
    useState([]);

  useEffect(() => {

    const saved =

      JSON.parse(
        localStorage.getItem(
          "records"
        )
      ) || [];

    setRecords(saved);

  }, []);

  function save() {

    if (!date || !status)
      return;

    const newRecord = {

      date,
      status

    };

    const updated = [

      ...records,
      newRecord

    ];

    localStorage.setItem(

      "records",

      JSON.stringify(updated)

    );

    if (status === "used") {

      localStorage.setItem(

        "lastUse",

        date

      );

    }

    setRecords(updated);

    setDate("");

    setStatus("");

  }

  function color(type) {

    if (type === "good")
      return "green";

    if (type === "risk")
      return "yellow";

    return "red";

  }

  return (

    <div className="calendar-card">

      <h2>

        Seguimiento diario

      </h2>

      <input

        type="date"

        value={date}

        onChange={(e) =>

          setDate(
            e.target.value
          )

        }

      />

      <select

        value={status}

        onChange={(e) =>

          setStatus(
            e.target.value
          )

        }

      >

        <option value="">

          Estado

        </option>

        <option value="good">

          🟢 Sin consumo

        </option>

        <option value="risk">

          🟡 Día difícil

        </option>

        <option value="used">

          🔴 Consumí

        </option>

      </select>

      <button onClick={save}>

        Guardar

      </button>

      <div className="history">

        {

          records.length === 0 &&

          <p>

            Aún no existen registros.

          </p>

        }

        {

          records
            .slice()
            .reverse()
            .map((r, index) => (

              <div

                key={index}

                className={

                  `history-item ${color(r.status)}`

                }

              >

                <span>

                  {r.date}

                </span>

                <span>

                  {

                    r.status === "good"

                    ? "🟢 Bien"

                    : r.status === "risk"

                    ? "🟡 Difícil"

                    : "🔴 Consumo"

                  }

                </span>

              </div>

            ))

        }

      </div>

    </div>

  );

}