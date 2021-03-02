const addAdmin = (db, bcrypt) => {
    const email = "kazi", name = "kazi", password = "kazi";
    console.log(email, " ", name, " ", password);
    
    const hash = bcrypt.hashSync(password);

      db.transaction(trx => {
        trx.insert({
          hash: hash,
          email: email,
          name: name,
          joined: new Date()
        })
        .into('admin')
        .returning('*')
        .then(trx.commit)
        .catch(trx.rollback)
      })
  }
  
  module.exports = {
    addAdmin: addAdmin
  };