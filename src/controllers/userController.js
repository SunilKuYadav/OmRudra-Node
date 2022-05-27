const userModal = require("../modals/userModal");

const signup = async (req, res, next) => {
  try {
    let { name, mobile, password, email } = req.body;
    let obj = new userModal({
      name: name,
      mobile: mobile,
      password: password,
      email: email,
    });

    let dataSave = await userModal.save(obj);
    res.status(200).send(dataSave);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { signup };
