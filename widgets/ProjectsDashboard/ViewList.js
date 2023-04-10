import styles from "./ViewList.module.css";

export const ViewList = ({ views = [], current_view, create }) => {
  return (
  <div
    className={styles.root}
  >
    <div
      className={styles.view_list}
    >
      {views.map(view => {
        return (
          <div
            key={view.id}
            className={`${styles.view_item} ${current_view == view.id ? styles.view_item__curent : ""}`}
          >
            <button
              className={`${styles.view_item_button} ${current_view == view.id ? styles.view_item_button__curent : ""}`} 
            >{view.name}</button>
          </div>
        )
      })}
    </div>
    <button onClick={create}>+</button>
    {/* <span className={}></span> */}
  </div>
  )
}