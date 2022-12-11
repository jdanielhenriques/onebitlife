import db from "../Database";

db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS change_navigation (id INTEGER PRIMARY KEY AUTOINCREMENT, showHome TEXT, appStartDate TEXT);",
    [],
    (_, error) => {
      console.log(error);
    }
  );
});

const setShowHome = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO change_navigation (showHome, appStartDate) values (?, ?);",
        [obj.showHome, obj.appStartDate],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) {
            resolve(insertId);
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

const checkShowHome = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM change_navigation WHERE id = ?",
        [id],
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array[0]);
          else reject("Objeto não encontrado: id=" + id);
        },
        (_, error) => reject(error)
      );
    });
  });
};

export default { setShowHome, checkShowHome };
