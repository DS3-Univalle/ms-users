const { getUser } = require("./user");

function APIResponse(statusCode, body) {
  return JSON.stringify({
    statusCode,
    body
  });
}
module.exports.verification = async (event) => {
  const { uid } = JSON.parse(event.body);

  if (!uid ) {
    return APIResponse(400,{
      message: "All field are required",
    })
  }

  try {
    const result = await getUser(uid);
    const user = result.Item;

    if (!user || !user.name) {
      return APIResponse(404, {
        message: "User not found",
      })
    }

    return APIResponse(200,{
      name: user.name,
      email: user.email,
      uid: user.uid
    })
  } catch (error) {
    return APIResponse(500, {
      message: `Error search user, ${error.message}`,
    })
  }
};
