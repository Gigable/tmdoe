import express from 'express';
import morgan from 'morgan';

const PORT = 8000;
const app = express();
app.use(morgan('combined'));
app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({ extended: false, limit: '1mb' }));

app.get('/', (_, res) => {
    res.status(200).json({
        test: true
    });
});

app.post('/', (req, res) => {
    res.status(200).json({
        params: isNaN(Number(req.body.val) / 0)
    });
});

app.put('/', () => {
    process.nextTick(() => { throw new Error });
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running on port: [${PORT}]`);
});
