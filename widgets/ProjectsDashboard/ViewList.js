import styles from "./ViewList.module.css";

export const ViewList = ({ views = [], current_view_id, create, setCurrentView }) => {
  
  return (
  <div
    className={styles.root}
  >
    <div
      className={styles.view_list}
    >
      {views.map(view => {
        console.log({current_view_id, 'view.id': view.id});
        console.log("current_view_id === view.id", current_view_id === view.id);
        return (
          <div
            key={view.id}
            className={`${styles.view_item}`}
          >
            <button
              className={`${styles.view_item_button} ${view.id === current_view_id ? styles.current_view_active : ""}`} 
              onClick={e => {
                setCurrentView(view);
              }}
            >{view.name}</button>

            <span className={`${styles.current_view_span} ${view.id === current_view_id ? styles.current_view_active : ""}`}></span>
          </div>
        )
      })}
    </div>
    <button onClick={create}>+</button>
  </div>
  )
}