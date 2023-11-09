const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234', // your password
  port: 3306,
  database: 'hellokwangwoon',
});

const app = express();
const port = 3000;

app.use(cors()); // for cors error
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/user/register', (req, res) => {
  const { id, password, name } = req.body;
  if (password.length < 6) {
    console.log('password too short !! more than 6 character !!');
    res.status(400).send('password too short !! more than 6 character !!');
  } else {
    // SQL 쿼리를 생성합니다.
    const query =
      'INSERT INTO firstmysql (id, password, name) VALUES (?, ?, ?)'; // 데이터베이스에 사용자 정보를 저장합니다.
    connection.query(query, [id, password, name], (error, results) => {
      if (error) {
        // 여기서는 에러를 간단히 클라이언트에 전달합니다. 실제로는 에러를 적절히 처리해야 합니다.
        res.status(500).send({ message: 'Error in registering user', error });
      } else {
        res.status(201).send({
          message: 'User registered successfully',
          userId: results.insertId,
        });
      }
    });
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
