import { differenceInDays } from "date-fns";

export default function Achievements() {

  const lastUse =
    localStorage.getItem("lastUse");

  if (!lastUse) {

    return null;

  }

  const days =
    differenceInDays(
      new Date(),
      new Date(lastUse)
    );

  const achievements = [];

  if (days >= 3)
    achievements.push("💪 3 días");

  if (days >= 7)
    achievements.push("🔥 7 días");

  if (days >= 15)
    achievements.push("⭐ 15 días");

  if (days >= 30)
    achievements.push("🏆 30 días");

  return (

    <div className="achievement-box">

      <h2>

        Logros

      </h2>

      <div className="badges">

        {

          achievements.map(
            (item, index) => (

              <div
                key={index}
                className="badge-card"
              >

                {item}

              </div>

            )
          )

        }

      </div>

    </div>

  );

}