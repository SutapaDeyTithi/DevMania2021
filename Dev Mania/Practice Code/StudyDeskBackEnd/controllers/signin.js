 const handleSignin = (req, res, db, bcrypt) => {
const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json('incorrect form submission');
  }
  if(role == 'user') {
      db.select('*').from('users')
        .where('email', '=',  email)
        .then(data => {
          const isValid = bcrypt.compareSync(password, data[0].hash);
          if (isValid) {
          // return db.select('*').from('users')
            //  .where('email', '=', email)
            //  .then(user => {
                res.json(data[0])
            // })
            //  .catch(err => res.status(400).json('unable to get user'))
          } else {
            res.status(400).json('wrong credentials')
          }
        })
        .catch(err => res.status(400).json('wrong credentials'))
   }
   else if(role == 'admin') {
      db.select('*').from('admin')
      .where('email', '=',  email)
      .then(data => {
        const isValid = bcrypt.compareSync(password, data[0].hash);
        if (isValid) {
        // return db.select('*').from('users')
          //  .where('email', '=', email)
          //  .then(user => {
              res.json(data[0])
          // })
          //  .catch(err => res.status(400).json('unable to get user'))
        } else {
          res.status(400).json('wrong credentials')
        }
      })
      .catch(err => res.status(400).json('wrong credentials'))
   }

}

module.exports = {
  handleSignin: handleSignin
}