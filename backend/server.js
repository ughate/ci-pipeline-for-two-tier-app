const express = require('express');
const redis = require('redis');
const cors = require('cors');

const app = express();
app.use(cors());

// Connects to the Redis container
const client = redis.createClient({ url: 'redis://redis:6379' });
client.connect().catch(console.error);

app.get('/api/visitors', async (req, res) => {
    const count = await client.incr('visitors');
    res.json({ count });
});

app.listen(5000, () => console.log('Backend running on port 5000'));
