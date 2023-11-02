const getUser = async (uid) => {
  return await Promise((resolve, _) => {
    resolve({
      Item: {
        name: 'pepito',
        email: 'sebastian@email.com',
        uid,
      }
    })
  })
};


module.exports = {
  getUser
}