import newData from "../models/base-model.js";

export const allData = async (req, res) => {
  try {
    const final = new newData(req.body);
 
    const finalResult = await final.save();
    res.status(200).json({ message: "Successfully!", info: finalResult });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
