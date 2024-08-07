import styles from "./SubTitleYellow.module.scss";
const SubTitleYellow = ({ title }) => {
  return (
    <>
      <div className="border-top-0 border-end-0 border-start-0 border border-3 ">
        <div className={`fs-2 my-4 ${styles.title}`}>{title}</div>
      </div>
    </>
  );
};
export default SubTitleYellow;
