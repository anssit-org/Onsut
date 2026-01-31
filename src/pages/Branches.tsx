import "../styles/Branches.css";
import type { Lang } from "../App";
import { t } from "../i18n/Translations";

type Props = {
  lang: Lang;
};

export type Branch = {
  key: string; // translation key
  hours?: string;
  isCentral?: boolean;
};

const BranchesArr: Branch[] = [
  {
    key: "kfar_qara",
    isCentral: true
  },
  { key: "kfar_qasm" },
  { key: "nazereth" },
  { key: "jeser_alzarqa" },
  { key: "qalansawa"},
  { key: "kasra_sameea"},
  { key: "deir_hanna"},
];

function Branches({ lang }: Props) {
  const isLTR = lang === "en";

  const centralBranch = BranchesArr.find(b => b.isCentral);
  const otherBranches = BranchesArr.filter(b => !b.isCentral);

  return (
    <div className={`b-page ${isLTR ? "ltr" : "rtl"}`}>
      <div className="b-hero">
        <h1 className="b-title">{t(lang, "branches.title")}</h1>
      </div>

      {/* CENTRAL BRANCH */}
      {centralBranch && (
        <div className="b-central">
          <div className="b-card b-central-card">
            <h2 className="b-city">
              {t(lang, `branches.list.${centralBranch.key}.city`)}
            </h2>

            <p className="b-text">
              <strong>{t(lang, "branches.address")}:</strong>{" "}
              {t(lang, `branches.list.${centralBranch.key}.address`)}
            </p>

            <p className="b-text">
              <strong>{t(lang, "branches.phone")}:</strong>{" "}
              <span className="b-phone">052-796578</span>
            </p>

            <p className="b-text">
              <strong>{t(lang, "branches.hours")}:</strong>{" "}
              {t(lang, "branches.working_hours")}
            </p>
          </div>
        </div>
      )}

      {/* OTHER BRANCHES */}
      <div className="b-row">
        {otherBranches.map((branch, index) => (
          <div className="b-card" key={index}>
            <h2 className="b-city">
              {t(lang, `branches.list.${branch.key}.city`)}
            </h2>

            <p className="b-text">
              <strong>{t(lang, "branches.address")}:</strong>{" "}
              {t(lang, `branches.list.${branch.key}.address`)}
            </p>

            <p className="b-text">
              <strong>{t(lang, "branches.phone")}:</strong>{" "}
              <span className="b-phone">052-796578</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Branches;
