const { GoogleGenerativeAI } = require("@google/generative-ai");
let datainput = "";
const T = require("tesseract.js");
T.recognize("./image.jpg", "eng").then((out) => {
  if (out.data.text.length > 0) {
    datainput = out.data.text;

    run(datainput);
  } else console.log("no text found");
});

const genAI = new GoogleGenerativeAI("AIzaSyCFxPpCbrpPvo1ePQrfieiQ09WO3JB8OAo");

async function run(datainput) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  console.log(datainput[10]);
  const prompt = datainput + "This is data of my resume and rate it out of 10.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}
