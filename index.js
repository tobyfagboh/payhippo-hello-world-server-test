import express, { json, request } from "express";

const app = express();

app.use(json());

const selectLanguage = (language) => {
  const validCodes = ["ENG", "HSA", "IGB", "YRB"];
  const languageMap = {
    ENG: "Hello world!",
    HSA: "Hello world in hausa",
    IGB: "Hello world in igbo",
    YRB: "Hello world in yoruba",
  };
  if (!language) {
    return {
      error: true,
      message: "language is a required field",
      code: 400,
    };
  }

  if (validCodes.indexOf(language) === -1) {
    return {
      error: true,
      message: "Language must be one of the following " + validCodes.join(","),
      code: 400,
    };
  }

  return {
    error: false,
    message: languageMap[`${language}`],
    code: 200,
  };
};

app.post("/", (req, res) => {
  const { code, ...body } = selectLanguage(req.body.language);
  return res.status(code).json(body);
});

app.get('/hello_world', (req, res) => {
  res.send('Hello World!');
})

app.listen(3000, () => console.log('serving listening for request on port localhost:3000'));
