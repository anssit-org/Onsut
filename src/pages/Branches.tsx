import "../styles/Branches.css";
import type { Lang } from "../App";
import { t } from "../i18n/Translations";

type Props = {
  lang: Lang;
};

export type Branch = {
  key: string; // translation key for this branch
  phone: string;
  hours: string;
};

const BranchesArr: Branch[] = [
  { key: "kfar_qara", phone: "", hours: "" },
  { key: "kfar_qasm", phone: "", hours: "" },
  { key: "nazereth", phone: "", hours: "" },
  { key: "jeser_alzarqa", phone: "", hours: "" },
  { key: "qalansawa", phone: "", hours: "" }
];

function Branches({ lang }: Props) {
  const isLTR = lang === "en";

  return (
    <div className={`b-page ${isLTR ? "ltl" : "rtr"}`}>
      <div className="b-hero">
        <h1 className="b-title">{t(lang, "branches.title")}</h1>
      </div>

      <div className="b-list">
        {BranchesArr.map((branch, index) => (
          <div className="b-card" key={index}>
            <h2 className="b-city">{t(lang, `branches.list.${branch.key}.city`)}</h2>
            <p className="b-text">
              <strong>{t(lang, "branches.address")}:</strong>{" "}
              {t(lang, `branches.list.${branch.key}.address`)}
            </p>
            <p className="b-text">
              <strong>{t(lang, "branches.phone")}:</strong> {branch.phone}
            </p>
            <p className="b-text">
              <strong>{t(lang, "branches.hours")}:</strong> {branch.hours}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Branches;
